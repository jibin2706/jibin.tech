import React from 'react'
import Mail from '../images/mail.svg'

import './success_message.scss'

function SuccessMessage() {
  return (
    <div className="message-success">
      <img className="message-success__image" src={Mail} alt="message send" />
      <h1>I got your message!</h1>
      <h2 className="message--secondary">
        Thank you very much for your message. I will get back to you as soon as
        possible.
      </h2>
    </div>
  )
}

export default SuccessMessage
