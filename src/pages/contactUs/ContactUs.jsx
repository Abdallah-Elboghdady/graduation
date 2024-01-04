
import './contact.css'

function ContactUs() {


  return (
    <>
        <div className="image">
                <div className="text " >
                    <h1 data-aos="zoom-in" data-aos-duration="1000">Contact Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, sint?</p>
                </div>
            </div>

            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-12 col-lg-6">
                    <h3>Send Your Message</h3>
                    <p>We're open for any suggestion or just to have a chat</p>
                    <form onSubmit={(e)=>{
                        e.preventDefault()
                    }}>
                        <label htmlFor="name" className='form-label'>Name : </label>
                        <input type="text" name="userName" id="name" className='form-control mb-3' placeholder='Enter Your Name'  required />
                        <label htmlFor="email" className='form-label'>Email : </label>
                        <input type="email" name="email" id="email" className='form-control mb-3' placeholder='Enter Your Email' required />
                        <label htmlFor="phone" className='form-label'>Phone Number : </label>
                        <input type="number" name="phone" id="phone" className='form-control mb-3' placeholder='Enter Your Phone Number' required />
                        <label htmlFor="message" className='form-label'>Your Message : </label>
                        <textarea name="message" className='form-control' id="message" cols="30" rows="5" placeholder='Enter Your Message' required></textarea>
                        <button className='btn btn-outline-primary my-4' type='submit'>Send</button>

                    </form>
                </div>
                <div className="col-md-12 col-lg-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54837.4349909588!2d31.0405564954555!3d30.793107018353393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c95daafcf035%3A0x7421820c5e8cae42!2z2LfZhti32KfYjCDYt9mG2LfYpyAo2YLYs9mFIDIp2Iwg2YXYsdmD2LIg2LfZhti32KfYjCDZhdit2KfZgdi42Kkg2KfZhNi62LHYqNmK2KnYjCDZhdi12LE!5e0!3m2!1sar!2sca!4v1704375464733!5m2!1sar!2sca" title='map' className='w-100' height="500"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
            </div>

    </>
  )
}

export default ContactUs