import React from 'react'

export default function Item(props) {
    const {title,today,total,color}=props;

    function numberWithCommas(x) {
        return  x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <div className="text-center my-3" style={{color:color}}>
            <h6>{title}</h6>
            <p>{numberWithCommas(today)}</p>
            <h2>{numberWithCommas(total)}</h2>
        </div>
    )
}
