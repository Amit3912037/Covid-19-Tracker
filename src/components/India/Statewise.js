import React, { useState, useEffect } from 'react'
import Search from '../Search';
import Statetable from './Statetable';


export default function Statewise() {
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);
    const [allData, setAllData] = useState([]);

    const getapi = async () => {

        const response = await fetch("https://data.covid19india.org/data.json");
        var jsonData = await response.json();
        var finalData = jsonData.statewise.filter((element) => {
            return element.state !== "State Unassigned";
        });
        finalData.shift();;

        setData(finalData);
        setAllData(finalData);
    }
    useEffect(() => {
        getapi();
    }, [])

    useEffect(() => {
    }, [data])

    function ascendingSort(property) {
        return function (a, b) {
            let aProperty = a[property];
            let bProperty = b[property];
            if (property !== "state") {
                aProperty = parseInt(a[property]);
                bProperty = parseInt(b[property]);
            }
            var result = (aProperty > bProperty) ? -1 : (aProperty > bProperty) ? 1 : 0;
            return result;
        }
    }

    function descendingSort(property) {

        return function (a, b) {
            let aProperty = a[property];
            let bProperty = b[property]; 
            if (property !== "state") {
                aProperty = parseInt(a[property]);
                bProperty = parseInt(b[property]);
            }
            var result = (aProperty < bProperty) ? -1 : (aProperty > bProperty) ? 1 : 0;
            return result;
        }
    }

    const handleClick = (e) => {
        var para = e.target.innerText.toLowerCase();
        if (para === "state/ut")
            para = "state";

        const orderedData = flag === true ? [...data].sort(ascendingSort(para)) : [...data].sort(descendingSort(para));
        setFlag(!flag);
        setData(orderedData);
    }

    const handleChange = (e) => {
        const searchedCountry = e.target.value.toLowerCase();

        const filteredData = allData.filter((element) => {
            return element.state.toLowerCase().includes(searchedCountry);
        })
        setData(filteredData);
    }


    return (
        <>
            <Search handleChange={handleChange} name="state/UT" />

            <div className="container-lg table-responsive-md">
                {
                    data.length === 0 ?
                        <h4 className="text-center">No state/UT found with this name.Try Another</h4> :

                        <table className="table  text-center table-hover" >
                            <thead style={{ position: "sticky", top: "0" }} >
                                <tr onClick={handleClick} className="table-dark" >
                                    <th className="border table-sort" >State/UT<i className="fas fa-sort m-2"></i></th>
                                    <th className="border table-sort" >Confirmed<i className="fas fa-sort m-2"></i></th>
                                    <th className="border table-sort" >Active<i className="fas fa-sort m-2"></i></th>
                                    <th className="border table-sort" >Recovered<i className="fas fa-sort m-2"></i></th>
                                    <th className="border table-sort" >Deaths<i className="fas fa-sort m-2"></i></th>

                                </tr>
                            </thead>
                            <tbody>
                                <Statetable data={data} />
                            </tbody>
                        </table>
                }
            </div>

        </>
    )
}







