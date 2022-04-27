import React from "react";
import AddWardForm from "../../../components/Forms/ElectionAreaForms/AddWardForm";
import AddCaseForm from "../../../components/Forms/VillageCourtForm/AddCaseForm";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";



const AddCasePage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1>মামলা</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html"> হোম</a>
							</li>
							<li className="breadcrumb-item"> গ্রাম আদালত</li>
							<li className="breadcrumb-item active"> মামলা</li>
						</ol>
					</nav>
				</div>
				{/* End Page Title */}
				<section className="section">
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title"> মামলা তৈরি করুন</h5>
									<AddCaseForm />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default AddCasePage;
