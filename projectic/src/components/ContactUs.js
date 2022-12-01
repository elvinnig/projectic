//* react-bootstrap-icon
import * as Icon from 'react-bootstrap-icons';
//*Axios
import axios from 'axios';
//*Hook
import { useState } from 'react';
const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccessMessage] = useState('');

  const hideSuccessMessage = (timeOut) => {
    setTimeout(() => {
      setSuccessMessage('');
    }, timeOut);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/v1/contactus/message', {
      name: name,
      email: email,
      message: message,
    });
    setMessage('');
    setName('');
    setEmail('');
    setSuccessMessage('Your message has been sent!');
    hideSuccessMessage(1500);
  };
  return (
    <div className='container' id='contact'>
      <section className='mb-4'>
        {/* Header */}
        <h2 className='h1-responsive font-weight-bold text-center my-4 landing-text'>
          Contact us
        </h2>

        {/* Description */}
        <p className='text-center w-responsive mx-auto mb-5 lead fs-5'>
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>
        <div className='row justify-content-center'>
          {/* Grid Column */}
          <div className='col-md-9 mb-md-0 mb-5'>
            <form
              id='contact-form'
              name='contact-form'
              onSubmit={(e) => {
                onSubmitForm(e);
              }}
            >
              {/* Grid Row */}
              <div className='row'>
                {/* Grid Column */}
                <div className='col-md-6'>
                  <div className='md-form mb-0'>
                    <label htmlFor='name' className=''>
                      Your name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      className='form-control'
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                {/* Grid Column */}
                <div className='col-md-6'>
                  <div className='md-form mb-0'>
                    <label htmlFor='email' className=''>
                      Your email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className='form-control'
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Grid Row */}
              <div className='row'>
                {/* Grid Column */}
                <div className='col-md-12'>
                  <div className='md-form'>
                    <label htmlFor='message'>Your message</label>
                    <textarea
                      type='text'
                      id='message'
                      name='message'
                      rows='4'
                      className='form-control md-textarea contactUsTextArea'
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className='text-center text-md-left'>
                {success ? (
                  <small className='text-success'>{success}</small>
                ) : null}
                <br />
                <button type='submit ' className='btn btn-primary mt-2'>
                  <Icon.SendFill /> Send Message{' '}
                </button>
              </div>
            </form>
            <div className='status'></div>
          </div>

          {/* Grid Column */}
          <div className='col-md-3 text-center'>
            <ul className='list-unstyled mb-0'>
              <li>
                <Icon.GeoAltFill size={30} />
                <p><a href='https://goo.gl/maps/Xzrs39KGYsJMXYh57' target='_blank' rel='noreferrer'  className='link-dark text-decoration-none'>Baguio City, Benguet</a></p>
              </li>
              <li>
                <Icon.PersonLinesFill size={30} />
                <p><a href='tel:+639567720386' className='link-dark text-decoration-none' target='_blank' rel='noreferrer'> +63 956 772 0386</a></p>
              </li>
              <li>
                <Icon.EnvelopeFill size={30} />
                <p><a href = 'mailto: projecticuplift@gmail.com' className='link-dark text-decoration-none' target='_blank' rel='noreferrer'> projecticuplift@gmail.com</a></p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
