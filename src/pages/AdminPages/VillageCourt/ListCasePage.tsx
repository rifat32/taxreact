import React, { useEffect } from "react";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";

import { Link } from "react-router-dom";


import { ROUTE_LIST } from "../../../RoutConstants";

import ListCasePageComponent from "../../../components/PageComponent/VillageCourt/ListCasePageComponent";



const ListCasePage: React.FC = (props:any) => {
	useEffect(() => {
	},[])
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1> গ্রাম আদালত</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html"> হোম</a>
							</li>
							<li className="breadcrumb-item"> গ্রাম আদালত</li>
							<li className="breadcrumb-item active"> মামলা</li>
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
										<h5 className="card-title"> মামলা সমূহ </h5>
										<Link
											to={ROUTE_LIST.createCase}
											className="btn btn-primary">
											Add Data
										</Link>
									</div>
									<ListCasePageComponent value={{
										case:props.case
									}} />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default ListCasePage;
