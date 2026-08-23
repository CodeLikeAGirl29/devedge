const ContactForm = () => {
	return (
		<div className="contact_form content-box">
			<form
				id="cform"
				method="post"
				action="https://formspree.io/f/xoqzngno"
			>
				<div className="group-val">
					<input type="text" name="name" placeholder="Name" />
				</div>
				<div className="group-val">
					<input type="email" name="email" placeholder="Email" />
				</div>
				<div className="group-val ct-gr">
					<textarea
						name="message"
						placeholder="Message"
						defaultValue={""}
					/>
				</div>
				<div className="group-bts">
					<button type="submit" className="btn hover-animated">
						<span className="circle" />
						<span className="lnk">Send Message</span>
					</button>
				</div>
			</form>
			<div className="alert-success">
				<p>Thanks, your message was sent successfully.</p>
			</div>
		</div>
	);
};
export default ContactForm;
