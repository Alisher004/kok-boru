import React from 'react'
import "./IstoriaCom.scss"
import Like3 from "../../assets/svg/Like3.svg"
import Magazin2 from "../../assets/svg/magazin2.svg"
import search2 from "../../assets/svg/search2.svg"
import negr1 from "../../assets/image/negr1.png"
import negr2 from "../../assets/image/negr2.png"
import negr3 from "../../assets/image/negr3.png"
import negr4 from "../../assets/image/negr4.png"
import nostroy from "../../assets/svg/nostroy.svg"


import sleva1 from "../../assets/svg/sleva.svg"
import prava1 from "../../assets/svg/prava.svg"
import mixer1 from "../../assets/image/mixer1.png"
import mixer2 from "../../assets/image/mixer2.png"
import mixer3 from "../../assets/image/mixer3.png"


import catolog2 from "../../assets/image/catolog2.png"


import { Link } from 'react-router-dom';



function IstoriaCom() {
  return (
    <div>
       <header className='nurtilek08  '>
          <div className='header39gg'>
          <div className='header39-left container'>
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
          <div className='header39-img'>
            <Link to={`/wishlist`}>
          <img src={Like3} alt="" />
            </Link>
          <img src={Magazin2} alt="" />
          <img src={search2} alt="" />
          
          </div>
          </div>

        </header>


        <div className='ali container'>
            <div className='ali2'>
                <h6>Главная/</h6>
                <h6>Журнал/</h6>
                <p>История</p>
            </div>

            <div className='ali3'>
                <h1>Истории <br /> брендов</h1>
                <button>по популярности
                    <img src={nostroy} alt="" />
                </button>
            </div>
        </div>
        <hr />
{/* -------------------------------------------------------- */}
        <div className='fotos container'>
          <div className='foto1'>
          <img src={negr1} alt="" />
          <h5>Yeezy</h5>
          </div>

          <div className='foto2'>
            <img src={negr2} alt="" />
            <h5>Nike</h5>
          </div><div className='foto3'>
            <img src={negr3} alt="" />
            <h5>Adidas</h5>
          </div><div className='foto4'>
            <img src={negr4} alt="" />
            <h5>Off-white</h5>
          </div>
          
        </div>
        <div className='fotos container'>
          <div className='foto1'>
          <img src={negr1} alt="" />
          <h5>Yeezy</h5>
          </div>

          <div className='foto2'>
            <img src={negr2} alt="" />
            <h5>Nike</h5>
          </div><div className='foto3'>
            <img src={negr3} alt="" />
            <h5>Adidas</h5>
          </div><div className='foto4'>
            <img src={negr4} alt="" />
            <h5>Off-white</h5>
          </div>
          
        </div>


       


        <div className='fotos container'>
          <div className='foto1'>
          <img src={negr1} alt="" />
          <h5>Yeezy</h5>
          </div>

          <div className='foto2'>
            <img src={negr2} alt="" />
            <h5>Nike</h5>
          </div><div className='foto3'>
            <img src={negr3} alt="" />
            <h5>Adidas</h5>
          </div><div className='foto4'>
            <img src={negr4} alt="" />
            <h5>Off-white</h5>
          </div>
          
        </div>

        <div className='main1-Nike1 container'>
        <p>Взгляните на</p>
        <div className='Nike1'>
          <div className='Nike1-1'>
            <h2></h2>
            <img src={sleva1} alt="" />

          </div>
          <h1>NIKE</h1>


          <div className='Nike1-2'>
            <img src={prava1} alt="" />
            <h2></h2>

          </div>
        </div>
      </div>

      <div className='main-mixer container'>

<div className='mixer1'>
  <img src={mixer1} alt="" />
  <p>bred Fr <br /> mixer </p>
  <div className='mixer1-img'>
    <img src={prava1} alt="" />
  </div>
</div>

<div className='mixer2'>
  <img src={mixer2} alt="" />
  <p>nike air <br /> jordan 1 </p>
  <div className='mixer1-img'>
    <img src={prava1} alt="" />
  </div>
</div>

<div className='mixer1'>
  <img src={mixer3} alt="" />
  <p> nike air <br /> Maximus </p>
  <div className='mixer1-img'>
    <img src={prava1} alt="" />
  </div>
</div>

      </div>
      <div className='main1-catolog2 container'>
  <img src={catolog2} alt="" /> 
  <h1>Скидка 7%</h1>
  <p>Получите скидку 7% на первую покупку при подписке <br /> на наши эксклюзивные акции, обновления и новости</p>
  <div className='catolog2-input1'>
    <input type="text" placeholder='Ваш E-mail' />
  <button>Подписаться</button>
  </div>
  </div>


        {/* ------------------------------------------------------------ */}
    </div>
  )
}

export default IstoriaCom
