import React from 'react'
import "./Help.scss"
import help from "../../assets/image/help.png"

import Magazin from "../../assets/svg/magazin.svg"
import search from "../../assets/svg/search.svg"
import { Link } from 'react-router-dom'


function HelpCom() {
  return (
    <div>
         <header className='header170'>
          <img src={help} alt="" />
          <div className='header170gg'>
          <div className='header170-left container'>
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
          <div className='header170-img'>
          <img src={Magazin} alt="" />
          <Link to={`/search`}>
          <img src={search} alt="" />
          </Link>
          </div>
          </div>

          <div className='header170-center'>

            <h1>клиентский сервис</h1>
        
            
          </div>
          <div className='router'>
            <Link to={`/`}>
            <p>Главная//</p>        
            </Link>
            <h1>Поддержка//</h1>
          </div>
          <div className='header-footer0'></div>

         
      
        </header>

        <main className='main-help container'>
        <div className='main-help1'>
            <h1>Статьи на самые популярные запросы</h1>
            <p>Карточки с полезной информацией и популярными запросами для Вашего удобства. <br /> Кликайте на саму карточку и переходите в раздел, где Вы можете более подробно <br /> ознакомиться с информацией.</p>
        </div>
        <div className='main-help2'>
            <div className='help2-f1'>
                <h1>Оформление заказа</h1>
                <p>Как оформить заказ? Что делать если я <br /> не знаю свой размера? Возможность <br /> обмена и возврата.</p>
            </div>

            <div className='help2-f1'>
                <h1>Логистика и оплата</h1>
                <p>Варианты доставки и способы оплаты. <br /> Сроки и стоимость доставки по России, <br /> СНГ и по всему миру.</p>
            </div>

            <div className='help2-f1'>
                <h1>Популярные вопросы</h1>
                <p>Собрали список Ваших самых <br /> популярных вопросов из наших <br /> социальных сетей.</p>
            </div>

            <div className='help2-f1'>
                <h1>Статус заказа</h1>
                <p>Узнайте на каком этапе Ваш заказ, какие <br /> этапы логистики остались и когда Вы  <br />получите заветные позиции для <br />гардероба.</p>
            </div>

            <div className='help2-f1'>
                <h1>Pre-loved</h1>
                <p>Что такое Pre-loved? Как понять какое <br /> состояние конкретной позиции?</p>
            </div>

            <div className='help2-f1'>
                <h1>Custom</h1>
                <p>Что такое Pre-loved? Как понять какое <br />состояние конкретной позиции?</p>
            </div>

        </div> <br /> <br /> <hr />
        <div className='main-help3'>
        <div className='help2-f2'>
                <h1>Trade In и <br /> Консолидация</h1>
                <p>Как оформить заказ? Что делать если я <br /> не знаю свой размера? Возможность  <br />обмена и возврата.</p>
            </div>
         
            <div className='help2-f2'>
                <h1>Консьерж-сервис</h1>
                <p>Что делать если не нашел/а ничего в <br />каталоге? Можете привезти конкретный <br /> лот?</p>
            </div>
            <div className='help2-f2'>
                <h1>   Документация и <br /> Честный знак</h1>
                <p>dealer.club - это в первую очередь <br />официальный магазин. Подробнее о  <br />сертификатах на продукцию и <br /> маркировках.</p>
            </div>
            <div className='help2-f2'>
                <h1>Отзывы клиентов и <br /> инфлюенсеров</h1>
                <p>Узнайте на каком этапе Ваш заказ, какие <br /> этапы логистики остались и когда Вы <br /> получите заветные позиции для <br />гардероба.</p>
            </div>
            <div className='help2-f2'>
                <h1>Договор оферты и <br /> наличие возврата</h1>
                <p>Что такое Pre-loved? Как понять какое <br /> состояние конкретной позиции?</p>
            </div>
            <div className='help2-f2'>
                <h1>Связаться с нами</h1>
                <p>Что такое Pre-loved? Как понять какое <br /> состояние конкретной позиции?</p>
            </div>

        </div>
        </main>

    </div>
  )
}

export default HelpCom
