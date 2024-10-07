import React from 'react'
import magazin2 from "../../assets/svg/Magazin.svg"
import search2 from "../../assets/svg/search.svg"
import konserj from "../../assets/image/konserj.png"
import ali from "../../assets/image/ali.png"
import "./Konserj.scss"

function KonCom() { 
  return (
    <div className='chondiv'>
    <div className='konserj container'>
      <div className='header-2'>
        <div className='box'>
          <img src={konserj} alt="" />
        </div>
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
          <div className='ali'>
            <div className='perexod'>
            <h5>Главная/</h5>
            <h5>Каталог/</h5>
            </div>
        <h1>консьерж-сервис</h1>
      </div>
        </div>
        <div className='header3'>
          <img src={magazin2} alt="" />
          <img src={search2} alt="" />
        </div>

      </div>


      <div className='a1 container'>
        <img src={ali} alt="" />
        <div className='a2 '>
        <h3>Не нашли нужный товар? <br />
        Найдём мы</h3>
        <p>Оставьте заявку на любой желанный товар, если не нашли его в наших социальных <br />сетях или на сайте. Наши менеджеры обработают Вашу заявку свяжутся с Вами для <br /> уточнения деталей и возможности заказа. Доставка по всему миру.</p>
        </div>
        <div className='nur09'>
          <h1>Заполните форму</h1>
          <p>Название модели, если знаете</p>
          <input type="text" placeholder='Например: сумка Jacquemus Le Bambino' />
          <p>Площадка, на которой в последний раз видели модель</p>
          <input type="text" placeholder='Необязательно' />
          <p>Ваш телефон*</p>
          <input type="text" placeholder='+7 (999) 999-99-99' />
          <div className='nur-button'>
          <button>загрузить фото модели</button>
          <button>Отправить запрос</button>
          </div>
            
          <h2>Нажимая на кнопку, вы соглашаетесь и принимаете <br /> наши Условия обработки персональных данных и нашу <br /> Политику конфиденциальности.</h2>
        </div>
       
      </div>
    </div>
    </div>
  )
}

export default KonCom
