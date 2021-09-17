import React, { useState, useEffect } from 'react'
import Item from '../Item'
import Spinner from '../Spinner';


export default function Allcases(props) {

    const [data, setData] = useState(null);
    const getapi = async () => {

        const url = "https://disease.sh/v3/covid-19/all";
        const response = await fetch(url);
        var jsonData = await response.json();

        setData(jsonData);
    }

    useEffect(() => {
        getapi();
    }, []);

    return (

        <>
            <div className="container-fluid">
                {
                    data === null ? <Spinner /> :
                        <div className="row">
                            <div className="col-6 col-sm-3">
                                <Item title="Confirmed" today={`+${data.todayCases}`} total={data.cases} color="#ff073a" />
                            </div>
                            <div className="col-6 col-sm-3">
                                <Item title="Active" today="&nbsp;" total={data.active} color="#0d6efd" />
                            </div>
                            <div className="col-6 col-sm-3">
                                <Item title="Recovered" today={`+${data.todayRecovered}`} total={data.recovered} color="rgba(40,167,69,.6)" />
                            </div>
                            <div className="col-6 col-sm-3">
                                <Item title="Deceased" today={`+${data.todayDeaths}`} total={data.deaths} color="rgba(108,117,125,.6)" />
                            </div>
                        </div>
                }
            </div>
        </>
    )
}
