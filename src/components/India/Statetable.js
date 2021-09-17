import React from 'react';

export default function Statetable(props) {
    const { data } = props;
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <>
            {

                data.length === 0 ?
                    <tr><td>Not found</td></tr> :
                    data.map((element) => {
                        return (


                            <tr key={element.state}>
                                <td className="text-start">{element.state}</td>
                                <td>{numberWithCommas(element.confirmed)}</td>
                                <td>{numberWithCommas(element.active)}</td>
                                <td>{numberWithCommas(element.recovered)}</td>
                                <td>{numberWithCommas(element.deaths)}</td>
                            </tr>
                        )
                    })
            }
        </>
    )
}
