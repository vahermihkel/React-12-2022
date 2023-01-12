import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = () => {
    const data = {
      "from_name": nameRef.current.value,
      "from_email": emailRef.current.value,
      "message": messageRef.current.value
    }
    emailjs.send('service_fum24bj', 'template_ld2lsyd', data, 'Xbn0xj_4LjNugxYGl')
      .then(result => {
          console.log(result.text);
      }, error => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <label>Name</label>
      <input ref={nameRef} type="text" />
      <label>Email</label>
      <input ref={emailRef} type="email" />
      <label>Message</label>
      <textarea ref={messageRef} name="message" />
      <button onClick={sendEmail}>Send</button>
    </div>
  );
};

// WCAG - ligipääsetavuse nõuded
//    <img src="" alt="alternative text kui pilt pole kättesaadav" />
//    label ja input ümber form tag

export default ContactUs
