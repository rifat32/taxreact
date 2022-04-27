import React from "react";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";

import { Link } from "react-router-dom";


import { ROUTE_LIST } from "../../../RoutConstants";
import ListWardPageComponent from "../../../components/PageComponent/ElectionAreaComponent/ListWardPageComponent";
import ListCitizenPageComponent from "../../../components/PageComponent/CitizenComponent/ListNonHoldingCitizenPageComponent";
import ListNonHoldingCitizenPageComponent from "../../../components/PageComponent/CitizenComponent/ListNonHoldingCitizenPageComponent";


const ListNonHoldingCitizenPage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1> নন হোল্ডিং নাগরিক</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html"> হোম</a>
							</li>
							<li className="breadcrumb-item"> নাগরিক</li>
							<li className="breadcrumb-item active"> নন হোল্ডিং নাগরিক</li>
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
										<h5 className="card-title"> নন হোল্ডিং নাগরিক সমূহ</h5>
										<Link
											to={ROUTE_LIST.createNonHoldingCitizen}
											className="btn btn-primary">
											Add Data
										</Link>
									</div>
									<ListNonHoldingCitizenPageComponent />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default ListNonHoldingCitizenPage;
