import React, {useState} from 'react';
import { validateEmail} from '../../utils/helpers';


function Contact() {
    
     const [formState, setFormState] =useState({name: '', email: '', message: ''})
    const [errorMessage, setErrorMessage] = useState('')


    const handleChange =(e) => {
        const {target} = e
        const inputType = target.name
        const inputValue = target.value
    
      
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
        if (!validateEmail(formState.email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        if(!formState.name.length) {
            setErrorMessage('name required')
            return
        } 
        
         if(!formState.message.length) {
            setErrorMessage('message required')
            return
         }

        alert('Form Submitted')
        setFormState({name: '', email: '', message: ''})
       
    }


    return(
        <section class="info-container">
        <h1>Contact Me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
            <div class="text-[20px] m-5 px-5">
                <label class="p-4" htmlFor="name">Name:</label>
                <br /> <input type="text" value={formState.name} onChange={handleChange} name="name"/>
            </div>
            <div class="text-[20px] m-5 px-6">
                <label class="p-4" htmlFor='email'>Email:</label>
                <br /><input type="email" name="email" value={formState.email} onChange={handleChange}/>
            </div>
            <div class="text-[20px] m-5 px-3">
                <label class="p-6"htmlFor="message">Message:</label>
                <br /><textarea class="p-5 ml-3"name="message" rows="5" value={formState.message} onChange={handleChange}/>

            </div>
            {errorMessage && (
                <div>
                    <p className= "error-text">{errorMessage}</p>
                </div>
            )}
            <button class="text-[20px] mx-10 mb-2" type ="submit">Submit</button>
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