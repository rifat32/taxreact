import React from "react";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";

import { Link } from "react-router-dom";


import { ROUTE_LIST } from "../../../RoutConstants";
import ListUnionPageComponent from "../../../components/PageComponent/ElectionAreaComponent/ListWardPageComponent";
import ListDistrictPageComponent from "../../../components/PageComponent/ElectionAreaComponent/ListDistrictPageComponent";
import { districtsLang } from "../../../language/bn/district";


const ListDistrictPage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1>{districtsLang.heading}</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html">{districtsLang.dir_1}</a>
							</li>
							<li className="breadcrumb-item">{districtsLang.dir_2}</li>
							<li className="breadcrumb-item active">{districtsLang.dir_3}</li>
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
										<h5 className="card-title">{districtsLang.heading}</h5>
										<Link
											to={ROUTE_LIST.createDistrict}
											className="btn btn-primary">
											Add Data
										</Link>
									</div>
									<ListDistrictPageComponent />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default ListDistrictPage;
