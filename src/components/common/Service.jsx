import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import Header from "./Header"
import {
	FaClock,
	FaUniversalAccess,
	FaHeart,
	FaHeartbeat,
	FaMedkit,
	FaFileExcel,
	FaPlusCircle
} from "react-icons/fa"

const HotelService = () => {
	return (
		<>
			<div className="mb-2">
				<Header title={"Our Services"} />

				<Row className="mt-4">
					<h4 className="text-center">
						Services at <span className="hotel-color"> Booking Doctor </span>
						<span className="gap-2">
							<FaClock className="ml-5" /> 24-Hour Front Desk
						</span>
					</h4>
				</Row>
				<hr />

				<Row xs={1} md={2} lg={3} className="g-4 mt-2">
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaPlusCircle /> Professional
								</Card.Title>
								<Card.Text>Specialized medical examination.</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaFileExcel /> Check the picture
								</Card.Title>
								<Card.Text>Testing and diagnostic imaging.</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaMedkit /> Restore health
								</Card.Title>
								<Card.Text>Treatment and recovery.</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaUniversalAccess /> Advise
								</Card.Title>
								<Card.Text>Health consultation and education.</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaHeart /> Outpatient
								</Card.Title>
								<Card.Text>Outpatient care and treatment.</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaHeartbeat /> Surgery
								</Card.Title>
								<Card.Text>Post-operative care and recovery.</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
			<hr />
		</>
	)
}

export default HotelService
