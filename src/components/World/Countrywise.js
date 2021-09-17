import React, { useState, useEffect } from 'react'
import Countrytable from './Countrytable';
import Search from '../Search';


export default function Countrywise(props) {

    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);
    const [allData, setAllData] = useState([]);

    const getapi = async () => {

        const url = "https://disease.sh/v3/covid-19/countries";
        const response = await fetch(url);
        var jsonData = await response.json();
        setData(jsonData);
        setAllData(jsonData);
    }
    useEffect(() => {
        getapi();
    }, []);

    useEffect(() => {
    }, [data]);

    function ascendingSort(property) {

        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result;
        }
    }

    function descendingSort(property) {

        return function (a, b) {
            var result = (a[property] > b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result;
        }
    }

    const handleClick = (e) => {
        var para = e.target.innerText.toLowerCase();
        if (para === "confirmed")
            para = "cases";
        const orderedData = flag === true ? [...data].sort(ascendingSort(para)) : [...data].sort(descendingSort(para));
        setFlag(!flag);
        setData(orderedData);

    }

    const handleChange = (e) => {
        const searchedCountry = e.target.value.toLowerCase();

        const filteredData = allData.filter((element) => {
            return element.country.toLowerCase().includes(searchedCountry);
        })
        setData(filteredData);
    }

    return (
        <>
            <Search handleChange={handleChange} name="country" />

            <div className="container-lg table-responsive-md">
                {
                    data.length === 0 ?
                        <h4 className="text-center">No country found with this name.Try Another</h4> :

                        <table className="table  text-center table-hover" >
                            <thead style={{ position: "sticky", top: "0" }} >
                                <tr onClick={handleClick} className="table-dark" >
                                    <th className="border table-sort" >Country<i className="fas fa-sort m-2"></i></th>
                                    <th className="border table-sort">Confirmed<i className="fas fa-sort m-2"></i></th>
                                    <th className="border table-sort">Active<i className="fas fa-sort m-2"></i></th>
                                    <th className="border table-sort">Recovered<i className="fas fa-sort m-2"></i></th>
                                    <th className="border table-sort">Deaths<i className="fas fa-sort m-2"></i></th>
                                    <th className="border table-sort">Tests<i className="fas fa-sort m-2"></i></th>
                                    <th className="border table-sort">Population<i className="fas fa-sort m-2"></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                <Countrytable data={data} />
                            </tbody>
                        </table>
                }
            </div>

        </>
    )
}







