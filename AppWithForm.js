import React from 'react'
import Table from './TableWithForm'
import Form from './Form'

class App extends React.Component {
    state = { 
      characters: [], //tyhjä taulukko state-oliossa johon kerätään lomakkeen kautta henkilöitä
    }

    //metodi, jolla poistetaan henkilö taulukosta
    removeCharacter = index => { 
      const { characters } = this.state 

      this.setState({   
        
        characters:characters.filter((character, i) => { 
          return i !== index
        }),
      })
    }

    //metodi jolla lisätään henkilö taulukkoon
    handleSubmit = character => {
      this.setState({ characters: [...this.state.characters,character] }) //ES6-spread operator
    }

    render() {

      const {characters} = this.state 
      //siirretään handleSubmit-metodi propsina Form-komponentille
      return (
        <div className="container">
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
            <Form handleSubmit={this.handleSubmit} /> 
        </div>
      )
    }
  }

  export default App