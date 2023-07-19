function sendMail() {
    const key = "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"

const url = "https://api.sendgrid.com/v3/mail/send";

const options = {
  headers: {
    Authorization: "Bearer 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",
    "Content-Type": "application/json"
  },
  data: '{"personalizations": [{"to": [{"email": "mehmetemrekutluca@gmail.com"}]}],"from": {"email": "test@example.com"},"subject": "Sending with SendGrid is Fun","content": [{"type": "text/plain", "value": "and easy to do anywhere, even with cURL"}]}'
};

fetch(url, options)
  .then( res => res.json() )
  .then( data => console.log(data) );
}