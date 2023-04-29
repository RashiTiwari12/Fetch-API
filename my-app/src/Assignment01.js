import React from 'react';
import { useState, useEffect } from 'react';

const Assignment01 = () => {

    const [prices, showPrices] = useState([])
    useEffect(() => {
        fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then(res => res.json())
            .then(res => {
                let arr = []
                { console.log(res) }
                console.log(res.bpi)
                for (let each in res.bpi) {
                    arr.push(res.bpi[each])
                }
                showPrices(arr)
            })
    })
    return (
        <>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>code</th>
                        <th>Description</th>
                        <th>Rate</th>
                        <th>Symbol</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        prices.map(eachPrice =>
                            <tr>
                                <td>{eachPrice.code}</td>
                                <td>{eachPrice.description}</td>
                                <td>{eachPrice.rate}</td>
                                <td>{eachPrice.symbol}</td>
                            </tr>)
                    }
                </tbody>
            </table>

        </>
    )
}

export default Assignment01;
