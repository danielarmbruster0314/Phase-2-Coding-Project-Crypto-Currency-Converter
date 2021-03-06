import {useState, useEffect} from 'react';
import Exchange from './Exchange.js';
import Saveconverstion from './Saveconverstion.js';
function Convert(){
const [current, setCurrent] = useState('USD')
const [converting, setConverting] = useState('BTC')
const [amount, setAmount] = useState(1)
const [exchange, setExchange] = useState(0)
const [displayResult, setDisplayResult] = useState(0)
const [submittedCurrent, setSubmittedCurrent] = useState('USD')
const [submittedConverted, setSubmittedConverted] = useState('BTC')
const [saved, setSaved] = useState([])
function convert(){
    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
      'X-RapidAPI-Key': '89810da5e7msh75b30d17b69208cp1d4af1jsne241ce2de733'
    }
  };
  
  fetch(`https://alpha-vantage.p.rapidapi.com/query?from_currency=${converting}&function=CURRENCY_EXCHANGE_RATE&to_currency=${current}`, options)
    .then(response => response.json())
    .then(response => {
        console.log(response["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
        setExchange(response["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
        setDisplayResult(response["Realtime Currency Exchange Rate"]["5. Exchange Rate"] * amount)
        setSubmittedCurrent(current)
        setSubmittedConverted(converting)
    })
    .catch(err => console.error(err));
}
console.log(exchange)
console.log(displayResult)

useEffect(()=>{
    fetch('http://localhost:8000/save')
    .then(resp => resp.json())
    .then(data => {
        setSaved(data)})
},[])
console.log(saved)
function handleSave(exchange, current, converted, displayResult, amount){
    
    const data = {
        exchange: exchange,
        current: current,
        convert: converted,
        display: displayResult,
        amount: amount
    }
    
    fetch('http://localhost:8000/save', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(dat => {
    
  setSaved([...saved,data]);
})
.catch((error) => {
    console.error('Error:', error);
  });
}

function handleDelete(id){
    let result = window.confirm("Are you sure you want to Delete this save?")
    if(result){
    fetch(`http://localhost:8000/save/${id}`,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const data1 = saved.filter(save => save.id !== id)
        console.log(data1)
        setSaved(data1)
    })
    }
}


    return(
        <div className="criptodashboard">
        <div className="convert">
            <h2>Converter</h2>
            <table>
                <tbody>
                    <tr>
                        <td className="currenceytext">Current Currency:</td>
                            <td><input type="number" onChange={(e) =>{setAmount(e.target.value)}} value={amount} id="current" name="current" dir="rtl" placeholder="0.00"/></td>
                                <td>
                                <select onChange={(e)=>{setConverting(e.target.value)}} value={converting} id="cripto" name="cripto">
                                <option value="BTC">Bitcoin</option>
                                <option value="ETH">Ethereum</option>
                                <option value="USDT">Tether</option>
                                <option value="BNB">Binance-Coin</option>
                                <option value="XRP">Ripple</option>
                                <option value="ADA">Cardano</option>
                                <option value="SOL">Solana</option>
                                <option value="TRC">Terracoin</option>
                                <option value="AVAX">Avalanche</option>
                                <option value="DOT">Polkadot</option>
                                <option value="DOGE">DogeCoin</option>
                                <option value="BUSD">Binance-USD</option>
                                <option value="UST">TerraUSD</option>
                                <option value="SHIB">SHIBA-INU</option>
                                <option value="WBTC">Wrapped Bitcoin</option>
                                <option value="MATIC">Polygon</option>
                                <option value="CRO">Crypto.com Coin</option>
                                <option value="DAI">Dai</option>
                                <option value="LCC">Litecoin-Cash</option>
                                <option value="ATOM">Cosmos</option>
                            </select>
                                 </td>
                            </tr>
            <tr>
               <td className="currenceytext">Converted Currency:</td>
                     <td>
                <input type="number" disabled={true}  value={displayResult} id="converted" name="converted" dir="rtl" placeholder="0.00"/>
                    </td>
                        <td>
                            <select onChange={(e)=>{setCurrent(e.target.value)}} value={current} id="currentCurrency" name="currentCurrency">
                                        <option value="USD">United States Dollar</option>
                                        <option value="AED">United Arab Emirates Dirham</option>
                                        <option value="AFN">Afghan Afghani</option>
                                        <option value="ALL">Albanian Lek</option>
                                        <option value="AMD">Armenian Dram</option>
                                        <option value="ANG">Netherlands Antillean Guilder</option>
                                        <option value="AOA">Angolan Kwanza</option>
                                        <option value="ARS">Argentine Peso</option>
                                        <option value="AUD">Australian Dollar</option>
                                        <option value="AWG">Aruban Florin</option>
                                        <option value="AZN">Azerbaijani Manat</option>
                                        <option value="BAM">Bosnia-Herzegovina Convertible Mark</option>
                                        <option value="BBD">Barbadian Dollar</option>
                                        <option value="BDT">Bangladeshi Taka</option>
                                        <option value="BGN">Bulgarian Lev</option>
                                        <option value="BHD">Bahraini Dinar</option>
                                        <option value="BIF">Burundian Franc</option>
                                        <option value="BMD">Bermudan Dollar</option>
                                        <option value="BND">Brunei Dollar</option>
                                        <option value="BOB">Bolivian Boliviano</option>
                                        <option value="BRL">Brazilian Real</option>
                                        <option value="BSD">Bahamian Dollar</option>
                                        <option value="BTN">Bhutanese Ngultrum</option>
                                        <option value="BWP">Botswanan Pula</option>
                                        <option value="BZD">Belize Dollar</option>
                                        <option value="CAD">Canadian Dollar</option>
                                        <option value="CDF">Congolese Franc</option>
                                        <option value="CHF">Swiss Franc</option>
                                        <option value="CLF">Chilean Unit of Account UF</option>
                                        <option value="CLP">Chilean Peso</option>
                                        <option value="CNH">Chinese Yuan Offshore</option>
                                        <option value="CNY">Chinese Yuan</option>
                                        <option value="COP">Colombian Peso</option>
                                        <option value="CUP">Cuban Peso</option>
                                        <option value="CVE">Cape Verdean Escudo</option>
                                        <option value="CZK">Czech Republic Koruna</option>
                                        <option value="DJF">Djiboutian Franc</option>
                                        <option value="DKK">Danish Krone</option>
                                        <option value="DOP">Dominican Peso</option>
                                        <option value="DZD">Algerian Dinar</option>
                                        <option value="EGP">Egyptian Pound</option>
                                        <option value="ERN">Eritrean Nakfa</option>
                                        <option value="ETB">Ethiopian Birr</option>
                                        <option value="EUR">Euro</option>
                                        <option value="FJD">Fijian Dollar</option>
                                        <option value="FKP">Falkland Islands Pound</option>
                                        <option value="GBP">British Pound Sterling</option>
                                        <option value="GEL">Georgian Lari</option>
                                        <option value="GHS">Ghanaian Cedi</option>
                                        <option value="GIP">Gibraltar Pound</option>
                                        <option value="GMD">Gambian Dalasi</option>
                                        <option value="GNF">Guinean Franc</option>
                                        <option value="GTQ">Guatemalan Quetzal</option>
                                        <option value="GYD">Guyanaese Dollar</option>
                                        <option value="HKD">Hong Kong Dollar</option>
                                        <option value="HNL">Honduran Lempira</option>
                                        <option value="HRK">Croatian Kuna</option>
                                        <option value="HTG">Haitian Gourde</option>
                                        <option value="HUF">Hungarian Forint</option>
                                        <option value="ICP">Internet Computer</option>
                                        <option value="IDR">Indonesian Rupiah</option>
                                        <option value="ILS">Israeli New Sheqel</option>
                                        <option value="INR">Indian Rupee</option>
                                        <option value="IQD">Iraqi Dinar</option>
                                        <option value="IRR">Iranian Rial</option>
                                        <option value="ISK">Icelandic Krona</option>
                                        <option value="JEP">Jersey Pound</option>
                                        <option value="JMD">Jamaican Dollar</option>
                                        <option value="JOD">Jordanian Dinar</option>
                                        <option value="JPY">Japanese Yen</option>
                                        <option value="KES">Kenyan Shilling</option>
                                        <option value="KGS">Kyrgystani Som</option>
                                        <option value="KHR">Cambodian Riel</option>
                                        <option value="KMF">Comorian Franc</option>
                                        <option value="KPW">North Korean Won</option>
                                        <option value="KRW">South Korean Won</option>
                                        <option value="KWD">Kuwaiti Dinar</option>
                                        <option value="KYD">Cayman Islands Dollar</option>
                                        <option value="KZT">Kazakhstani Tenge</option>
                                        <option value="LAK">Laotian Kip</option>
                                        <option value="LBP">Lebanese Pound</option>
                                        <option value="LKR">Sri Lankan Rupee</option>
                                        <option value="LRD">Liberian Dollar</option>
                                        <option value="LSL">Lesotho Loti</option>
                                        <option value="LYD">Libyan Dinar</option>
                                        <option value="MAD">Moroccan Dirham</option>
                                        <option value="MDL">Moldovan Leu</option>
                                        <option value="MGA">Malagasy Ariary</option>
                                        <option value="MKD">Macedonian Denar</option>
                                        <option value="MMK">Myanma Kyat</option>
                                        <option value="MNT">Mongolian Tugrik</option>
                                        <option value="MOP">Macanese Pataca</option>
                                        <option value="MRO">Mauritanian Ouguiya (pre-2018)</option>
                                        <option value="MRU">Mauritanian Ouguiya</option>
                                        <option value="MUR">Mauritian Rupee</option>
                                        <option value="MVR">Maldivian Rufiyaa</option>
                                        <option value="MWK">Malawian Kwacha</option>
                                        <option value="MXN">Mexican Peso</option>
                                        <option value="MYR">Malaysian Ringgit</option>
                                        <option value="MZN">Mozambican Metical</option>
                                        <option value="NAD">Namibian Dollar</option>
                                        <option value="NGN">Nigerian Naira</option>
                                        <option value="NOK">Norwegian Krone</option>
                                        <option value="NPR">Nepalese Rupee</option>
                                        <option value="NZD">New Zealand Dollar</option>
                                        <option value="OMR">Omani Rial</option>
                                        <option value="PAB">Panamanian Balboa</option>
                                        <option value="PEN">Peruvian Nuevo Sol</option>
                                        <option value="PGK">Papua New Guinean Kina</option>
                                        <option value="PHP">Philippine Peso</option>
                                        <option value="PKR">Pakistani Rupee</option>
                                        <option value="PLN">Polish Zloty</option>
                                        <option value="PYG">Paraguayan Guarani</option>
                                        <option value="QAR">Qatari Rial</option>
                                        <option value="RON">Romanian Leu</option>
                                        <option value="RSD">Serbian Dinar</option>
                                        <option value="RUB">Russian Ruble</option>
                                        <option value="RUR">Old Russian Ruble</option>
                                        <option value="RWF">Rwandan Franc</option>
                                        <option value="SAR">Saudi Riyal</option>
                                        <option value="SBDf">Solomon Islands Dollar</option>
                                        <option value="SCR">Seychellois Rupee</option>
                                        <option value="SDG">Sudanese Pound</option>
                                        <option value="SDR">Special Drawing Rights</option>
                                        <option value="SEK">Swedish Krona</option>
                                        <option value="SGD">Singapore Dollar</option>
                                        <option value="SHP">Saint Helena Pound</option>
                                        <option value="SLL">Sierra Leonean Leone</option>
                                        <option value="SOS">Somali Shilling</option>
                                        <option value="SRD">Surinamese Dollar</option>
                                        <option value="SYP">Syrian Pound</option>
                                        <option value="SZL">Swazi Lilangeni</option>
                                        <option value="THB">Thai Baht</option>
                                        <option value="TJS">Tajikistani Somoni</option>
                                        <option value="TMT">Turkmenistani Manat</option>
                                        <option value="TND">Tunisian Dinar</option>
                                        <option value="TOP">Tongan Pa'anga</option>
                                        <option value="TRY">Turkish Lira</option>
                                        <option value="TTD">Trinidad and Tobago Dollar</option>
                                        <option value="TWD">New Taiwan Dollar</option>
                                        <option value="TZS">Tanzanian Shilling</option>
                                        <option value="UAH">Ukrainian Hryvnia</option>
                                        <option value="UGX">Ugandan Shilling</option>
                                        <option value="UYU">Uruguayan Peso</option>
                                        <option value="UZS">Uzbekistan Som</option>
                                        <option value="VND">Vietnamese Dong</option>
                                        <option value="VUV">Vanuatu Vatu</option>
                                        <option value="WST">Samoan Tala</option>
                                        <option value="XAF">CFA Franc BEAC</option>
                                        <option value="XCD">East Caribbean Dollar</option>
                                        <option value="XDR">Special Drawing Rights</option>
                                        <option value="XOF">CFA Franc BCEAO</option>
                                        <option value="XPF">CFP Franc</option>
                                        <option value="YER">Yemeni Rial</option>
                                        <option value="ZAR">South African Rand</option>
                                        <option value="ZMW">Zambian Kwacha</option>
                                        <option value="ZWl">Zimbabwean Dollar</option>
                                    </select>
                        </td> 
                    </tr>
                </tbody>
            </table>
        <button className="top_button"onClick={convert}>Convert</button>
    </div>
    
    <Exchange exchange={exchange} current={submittedCurrent} converted={submittedConverted} displayResult={displayResult} amount={amount} handleSave={handleSave}/>
    <Saveconverstion handleDelete={handleDelete} saved={saved}/>
    </div>
    )
}

export default Convert