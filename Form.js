import React from 'react';
import './App.css'

class Form extends React.Component {
    constructor(props) { 
        
        super(props)
        //alustetaan tyhjät oletusarvot
        this.initialState = {   
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
        this.setState({     
            [name]: value,
        })
    }
    //Kutsutaan kun painetaan submit painiketta
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    
    render(){
        const { yritys, maksupaivamaara, laskunloppusumma, laskunmaksaja } = this.state;
        return (
            <form>
                
                <label>Yritys</label>
                <input 
                    type='text'
                    name='yritys'
                    value={yritys}
                    onChange={this.handleChange}/>
                <label>maksupvm</label>
                <input 
                    type='date'
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
                <input type ="button" value="Lisää" onClick={this.submitForm} />
            </form>
        );
    }
}
export default Form;