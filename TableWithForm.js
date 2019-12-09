import React from 'react'

//Simple Component.
const TableHeader = () => { 
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

//Simple component.
const TableBody = props => {
    const rows = props.characterData.map((row,index) => {
        // 7. Luodaan joka riville painike, jolla kutsutaan propsina välitettyä funktiota removeCharater()
        // Parametrinä sille annetaan indeksi, jotta tiedetään mikä rivi on kyseessä.  
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

//Custom component
class Table extends React.Component {
    render(){ 
        const { characterData, removeCharacter } = this.props // 5. Otetaan propsit talteen

        // 6. välitetään propsit eteenpäin TableBody-komponentille (henkilötaulukko ja henkilön poistometodi)
        return (            
            <table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter}/> 
            </table>
        )
    }
}

export default Table