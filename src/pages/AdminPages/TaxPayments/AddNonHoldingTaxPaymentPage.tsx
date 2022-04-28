import React from "react";
import AddVillageForm from "../../../components/Forms/ElectionAreaForms/AddVillageForm";
import AddHoldingTaxForm from "../../../components/Forms/TaxForms/AddHoldingTaxForm";
import AddNonHoldingTaxForm from "../../../components/Forms/TaxForms/AddNonHoldingTaxForm";
import AddNonHoldingTaxPaymentForm from "../../../components/Forms/TaxPaymentForms/AddNonHoldingTaxPaymentForm";

import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";



const AddNonHoldingTaxPaymentPage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1> নন হোল্ডিং কর পরিশোধ</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html"> হোম </a>
							</li>
							<li className="breadcrumb-item"> কর পরিশোধ </li>
							<li className="breadcrumb-item active"> নন হোল্ডিং কর পরিশোধ </li>
						</ol>
					</nav>
				</div>
				{/* End Page Title */}
				<section className="section">
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title"> নন হোল্ডিং কর পরিশোধ করুন </h5>
									<AddNonHoldingTaxPaymentForm />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default AddNonHoldingTaxPaymentPage;
