import React from "react";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";
import UsersPageComponent from "../../../components/PageComponent/UserManagementComponent/UsersPageComponent";
import { Link } from "react-router-dom";

const UsersPage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1> ইউজার</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html"> হোম</a>
							</li>
							<li className="breadcrumb-item"> ইউজার ম্যানেজমেন্ট</li>
							<li className="breadcrumb-item active"> ইউজার</li>
						</ol>
					</nav>
				</div>
				{/* End Page Title */}
				<section className="section">
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<div className="d-flex justify-content-between align-items-end">
										<h5 className="card-title"> ইউজার সমূহ</h5>
										<Link
											to="/admin/users/create"
											className="btn btn-primary">
											Add Data
										</Link>
									</div>
									<UsersPageComponent />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default UsersPage;
