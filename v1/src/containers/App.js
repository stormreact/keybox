import React, { Component } from 'react'
import CheckboxContainer from './CheckboxContainer'
import KeyboxContainer from './KeyboxContainer'

export default class App extends Component {
  render() {
    return (
      <div>
        <CheckboxContainer />
        <KeyboxContainer />
      </div>
    )
  }
}
