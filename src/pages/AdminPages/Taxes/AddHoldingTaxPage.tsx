import React from "react";
import AddVillageForm from "../../../components/Forms/ElectionAreaForms/AddVillageForm";
import AddHoldingTaxForm from "../../../components/Forms/TaxForms/AddHoldingTaxForm";

import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";



const AddHoldingTaxPage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1> হোল্ডিং ট্যাক্স</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html"> হোম</a>
							</li>
							<li className="breadcrumb-item"> ট্যাক্স</li>
							<li className="breadcrumb-item active"> হোল্ডিং ট্যাক্স</li>
						</ol>
					</nav>
				</div>
				{/* End Page Title */}
				<section className="section">
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title"> হোল্ডিং ট্যাক্স তৈরি করুন</h5>
									<AddHoldingTaxForm />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default AddHoldingTaxPage;
