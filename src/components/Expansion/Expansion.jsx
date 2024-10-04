import React from 'react'
import { Link } from 'react-router-dom'
import sleva from "../../assets/svg/1.svg"
import prava from "../../assets/svg/2.svg"
import "./Expansion.scss"
import menu from "../../assets/image/menu.png"
import Magazin from "../../assets/svg/magazin.svg"
import search from "../../assets/svg/search.svg"
import menuimg from "../../assets/image/menuimg.png"

function Expansion() {
  return (
    <div>
           <div className='top1'>
      <div className='top11'>
        <Link to={`/menuexpansion`}>
            <img src={sleva} alt="" />
        
        </Link>
            <p>Гарантия лучшей цены</p>
        <Link to={`/`}>
        
            <img src={prava} alt="" />
        </Link>
        </div>

      </div>

      <header className='header2'>
          <img src={menu} alt="" style={{opacity: "0.4"}} />
          <div className='header2gg'>
          <div className='header2-left container'>
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
          <img src={Magazin} alt="" />
          <img src={search} alt="" />
          </div>
          </div>
<div className='header2-menu'>
<div className='header2-menu1'>
  <div className='menu1'>
    <h3>Разделы</h3>
    <ul>
      <li>
        <a href="">Смотреть все</a>
      </li>
      <li>
        <a href="">Custom</a>
      </li>
      <li>
        <a href="">Pre-Loved</a>
      </li>
      <li>
        <a href="">В наличии</a>
      </li>
    </ul>
  </div>

  <div className='menu1'>
    <h3>Категории</h3>
    <ul>
      <li>
        <a href="">Смотреть все</a>
      </li>
      <li>
        <a href="">Свитера, трикотаж</a>
      </li>
      <li>
        <a href="">Худи, свитшоты</a>
      </li>
      <li>
        <a href="">Футболки, поло</a>
      </li>
      <li>
        <a href="">Кофты на молнии</a>
      </li>
       <li>
        <a href="">Лонгсливы</a>
      </li>
       <li>
        <a href="">В наличии</a>
      </li>
    </ul>
  </div>

  <div className='menu1'>
    <h3>редакции</h3>
    <ul>
      <li>
        <a href="">На свидание</a>
      </li>
      <li>
        <a href="">Самые редкие модели</a>
      </li>
      <li>
        <a href="">Российские дизайнеры</a>
      </li>
      <li>
        <a href="">Футболки, поло</a>
      </li>
      <li>
        <a href="">Образы для делового ужина</a>
      </li>
       <li>
        <a href="">Перед тренировкой</a>
      </li>
      
    </ul>
  </div>

  <div className='menu1'>
    <h3> бренды</h3>
    <ul>
      <li>
        <a href="">Gucci</a>
      </li>
      <li>
        <a href="">Adidas</a>
      </li>
      <li>
        <a href="">Jacquemus</a>
      </li>
      <li>
        <a href="">Nike</a>
      </li>
      <li>
        <a href="">Dior</a>
      </li>
       <li>
        <a href="">Prada</a>
      </li>
      <li>
        <a href="">Dolce & Gabana</a>
      </li>
      
    </ul>
  </div>

  <div className='menu1-img'>
    <img src={menuimg} alt="" />
    <h3>Фокус недели</h3>
  </div>

</div>
<div className='header2-menu2'>
<button>Весь каталог</button>
<p>весеннее обострение /// -40% на одежду adidas</p>
<div className='header2-button'>
  <h4>Adidas Ozweego</h4>
<button>Перейти к модели</button>

</div>
</div>
</div>


          

         

          
      
        </header>
      
    </div>
  )
}

export default Expansion
