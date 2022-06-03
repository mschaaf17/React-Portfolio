import React, {useState} from 'react';


function Contact() {
    const [formState, setFormState] =useState({name: '', email: '', message: ''})
    const [errorMessage, setErrorMessage] = useState('')
    const {name, email, message} =formState

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!errorMessage) {
            console.log('Submit Form', formState)
        }
    }

    const handleChange =(e) => {
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

    return(
        <section class="border p-5 mx-5 container-width rounded">
        <h1>Contact Me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
            <div class="text-[20px]">
                <label htmlFor="name">Name:</label>
                <input type="text" defaultValue={name} onBlur={handleChange} name="name"/>
            </div>
            <div class="text-[20px]">
                <label htmlFor='email'>Email address:</label>
                <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
            </div>
            <div class="text-[20px]">
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
            </div>
            {errorMessage && (
                <div>
                    <p className= "error-text">{errorMessage}</p>
                </div>
            )}
            <button  class="text-[20px]" type ="submit">Submit</button>
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