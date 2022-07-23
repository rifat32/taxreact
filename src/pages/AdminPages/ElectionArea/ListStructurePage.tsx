import React from "react";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";

import { Link } from "react-router-dom";


import { ROUTE_LIST } from "../../../RoutConstants";
import ListWardPageComponent from "../../../components/PageComponent/ElectionAreaComponent/ListWardPageComponent";
import ListSubDitrictPageComponent from "../../../components/PageComponent/ElectionAreaComponent/ListSubDistrictPageComponent";
import { subDistrictsLang } from "../../../language/bn/subDistrict";
import ListStrucurePageComponent from "../../../components/PageComponent/ElectionAreaComponent/ListStructurePageComponent";


const ListStructurePage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1>{subDistrictsLang.heading}</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html">{subDistrictsLang.dir_1}</a>
							</li>
							<li className="breadcrumb-item">{subDistrictsLang.dir_2}</li>
							<li className="breadcrumb-item active">{subDistrictsLang.dir_3}</li>
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
										<h5 className="card-title">{subDistrictsLang.title}</h5>
										<Link
											to={ROUTE_LIST.createStructureType}
											className="btn btn-primary">
											Add Data
										</Link>
									</div>
									<ListStrucurePageComponent />
									
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default ListStructurePage;
