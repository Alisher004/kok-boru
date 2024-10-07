import React from 'react'
// import Like from "../../assets/svg/like.svg"
import Magazin from "../../assets/svg/magazin.svg"
import search from "../../assets/svg/search.svg"
import "./NasCom.scss"
import history from "../../assets/image/history.png"
import koloko from "../../assets/image/koloko.png"
import { Link } from 'react-router-dom'

function NasCom() {
  return (
    <>
    <div className='ONas '>
          <div className='header12 '>
          <div className='header12-left '>
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
          <div className='header1-img'>
          {/* <img src={Like} alt="" /> */}

          <img src={Magazin} alt="" />          

          <img src={search} alt="" />
          </div>
          </div>

          <div className='two'>
          <div className='dealer2'>
            <h1>
            DEALER
            </h1>
          </div>

          <div className='istoria'>
            <div className='surot'>
            <img src={history} alt="" />
            </div>
            <div className='text-onas'>
            <h1>История</h1>
            <br />
            <p>Однажды неравнодушные волшебники не могли свыкнуться 
                с мыслью о том, что в три-далёком царстве жители три-далёкого государства не могут материализовать свои желания и живут лишь одной мыслью: “Где мне найти такую же сумку Jaquemuse!?, как у Василисы Премудрой" или Travis Scott x Wmns Air Jordan 1 Retro Low OG 'Olive', как у Ильи Муромца.</p><br /> <br />
            <p>К тому же злой и гадкий Кащей-санкции бессмертный, который нагло забрал с собой все заморские бренды и не за какие златы в три-далёком государстве их найти нельзя. Однако, для нашего клиента-Царевича и клиента-Прекрасной служит добрая, сплоченная команда волшебников, которая даст отпор злому Кащею и вернёт в замечательное государство все заморские бренды по индивидуальному предзаказу, а также, в избушке волшебников есть много позиций в наличии на любой вкус, размер и кошелек.А вот и сказке конец, а кто слушал - 5% скидки по магическому промокоду: "Иван Царевич"</p>
            </div>
          </div>
      

      <div className='texts'>
        <img src={koloko} alt="" />
        <div className='text1'>
            <h1>О DEALER</h1>
            <br />  <br />
            <p>DEALER - платформа, позволяющая материализовать любую Вашу мечту из сферы лимитированного ассортимента. Мы были нацелены на создание магазина, который будет Вашей волшебной палочкой-выручалочкой при заказе одежды, обуви, аксессуаров, техники, сумок и еще много-много чего. Наша цель — чтобы каждая Ваша покупка ассоциировалась с Dealer</p>
        </div>
        <div className='text2'>
            <h1>Команда</h1>
            <br /> <br />
            <p>Наши менеджеры — компетентные специалисты которые всегда проконсультируют Вас насчет любого вопроса. PR-менеджеры трудятся над созданием контента, чтобы Вам было интересно нас смотреть в социальных сетях, sales-менеджеры обрабатывают Ваши заявки, помогают подобрать подходящий размер, а отдел логистики работает над тем, чтобы Ваш заказ добрался до нашего офиса в обговоренные с Вами сроки.</p>
        </div>
        <div className='text3'>
            <h1>Принципиальная аутентичность всего ассортимента</h1>
            <br /> <br />
            <p>Мы сотрудничаем с ведущими аукционами и площадками,
              <br /> которые являются гарантом оригинальности</p>
        </div>
      </div>

      </div>
      </div>
    </>
  )
}

export default NasCom
