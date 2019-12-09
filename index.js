import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'  //tuodaan ulkoinen css-tiedosto

import App from './App' //tuodaan App luokka ulkoisesta tiedostosta
import App2 from './AppWithProps'
import App3 from './AppWithState'
import App4 from './AppWithForm' 

/*
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}
*/



//ReactDOM.render(<App />, document.getElementById('root'))
//ReactDOM.render(<App2 />, document.getElementById('root'))
//ReactDOM.render(<App3 />, document.getElementById('root'))
ReactDOM.render(<App4 />, document.getElementById('root'))
