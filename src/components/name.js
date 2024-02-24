import {React} from 'react'

export default function Names({array}) {
    const nameArray = array
    const highlight = (event) => {
        event.target.style.cursor= "pointer"
    }
    const defaultText = (event) => {
        event.target.style.cursor= "auto"

    }
    const log = (event) => {
        console.log(event.target);
        // console.log(event.target.innerText);
    }
    return (
        <div>
            <h1>Names</h1>
            <p>{nameArray.map((name,num) => <li
                onMouseEnter={highlight}
                onMouseLeave={defaultText}
                onClick={log}
            id={num}
            key={num}>{name}</li>
            )}</p>
        </div>
    )
}
