import { Fragment } from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
	return (
		<Fragment>
			{/* Section Contacts Info */}
			<div className="section contacts" id="next_section">
				<div className="content">
					{/* title */}
					<div className="title">
						<div className="title_inner">Contact Me</div>
					</div>
					{/* contacts items */}
					<div className="service-items">
						<div className="service-col">
							<div className="service-item content-box">
								<div className="icon">
									<span className="fas fa-phone" />
								</div>
								<div className="name">Phone</div>
								<div className="text">850.865.2684</div>
							</div>
						</div>
						<div className="service-col">
							<div className="service-item content-box">
								<div className="icon">
									<span className="fas fa-envelope" />
								</div>
								<div className="name">Email</div>
								<div className="text">
									<a href="mailto:codelikeagirl91@gmail.com">
										codelikeagirl91@gmail.com
									</a>
								</div>
							</div>
						</div>
						<div className="service-col">
							<div className="service-item content-box">
								<div className="icon">
									<span className="fas fa-map-marker-alt" />
								</div>
								<div className="name">Address</div>
								<div className="text">
									Mary Esther, Fort Walton Beach, FL 32548
								</div>
							</div>
						</div>
						<div className="service-col">
							<div className="service-item content-box">
								<div className="icon">
									<span className="fas fa-user-tie" />
								</div>
								<div className="name">Freelance Available</div>
								<div className="text">I am available for Freelance hire</div>
							</div>
						</div>
					</div>
					<div className="clear" />
				</div>
			</div>
			{/* Section Contacts Form */}
			<div className="section contacts" id="section-contacts">
				<div className="content">
					{/* title */}
					<div className="title">
						<div className="title_inner">Contact Me</div>
					</div>
					{/* form */}
					<ContactForm />
				</div>
				<div className="clear" />
			</div>
		</Fragment>
	);
};
export default ContactSection;
