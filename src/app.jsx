import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const A = () => 123
export default class App extends Component {
  render() {
    return <div>
        <A/>
      </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
