import React, { useState } from 'react'
import classNames from 'classnames'
import S from './UrlFetch.module.scss'

export async function fetchData(source) {
  const response = await fetch(source.url)
  const text = await response.text()
  return text
}

export default function UrlFetch({ userInput, setUserInput, setLoadingError }) {
  /* let autoLoad = false;
  if (!userInput) {
    userInput = 'https://nextcloud.neogeo.fr/s/ctsSg9FbRpJ3Dr7/download/test copy.json';
  } else {
    autoLoad = true;
  } */
  const [url, setUrl] = useState(userInput)
  
  const fetchUrl = async (url) => {
    const source = { type: 'url', url }
    let data
    try {
      data = await fetchData(source)
      setUserInput(data, source)
      setLoadingError(null)
    } catch (e) {
      setLoadingError("Loading error. "+e.message)
    }
  }
  /* console.log("autoLoad", autoLoad)
  if (autoLoad) {
    setUrl(userInput);
    fetchUrl(userInput);
  } else { */

    return (
      <input
      className={classNames('w-100', S['url-input'])}
      value={url}
      onChange={(e) => {
        setUrl(e.target.value)
        fetchUrl(e.target.value)
      }}
      />
      )
  //  }
}
