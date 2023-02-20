import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import reactIcon from '../../assets/img/favicon.ico';
import { Menu } from './header'

function Linkes() {
  const [active, setActive] = useState(false)

  const modelToggle = () => {
    setActive(!active)
  }

  console.log(active)

  return (
    <header>
      <Menu>
        <section id="menus" className={active ? "headerHambu listitens" : "menuClose"} onClick={modelToggle} >
          <div className='headerHambu'>
            <ul className='listitens'>
              <li>< NavLink activeClassName='link2' to="/">Página Inicial</ NavLink ></li>
              <li>< NavLink className=' link2' to="/about">Sobre Mim</ NavLink ></li>
              <li>< NavLink className=' link2' to="/projects">Meus Projetos</ NavLink ></li>
              <li>< NavLink className=' link2' to="/contact">Meus Contatos</NavLink></li>
              <li>< NavLink className=' link2' to="/404page">Not Found</NavLink></li>
            </ul>
          </div>

        </section>
      </Menu>

      <nav className={"header"}>
        <div className={active ? "icon iconActive" : "icon"} onClick={modelToggle}>
          <div className="hamburguer hamburguerIcon mais"></div>

        </div>

        <div className={active ? "menuClose2" : "header"} >

          <a href="/" className="logo">
            <img
              className="react-icon"
              src={reactIcon}
              alt="icone do react"
            />
          </a>
          < NavLink className='link' to="/">Página Inicial</NavLink>
          < NavLink className='link' to="/about">Sobre Min</NavLink>
          < NavLink className='link' to="/projects">Meus Projetos</NavLink>

        </div>
      </nav>

    </header >
  )
}
export default Linkes;
