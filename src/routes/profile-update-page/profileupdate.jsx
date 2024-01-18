import { useState } from "react"
import Navigation from "../../nav/Navigation";

export default function ProfileUpdate({ name }){
    const [state, setState] = useState(0);

    return(
        <div>
            <Navigation/>
            <button onClick={() => {
                setState(state - 1)
            }}>-</button>

            {state}

            <button onClick={() => {
                setState(state + 1)
            }}>+</button>
        </div>
    )
}
