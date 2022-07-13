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
        <h1 class="text-center heading-text">Contact Me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
            <div class="form-text ">
                <label class="p-4 text-white" htmlFor="name">Name:</label>
                <br /> <input type="text" value={formState.name} onChange={handleChange} name="name"/>
            </div>
            <div class="form-text pt-3">
                <label class="p-4 text-white" htmlFor='email'>Email:</label>
                <br /><input type="email" name="email" value={formState.email} onChange={handleChange}/>
            </div>
            <div class="form-text pt-3">
                <label class="pl-5 text-white"htmlFor="message">Message:</label>
                <br /><textarea class="px-3"name="message" rows="3" value={formState.message} onChange={handleChange}/>

            </div>
            {errorMessage && (
                <div>
                    <p className= "error-text">{errorMessage}</p>
                </div>
            )}
            <button class="text-[16px] text-white mt-2" type ="submit">Submit</button>
            </form>
            
        <address class="address">
        <p>Number upon request</p>
       <p> <a class="contact-info" href="mailto:madisonschaaf48@gmail.com">madisonschaaf48@gmail.com</a></p>
        {/* <p><a class="contact-info" href="https://github.com/mschaaf17">github.com/mschaaf17</a></p> */}
        </address>
        <a href="#Nav" class="text-indigo-200 back-to-nav">Back to Navigation</a>
        </section>
        
        

    )
}

export default Contact;