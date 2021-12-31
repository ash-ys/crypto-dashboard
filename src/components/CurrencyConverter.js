
import React from 'react'
import { useState } from 'react'
import { ExchangeRate } from "./ExchangeRate"
import axios from 'axios'

export const CurrencyConverter = () => {

    const currencies = ['BTC','ETH', 'USD', 'XRP', 'LTC', 'ADA']
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency]= useState('BTC')
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency]= useState('BTC')
    const [amount, setAmount]= useState(1)
    console.log(amount)
    const convert = () => {

        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: {from_currency: 'chosenPrimaryCurrency', function: 'CURRENCY_EXCHANGE_RATE', to_currency: 'chosenSecondaryCurrency'},
            headers: {
              'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
              'x-rapidapi-key': '4ce2d0d150msh13e5af192e1c128p12372cjsn70d3a7100514'
            }
          }
          
          axios.request(options).then((response) =>{
              console.log(response.data)
          }).catch((error) => {
              console.error(error)
          });
        }
    return (
        <div className='currency-converter'>
            <h2>CurrencyConverter</h2>
            <div className='input-box'>
            <table>
                <tbody>
                    <tr>
                        <td>Primary Currency</td>
                        <td>
                            <input 
                            type="number"
                            name = "currency-amount-1"
                            value={amount}
                            onChange={(e)=> setAmount(e.target.value)}
                            />
                        </td>
                        <td>
                            <select
                                value = {chosenPrimaryCurrency}
                                name = "currency-option-1"
                                className="currency-options"
                                onChange={(e)=> setChosenPrimaryCurrency(e.target.value)}
                                
                            >
                                {currencies.map((currency, _index) =>(<option key={_index}>{currency}</option>))}

                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Secondary Currency</td>
                        <td>
                            <input 
                            type="number"
                            name = "currency-amount-2"
                            value={""}
                            />
                        </td>
                        <td>
                            <select
                                value = {chosenSecondaryCurrency}
                                name = "currency-option-2"
                                className="currency-options"
                                onChange={(e)=> setChosenSecondaryCurrency(e.target.value)}

                                
                            >
                                {currencies.map((currency, _index) =>(<option key={_index}>{currency}</option>))}

                            </select>
                        </td>
                    </tr>
                    </tbody>
            </table>

            <button id="convert-button" onClick={convert}>Convert</button>
            </div>
            
            <ExchangeRate/>
        </div>
    )
}
