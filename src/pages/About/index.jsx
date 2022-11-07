import React from 'react';
import "./About.css";
import logo from '../../assets/img/fotoFormatura.jpg'
import logo2 from '../../assets/img/niver.jpg'
import logo3 from '../../assets/img/fotoNiver.jpeg'
import logo4 from '../../assets/img/fotoAr.jpeg'


function About() {
  return (
    <main className='Aboutman'>
      <section className={"sobreText"}>
        <h1>Sobre</h1>
        <p> Sou Paulo Lima nascido na cidade de São Paulo capital  atualmente eu moro na
          cidade de Tupã Sp sou Casado pai de 2 filhos.
        </p>
        <p>
          Apaixonado por técnologia sou Bacharelado no curso Sistemas de Informação
          e  formação tecnica em desenvolvimento FrontEnd e BackEnd Junior na Trybe,
          onde aprendi a aprender,a trabalhar, aprimorando minha Soft Skills e metodologia ágeis
          estou em transição de carreira tenho experiência na área de
          transporte(motorista) e agora estou determinado e focado em
          trabalhar com técnologia , trabalho e acredito em ações que
          possam gerar um impacto positivo na vidas das pessoas.
        </p>

        <h2>Fotos de Família</h2>

        <div className='container'>


          <div className='staks'>
            <h3>Algumas Qualificações</h3>
            <ul>
              <li>Determinado</li>
              <li>Organizado</li>
              <li>Companheiro</li>
              <li>Amigavel</li>
              <li>Ama o que faz</li>
              <li>Calmo</li>
              <li>Bom ouvinte</li>
            </ul>
          </div>



          <div className='fotos'>

            <img src={logo} className="fotoForm" alt="foto-Formatura" />
            <img src={logo2} className="fotoNiver" alt="foto-Niver" />
          </div>
        </div>

        <div className='fotos2'>
          <img src={logo3} className="fotoNiver2" alt="foto-Niver" />
          <img src={logo4} className="fotoAr" alt="foto-familia" />
        </div>

      </section>
    </main>
  );
};


export default About;
