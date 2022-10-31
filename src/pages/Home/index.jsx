
import React from "react";
import logo from '../../assets/img/minhaFoto.jpg';
import "./home.css";

function Home() {

  return (
    <main className='homeMain'>
      <section className="home">
        <h1>OLÁ SOU PAULO LIMA SOU UM DESENVOLVEDOR FULL-STACK JUNIOR</h1>

        <img src={logo} className="minhaFoto" alt="minha-foto" />

      </section>


    </main>
  );

}

export default Home;
