import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import "./FriendsReferred.css";

const FriendsReferred = () => {
	

	const friends_enrolled = [
		{
			name: "Dhiraj Saxena",
			referral_date: "14 Sep, 2022",
			courses_enrolled: [
				"UI/UX",
				"Photoshop",
				"Illustrator",
				"Python",
				"MERN",
				"Java",
				
			],
			referral_amount: "185",
		},
		{
			name: "Subhash Mishra",
			referral_date: "15 Sep, 2022",
			courses_enrolled: [
				"UI/UX",
				"Photoshop",
				"Illustrator",
				"Python",
				"MERN",
				"Java",
				"c++",
				
			],
			referral_amount: "485",
		},
	
		{
			name: "Prafull Kumar",
			referral_date: "18 Sep, 2022",
			courses_enrolled: [
				"UI/UX",
				"Photoshop",
				"Illustrator",
				"Python",
				"MERN",
				"Java",
				"c++",
				"MERN",
				"Java",
				"c++",
				
				
			],
			referral_amount: "485",
		},
	];
	return (
		<div className='friendsreferred__container'>
			<Breadcrumb breadcrumb={"UI/UX>Refer & Earn>Friends Referred"} />
			<div className='friendsreferred__section'>
				<div className='referred__details'>
					<div className='referCode'>
						<span className='title'>Your Referral Code</span>
						<span className='code'>EDCH54</span>
					</div>
					<div className='walletBalance'>
						<span className='title'>Wallet Balance</span>
						<span className='value'>₹ 500</span>
					</div>
				</div>
				<div className='friendsEnrolled__section'>
					<h1 className='heading'>
						Friends who enrolled
						<span style={{ fontWeight: "400",color:"#626262" }}>(3)</span>
					</h1>
					<div className='friendsEnrolled__cards'>
						{friends_enrolled.map((e, i) => (
							<div style={{ display: "block" }}>
								<div className='enrolled_card'>
									<div className='user__detail'>
										<span className='username'>{e.name}</span>
										<span className='referral_date'>{e.referral_date}</span>
									</div>
									<div className='courses_enrolled'>
										<span className='courses_enrolled__heading'>
											Courses Enrolled({e.courses_enrolled.length})
										</span>
										<div className='courses_enrolled__names'>
											{e.courses_enrolled?.map((e, i) => (
												<span key={i + e} className='pills'>
													{e}
												</span>
											))}
										</div>
									</div>
									<div className='referralAmount'>
										Referral Amount
										<span className='amount'>&nbsp;₹{e.referral_amount}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<button className='ghost-btn'>Terms & Conditions</button>
			</div>
		</div>
	);
};

export default FriendsReferred;
