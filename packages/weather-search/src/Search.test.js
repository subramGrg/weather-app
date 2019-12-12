import React from 'react'
import mockAxios from 'axios'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import Search from '.'

describe('Search', () => {
  it('wrong city, prints nothing', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: { list: [{ weather: [{ main: null, description: null, }], main: { temp: null, }, }]},
    }))
    const { getByTestId, getByPlaceholderText, } = render(<Search />)

    fireEvent.change(getByPlaceholderText('Search'), { target: { value: 'hello', }, })
    fireEvent.click(getByTestId('button'))
    await waitForElement(() => getByTestId('search-result'))

    expect(getByTestId('search-result')).not.toBeNull()
  })

  it('shows error component', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.reject(new Error('404 not found')))
    const { getByTestId, getByText, getByPlaceholderText, } = render(<Search />)

    fireEvent.change(getByPlaceholderText('Search'), { target: { value: 'hello', }, })
    fireEvent.click(getByText('Search'))
    await waitForElement(() => getByTestId('error'))

    expect(getByTestId('error')).not.toBeNull()
  })
})
