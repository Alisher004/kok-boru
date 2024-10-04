import React from 'react'
import "./Found.scss"
import magazin2 from "../../assets/svg/magazin2.svg"
import search2 from "../../assets/svg/search2.svg"
import { Link } from 'react-router-dom'

function Found() {
  return (
       <div className='eror1'>
        <div className='header2'>
          <div className='header2-left '>
          <ul>
              <li>
                <Link to={`/`}>
                <a href="">Главная</a>
                </Link>
              </li>
              <li>
                <Link to={`/onas`}>
                <a href="">О нас</a>
                </Link>
              </li>
              <li>
                
              </li>
              <li>
                <Link to={`/istoriabrenda`}>
                <a href="">История </a>
                </Link>
              </li>
              <li>
                <Link to={`/proleved`}>
                <a href="">Proleved</a>
                </Link>
              </li>
              <li>
                <Link to={`/help`}>
                <a href="">Help</a>
              </Link>
              </li>
              <li>
                <Link to={`/0consignment`}>
                <a href="">Товары для спорта</a>
                </Link>
              </li>
              <p>DEALER</p>
            </ul>
          </div>
          <div className='header2-img'>
          <img src={magazin2} alt="" />          
          <img src={search2} alt="" />
          </div>
          </div>
          <div className='eror2'>
            <h1>404</h1>
            <h6>кажется, такой страницы нет</h6>
            <div className='buttons'>
              <button>Назад</button>
              <Link to={"/"}>
              <button>На главную</button>
              </Link>
            </div>
          </div>
       </div>
  )
}

export default Found
