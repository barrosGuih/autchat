import React from 'react';

import './style.css'
import image2 from './image2.png';

function Login(){
    return(
        <body>
            <div className="container">
            <div className="quad">
            <div className='classo'>
            <img src={image2} className='loguinha'></img>
                 <h1 id='logando'>Login</h1>
            </div>
            <div className='paizao'>
            <div className='entrando'>
                <input  placeholder='Email:' type='text'id='caixinha'></input>
                <br/>
                <input placeholder='Senha:' type='text'id='caixinha'></input>

            </div>
            </div>
            </div>
    </div>
        </body>
    )
}

export default Login;