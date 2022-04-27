import React from "react";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";



import AddDistrictForm from "../../../components/Forms/ElectionAreaForms/AddDistrictForm";
import AddPaymentMethodForm from "../../../components/Forms/ElectionAreaForms/AddPaymentMethodForm";

const AddPaymentMethodPage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1> মূল্য পরিষদ পদ্ধতি </h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html"> হোম</a>
							</li>
							<li className="breadcrumb-item">নির্বাচনী এরিয়া </li>
							<li className="breadcrumb-item active"> মূল্য পরিশধ পদ্ধতি  </li>
						</ol>
					</nav>
				</div>
				{/* End Page Title */}
				<section className="section">
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">মূল্য পরিশধ পদ্ধতি তৈরি করুন</h5>

									<AddPaymentMethodForm />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default AddPaymentMethodPage;
