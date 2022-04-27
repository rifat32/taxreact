import React from "react";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";
import AddUserForm from "../../../components/Forms/UserManagementForms/AddUserForm";

const CreateUserPage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1>ইউজার </h1>
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
									<h5 className="card-title"> ইউজার তৈরি করুন </h5>
									<AddUserForm />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default CreateUserPage;
