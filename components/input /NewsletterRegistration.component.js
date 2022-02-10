import styles from '../../styles/Base.module.scss';
import {useRef} from "react";

function NewsletterRegistrationComponent() {

  const emailRef = useRef();

  async function registrationHandler(event) {
    event.preventDefault();

    const emailNewsletter = emailRef.current.value;

    const response = await fetch('api/newsletter', {
      method: 'POST',
      body: JSON.stringify({
        email: emailNewsletter
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(response);
  }

  return (
    <section className={styles.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={styles.control_newsletter}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistrationComponent;