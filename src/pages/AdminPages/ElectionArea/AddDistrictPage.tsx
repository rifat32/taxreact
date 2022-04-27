import React from "react";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";



import AddDistrictForm from "../../../components/Forms/ElectionAreaForms/AddDistrictForm";
import { districtsLang } from "../../../language/bn/district";

const AddDistrictPage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1>{districtsLang.heading}</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html">হোম</a>
							</li>
							<li className="breadcrumb-item">  নির্বাচনী এরিয়া   </li>
							<li className="breadcrumb-item active">জেলা</li>
						</ol>
					</nav>
				</div>
				{/* End Page Title */}
				<section className="section">
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title"> জেলা তৈরি করুন </h5>

									<AddDistrictForm />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default AddDistrictPage;
