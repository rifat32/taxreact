import React from "react";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";

import { Link } from "react-router-dom";


import { ROUTE_LIST } from "../../../RoutConstants";
import ListPostOfficePageComponent from "../../../components/PageComponent/ElectionAreaComponent/ListPostOfficePageComponent";
import { postOfficesLang } from "../../../language/bn/postOffice";



const ListPostOfficePage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1>{postOfficesLang.heading}</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html">{postOfficesLang.dir_1}</a>
							</li>
							<li className="breadcrumb-item">{postOfficesLang.dir_2}</li>
							<li className="breadcrumb-item active">{postOfficesLang.dir_3}</li>
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
										<h5 className="card-title">{postOfficesLang.title}</h5>
										<Link
											to={ROUTE_LIST.createPostOfice}
											className="btn btn-primary">
											Add Data
										</Link>
									</div>
									<ListPostOfficePageComponent />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default ListPostOfficePage;
