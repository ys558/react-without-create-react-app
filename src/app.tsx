import React, { Component } from 'react'
import ReactDOM from 'react-dom'

interface aProps {
  data: string
}
const A: React.FC<aProps> = ({data}) => {
  return <div>
    {data}
  </div>
}


export default class App extends Component {
  render() {
    return <div>
        <A data='data from App' />
      </div>
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
