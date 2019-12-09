import React from 'react';
import './App.css'

class Form extends React.Component {
    constructor(props) {    //konstruktoria käytetään tässä jotta saadaan this-sana käyttöön ja tuotua propsit parentilta
        
        super(props)    //tätä super()-metodia pitää käyttää, jos halutaan päästä propseihin käsiksi ja käytettyä this-sanaa konstruktorissa

        this.initialState = {   //initialisoidaan state-olio tyhjillä arvoilla
            yritys:'',
            maksupaivamaara:'',
            laskunloppusumma:'',
            laskunmaksaja:'',
            muokattava:false,
        }

        this.state = this.initialState  //talletetaan state-olioon 
    }

    //Metodi jota kutsutaan aina kun muutoksia on tehty input-laatikoihin
    handleChange = event => {
        const {name, value } = event.target
        //console.log(name,value);
        this.setState({     //talletetaan nimi ja arvo state-olioon
            [name]: value,
        })
    }
    //Kutsutaan kun painetaan submit painiketta
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    
    render(){
        const { yritys, maksupaivamaara, laskunloppusumma, laskunmaksaja, piilossa } = this.state;

        // henkilöiden lisäämiseen tehty lomake, jolla 2 tekstikenttää ja submit painike
        return (
            <form>
                
                Lisää: <label>Yritys</label>
                <input 
                    type='text'
                    name='yritys'
                    value={yritys}
                    onChange={this.handleChange}/>
                <label>maksupvm</label>
                <input 
                    type='text'
                    name='maksupaivamaara'
                    value={maksupaivamaara}
                    onChange={this.handleChange} />
                <label>laskunloppusumma</label>
                <input 
                    type='text'
                    name='laskunloppusumma'
                    value={laskunloppusumma}
                    onChange={this.handleChange} />
                <label>laskunmaksaja</label>
                <input 
                    type='text'
                    name='laskunmaksaja'
                    value={laskunmaksaja}
                    onChange={this.handleChange} />
                <input type ="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}
export default Form;