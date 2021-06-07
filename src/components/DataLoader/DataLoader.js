import { get } from 'lodash'
import React, { useCallback, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import {
  BsArrowCounterclockwise,
  BsArrowRepeat,
  BsClipboard,
  //BsCloud,
  //BsFolder,
  //BsGift,
  BsSearch,
  BsUpload,
} from 'react-icons/bs'
import { DATA_LOADER_MODE } from '../../hooks/useDataLoader'
import DataGrid from '../DataGrid/DataGrid'
//import DataSamples from '../DataSamples/DataSamples'
import JsonViewer from '../JsonViewer'
import ParsingOptions from '../ParsingOptions'
import styles from './DataLoader.module.scss'
//import LoadProject from './loaders/LoadProject'
import Paste from './loaders/Paste'
import UploadFile from './loaders/UploadFile'
import UrlFetch, { fetchData } from './loaders/UrlFetch'
import Loading from './loading'
import WarningMessage from '../WarningMessage'
import DataMismatchModal from './DataMismatchModal'
//import SparqlFetch from './loaders/SparqlFetch'

function DataLoader({
  userInput,
  setUserInput,
  userData,
  userDataType,
  parseError,
  unstackedColumns,
  separator,
  setSeparator,
  thousandsSeparator,
  setThousandsSeparator,
  decimalsSeparator,
  setDecimalsSeparator,
  locale,
  setLocale,
  stackDimension,
  dataSource,
  data,
  loading,
  coerceTypes,
  //loadSample,
  handleInlineEdit,
  handleStackOperation,
  setJsonData,
  //resetDataLoader,
  dataLoaderMode,
  startDataReplace,
  cancelDataReplace,
  commitDataReplace,
  replaceRequiresConfirmation,
  //hydrateFromProject,
}) {
  const [loadingError, setLoadingError] = useState()
  const options = [
    {
      id: 'paste',
      name: 'Coller vos données',
      loader: (
        <Paste
          userInput={userInput}
          setUserInput={(rawInput) => setUserInput(rawInput, { type: 'paste' })}
          setLoadingError={setLoadingError}
        />
      ),
      message:
        'Copier et coller vos données depuis d\'autres applications ou sites web. Vous pouvez utiliser des données de types tableaux (TSV, CSV, DSV) ou JSON.',
      icon: BsClipboard,
      allowedForReplace: true,
    },
    {
      id: 'upload',
      name: 'Télécharger'/*  vos données' */,
      loader: (
        <UploadFile
          userInput={userInput}
          setUserInput={(rawInput) => setUserInput(rawInput, { type: 'file' })}
          setLoadingError={setLoadingError}
        />
      ),
      message: 'Vous pouvez téléchargez des données de types tableaux (TSV, CSV, DSV) ou JSON.',
      icon: BsUpload,
      allowedForReplace: true,
    },
/*     {
      id: 'samples',
      name: 'Essayez nos données',
      message: '',
      loader: (
        <DataSamples
          onSampleReady={loadSample}
          setLoadingError={setLoadingError}
        />
      ),
      icon: BsGift,
      allowedForReplace: true,
    }, */
    /* {
      id: 'sparql',
      name: 'Requête SPARQL',
      message: 'Chargez des données depuis une requête SparQL',
      loader: (
        <SparqlFetch
          userInput={userInput}
          setUserInput={(rawInput, source) => setUserInput(rawInput, source)}
          setLoadingError={setLoadingError}
        />
      ),
      icon: BsCloud,
      disabled: false,
      allowedForReplace: true,
    }, */
    {
      id: 'url',
      name: 'Depuis une URL',
      message:
        'Entrez une adresse web (URL) pointant vers les données (ex: fichier Dropbox public, une API publique, ...). Vérifiez que le serveur ait bien les CORS activés.',
      loader: (
        <UrlFetch
          userInput={userInput}
          setUserInput={(rawInput, source) => setUserInput(rawInput, source)}
          setLoadingError={setLoadingError}
        />
      ),
      icon: BsSearch,
      disabled: false,
      allowedForReplace: true,
    },
/*     {
      id: 'project',
      name: 'Open your project',
      message: 'Load a .rawgraphs project.',
      loader: (
        <LoadProject
          onProjectSelected={hydrateFromProject}
          setLoadingError={setLoadingError}
        />
      ),
      icon: BsFolder,
      allowedForReplace: false,
    }, */
  ]

  async function getDataFromUrl(data_url) {
    // userInput = csv_url;
    // console.log(UrlFetch());
    userData = await fetchData({url: data_url});
    //console.log("userData", userData)
    // console.log(UrlFetch.userInput);
    // UrlFetch({userInput : (csv_url, { type: 'file' })})
  }
  
  let initialOption = 0
  const params = new URLSearchParams(window.location.search);
  const csv_url = params.get("csv_url");
  if (csv_url) {
    initialOption = 2; // index should correspond to matching option above
    console.log("csv_url 😁 :", csv_url);
    const data = getDataFromUrl(csv_url);
    setUserInput(data, csv_url)

   // UrlFetch({userInput: csv_url, setUserInput, setLoadingError})
  } else {
    console.log("NO csv_url")
  }

  const [optionIndex, setOptionIndex] = useState(initialOption)
  const selectedOption = options[optionIndex]

  console.log(options[optionIndex])
  //console.log(userData, data)
  let mainContent
  if (userData && data) {
    mainContent = (
      <DataGrid
        userDataset={userData}
        dataset={data.dataset}
        errors={data.errors}
        dataTypes={data.dataTypes}
        coerceTypes={coerceTypes}
        onDataUpdate={handleInlineEdit}
      />
    )
  } else if (userDataType === 'json' && userData === null) {
    mainContent = (
      <JsonViewer
        context={JSON.parse(userInput)}
        selectFilter={(ctx) => Array.isArray(ctx)}
        onSelect={(ctx, path) => {
          setJsonData(ctx, path)
        }}
      />
    )
  } else if (loading && !data) {
    mainContent = <Loading />
  } else {
    mainContent = (
      <>
        {selectedOption.loader}
        <p className="mt-3">
          {selectedOption.message}
          {/*<a
            href="https://rawgraphs.io/learning"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out our guides
          </a>*/}
        </p>
      </>
    )
  }

  // #TODO: memoize/move to component?
  function parsingErrors(data) {
    const errors = get(data, 'errors', [])
    const successRows = data.dataset.length - errors.length
    const row = errors[0].row + 1
    const column = Object.keys(errors[0].error)[0]
    return (
      <span>
        Ops, please check <span className="font-weight-bold">row {row}</span> at
        column <span className="font-weight-bold">{column}</span>.{' '}
        {errors.length === 2 && (
          <>
            {' '}
            There's another issue at row{' '}
            <span className="font-weight-bold">{errors[1].row + 1}</span>.{' '}
          </>
        )}
        {errors.length > 2 && (
          <>
            {' '}
            There are issues in{' '}
            <span className="font-weight-bold">{errors.length - 1}</span> more
            rows.{' '}
          </>
        )}
        {successRows > 0 && (
          <>
            The remaining{' '}
            <span className="font-weight-bold">
              {successRows} row{successRows > 1 && <>s</>}
            </span>{' '}
            look{successRows === 1 && <>s</>} fine.
          </>
        )}
      </span>
    )
  }

  const reloadRAW = useCallback(() => {
    window.location.replace(window.location.pathname)
  }, [])

  return (
    <>
      <Row>
        {!userData && (
          <Col
            xs={3}
            lg={2}
            className="d-flex flex-column justify-content-start pl-3 pr-0 options"
          >
            {options
              .filter((opt) => {
                return (
                  dataLoaderMode !== DATA_LOADER_MODE.REPLACE ||
                  opt.allowedForReplace
                )
              })
              .map((d, i) => {
                const classnames = [
                  'w-100',
                  'd-flex',
                  'align-items-center',
                  'user-select-none',
                  'cursor-pointer',
                  styles['loading-option'],
                  d.disabled ? styles['disabled'] : null,
                  d.id === selectedOption.id && !userDataType
                    ? styles.active
                    : null,
                  userDataType ? styles.disabled : null,
                ]
                  .filter((c) => c !== null)
                  .join(' ')
                return (
                  <div
                    key={d.id}
                    className={classnames}
                    onClick={() => setOptionIndex(i)}
                  >
                    <d.icon className="w-25" />
                    <h4 className="m-0 d-inline-block">{d.name}</h4>
                  </div>
                )
              })}

            {dataLoaderMode === DATA_LOADER_MODE.REPLACE && (
              <>
                <div className="divider mb-3 mt-0" />
                <div
                  className={`w-100 mb-2 d-flex justify-content-center align-items-center ${styles['start-over']} user-select-none cursor-pointer`}
                  onClick={reloadRAW}
                >
                  <BsArrowRepeat className="mr-2" />
                  <h4 className="m-0 d-inline-block">{'Réinitialiser'}</h4>
                </div>

                <div
                  className={`w-100 d-flex justify-content-center align-items-center ${styles['start-over']} ${styles['cancel']} user-select-none cursor-pointer mb-3`}
                  onClick={() => {
                    cancelDataReplace()
                  }}
                >
                  <h4 className="m-0 d-inline-block">{'Cancel'}</h4>
                </div>
              </>
            )}
          </Col>
        )}
        {userData && (
          <Col
            xs={3}
            lg={2}
            className="d-flex flex-column justify-content-start pl-3 pr-0 options"
          >
            <ParsingOptions
              locale={locale}
              setLocale={setLocale}
              separator={separator}
              setSeparator={setSeparator}
              thousandsSeparator={thousandsSeparator}
              setThousandsSeparator={setThousandsSeparator}
              decimalsSeparator={decimalsSeparator}
              setDecimalsSeparator={setDecimalsSeparator}
              dimensions={data ? unstackedColumns || data.dataTypes : []}
              stackDimension={stackDimension}
              setStackDimension={handleStackOperation}
              userDataType={userDataType}
              dataSource={dataSource}
              onDataRefreshed={(rawInput) => setUserInput(rawInput, dataSource)}
            />

            <div className="divider mb-3 mt-0" />

            <div
              className={`w-100 mb-2 d-flex justify-content-center align-items-center ${styles['start-over']} user-select-none cursor-pointer`}
              onClick={reloadRAW}
            >
              <BsArrowRepeat className="mr-2" />
              <h4 className="m-0 d-inline-block">{'Réinitialiser'}</h4>
            </div>

            <div
              className={`w-100 d-flex justify-content-center align-items-center ${styles['start-over']} user-select-none cursor-pointer`}
              onClick={() => {
                setOptionIndex(0)
                startDataReplace()
              }}
            >
              <BsArrowCounterclockwise className="mr-2" />
              <h4 className="m-0 d-inline-block">{'Changer les données'}</h4>
            </div>
          </Col>
        )}
        <Col>
          <Row className="h-100">
            <Col className="h-100">
              {mainContent}

              {data && !parseError && get(data, 'errors', []).length === 0 && (
                <WarningMessage
                  variant="success"
                  message={
                    <span>
                      <span className="font-weight-bold">
                        {data.dataset.length} lignes
                      </span>{' '}
                      (
                      {data.dataset.length * Object.keys(data.dataTypes).length}{' '}
                      cellules) ont été analysées, maintenant vous pouvez choisir un graphique !
                    </span>
                  }
                />
              )}

              {parseError && (
                <WarningMessage variant="danger" message={parseError} />
              )}

              {get(data, 'errors', []).length > 0 && (
                <WarningMessage
                  variant="warning"
                  message={parsingErrors(data)}
                />
              )}

              {loadingError && (
                <WarningMessage variant="danger" message={loadingError} />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
      {replaceRequiresConfirmation && (
        <DataMismatchModal
          replaceRequiresConfirmation={replaceRequiresConfirmation}
          commitDataReplace={commitDataReplace}
          cancelDataReplace={cancelDataReplace}
        />
      )}
    </>
  )
}

export default React.memo(DataLoader)
