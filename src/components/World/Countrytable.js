import React from 'react'

export default function Countrytable(props) {
    const { data } = props;

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <>
            {
                data.map((element) => {
                    return (
                        <tr key={element.country}>
                            <td className="text-start">
                                <img src={element.countryInfo.flag} alt="" className="me-2" style={{ width: "20px", height: "20px" }} />
                                {element.country}
                            </td>
                            <td>{numberWithCommas(element.cases)}</td>
                            <td>{numberWithCommas(element.active)}</td>
                            <td>{numberWithCommas(element.recovered)}</td>
                            <td>{numberWithCommas(element.deaths)}</td>
                            <td>{numberWithCommas(element.tests)}</td>
                            <td>{numberWithCommas(element.population)}</td>
                        </tr>
                    )
                }
                )
            }
        </>
    )
}
