import React from 'react'

const ContacUsForm = () => {
    return (
        <div className='contact-us-form-container'>
           
                <div className="contact-us-card">
                    <form className="contact-form">
                        <h2>Please Fill the below details</h2>

                        <input type="text" placeholder="Write Your Full Name" />

                        <div className="input-row">
                            <input type="text" placeholder="Enter Contact No." />
                            <input type="email" placeholder="Your Email Address" />
                        </div>

                        <input type="text" placeholder="Write Subject(optional)." />
                        <input type="text" placeholder="Interested In" />
                        <textarea placeholder="Writer Your message here.." rows={4}></textarea>

                        <button type="submit">Send Your Inquiry</button>
                    </form>
                </div>
            
        </div>
    )
}

export default ContacUsForm
