import React from "react";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";

import { Link } from "react-router-dom";


import { ROUTE_LIST } from "../../../RoutConstants";

import ListPaymentMethodPageComponent from "../../../components/PageComponent/ElectionAreaComponent/ListPaymentMethodPageComponent";
import { PaymentMethodsLang } from "../../../language/bn/paymentMethod";


const ListPaymentMethodPage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1>{PaymentMethodsLang.heading}</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html">{PaymentMethodsLang.dir_1}</a>
							</li>
							<li className="breadcrumb-item">{PaymentMethodsLang.dir_2}</li>
							<li className="breadcrumb-item active">{PaymentMethodsLang.dir_3}</li>
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
										<h5 className="card-title">{PaymentMethodsLang.title}</h5>
										<Link
											to={ROUTE_LIST.createPaymentMethod}
											className="btn btn-primary">
											Add Data
										</Link>
									</div>
									<ListPaymentMethodPageComponent />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default ListPaymentMethodPage;
