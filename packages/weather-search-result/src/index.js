import React from 'react'
import './result.css'

const SearchResult = ({ data, }) => {
  if (!data) return false

  const foreCast = data.list.slice(1, 6)
  return (
    <div data-testid="search-result" styleName="container">
      <span styleName="description">
        {data.list[0].weather[0].main} - {data.list[0].weather[0].description}
      </span>
      <p styleName="temperature">
        {data.list[0].main.temp}
        <span>&#176;</span>
      </p>

      <div styleName="innerContainer">
        <div styleName="forecast">Forecast</div>
        {foreCast.map((elem) => (
          <div styleName="daily" key={elem.dt}>
            <p>{elem.dt_txt}</p>
            <p>{elem.weather[0].description}</p>
            <p>{elem.main.temp}<span>&#176;</span></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchResult
