import React from 'react'
import { useState } from 'react'


function Contador() {
    const [count, setCount] = useState(0)
    let Aum = () => {
        if (count == 50) {
            count = 50
        }
    setCount((count) => count + 1)
    }
    let Dec = () => {
        if (count == 0) {
            count= 0
        }
    setCount((count) => count - 1)
    }
    return (
    <>
        <div className="contador">
            <button className='but' onClick = {Aum}>
                aumentar
            </button>
            <h2>Productos :  {count}</h2> 
            <button className='but' onClick = {Dec} >
                disminuir
            </button>
        </div>
    </>
    )
}
export default Contador
