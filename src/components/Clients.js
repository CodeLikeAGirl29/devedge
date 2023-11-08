import Image from "next/image";

const Clients = () => {
	return (
		<div className="section clients" id="section-clients">
			<div className="content">
				{/* title */}
				<div className="title">
					<div className="title_inner">Clients</div>
				</div>
				{/* clients items */}
				<div className="content-box">
					<div className="clients-items">
						<div className="clients-col">
							<div className="clients-item">
								<a target="_blank" rel="noreferrer" href="#">
									<Image
										src="images/client1.png"
										alt=""
										height={157}
										width={326}
									/>
								</a>
							</div>
						</div>
						<div className="clients-col">
							<div className="clients-item">
								<a target="_blank" rel="noreferrer" href="#">
									<Image src="images/client3.png" alt="" />
								</a>
							</div>
						</div>
						<div className="clients-col">
							<div className="clients-item">
								<a target="_blank" rel="noreferrer" href="#">
									<Image
										src="images/client2.png"
										alt=""
										height={157}
										width={326}
									/>
								</a>
							</div>
						</div>
						<div className="clients-col">
							<div className="clients-item">
								<a target="_blank" rel="noreferrer" href="#">
									<Image
										src="images/client4.png"
										alt=""
										height={157}
										width={326}
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="clear" />
			</div>
		</div>
	);
};
export default Clients;
