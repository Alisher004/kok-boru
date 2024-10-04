import React from 'react'
import "./Consignment.scss"
import consignment from "../../assets/image/consignment.png"
import Magazin from "../../assets/svg/magazin.svg"
import search from "../../assets/svg/search.svg"
import Like from "../../assets/svg/Like.svg"
import sport1 from "../../assets/image/sport1.png"
import sport2 from "../../assets/image/sport2.png"
import sport3 from "../../assets/image/sport3.png"
import Acardion from '../acardion/Acardion'


import { Link } from 'react-router-dom'

function ConsignmentCom() {
  return (
    <div>
         <header className='header1709 container'>
          <img src={consignment} alt="" />
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

            <h1>клиентский сервис</h1>
        
            
          </div>
          <div className='router9'>
            <Link to={`/`}>
            <p>Главная//</p>        
            </Link>
            <h1>Поддержка//</h1>
          </div>
          <div className='header-footer09'></div>

         
      
        </header>
        <main className='main-sport container'>
            <div className='sport-1'>
                <h1>Продай свои позиции с нами</h1>
                <p>Консигнация - это услуга, которую мы предоставляем нашим клиентам и не только,<br /> позволяющая реализовать позиции, которые потеряли актуальность в Вашем <br /> гардеробе. Также услуга подходит тем, кому отказали в возврате в других магазинах <br /> или Вы приобрели позицию на перепродажу, но совершить сделку так и не <br /> получилось.</p>
            </div>

<div className='sport-img'>
<img src={sport1} alt="" />
<img src={sport2} alt="" />
<img src={sport3} alt="" />

</div>
<div className='sport-2'>
    <h1>Краткий гид</h1>
    <div className='sport-grid'>
        <div className='grid-1'>
            <h2>01</h2>
            <p>Заполните форму</p>
        </div>
        <div className='grid-1'>
            <h2>01</h2>
            <p>Заполните форму</p>
        </div>
        <div className='grid-1'>
            <h2>01</h2>
            <p>Заполните форму</p>
        </div>
        <div className='grid-1'>
            <h2>01</h2>
            <p>Заполните форму</p>
        </div>
        <div className='grid-1'>
            <h2>01</h2>
            <p>Заполните форму</p>
        </div>
        <div className='grid-1'>
            <h2>01</h2>
            <p>Заполните форму</p>
        </div>
        <div className='grid-1'>
            <h2>01</h2>
            <p>Заполните форму</p>
        </div>
    </div>
</div>

<div className='sport-acardion'>
    <h1>Остались вопросы?</h1>
    <p>Ответим на самые популярные ниже:</p>
 <Acardion />
</div>

<div className='sport-button'>
    <h1>Кнопка ниже для подачи формы будущего <br /> контрагента</h1>
    <button>Заполнить форму</button>
    <p>Нажимая на кнопку, вы соглашаетесь и принимаете <br /> наши Условия обработки персональных данных и нашу <br /> Политику конфиденциальности.</p>
</div>


        </main>
    </div>
  )
}

export default ConsignmentCom
