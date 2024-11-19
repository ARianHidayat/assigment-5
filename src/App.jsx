import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect} from 'react';

function App() {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    fetch('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=93a27293d9c9408e9edb88f24a8321b1')
      .then(response => response.json())
      .then(res => {setCurrency(res.rates)}) 
  },[])
  // const data = Object.keys(currency.rates)
  // console.log(data)
  // console.log(`${Object.keys(currency.rates)} ini dia gimana?`)
  // let data = currency.rates
  // console.log(currency)
  let one = Object.keys(currency)
  
  console.log(one) 
  return (
    <div className="App text-center vw-100 d-flex justify-content-center" style={{backgroundColor: "orange"}}>
      <table class="table  table-striped table-dark" style={{width: "700px"}}>
        <thead>
          <tr>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sel</th>
          </tr> 
        </thead>
        <tbody>
          {
            one.map((item,index) => ( 
              <tr key={index}>
                <td>{item}</td>
                <td>{(currency[item]-(currency[item]/100)*5)}</td>
                <td>{currency[item]}</td>
                <td>{(currency[item]+(currency[item]/100)*5)}</td>
              </tr>
            ))
          }
          <tr>
            <th>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
