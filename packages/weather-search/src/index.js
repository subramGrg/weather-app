import React from 'react'
import axios from 'axios'
import Button from '@coats/weather-button'
import ErrorBoundary from '@coats/weather-error-boundary'
import InputField from '@coats/weather-input-field'
import SearchResult from '@coates/weather-search-result'
import './search.css'

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: null,
      data: null,
      search: null,
      error: null,
    }
    this.GetCity = this.GetCity.bind(this)
    this.OnChange = this.OnChange.bind(this)
    this.OnSearch = this.OnSearch.bind(this)
  }

  GetCity() {
    const { search, } = this.state

    if (!search) {
      return false
    }

    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${search}&APPID=16627cc3da9c5ff66b40cdd855268b84`)
      .then(({ data, }) => this.setState((state) => ({ city: state.search, data, error: false, })))
      .catch(() => {
        this.setState(() => ({ error: 'City not available', }))
      })
  }

  OnSearch(e) {
    e.preventDefault()
    this.GetCity(e.target.value)
  }

  OnChange({ target: { value, }, }) {
    this.setState(() => ({ search: value, }))
  }

  render() {
    const { city, data, } = this.state

    return (
      <div>
        <InputField OnChange={this.OnChange} />

        <Button OnSearch={this.OnSearch} text="Search" />

        <ErrorBoundary error={this.state.error}>
          <h1 styleName="location">{city}</h1>
          <SearchResult data={data} />
        </ErrorBoundary>
      </div>
    )
  }
}

export default SearchPage
