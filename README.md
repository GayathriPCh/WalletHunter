# Website_v2
Website enhanced
## How to Run

 Navigate to the `wsite` directory:
   ```bash
   npm install
   npm run dev
   ```
Also connected to EmailJS in Contact.jsx, for sending mails. Create your own EmailJS accound, app and template, and configure templates however wanted. Save service id, template id and public api key and configure them in contact.jsx, in line 145 :     emailjs.send('your-serviceid', 'your-templateid', formData, 'your-publikapikey')
Emailjs website : https://www.emailjs.com/

View on https://6656c68de4331354960f842d--wthunter.netlify.app/
