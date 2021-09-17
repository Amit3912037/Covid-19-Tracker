import React, { useEffect, useState } from 'react'
import Item from '../Item';
import Spinner from '../Spinner';

export default function Allindiacases(props) {
    const [data, setData] = useState(null);

    const getapi = async () => {

        const response = await fetch("https://data.covid19india.org/data.json");
        var jsonData = await response.json();
        setData(jsonData.statewise[0]);

    }
    useEffect(() => {
        getapi();
    }, [])

    return (
        <>
        <div className="container-fluid">
           { 
                 data===null? <Spinner/> :
                <div className="row">
                    <div className="col-6 col-sm-3">
                        <Item title="Confirmed" today="&nbsp;" total={data.confirmed} color="#ff073a" />
                    </div>
                    <div className="col-6 col-sm-3">
                        <Item title="Active" today="&nbsp;" total={data.active} color="#0d6efd" />
                    </div>
                    <div className="col-6 col-sm-3">
                        <Item title="Recovered" today="&nbsp;" total={data.recovered} color="rgba(40,167,69,.6)" />
                    </div>
                    <div className="col-6 col-sm-3">
                        <Item title="Deceased" today="&nbsp;" total={data.deaths} color="rgba(108,117,125,.6)" />
                    </div>
                </div>
           }
            </div>
        </>
    )
}
