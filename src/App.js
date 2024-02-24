import {React, useState } from 'react'
import Names from './components/name.js'
import Route from 'react'

function App() {
    const [nameArray, setNameArray] = useState([])
    const setName = (event) => {
        event.preventDefault();
        let userInput = event.target.inputName.value
        // console.log(event.target.inputName.value);
        setNameArray([...nameArray,userInput])
        event.target.inputName.value = ''


    }

    const clearNameArray = () => {
        setNameArray([])
    }
  return (
    <div className="App">
        <form onSubmit={setName}>
            <input type="text" placeholder="name" name="inputName"/>
            <input type="submit" />
            <button onClick={clearNameArray}>Clear</button>

        </form>

        <Names
        array = {nameArray}
        path="/names"
        />


    </div>
  );
}

export default App;
