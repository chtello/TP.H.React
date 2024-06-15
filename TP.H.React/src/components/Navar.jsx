import React from 'react'
import Contador from "./Contador"
function Navar() {
    return(
        <>
            <nav class="navbar bg-body-tertiary">
                <div class="container">
                <a href="/" class="titl d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <h2 className='text'>El Rincon de Todo</h2>
                        </a>
                </div>
                <div>
                    <Contador/>
                </div>
            </nav>
        </>
    )
}
export default Navar;