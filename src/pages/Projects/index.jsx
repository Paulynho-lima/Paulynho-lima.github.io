import React from 'react';
import Carossel from "../../components/Carrosel/index.tsx";
import { SwiperSlide } from "swiper/react";
import './projects.css';
import foto from '../../assets/img/springBoot.png';
import fotoPixl from '../../assets/img/pixels.png';
import fotoTasks from '../../assets/img/listTasks.png';
import fotoCart from '../../assets/img/shopping-cart.png';
import fotoWallet from '../../assets/img/trybe-wallet.png';
import fotoCook from '../../assets/img/cookmaster.png';
import fotoStar from '../../assets/img/star-wars.png';
import fotoBlog from '../../assets/img/blog-posts.png';


function Projects() {

  const settings = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true
    },
    loop: true,

  };

  return (
    <main className='minProject'>
      <h2 className='titulo'>Alguns Projetos Desenvolvidos</h2>
      <section className='projectSection'>
        <Carossel settings={settings}>
          <SwiperSlide className='carro'>

            <h1>Projeto de treinamento spring boot Java IDE STS, foi desenvovido um CRUD no back-end e ReactTs no front-end.
              Clik na imagem para interagir com interface ao entrar na pagina clik F5 para carregar o back-end :)</h1>
            <a className='fotoVendas' href='https://dsmeta-paulynho.netlify.app/' target="_blank"><img src={foto} alt="Cadastro de vendas" class="item current-item" /></a>

          </SwiperSlide>

          <SwiperSlide className='carro'>
            <h1>Esse foi um projeto Front-End desenvolvido para colocar em pratica a manipulação do Dom javascript, html, css. Clik na imagem para interagir com as cores :)</h1>
            <a className='fotoPix' href='https://paulynho-lima.github.io/PixArt/' target="_blank"><img src={fotoPixl} alt="Pixel-Art" class="item current-item" /></a>
          </SwiperSlide>

          <SwiperSlide className='carro'>
            <h1>Este foi um projeto Front-End desenvolvido para colocar em pratica javascript, html, css com atributos display responsivo. Clik na imagem para add Tarefas :)</h1>
            <a className='fotoTask' href='https://paulynho-lima.github.io/lista-de-tarefas/' target="_blank"><img src={fotoTasks} alt="list-tasks" class="item current-item" /></a>
          </SwiperSlide>

          <SwiperSlide className='carro'>
            <h1>Este foi um projeto Front-End desenvolvido para colocar em pratica a manipulação Dom e consumir uma Api do MELI. Clik na imagem para adicionar Produtos :)</h1>
            <a className='fotoShopping' href=" https://paulynho-lima.github.io/shopping-cart/" target="_blank"><img src={fotoCart} alt="shopping-cart" class="item current-item" /></a>
          </SwiperSlide>

          <SwiperSlide className='carro'>
            <h1>Esta aplicação Front-End wallet de controle de gastos foi desenvolvido para colocar em pratica o Reactjs com Redux, Redux-Devtoos e Redux-thunk consumindo uma Api de moedas. Clik na imagem para saber mais... :)</h1>
            <a className='fotowallet' href='https://paulynho-lima.github.io/wallet/' target="_blank"><img src={fotoWallet} alt="wallet" class="item current-item" /></a>
          </SwiperSlide>

          <SwiperSlide className='carro'>
            <h1>Esta aplicação Front-End Star-Wars para consultar os planetas de gerra nas estrelas colocar em pratica o Reactjs com Api Context, Usestate e Useffects consumindo uma Api de Planetas. Clik na imagem para saber mais... :)</h1>
            <a className='fotostar' href='https://paulynho-lima.github.io/star-wars/' target="_blank"><img src={fotoStar} alt="star-wars" class="item current-item" /></a>
          </SwiperSlide>

          <SwiperSlide className='carro'>
            <h1>Esta é aplicação Back-End Nodejs, desenvolvido um CRUD utilizando o BD. MongoDB na arquitetura MSC seguindo os principíos de API RESTs e a autenticação foi feita via JWT. Clik na imagem para saber mais... :)</h1>
            <a className='fotocook' href='https://github.com/Paulynho-lima/Projeto-Cookmaster' target="_blank"><img src={fotoCook} alt="cookmaster" class="item current-item" /></a>
          </SwiperSlide>

          <SwiperSlide className='carro'>
            <h1>Esta é aplicação Back-End Nodejs, desenvolvido um CRUD de Blog-Posts utilizando o BD. MySql com Sequelize na arquitetura MSC seguindo os principíos de API RESTs e a autenticação foi feita via JWT. Clik na imagem para saber mais... :)</h1>
            <a className='fotoblog' href='https://github.com/Paulynho-lima/Blogs-Api' target="_blank"><img src={fotoBlog} alt="blog-posts" class="item current-item" /></a>
          </SwiperSlide>
        </Carossel>



      </section>
    </main >

  );

}

export default Projects;
