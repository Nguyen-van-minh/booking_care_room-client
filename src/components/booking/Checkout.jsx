import React, { useEffect, useState } from "react"
import BookingForm from "../booking/BookingForm"
import {
	FaUtensils,
	FaWifi,
	FaTv,
	FaWineGlassAlt,
	FaParking,
	FaCar,
	FaTshirt
} from "react-icons/fa"

import { useParams } from "react-router-dom"
import { getRoomById } from "../utils/ApiFunctions"
import RoomCarousel from "../common/RoomCarousel"

const Checkout = () => {
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [roomInfo, setRoomInfo] = useState({
		photo: "",
		roomType: "",
		roomPrice: ""
	})

	const { roomId } = useParams()

	useEffect(() => {
		setTimeout(() => {
			getRoomById(roomId)
				.then((response) => {
					setRoomInfo(response)
					setIsLoading(false)
				})
				.catch((error) => {
					setError(error)
					setIsLoading(false)
				})
		}, 1000)
	}, [roomId])

	return (
		<div>
			<section className="container">
				<div className="row">
					<div className="col-md-4 mt-5 mb-5">
						{isLoading ? (
							<p>Loading room information...</p>
						) : error ? (
							<p>{error}</p>
						) : (
							<div className="room-info">
								<img
									src={`data:image/png;base64,${roomInfo.photo}`}
									alt="Room photo"
									style={{ width: "100%", height: "200px" }}
								/>
								<table className="table table-bordered">
									<tbody>
										<tr>
											<th>Room Type:</th>
											<td>{roomInfo.roomType}</td>
										</tr>
										<tr>
											<th>Price:</th>
											<td>${roomInfo.roomPrice}</td>
										</tr>
										<tr>
											<th>Room Service:</th>
											<td>
												<ul >
													<li style={{fontSize:"12px"}}>
													Specialized medical examination
													</li>
													<li style={{fontSize:"12px"}}>
													Testing and diagnostic imaging
													</li>
													<li style={{fontSize:"12px"}}>
													Treatment and recovery
													</li>
													<li style={{fontSize:"12px"}}>
													Health consultation and education
													</li>
													<li style={{fontSize:"12px"}}>
													Outpatient care and treatment
													</li>
													<li style={{fontSize:"12px"}}>
													Post-operative care and recovery
													</li>
												</ul>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						)}
					</div>
					<div className="col-md-8">
						<BookingForm />
					</div>
				</div>
			</section>
			<div className="container">
				<RoomCarousel />
			</div>
		</div>
	)
}
export default Checkout
