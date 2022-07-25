import React, { useState } from "react";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";

import { Link } from "react-router-dom";


import { ROUTE_LIST } from "../../../RoutConstants";
import ListWardPageComponent from "../../../components/PageComponent/ElectionAreaComponent/ListWardPageComponent";
import ListSubDitrictPageComponent from "../../../components/PageComponent/ElectionAreaComponent/ListSubDistrictPageComponent";
import { subDistrictsLang } from "../../../language/bn/subDistrict";
import ListStrucurePageComponent from "../../../components/PageComponent/ElectionAreaComponent/ListStructurePageComponent";
import { printInvoice } from "../../../utils/PrintInvoice";


const CasePrintPage: React.FC = () => {
	const [formData,setFormData] = useState<any>({
	text:""
	})

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		
	};
    const printCase = () => {
		printInvoice(formData.text);
	}
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1>মামলার প্রত্যয়ন পত্র প্রদান</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html">{subDistrictsLang.dir_1}</a>
							</li>
							<li className="breadcrumb-item">{subDistrictsLang.dir_2}</li>
							<li className="breadcrumb-item active">মামলার প্রত্যয়ন পত্র প্রদান</li>
						</ol>
					</nav>
				</div>
				{/* End Page Title */}
				<section className="section">
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<div className="d-flex justify-content-between align-items-end">
										<h5 className="card-title">মামলার প্রত্যয়ন পত্র প্রদান</h5>
										<Link
											to={ROUTE_LIST.createStructureType}
											className="btn btn-primary">
											Add Data
										</Link>
									</div>
									<div className="row mt-5">
										<div className="col-12">
											<textarea 
											className="form-control"
											name="text" 
											id="text" 
											value={formData.text}
											onChange={handleChange}
											rows={10}
											
											
											
											></textarea>
										</div>
									</div>
									<div className="row mt-2">
										<div className="col-12 text-center">
             <button type="button" className="btn btn-primary" onClick={printCase}>print</button>
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default CasePrintPage;
