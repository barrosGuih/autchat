import React from 'react'
import './style.css'
import Logo from './imagens/logo.png'
import Image from './imagens/image.png'
import { Link } from 'react-router-dom';

function Fundo(){
    return(
        <body>
            <div className="container">
            <div className="quad">
            <div className="colunleft">
                <img className="logo" src={Logo}></img>
                <h1 id="texto">BOAS VINDAS!</h1>
                <button className='registre'>REGISTRE-SE</button>
                <Link to="/Login">Você já possui uma conta? Clique aqui</Link>
            </div>
            <div className='colunright'>
            <img className='image' src={Image}></img>

            </div>

            </div>
    </div>
        </body>
    )
}

export default Fundo;