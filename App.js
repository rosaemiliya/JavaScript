import React from 'react'
import Table from './Table'
import Form from './Form'


class App extends React.Component {
    state = { 
      laskut: [],
      laskuMuutos: {yritys:"", maksupaivamaara:"", laskunloppusumma:"", laskunmaksaja:""}
    }

    //metodi, jolla poistetaan henkilö taulukosta
    poistaLasku = index => { 
      const { laskut } = this.state 

      this.setState({   
        
        laskut:laskut.filter((lasku, i) => { 
          return i !== index
        }),
      })
    }

    muokkaaLasku = index => {
      const { laskut } = this.state 

      this.setState({   
        
        laskut:laskut.filter((lasku, i) => { 
          if(i == index)
          {
            lasku.muokattava = true;
            //console.log("muokattava")
          }
          //console.log(lasku.muokattava)
          return i > -1
        }),
      })
    }

    hyvaksyMuutos = index => {
      const {laskut, laskuMuutos} = this.state

      this.setState({   
        
        laskut:laskut.filter((lasku, i) => { 
          if(i == index)
          {
            lasku.muokattava = false;
            lasku.yritys = laskuMuutos.yritys
            lasku.maksupaivamaara = laskuMuutos.maksupaivamaara
            lasku.laskunloppusumma = laskuMuutos.laskunloppusumma
            lasku.laskunmaksaja = laskuMuutos.laskunmaksaja
          }
          return i > -1
        }),
      })
    }
    
    peruutaMuutos = index => {
      const { laskut } = this.state
      this.setState({
        laskut:laskut.filter((lasku, i) => { 
          if(i == index)
          {
            lasku.muokattava = false;
          }
          return i > -1
        })
      })
    }
  
    handleChange = event => {
      const {name, value } = event.target
      const {laskuMuutos} = this.state
      if(name == "yritys")
        laskuMuutos.yritys = value
      if(name == "pvm")
        laskuMuutos.maksupaivamaara = value
      if(name == "summa")
        laskuMuutos.laskunloppusumma = value
      if(name == "maksaja")
        laskuMuutos.laskunmaksaja = value
    }

    //metodi jolla lisätään henkilö taulukkoon
    handleSubmit = lasku => {
      if(lasku.Yritys != "" && lasku.maksupaivamaara >= 0 && lasku.laskunloppusumma >= 0 && lasku.laskunmaksaja != "")
        this.setState({ laskut: [...this.state.laskut,lasku] }) //ES6-spread operator
      else
        alert("Tarkista syötettyjen arvojen oikeinkirjoitus");
    }

    render() {
      const {laskut} = this.state 
      //siirretään handleSubmit-metodi propsina Form-komponentille
      return (
        <div className="container">
            <Table laskuData={laskut} poistaLasku={this.poistaLasku} muokkaaLasku={this.muokkaaLasku} handleChange={this.handleChange} hyvaksyMuutos={this.hyvaksyMuutos} peruutaMuutos={this.peruutaMuutos}/>
            <Form  handleSubmit={this.handleSubmit} />
        </div>
      )
    }
  }

  export default App
