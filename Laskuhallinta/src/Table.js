import React from 'react'


//Metodi, jossa luodaan laskutaulukon otsikkorivi ja palautettaan se
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

//Metodi, jossa luodaan laskutaulukon sisältörivit ja palautetaan ne
const TableBody = props => {
    const rivit = props.laskuData.map((rivi,index) => {
        if(rivi.muokattava === false) {
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
                    <td><input name="yritys" defaultValue={rivi.yritys} onChange={props.kasitteleMuutos}></input></td>
                    <td><input type="date" name="pvm" defaultValue={rivi.maksupaivamaara} onChange={props.kasitteleMuutos}></input></td>
                    <td><input name="summa" defaultValue={rivi.laskunloppusumma} onChange={props.kasitteleMuutos}></input></td>
                    <td><input name="maksaja" defaultValue={rivi.laskunmaksaja}onChange={props.kasitteleMuutos}></input></td>
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

//Metodi, jossa laskutaulukon luovat komponentit kutsutaan ja jossa propsit välitetään eteenpäin
class Table extends React.Component {
    render(){ 
        const { laskuData, poistaLasku, muokkaaLasku, kasitteleMuutos, hyvaksyMuutos, peruutaMuutos} = this.props 
        return (            
            <table>
            <TableHeader />
            <TableBody laskuData={laskuData} poistaLasku={poistaLasku} muokkaaLasku={muokkaaLasku} kasitteleMuutos={kasitteleMuutos} hyvaksyMuutos = {hyvaksyMuutos} peruutaMuutos={peruutaMuutos}/> 
            </table>
        )
    }
}

export default Table
