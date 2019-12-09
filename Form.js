import React from 'react';

class Form extends React.Component {
    constructor(props) {    //konstruktoria käytetään tässä jotta saadaan this-sana käyttöön ja tuotua propsit parentilta
        
        super(props)    //tätä super()-metodia pitää käyttää, jos halutaan päästä propseihin käsiksi ja käytettyä this-sanaa konstruktorissa

        this.initialState = {   //initialisoidaan state-olio tyhjillä arvoilla
            name:'',
            job:'',
        }

        this.state = this.initialState  //talletetaan state-olioon 
    }

    //Metodi jota kutsutaan aina kun muutoksia on tehty input-laatikoihin
    handleChange = event => {
        const {name, value } = event.target

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
        const { name, job } = this.state;
        // henkilöiden lisäämiseen tehty lomake, jolla 2 tekstikenttää ja submit painike
        return (
            <form>
                <label>Name</label>
                <input 
                    type='text'
                    name='name'
                    value={name}
                    onChange={this.handleChange} />
                <label>Job</label>
                <input 
                    type='text'
                    name='job'
                    value={job}
                    onChange={this.handleChange} />
                <input type ="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}
export default Form;