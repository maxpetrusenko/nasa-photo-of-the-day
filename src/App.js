import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Component from "./components/Component"
// import "./components/Component.css"
import DatePicker from "react-date-picker"
const axios = require('axios').default;

function App() {
  const [query,setQuery] = useState([])
  const [d, changeD] = useState(new Date())
  function changeDate(date){
    changeD(date)
  }
  d.setDate(d.getDate() - 1)
const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit' }) 
const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(d) 
// console.log(`${day}-${month}-${year }`)

  useEffect(()=> {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=ykjZwlovnAtPc6qHMBmRY4uD8tm1fIu9g7JTVLgy' + "&date=" +`${year}-${month}-${day}`)
        .then(function(response) {
          console.log(response)
          setQuery(response.data)
      })
      .catch(function(error){
        console.log(error)
    })
  }, [d])

  return (
    <div className="App">
      <DatePicker onChange={changeDate} value={d}/>
      <Component 
        title={query.title}
        copywrite={query.copyright}
        url={query.url}
        date={query.date}
        explanation={query.explanation}
      />
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
    </div>
  );
}

export default App;
