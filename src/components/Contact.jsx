import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { socials } from "../constants";

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto; /* Adds space above and below */
  background: #000;
  border-radius: 40px;
  padding: 25px 35px;
  border: 5px solid #000;
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 30px 30px -20px;
`;

const Heading = styled.h2`
  text-align: center;
  font-weight: 900;
  font-size: 30px;
  color: #FFF;
`;

const Form = styled.form`
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  background: #FFF;
  color: #000;
  border: none;
  padding: 15px 20px;
  border-radius: 20px;
  margin-top: 15px;
  box-shadow: #cff0ff 0px 10px 10px -5px;
  border-inline: 2px solid transparent;

  ::-moz-placeholder {
    color: rgb(170, 170, 170);
  }

  ::placeholder {
    color: rgb(170, 170, 170);
  }

  :focus {
    outline: none;
    border-inline: 2px solid #12B1D1;
  }
`;

const LoginButton = styled.button`
  display: block;
  width: 100%;
  font-weight: bold;
  background: linear-gradient(45deg, #21d4fd, #c0c0ff, #b721ff);
  color: black; /* Set text color to black */
  padding-block: 15px;
  margin: 20px auto;
  border-radius: 20px;
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 20px 10px -15px;
  border: none;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.03);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 23px 10px -20px;
  }

  :active {
    transform: scale(0.95);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 15px 10px -10px;
  }
`;

const SocialAccountContainer = styled.div`
  margin-top: 25px;
`;

const Title = styled.span`
  display: block;
  text-align: center;
  font-size: 10px;
  color: rgb(170, 170, 170);
`;

const SocialAccounts = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 5px;
`;

const SocialButton = styled.button`
  background: linear-gradient(45deg, rgb(0, 0, 0) 0%, rgb(112, 112, 112) 100%);
  border: 5px solid white;
  padding: 5px;
  border-radius: 50%;
  width: 40px;
  height: 40px; /* Added height for consistent size */
  display: grid;
  place-content: center;
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 12px 10px -8px;
  transition: transform 0.2s ease-in-out; /* Moved transition property here */

  &:hover svg { /* Apply hover effect to the SVG */
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const Agreement = styled.div`
  display: block;
  text-align: center;
  margin-top: 15px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #0099ff;
  font-size: 9px;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('your-service-id', 'your-template-id', formData, 'your-public-api-key')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.log('FAILED...', error);
        alert('Failed to send email: ' + error.text);
      });
  };

  return (
    <Container id="contact">
      <Heading>Get in Touch</Heading>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          as="textarea"
          name="message"
          rows="4"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        <LoginButton type="submit">Send Message</LoginButton>
      </Form>
      <SocialAccountContainer>
        <Title>Or connect with us through:</Title>
        <SocialAccounts>
          {socials.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
              <SocialButton>
                {social.iconUrl && <img src={social.iconUrl} alt={social.title} />}
              </SocialButton>
            </a>
          ))}
        </SocialAccounts>
      </SocialAccountContainer>
    </Container>
  );
};

export default Contact;
