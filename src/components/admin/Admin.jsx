import React from "react"
import { Link } from "react-router-dom"

const Admin = () => {
	return (
		<section className="container mt-5">
			<h2>Welcome to Adimin Panel</h2>
			<hr />
			<Link className="btn btn-secondary mb-3" to={"/existing-rooms"}>Manage Rooms</Link> <br />
			<Link className="btn btn-secondary" to={"/existing-bookings"}>Manage Bookings</Link>
		</section>
	)
}

export default Admin
