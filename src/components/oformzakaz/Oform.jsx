import React from 'react'
import "./Oform.scss"
import otsledit from "../../assets/image/otsledit.png"
import Magazin from "../../assets/svg/magazin.svg"
import search from "../../assets/svg/search.svg"
import Like from "../../assets/svg/Like.svg"
import kros3 from "../../assets/image/kros3.png"
import Like2 from "../../assets/svg/Like2.svg"
import alibek from "../../assets/image/alibek.png"

import { Link } from 'react-router-dom'


function Oform() {
  return (
    <div>
          <header className='header1709 container'>
          <img src={otsledit} alt="" />
          <div className='header1709gg'>
          <div className='header1709-left '>
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
          <div className='header1709-img'>
            <img src={Like} alt="" />

          <img src={Magazin} alt="" />
          <Link to={`/search`}>
          <img src={search} alt="" />
          </Link>
          </div>
          </div>

          <div className='header1709-center'>

            <h1>Отследить заказ</h1>
        
            
          </div>
          <div className='cover-button'>
            <input type="text" placeholder='Номер заказа' />
          <button>Проверить</button>
          </div>
          <div className='router9'>
            <p>Введите номер заказа, чтобы отследить его</p>        
          </div>
          <div className='header-footer09'></div>

         
      
        </header>
        <main className='alinur container'>
        <div className='marlish'>
        <div className='list'>
            <h1>Ваш заказ:</h1>
            <div className='kros1'>
              <div className='mm'>
            <img src={kros3} alt="" />
    
              </div>
              <div className='pp-1'>pre-loved</div>
              <div className='pw1'>
                <img src={Like2} alt="" />
              </div> <br />
    
            <div className='main-top1'>
              <p>Сумка Jacquemus 
              </p>
              <p>Le Bambidou</p>
              <h5>21 999₽</h5>
            </div> 
              

            </div>
        </div>
        <div className='last'>
        <div className='radio1'>
    <input type="radio" />
        <p>Прибыл в транспортировочный центр</p>
      
            </div>   <div className='radio1'>
    <input type="radio" />
        <p>Подготовка к отправке в транзитный пункт</p>
      
            </div>   <div className='radio1'>
    <input type="radio" />
        <p>Заказ направлен в логистический центр</p>
      
            </div>   <div className='radio1'>
    <input type="radio" />
        <p>Прибыл в таможенный орган вашей страны</p>
      
            </div>   <div className='radio1'>
    <input type="radio" />
        <p>Заказ прибыл на склад, скоро получите</p>
      
            </div>
        </div>
        <div className='last-img'>
            <img src={alibek} alt="" />
            <p>Перейти к новым покупкам</p>
            <button>В каталог</button>
        </div>
        </div>
        </main>
    </div>
  )
}

export default Oform
