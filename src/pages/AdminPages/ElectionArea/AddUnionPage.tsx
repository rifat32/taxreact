import React from "react";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";



import AddUnionForm from "../../../components/Forms/ElectionAreaForms/AddUnionForm";

const AddUnionPage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1> ইউনিয়ন</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html"> হোম</a>
							</li>
							<li className="breadcrumb-item"> নির্বাচনী এরিয়া</li>
							<li className="breadcrumb-item active"> ইউনিয়ন তৈরি করুন</li>
						</ol>
					</nav>
				</div>
				{/* End Page Title */}
				<section className="section">
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title"> ইউনিয়ন তৈরি করুন</h5>

									<AddUnionForm />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default AddUnionPage;
