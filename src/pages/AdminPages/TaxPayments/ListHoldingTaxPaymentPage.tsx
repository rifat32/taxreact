import React from "react";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";

import { Link } from "react-router-dom";


import { ROUTE_LIST } from "../../../RoutConstants";
import ListWardPageComponent from "../../../components/PageComponent/ElectionAreaComponent/ListWardPageComponent";
import ListVillagePageComponent from "../../../components/PageComponent/ElectionAreaComponent/ListVillagePageComponent";
import ListHoldingTaxPageComponent from "../../../components/PageComponent/TaxesComponent/ListHoldingTaxPageComponent";
import ListHoldingTaxPaymentPageComponent from "../../../components/PageComponent/TaxePaymentComponent/ListHoldingTaxPaymentPageComponent";


const ListHoldingTaxPaymentPage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1> হোল্ডিং কর পরিশোধ</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html"> হোম</a>
							</li>
							<li className="breadcrumb-item"> কর পরিশোধ</li>
							<li className="breadcrumb-item active"> হোল্ডিং কর পরিশোধ</li>
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
										<h5 className="card-title"> হোল্ডিং কর পরিশোধ সমূহ</h5>
										<Link
											to={ROUTE_LIST.createHoldingTaxPayment}
											className="btn btn-primary">
											Add Data 
										</Link>
									</div>
								
									<ListHoldingTaxPaymentPageComponent />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default ListHoldingTaxPaymentPage;
