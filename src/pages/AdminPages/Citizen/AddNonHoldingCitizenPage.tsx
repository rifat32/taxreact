import React from "react";
import AddCitizenForm from "../../../components/Forms/CitizenForm/AddCitizenForm";
import AddNonHoldingCitizenForm from "../../../components/Forms/CitizenForm/AddNonHoldingCitizenForm";
import AddWardForm from "../../../components/Forms/ElectionAreaForms/AddWardForm";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";



const AddNonHoldingCitizenPage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1> নন হোল্ডিং নাগরিক</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html">হোম </a>
							</li>
							<li className="breadcrumb-item">  নাগরিক</li>
							<li className="breadcrumb-item active"> নন হোল্ডিং নাগরিক </li>
						</ol>
					</nav>
				</div>
				{/* End Page Title */}
				<section className="section">
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title"> নন হোল্ডিং নাগরিক তৈরি করুন</h5>
									<AddNonHoldingCitizenForm />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default AddNonHoldingCitizenPage;
