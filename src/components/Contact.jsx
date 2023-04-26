import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import kep from '/bg.jpg'

const Contact = () => {

    const form = useRef();
    const [disabled, setDisabled] = useState(false);
    let send = true;

    const sendEmail = (e) => {
        if (send) {
            send = false;
            e.preventDefault();
            setDisabled(true);

            emailjs.sendForm('service_nx2twmi', 'template_hytr6tr', form.current, '7RvRiJyTmfqCFnocI')
                .then((result) => {
                    console.log(result.text);
                    alert("Köszönjük megkeresését, üzenetét elküldtük!");
                    setDisabled(false);
                    send = true;
                }, (error) => {
                    console.log(error.text);
                    alert("A küldés során hiba történt, kérjük próbálja újra később, vagy keressen fel bennünket egy másik elérhetőségen!");
                    setDisabled(false);
                    send = true;
                });
        }
    };

    return (
        <div className='contact' id='contact'>
            <div className='background'>
                <div className="content">
                    <h1 className='font-bold'>Kapcsolat</h1>
                    <span className='line'></span>
                    <p>Információt kérne szolgáltatásainkkal kapcsolatban?</p>
                    <p>Vegye fel velünk a kapcsolatot!</p>

                    <form ref={form} onSubmit={sendEmail}>
                        <label>Név</label>
                        <input className="bg-gray-100" type="text" name="name" placeholder="Név" required />
                        <label>E-mail cím</label>
                        <input className="bg-gray-100" type="text" name="email" placeholder="E-mail cím" required />
                        <label>Üzenet</label>
                        <textarea className="bg-gray-100" name="message" placeholder="Üzenet" required></textarea>
                        <input disabled={disabled} className="button" type="submit" value="Küldés"/>
                    </form>

                    <h2 className='text-center normal-case mb-3 font-semibold'>További elérhetőségeink:</h2>
                    <div className='info'>
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span> energ@gmail.com</span>
                        </div>
                        <div className='phone'>
                            <div>
                                <FontAwesomeIcon icon={faPhone} />
                                <span> +36/12-345-6789</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
