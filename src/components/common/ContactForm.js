import React, { useState } from 'react'

function ContactForm() {
  const [formValues, setFormValues] = useState({
    name: '',
  })

  const handleFormChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <form
      className="max-w-lg | space-y-6"
      name="contact"
      method="POST"
      action="https://formsubmit.co/bb54bfeb342468815598de8c1efcb901"
    >
      <input type="text" name="_honey" className="hidden" />
      {/* <input type="hidden" name="_captcha" value="false" /> */}
      <input type="hidden" name="_subject" value={`Contact Form - jibin.tech - ${formValues.name}`} />
      <input type="hidden" name="_next" value="https://jibin.tech/success" />

      <div>
        <label htmlFor="name" className="text-sm font-semibold | block | mb-0.5">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          aria-label="Name"
          onChange={handleFormChange}
          className="text-gray-200 bg-transparent | border border-gray-200 rounded | w-full | p-2"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-semibold | block | mb-0.5">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          aria-label="Email Address"
          className="text-gray-200 bg-transparent | border border-gray-200 rounded | w-full | p-2"
          required
        />
      </div>

      <div>
        <label htmlFor="company_name" className="text-sm font-semibold | block | mb-0.5">
          Company / Organization
        </label>
        <input
          id="company_name"
          type="text"
          name="company_name"
          aria-label="Company name"
          className="text-gray-200 bg-transparent | border border-gray-200 rounded | w-full | p-2"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold | block | mb-0.5">
          Message
        </label>
        <textarea
          id="message"
          row="20"
          cols="50"
          name="message"
          aria-label="Message"
          className="text-gray-200 bg-transparent | border border-gray-200 rounded | w-full min-h-[200px] | p-2"
          required
        />
      </div>

      <button className="btn btn--filled btn--full">Reach out to me</button>
    </form>
  )
}

export default ContactForm
