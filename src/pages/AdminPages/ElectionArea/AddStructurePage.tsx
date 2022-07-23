import React from "react";
import AddStructureForm from "../../../components/Forms/ElectionAreaForms/AddStructureForm";
import AddSubDistrictForm from "../../../components/Forms/ElectionAreaForms/AddSubDistrictForm";
import AddWardForm from "../../../components/Forms/ElectionAreaForms/AddWardForm";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";



const AddStructurePage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1>  অবকাঠামোর ধরণ  </h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html"> হোম</a>
							</li>
							<li className="breadcrumb-item"> নির্বাচনী এরিয়া </li>
							<li className="breadcrumb-item active"> অবকাঠামোর ধরণ </li>
						</ol>
					</nav>
				</div>
				{/* End Page Title */}
				<section className="section">
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title"> অবকাঠামোর ধরণ  তৈরি করুন</h5>
									<AddStructureForm />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default AddStructurePage;
