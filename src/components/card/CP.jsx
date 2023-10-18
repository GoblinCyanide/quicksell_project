import React from 'react'
import Image from './Image.jpg'
import './CP.css';


const Card = ({ id, title, tag, userId, status, priority }) => {
	return (
		<>
			<div className="card1">
				<div className="top">
					<span className="title">{id}</span>
					<div className="img-container">
						<div className="img-cont">
							<img src={Image} className="userImg" />
						</div>
						<div className="status"></div>
					</div>
				</div>
				<div className="middle">
					<div className="header-card-icon2"></div>
					<span className="heading">{title}</span>
				</div>
				<div className="footer">
					<div className="featReq2">
						<div className="circle1"></div>
						{tag}
					</div>
				</div>

			</div>
		</>
	)
}

export default Card;