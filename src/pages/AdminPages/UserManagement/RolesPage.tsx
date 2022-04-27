import React from "react";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";
import RolesPageComponent from "../../../components/PageComponent/UserManagementComponent/RolesPageComponent";
import { Link } from "react-router-dom";

const RolesPage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1> রোল</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html"> হোম</a>
							</li>
							<li className="breadcrumb-item"> ইউজার ম্যানেজমেন্ট  </li>
							<li className="breadcrumb-item active"> রোল</li>
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
										<h5 className="card-title"> রোল সমূহ</h5>
										<Link
											to="/admin/roles/create"
											className="btn btn-primary">
											Add Data
										</Link>
									</div>
									<RolesPageComponent />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default RolesPage;
