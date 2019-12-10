import React from 'react'
import Table from './Table'
import Form from './Form'
import Muunnin from './Muunnin'


class App extends React.Component {
    state = { 
      laskut: [],
      laskuMuutos: {yritys:"", maksupaivamaara:"", laskunloppusumma:"", laskunmaksaja:""}
    }

    //metodi, jolla poistetaan henkilö taulukosta perustuen indeksiin
    poistaLasku = index => { 
      const { laskut } = this.state 

      this.setState({   
        
        laskut:laskut.filter((lasku, i) => { 
          return i !== index
        }),
      })
    }

    //metodi, jolla merkataan lasku muokattavaksi perustuen indeksiin
    muokkaaLasku = index => {
      const { laskut, laskuMuutos } = this.state 

      this.setState({   
        
        laskut:laskut.filter((lasku, i) => { 
          if(i === index)
          {
            lasku.muokattava = true;
            laskuMuutos.yritys = lasku.yritys;
            laskuMuutos.maksupaivamaara = lasku.maksupaivamaara;
            laskuMuutos.laskunloppusumma = lasku.laskunloppusumma;
            laskuMuutos.laskunmaksaja = lasku.laskunmaksaja;
          }
          else if(i !== index && lasku.muokattava === true)
          {
            lasku.muokattava = false;
          }
          return i > -1
        }),
      })
    }

    //metodi, jolla hyväksytään muokkaus ja korvataan laskutaulukosta vanhat arvot 
    hyvaksyMuutos = index => {
      const {laskut, laskuMuutos} = this.state
      if(laskuMuutos.Yritys !== "" && laskuMuutos.maksupaivamaara !== "" && laskuMuutos.laskunloppusumma >= 0 && laskuMuutos.laskunmaksaja !== "")
      {
        this.setState({   
          
          laskut:laskut.filter((lasku, i) => { 
            if(i === index)
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
      else {
        alert("Tarkista syötettyjen arvojen oikeinkirjoitus")
      }
    }
    
    //Metodi, jolla peruutetaan muokkaus
    peruutaMuutos = index => {
      const { laskut, laskuMuutos} = this.state
      laskuMuutos.yritys = "";
      laskuMuutos.maksupaivamaara = "";
      laskuMuutos.laskunloppusumma = "";
      laskuMuutos.laskunmaksaja = "";
      this.setState({
        laskut:laskut.filter((lasku, i) => { 
          if(i === index)
          {
            lasku.muokattava = false;
          }
          return i > -1
        })
      })
    }

    //Metodi, joka kerää tiedot muutettavan laskun input-kentistä ja laittaa ne välivarastoon (laskuMuutos)
    kasitteleMuutos = event => {
      const {name, value } = event.target
      const {laskuMuutos} = this.state
      if(name === "yritys")
        laskuMuutos.yritys = value
      if(name === "pvm")
        laskuMuutos.maksupaivamaara = value
      if(name === "summa")
        laskuMuutos.laskunloppusumma = value
      if(name === "maksaja")
        laskuMuutos.laskunmaksaja = value
    }

    //metodi jolla lisätään henkilö taulukkoon
    handleSubmit = lasku => {
      if(lasku.Yritys !== "" && lasku.maksupaivamaara !== "" && lasku.laskunloppusumma >= 0 && lasku.laskunmaksaja !== "")
        this.setState({ laskut: [...this.state.laskut,lasku] })
      else
        alert("Tarkista syötettyjen arvojen oikeinkirjoitus");
    }

    render() {
      const {laskut} = this.state;
      //Siirretään laskutaulukon tiedot (laskut) sekä metodien viitteet propseina taulukon luovalle komponentille
      return (
        <div className="container">
            <Form  handleSubmit={this.handleSubmit} />
            <Table laskuData={laskut} poistaLasku={this.poistaLasku} muokkaaLasku={this.muokkaaLasku} kasitteleMuutos={this.kasitteleMuutos} hyvaksyMuutos={this.hyvaksyMuutos} peruutaMuutos={this.peruutaMuutos}/>
            <Muunnin laskuData={laskut} />
        </div>
      )
    }
  }

  export default App
