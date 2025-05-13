import React, { useState } from "react";
import styles from "./Contact.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const ContactPage = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const navigate = useNavigate()
  function handleissue(e) {
    e.preventDefault();
    axios.post("http://localhost:5000/Queries", data).then(() => {
      toast.success('FeedBack Send Successfully !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
        });
    })
    setData({
      name: "",
      email: "",
      message: ""
    })
    setTimeout(() =>{
      location.reload()
    },5000)
  }

  return (
    <div className={styles.contactContainer}>
      
      <section className={styles.contactSection}>
        <h1>Contact Us</h1>
        <p>
          At <strong>Knowledge Haven</strong>, we value your feedback, inquiries, and suggestions. Feel free to get in touch with us through the form below or by using our contact details.
        </p>
      </section>

      <section className={styles.formSection}>
        <h2>Get in Touch</h2>
        <form className={styles.contactForm} onSubmit={handleissue}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required onChange={(e) => setData({ ...data, name: e.target.value })} />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required onChange={(e) => setData({ ...data, email: e.target.value })} />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Write your message here" rows="5" required onChange={(e) => setData({ ...data, message: e.target.value })}></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </section>

      <section className={styles.detailsSection}>
        <h2>Contact Details</h2>
        <p>
          📞 <strong>Phone:</strong> +91 97676 34431
        </p>
        <p>
          ✉️ <strong>Email:</strong> support@knowledgehaven.com
        </p>
        <p>
          📍 <strong>Address:</strong> 7th floor, Kumar primus, Bus Stop, above urban ladder, opp. maruti suzuki true value showroom, Swami Vivekanand Nagar, Ramtekadi, Hadapsar, Pune, Maharashtra 411013
        </p>
      </section>
    </div>
  );
};

export default ContactPage;
