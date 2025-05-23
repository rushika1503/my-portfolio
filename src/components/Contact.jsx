import './Contact.css';

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  formData.append("access_key", "3bd882a3-f035-4ade-b6bd-c8e3d8f7fca3");

  const json = JSON.stringify(Object.fromEntries(formData));

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  }).then((res) => res.json());

  if (res.success) {
    console.log("Success", res);
    alert("Message sent successfully!");
    event.target.reset();
  }
};

export default function Contact() {
  return (
    <section id="contact" className="page-section contact-section">
      <div className="contact-wrapper">
        <h3 className="section-title">Send me a message!</h3>
        <p className="section-subtext">Got a question, idea, or just want to say hi? I’d love to hear from you.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="3bd882a3-f035-4ade-b6bd-c8e3d8f7fca3" />

          <div className="input-group">
            <input type="text" name="firstname" placeholder="First Name" required />
            <input type="text" name="secondname" placeholder="Last Name" required />
          </div>

          <input type="email" name="email" placeholder="Email Address" required />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (min 10 digits)"
            pattern="[0-9]{10,}"
            minLength={10}
            required
          />
          <textarea name="message" placeholder="Your Message" required></textarea>

          <div className="button-row">
            <button type="reset" className="reset-button">Clear</button>
            <button type="submit" className="submit-button">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}
