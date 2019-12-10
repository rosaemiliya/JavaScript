import React from 'react'

const MuunninHeader = () => {  // otsikko palkki
    return (
        <thead>
            <tr>
                <th>Maksaja</th>
                <th>Summa</th>

            </tr>
        </thead>
    )
}

const MuunninBody = props => { // listan otsikon body missä näkyy jutut
    let summa = 0;
    let summa2 = 0;
    const nimet = [];
    props.laskuData.map((rivi, index) => {
        if (!nimet.includes(rivi.laskunmaksaja)) { // jos ei löydy niin lisää arreyhin
            nimet.push(rivi.laskunmaksaja); // arrayn eka nimi

        }
        summa = summa + parseInt(rivi.laskunloppusumma, 10);    // parseInt muuttaa arvon numeroksi


        if (nimet[0].includes(rivi.laskunmaksaja)) { // arreyn toka nimi


            summa2 = summa2 + parseInt(rivi.laskunloppusumma, 10); // parseInt muuttaa arvon numeroksi
        }
    })
    if (nimet.length === 1) { // Yksi nimi arraystä
        return (
            <tbody>
                <tr>
                    <th>
                        {nimet[0]}
                    </th>
                    <td>
                        {summa2}
                    </td>
                </tr>
            </tbody>
        ) 
    }
    
    else if (nimet.length === 2) { // kummatkin nimet arraystä
        let summa3 = summa - summa2;
        return (
            <tbody>
                <tr>
                    <th>

                        {nimet[0]}
                    </th>
                    <td>
                        {summa2}
                    </td>
                </tr>
                <tr>
                    <th>
                        {nimet[1]}
                    </th>
                    <td>
                        {summa3}
                    </td>
                </tr>
                <tr>
                    <th>
                        {nimet[0]}:n yhteenlasketun summan sekä {nimet[1]}:n yhteenlasketun summan erotuksen tulos =
                    </th>
                    <td>
                        {summa2 - summa3}
                    </td>
                </tr>
            </tbody>
        )
    }
    else { // Ei mitään nimiä arrayssä

        return (
            <tbody>

            </tbody>
        )
    }
}

class Muunnin extends React.Component { //Metodi, jossa laskutaulukon luovat komponentit kutsutaan ja jossa propsit välitetään eteenpäin
    state = {
        laskut: [],
        laskuMuutos: { yritys: "", maksupaivamaara: "", laskunloppusumma: "", laskunmaksaja: "" }
    }
    render() {
        const { laskuData } = this.props
        return (
            <table>
                <MuunninHeader />
                <MuunninBody laskuData={laskuData} />
            </table>

        )
    }
}

export default Muunnin