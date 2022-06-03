import React, {useState} from 'react';
import { validateEmail} from '../../utils/helpers';


function Contact() {
    const [email, setEmail] =useState('')
    const [name, setName] =useState('')
    const [message, setMessage] =useState('')


     const [formState, setFormState] =useState({formName: '', formEmail: '', formMessage: ''})
    const [errorMessage, setErrorMessage] = useState('')
    //  const {formName, formEmail, formMessage} =formState


    const handleChange =(e) => {
        const {target} = e
        const inputType = target.name
        const inputValue = target.defaultValue
    
        if(inputType === 'email') {
            setEmail(inputValue)
        } else if (inputType === 'name') {
            setName(inputValue)
        } else if (inputType === 'message') {
            setMessage(inputValue)
        }
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
          console.log('Handle Form', formState);
        }
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        setEmail('')
        setName('')
        setMessage('')
    }


    return(
        <section class="info-container">
        <h1>Contact Me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
            <div class="text-[20px] m-5 px-5">
                <label class="p-4" htmlFor="name">Name:</label>
                <br /> <input type="text" defaultValue={name} onBlur={handleChange} name="name"/>
            </div>
            <div class="text-[20px] m-5 px-6">
                <label class="p-4" htmlFor='email'>Email:</label>
                <br /><input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
            </div>
            <div class="text-[20px] m-5 px-3">
                <label class="p-6"htmlFor="message">Message:</label>
                <br /><textarea class="p-5 ml-3"name="message" rows="5" defaultValue={message} onBlur={handleChange}/>

            </div>
            {errorMessage && (
                <div>
                    <p className= "error-text">{errorMessage}</p>
                </div>
            )}
            <button onClick={handleSubmit} onChange={handleChange} class="text-[20px] mx-10 mb-2" type ="submit">Submit</button>
            </form>
            
        <address class="address">
        <p>Number upon request</p>
       <p> <a class="contact-info" href="mailto:madisonschaaf48@gmail.com">madisonschaaf48@gmail.com</a></p>
        <p><a class="contact-info" href="https://github.com/mschaaf17">github.com/mschaaf17</a></p>
        </address>
        </section>
        

    )
}

export default Contact;