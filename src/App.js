import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Component from "./components/Component"
// import "./components/Component.css"
import DatePicker from "react-date-picker"
const axios = require('axios').default;

function App() {
  let [query,setQuery] = useState([])
  const [d, changeD] = useState(new Date())
  function changeDate(date){
    changeD(date)
  }
  d.setDate(d.getDate() - 1)
const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit' }) 
const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(d) 
// console.log(`${day}-${month}-${year }`)

  // useEffect(()=> {
  //   axios.get('https://api.nasa.gov/planetary/apod?api_key=ykjZwlovnAtPc6qHMBmRY4uD8tm1fIu9g7JTVLgy' + "&date=" +`${year}-${month}-${day}`)
  //       .then(function(response) {
  //         console.log(response)
  //         setQuery(response.data)
  //     })
  //     .catch(function(error){
  //       console.log(error)
  //   })
  // }, [d])
  
query = { 
      date: "2020-06-11",
      explanation: "Big, beautiful, barred spiral galaxy NGC 1300 lies some 70 million light-years away on the banks of the constellation Eridanus. This Hubble Space Telescope composite view of the gorgeous island universe is one of the largest Hubble images ever made of a complete galaxy. NGC 1300 spans over 100,000 light-years and the Hubble image reveals striking details of the galaxy's dominant central bar and majestic spiral arms. In fact, on close inspection the nucleus of this classic barred spiral itself shows a remarkable region of spiral structure about 3,000 light-years across. Like other spiral galaxies, including our own Milky Way, NGC 1300 is thought to have a supermassive central black hole.",
      hdurl: "https://apod.nasa.gov/apod/image/2006/NGC1300HSTfull.jpg",
      media_type: "image",
      service_version: "v1",
      title: "Barred Spiral Galaxy NGC 1300",
      url: "https://apod.nasa.gov/apod/image/2006/NGC1300HST1200.jpg",

    }
  

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
