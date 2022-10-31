import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import iconWhats from '../../assets/img/whatsapp.png';
import iconLink from '../../assets/img/linkedin.png';
import iconGit from '../../assets/img/github.png';
import './contact.css';



function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert('Por favor preencher os campos vazio!')
      return;
    };

    const templateParams = {
      from_name: name,
      message: message,
      email: email

    };

    emailjs.send('service_mjsuzgs', 'template_d5dpfwn', templateParams, '_NkgQssWUDsqDFc0Q')
      .then((resp) => {

        console.log("Email Enviado com Sucesso", resp.status, resp.text)
        setName('');
        setEmail('');
        setMessage('');
        alert('Email enviado com sucesso!')

      }, (err) => {
        console.log('Error: ', err)
      });
  };


  return (
    <main className='macontato'>

      <div className='containeConta'>
        <h1 className='title'> Meus Contatos</h1>

        <form className='form' onSubmit={handleSubmit}>
          <input
            className='input'
            type="text"
            placeholder='Digite seu Nome'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            className='input'
            type="email"
            placeholder='Digite seu Email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            className='textearea'
            placeholder='Deixe sua mensagem'
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className='button' type="submit" value="Enviar" />

        </form>
        <div className='divcontato'>
          <h3>
            Olá se vôce gostou ou se interessou pelo que viu e gostaria de deixar
            um elogio fazer uma critica ou uma sugestão pode preencher o formulario ou entrar
            em contato via links a baixo.
            Obrigado pela Visita!
          </h3>
        </div>
        <div className='divIcons'>
          <a href=" https://api.whatsapp.com/send?phone=5514997660488&text=Este%20%C3%A9%20meu%20Contato%20whatsApp" target="_blank"><img className='fotoWhats' src={iconWhats} alt="icon-whats" /></a>
          <a href="https://www.linkedin.com/in/paulo-lima/" target="_blank"><img className='foto' src={iconLink} alt="icon-whats" /></a>
          <a href="https://github.com/Paulynho-lima" target="_blank"><img className='foto' src={iconGit} alt="icon-whats" /></a>
        </div>
      </div>
    </main>
  );

}

export default Contact;
