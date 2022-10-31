import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundStyle from './styled';
import homen from '../../assets/img/homenC.gif';
import './notfound.css'

const NotFound = () => {

    return (
        <NotFoundStyle>
            <div className='mnDiv'>
                <h1 className='h1'>Página não encontrada</h1>
                <div className="flex-container">
                    <div className="image">
                        <img src={homen} alt="homen-das-caverna" />
                    </div>
                    <div className="text">
                        <h3>Olá você navegou até aqui :)</h3>
                        <h3>Que bom sinal que você explorou o ambiente.</h3>
                        <h3>Se procura algo e não encontrou não fique estressado.</h3>
                        <h3>Faça igual ao homen civilizado relaxa e fique tranquilo. </h3>
                        <h3>Volta para o inicio apreciando uma xícara daquele Cafézinho.</h3>
                        <Link className="link-btn" to="/">
                            <button className="btn" type="button">Pagina Inicial</button>
                        </Link>
                    </div>
                </div>
            </div>
        </ NotFoundStyle>
    );
};

export default NotFound;