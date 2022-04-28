import React from "react";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";

import { Link } from "react-router-dom";


import { ROUTE_LIST } from "../../../RoutConstants";

import ListNonHoldingTaxPageComponent from "../../../components/PageComponent/TaxesComponent/ListNonHoldingTaxPageComponent";
import ListNonHoldingTaxPaymentPageComponent from "../../../components/PageComponent/TaxePaymentComponent/ListNonHoldingTaxPaymentPageComponent";


const ListNonHoldingTaxPaymentPage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1> নন হোল্ডিং কর পরিশোধ </h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html">হোম </a>
							</li>
							<li className="breadcrumb-item"> কর পরিশোধ  </li>
							<li className="breadcrumb-item active">নন হোল্ডিং কর পরিশোধ  </li>
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
										<h5 className="card-title">নন হোল্ডিং কর পরিশোধ সমূহ  </h5>
										<Link
											to={ROUTE_LIST.createNonHoldingTaxPayment}
											className="btn btn-primary">
											Add Data
										</Link>
									</div>
									<ListNonHoldingTaxPaymentPageComponent />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default ListNonHoldingTaxPaymentPage;
