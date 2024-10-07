import React from 'react'
import "./Brend.scss"
import negr from "../../assets/image/negr.png"
import Magazin from "../../assets/svg/magazin.svg"
import search from "../../assets/svg/search.svg"
import { Link } from 'react-router-dom'
import kros5 from "../../assets/image/kros5.png"
import Like2 from "../../assets/svg/Like2.svg"
import kros3 from "../../assets/image/kros3.png"
import kros1 from "../../assets/image/kros1.png"
import kros2 from "../../assets/image/kros2.png"
import guchi from "../../assets/svg/guchi.svg"
import negr1 from "../../assets/image/negr1.png"
import negr2 from "../../assets/image/negr2.png"
import negr3 from "../../assets/image/negr3.png"
import negr4 from "../../assets/image/negr4.png"

function Istoriabrend() {
  return (
    <div>
      <header className='header17 '>
          <img src={negr} alt="" />
          <div className='header17gg '>
          <div className='header17-left container '>
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
          <div className='header17-img'>
          <img src={Magazin} alt="" />
          <Link to={`/search`}>
          <img src={search} alt="" />
          </Link>
          </div>
          </div>

          <div className='header17-center'>
            <h1>#история <br /> бренда</h1>
            <h2>История бренда</h2>
            
          </div>
          <div className='header-footer'></div>

         
      
        </header>

      <main className='negr container'>
      <div className='negr-1'>
        <div className='negr-1-1'>
          <div className='header4-p44'>
                <Link to={`/`}>
            <h2>Главная|| </h2>
                </Link>
                <Link to={`/catalog`}>
            <p>Каталог||</p>
                </Link>
            <Link to={`/istoria`}>
            <h3>История||</h3>
            </Link>
            <Link to={`/istoriabrenda`}>
            <p>Yeezy</p>
            </Link>
            



            </div>
            <p>12.01.2024</p>
          </div>
          <div className='negr1-img'>
            <img src={kros5} alt="" />
            <p>В 2009 году Канье Уэст и его друг, стилист и давний партнер Вирджил Абло <br /> отправляются в Париж, где вместе проходят стажировку в модном доме Fendi. <br /> Уэст выходит на новый уровень и представляет кроссовки, разработанные вместе <br /> с культовым модным домом Louis Vuitton. Под эгидой совместного проекта в 2009 <br /> году в продажу поступают сразу три модели. Тогда же выходят первые Nike Air <br /> Yeezy и вокруг персоны Уэста, как сникер-дизайнера, образуется ажиотаж.</p>
          </div>

          <div className='negr2-img2'>
            <h1>Первый опыт дизайнера</h1>
            <div className='negr2-img2-p2'>
              <img src={kros5} alt="" />
              <p>В 2009 году Канье Уэст и его друг, <br /> стилист и давний партнер Вирджил <br /> Абло отправляются в Париж, где <br /> вместе проходят стажировку в <br /> модном доме Fendi. Уэст выходит <br /> на новый уровень и представляет <br /> кроссовки, разработанные вместе с <br /> культовым модным домом Louis <br /> Vuitton. Под эгидой совместного <br /> проекта в 2009 году в продажу <br /> поступают сразу три модели. </p>
            </div>
          </div>

          <div className='negr-1-2'>
            <div className='negr-1-2-1'>
              <p>Если ты можешь правильно заявить о продукте, то ты </p>
              <h3>можешь заработать на этом денег.</h3>
            </div>
            <p>В 2009 году Канье Уэст и его друг, стилист и давний партнер Вирджил Абло <br /> отправляются в Париж, где вместе проходят стажировку в модном доме Fendi. <br /> Уэст выходит на новый уровень и представляет кроссовки, разработанные <br /> вместе с культовым модным домом Louis Vuitton. Под эгидой совместного <br /> проекта в 2009 году в продажу поступают сразу три модели. Тогда же выходят <br /> первые Nike Air Yeezy и вокруг персоны Уэста, как сникер-дизайнера, образуется <br /> ажиотаж.</p>
          </div>

          <div className='negr-tovar'>
            <div className='tovar-1'>
              <h1>Товары этого бренда</h1>
              <button>Перейти</button>
            </div>

            <div className='tovar-1-img'>

            <div className='kros190'>
              <div className='mm90'>
            <img src={kros3} alt="" />
    
              </div>
              <div className='pp90'>NEW</div>
              <div className='pw190'>
                <img src={Like2} alt="" />
              </div> <br />
    
            <div className='main-top190'>
              <p>Сумка Jacquemus 
              </p>
              <p>Le Bambidou</p>
              <h5>21 999₽</h5>
            </div> 
            </div>
            {/* 2 */}
            <div className='kros190'>
              <div className='mm90'>
            <img src={kros1} alt="" />
    
              </div>
              <div className='pp90'>NEW</div>
              <div className='pw190'>
                <img src={Like2} alt="" />
              </div> <br />
    
            <div className='main-top190'>
              <p>Сумка Jacquemus 
              </p>
              <p>Le Bambidou</p>
              <h5>21 999₽</h5>
            </div> 
            </div>
            {/* 3 */}
            <div className='kros190'>
              <div className='mm90'>
            <img src={kros1} alt="" />
    
              </div>
              <div className='pp90'>NEW</div>
              <div className='pw190'>
                <img src={Like2} alt="" />
              </div> <br />
    
            <div className='main-top190'>
              <p>Сумка Jacquemus 
              </p>
              <p>Le Bambidou</p>
              <h5>21 999₽</h5>
            </div> 
            </div>
            </div>

            <div className='negr1-img-3'>
            <img src={kros5} alt="" />
            <p>В 2009 году Канье Уэст и его друг, стилист и давний партнер Вирджил Абло <br /> отправляются в Париж, где вместе проходят стажировку в модном доме Fendi. <br /> Уэст выходит на новый уровень и представляет кроссовки, разработанные вместе <br /> с культовым модным домом Louis Vuitton. Под эгидой совместного проекта в 2009 <br /> году в продажу поступают сразу три модели. Тогда же выходят первые Nike Air <br /> Yeezy и вокруг персоны Уэста, как сникер-дизайнера, образуется ажиотаж.</p>
          </div>

          </div>

          <div className='negr3-1'>
          <h1>Истории других брендов</h1>
          <button>Посмотреть все</button>
        </div>

        <div className='negr3-img'>
          <div className='negr3-1img'>
            <img src={negr1} alt="" />
            <p>Yeezy</p>
          </div>
          <div className='negr3-1img'>
            <img src={negr2} alt="" />
            <p>Nike</p>
          </div>
          <div className='negr3-1img'>
            <img src={negr3} alt="" />
            <p>Adidas</p>
          </div>
          <div className='negr3-1img'>
            <img src={negr4} alt="" />
            <p>Off-white</p>
          </div>
        </div>
        
      </div>
      <div className='negr-2'>
        <div className='negr-2-istoria1'>
        <h1>истории</h1>
        <div className='istoria1-2'>
          <img src={guchi} alt="" />
          <p>GUCCI</p>
        </div>
        <div className='istoria1-1'>
          <img src={guchi} alt="" />
          <p>GUCCI</p>
        </div>
        <div className='istoria1-1'>
          <img src={guchi} alt="" />
          <p>GUCCI</p>
        </div>
        <div className='istoria1-1'>
          <img src={guchi} alt="" />
          <p>GUCCI</p>
        </div>
        <div className='istoria1-1'>
          <img src={guchi} alt="" />
          <p>GUCCI</p>
        </div>
        <div className='istoria1-1'>
          <img src={guchi} alt="" />
          <p>GUCCI</p>
        </div>
        <div className='istoria1-1'>
          <img src={guchi} alt="" />
          <p>GUCCI</p>
        </div>
        <div className='istoria1-1'>
          <img src={guchi} alt="" />
          <p>GUCCI</p>
        </div>
        <div className='istoria1-1'>
          <img src={guchi} alt="" />
          <p>GUCCI</p>
        </div>
        </div>

        <div className='istoria2-img'>
          <h1>товары бренда</h1>
         

            <div className='kros1901'>
              <div className='mm901'>
            <img src={kros3} alt="" />
    
              </div>
              <div className='pp901'>NEW</div>
              <div className='pw1901'>
                <img src={Like2} alt="" />
              </div> <br />
    
            <div className='main-top1901'>
              <p>Сумка Jacquemus 
              </p>
              <p>Le Bambidou</p>
              <h5>21 999₽</h5>
            </div> 
            </div>
            
            <div className='kros1901'>
              <div className='mm901'>
            <img src={kros3} alt="" />
    
              </div>
              <div className='pp901'>NEW</div>
              <div className='pw1901'>
                <img src={Like2} alt="" />
              </div> <br />
    
            <div className='main-top1901'>
              <p>Сумка Jacquemus 
              </p>
              <p>Le Bambidou</p>
              <h5>21 999₽</h5>
            </div> 
            </div>
            <div className='istoria2-button'>
            <button>Каталог Yeezy</button>
            <button>На главную</button>
            </div>
        </div>
      </div>
      </main>
     

    </div>
  )
}

export default Istoriabrend
