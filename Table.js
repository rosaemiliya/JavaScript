import React from 'react'


//Simple Component.
const TableHeader = () => { 
    return(
        <thead>
            <tr>
                <th>Yritys</th>
                <th>Maksupvm(muodossa 1.1)</th>
                <th>Laskun loppusumma(muodossa 1.1)</th>
                <th>Laskun maksaja</th>
            </tr>
        </thead>
    )
}

//Simple component.
const TableBody = props => {
    const rivit = props.laskuData.map((rivi,index) => {
        // 7. Luodaan joka riville painike, jolla kutsutaan propsina välitettyä funktiota removeCharater()
        // Parametrinä sille annetaan indeksi, jotta tiedetään mikä rivi on kyseessä.
        if(rivi.muokattava == false) {
            return (
                <tr key={index}>
                    <td>{rivi.yritys}</td>
                    <td>{rivi.maksupaivamaara}</td>
                    <td>{rivi.laskunloppusumma}</td>
                    <td>{rivi.laskunmaksaja}</td>
                    <td>
                        <button onClick={() => props.muokkaaLasku(index)}>Muokkaa</button>
                        <button onClick={() => props.poistaLasku(index)}>Poista</button>
                    </td>
                </tr>
            )
        }
        else {
            return (
                <tr key={index}>
                    <td><input name="yritys" defaultValue={rivi.yritys} onChange={props.handleChange}></input></td>
                    <td><input name="pvm" defaultValue={rivi.maksupaivamaara} onChange={props.handleChange}></input></td>
                    <td><input name="summa" defaultValue={rivi.laskunloppusumma} onChange={props.handleChange}></input></td>
                    <td><input name="maksaja" defaultValue={rivi.laskunmaksaja}onChange={props.handleChange}></input></td>
                    <td>
                        <button onClick={() => props.hyvaksyMuutos(index)}>Hyväksy</button>
                        <button onClick={() => props.peruutaMuutos(index)}>Peruuta</button>
                    </td>
                </tr>
            )
        }
    })
    return <tbody>{rivit}</tbody>
}

//Custom component
class Table extends React.Component {



    render(){ 
        const { laskuData, poistaLasku, muokkaaLasku, handleChange, hyvaksyMuutos, peruutaMuutos} = this.props // 5. Otetaan propsit talteen

        // 6. välitetään propsit eteenpäin TableBody-komponentille (henkilötaulukko ja henkilön poistometodi)
        return (            
            <table>
            <TableHeader />
            <TableBody laskuData={laskuData} poistaLasku={poistaLasku} muokkaaLasku={muokkaaLasku} handleChange={handleChange} hyvaksyMuutos = {hyvaksyMuutos} peruutaMuutos={peruutaMuutos}/> 
            </table>
        )
    }
}

export default Table
