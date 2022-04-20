import React, { useEffect } from "react";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";

import { Link } from "react-router-dom";


import { ROUTE_LIST } from "../../../RoutConstants";
import ListWardPageComponent from "../../../components/PageComponent/ElectionAreaComponent/ListWardPageComponent";


const ListCasePage: React.FC = (props) => {
	useEffect(() => {
console.log(props)
	},[])
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1>Village Court</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html">Village Court</a>
							</li>
							<li className="breadcrumb-item">Village Court</li>
							<li className="breadcrumb-item active">List Village Court</li>
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
										<h5 className="card-title">All Wards</h5>
										<Link
											to={ROUTE_LIST.createCase}
											className="btn btn-primary">
											Add Data
										</Link>
									</div>
									<ListWardPageComponent />
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
