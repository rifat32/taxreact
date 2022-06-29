import React from "react";
import AddCitizenForm from "../../../components/Forms/CitizenForm/AddCitizenForm";
import AddServiceForm from "../../../components/Forms/CitizenForm/AddServiceForm";
import AddWardForm from "../../../components/Forms/ElectionAreaForms/AddWardForm";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";



const AddServicePage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1>নাগরিক</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html">হোম </a>
							</li>
							<li className="breadcrumb-item"> নাগরিক</li>
							<li className="breadcrumb-item active"> নাগরিক</li>
						</ol>
					</nav>
				</div>
				{/* End Page Title */}
				<section className="section">
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title"> Service তৈরি করুন</h5>
									<AddServiceForm />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default AddServicePage;
