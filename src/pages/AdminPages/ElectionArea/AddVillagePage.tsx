import React from "react";
import AddVillageForm from "../../../components/Forms/ElectionAreaForms/AddVillageForm";

import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";



const AddVillagePage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1> গ্রাম</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html"> হোম </a>
							</li>
							<li className="breadcrumb-item">নির্বাচনী এরিয়া</li>
							<li className="breadcrumb-item active"> গ্রাম </li>
						</ol>
					</nav>
				</div>
				{/* End Page Title */}
				<section className="section">
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">গ্রাম তৈরি করুন</h5>
									<AddVillageForm />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default AddVillagePage;
