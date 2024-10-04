import React from 'react'
import "./Zakaz.scss"
import Like3 from "../../assets/svg/Like3.svg"
import Magazin2 from "../../assets/svg/magazin2.svg"
import search2 from "../../assets/svg/search2.svg"
import slevazakaz from "../../assets/svg/slevazakaz.svg"
import Magazin from "../../assets/svg/magazin.svg"
import x from "../../assets/svg/x.svg"
import Like2 from "../../assets/svg/Like2.svg"
import kros1 from "../../assets/image/kros1.png"
import udalit from "../../assets/svg/udalit.svg"
import { Link } from 'react-router-dom';
import visa from "../../assets/image/visa.png"

function Zakaz() {
  const buttonClick = () => {
    alert("Заказ успешный ")
    setTimeout(() => {
      window.location.href = "/"

    }, 2000)
  }
  return (
    <div>
       <header className='nurtilek0808  '>
          <div className='header3990gg'>
          <div className='header3990-left container'>
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
          <div className='header3990-img'>
            <Link to={`/wishlist`}>
          <img src={Like3} alt="" />
            </Link>
          <img src={Magazin2} alt="" />
          <img src={search2} alt="" />
          
          </div>
          </div>

        </header>
        <div className='ofer container'>
        <div className='ofer-1'>
<img src={slevazakaz} alt="" />
<h1>Оформление заказа</h1>

{/* <div className='ofer-input'>
    <p>E-mail</p>
        <input type="text" />
        
</div> */}
<div className='ofer-input1'>
    <p>Имя</p>
        <input type="text" />
        
</div>

<div className='ofer-input2'>
    <p>Фамилия</p>
        <input type="text" />
        
</div>

<div className='ofer-input2'>
    <p>Телефон</p>
        <input type="number"  placeholder='+7 (999) 999-99-99' />
        
</div>
<div className='dostavka'>
    <h2>Доставка</h2>
    {/* <div className='dostavka-input'>
        <p>Населённый пункт</p> <input type="text" placeholder='Населённый пункт' />
    </div> */}
</div>

<div className='dostavka-radio'>
    <p>Способ доставки</p>

        <div className='radio-top'>
            <div className='radio1'>
    <input type="radio" />
        <p>Курьер — 800 руб</p>
      
            </div>
            <div className='radio1'>
    <input type="radio" />
        <p>  Самовывозом с магазина</p>

            </div>
            <div className='radio1'>
    <input type="radio" />
        <p>Пункт выдачи</p>

            </div>

        </div>
</div>

<div className='dom'>
    <p>Улица</p>

    <div className='dom-input'>
        <input type="text" />
        <div className='dom-top'>

        <div className='dom-2'>
            <p>Дом</p>
        <input type="text" />
        </div>
        <div className='dom-2'>
        <p>Квартира/офис</p>
        <input type="text" />
        </div>
        </div>
    </div>
</div>

<div className='dostavka-radio'>
    <p>Способ оплаты</p>

        <div className='radio-top'>
            <div className='radio1'>
    <input type="radio" />
    <img src={visa} alt="" />
    <p>****0409</p>
        <h6>Банковской картой</h6>
      
            </div>
            <div className='radio1'>
    <input type="radio" />
        <p>наличными</p>

            </div>

        </div>
        </div>
        <div className='ofer-input2'>
    <p>Комментарий <br /> для курьера</p>
        <input type="text"  placeholder='' />
        <button onClick={buttonClick}>ЗАКАЗАТЬ</button>
</div>

        </div>
        <div className='ofer-2'>
        <div className='icon2'> 
          <img src={Magazin} alt="" />   
          <div className='modal'> 
 
            <div className='modal2'> 
            <h2>Корзина</h2> 
            <img src={x} alt="" /> 
            </div> 
            <div className='m3'> 
               <h5>2 товара</h5> 
              <h5>Очистить</h5> 
            </div> 
 
            <div className='cart'> 
 
              <div className='incart1'> 
              <img src={kros1} alt="" /> 
              </div> 
 
              <div className='incart2'> 
                <div className='box'> 
                 <h6>Кроссовки Nike 
                Le Bambidou</h6> 
                <img src={Like2} alt="" />  
                </div> 
              <div className='c3'> 
                <button>PRE-LOVED</button> 
                <p>размер</p> 
                <h5>41 RU</h5> 
              </div> 
              <div className='c4'> 
              <p>цвет</p> 
              <h5>Red</h5> 
              </div> 
              <div className='c5'> 
                <h3>21 999₽</h3> 
                <img src={udalit} alt="" /> 
              </div> 
                 </div>       
 
              </div> 
              {/* --------------------------------------------------------------- */} 
              <div className='cart'> 
 
              <div className='incart1'> 
              <img src={kros1} alt="" /> 
              </div> 
 
              <div className='incart2'> 
                <div className='box'> 
                 <h6>Кроссовки Nike 
                Le Bambidou</h6> 
                <img src={Like2} alt="" />  
                </div> 
              <div className='c3'> 
                <button>PRE-LOVED</button> 
                <p>размер</p> 
                <h5>41 RU</h5> 
              </div> 
              <div className='c4'> 
              <p>цвет</p> 
              <h5>Red</h5> 
              </div> 
              <div className='c5'> 
                <h3>21 999₽</h3> 
                <img src={udalit} alt="" /> 
              </div> 
                 </div>       
 
                </div> 
 
                <div className='bm'> 
                  <div className='bm2'> 
                    <h2>Итого</h2> 
                    <h2>43 998₽</h2> 
                  </div> 
                  <div className='btn'> 
                    <button>Оформить</button> 
                  </div> 
 
                </div> 
 
            </div>    
        </div>
        </div>
        </div>
    </div>
  )
}

export default Zakaz
