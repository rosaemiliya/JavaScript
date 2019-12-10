import React from 'react'

const MuunninHeader = () => { 
    return(
        <thead>
            <tr>
                <th>Maksaja</th>
                <th>Summma</th>

            </tr>
        </thead>
    )
}

const MuunninBody = props => {
    let summa = 0;
    let summa2 = 0;
    const nimet = [];
    props.laskuData.map((rivi, index) => {
        if (!nimet.includes(rivi.laskunmaksaja)) {
            nimet.push(rivi.laskunmaksaja);

        }
        summa = summa + parseInt(rivi.laskunloppusumma, 10);
        if (nimet[0].includes(rivi.laskunmaksaja)) {
            summa2 = summa2 + parseInt(rivi.laskunloppusumma, 10);
        }


    })

    if (nimet.length === 1) {
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
    else if (nimet.length === 2) {
        let summa3 = summa - summa2;
        return (
            <tbody>
                <tr>
                    <th>

                        {nimet.lenght}

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
                        {nimet[0]} Summan sekä  {nimet[1]} Summan erotus =
                    </th>
                    <td>
                        {summa2 - summa3}
                    </td>
                </tr>
            </tbody>
        )
    }
    else {

        return (
            <tbody>

            </tbody>
        )
    }
}

class Muunnin extends React.Component {
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