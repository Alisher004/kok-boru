import React from 'react'
import "./Acardion"
import Accordion from 'react-bootstrap/Accordion';


function Acardion() {
  return (
    <div>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Как и когда я смогу получить выплату за реализованный товар?</Accordion.Header>
        <Accordion.Body>
        Вы получаете выплаты на Ваши реквизиты, прописанные в договоре. Срок выполнения платежа - 14 календарных дней с даты получения клиентом товара.        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Что делать если я хочу немедленно вернуть товар?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default Acardion
