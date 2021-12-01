import React, {useRef, useState} from "react";
import "./App.css";
import emailjs from 'emailjs-com';



const service_id: any = (process.env.REACT_APP_EMAIL_SERVICE_ID as string);
const template_id: any = (process.env.REACT_APP_EMAIL_TEMPLATE_ID as string);
const user_id: any = (process.env.REACT_APP_EMAIL_USER_ID as string);

function App() {

    const form: any = useRef();
    const [message, setMessage] = useState('')
    const sendEmail = (e: any) => {

        e.preventDefault();
        emailjs.sendForm(service_id, template_id, form.current, user_id)
            .then((result) => {
                if (result.status === 200) {
                    setMessage("Thanks for your Message. We will get intouch soon")                   
                }
            }, (error) => {
                console.log(error.text);
            });
    };
  return (
    <div className="App">
      <form ref={form} onSubmit={sendEmail} className="form">
        <h3 style={{ marginLeft: 16 }}>PLEASE SEND YOUR EMAIL</h3>
        <p>{message}</p>
        <div className="formelement">
          <input
            type="text"
            name="user_name"
            className="input"
            placeholder="Your Full Name"
          />
        </div>
        <div className="formelement">
          <input
            type="email"
            name="user_email"
            className="input"
            placeholder="Your Email Address"
          />
        </div>
        <div className="formelement">
          <textarea
            name="message"
            className="input"
            placeholder="Your Message"
          />
        </div>
        <div className="formelement">
          <button type="submit" className="emailbtn">
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
