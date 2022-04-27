import React, { useState, useEffect } from "react";
import { BACKENDAPI } from "../../../config";
import { apiClient } from "../../../utils/apiClient";
import CustomModal from "../../Modal/Modal";
import { toast } from "react-toastify";
import AddWardForm from "../../Forms/ElectionAreaForms/AddWardForm";
import AddCaseForm from "../../Forms/VillageCourtForm/AddCaseForm";

interface CaseType {
	value?: {
        case:"solved"|"unsolved"
    };
	
}


const ListCasePageComponent: React.FC<CaseType> = (props) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<any>([]);
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const showModal = (show: boolean) => {
		setIsOpen(show);
	};

	const [currentData, setCurrentData] = useState<any>(null);

	const [link, setLink] = useState(`${BACKENDAPI}/v1.0/complains/status/${props.value?.case}`);
	const [nextPageLink, setNextPageLink] = useState("");
	const [prevPageLink, setPrevPageLink] = useState("");

	const updateDataStates = (updatedData: any) => {
        loadData2()
		// const tempDatas = data.map((el: any) => {
		// 	if (parseInt(el.id) === parseInt(updatedData.id)) {
		// 		return updatedData;
		// 	}
		// 	return el;
		// });
		// setData(tempDatas);
	};

    
	useEffect(() => {
		loadData2();
	}, [props.value?.case]);

	// pagination required
	const loadData = (link: string) => {
		setLoading(true)
		apiClient()
			.get(link)
			.then((response: any) => {
				setLoading(false)
				console.log(response.data.data);
				setData([...data, ...response.data.data.data]);
				setNextPageLink(response.data.data.next_page_url);
				setPrevPageLink(response.data.data.prev_page_url);
			})
			.catch((error) => {
				setLoading(false)
				console.log(error.response);
			});
	};
    const loadData2 = () => {
		setLoading(true)
		apiClient()
			.get(`${BACKENDAPI}/v1.0/complains/status/${props.value?.case}`)
			.then((response: any) => {
				setLoading(false)
				console.log(response.data.data);
				setData([...response.data.data.data]);
				setNextPageLink(response.data.data.next_page_url);
				setPrevPageLink(response.data.data.prev_page_url);
			})
			.catch((error) => {
				setLoading(false)
				console.log(error.response);
			});
	};
	const deleteData = (id: number) => {
		if (window.confirm("Are you sure  want to delete ?")) {
			apiClient()
				.delete(`${BACKENDAPI}/v1.0/wards/${id}`)
				.then((response: any) => {
					console.log(response);
					const tempDatas = data.filter((el: any) => {
						return el.id !== id;
					});
					setData(tempDatas);
					toast.success("data deleted successfully");
				})
				.catch((error) => {
					console.log(error.response);
				});
		}
	};
	
	return (
		<>
			<table className="table">
				<thead>
					<tr>
					
						<th scope="col"> আইডি </th>
						<th scope="col"> অভিযোগ নং</th>
						<th scope="col"> ইউনিয়ন</th>
                        <th scope="col"> অভিযোগ তারিখ</th>
                        <th scope="col"> বাদীর নাম</th>
                        <th scope="col">গ্রাম</th>
                        <th scope="col"> বিবাদীর নাম</th>
                        <th scope="col"> পিতার নাম</th>
                        <th scope="col"> গ্রাম</th>
                        <th scope="col"> চেয়ারম্যান</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				{data.length ? (
					<tbody>
						{data.map((el: any) => {
							return (
								<tr key={el.id}>
									<td>{el.id}</td>
									<td>{el.complain_no && el.complain_no}</td>
									<td>{el.union?.name && el.union.name}</td>
                                    <td>{el.complain_date && el.complain_date}</td>
                                    
                                    <td>{el.applicant_name && el.applicant_name}</td>
                                    <td>{el.applicant_village && el.applicant_village}</td>
                                    <td>{el.defendant_name && el.defendant_name}</td>
                                    <td>{el.defendant_father_name && el.defendant_father_name}</td>
                                    <td>{el.defendant_village && el.defendant_village}</td>
                                    <td>{el.chairman?.name && el.chairman.name}</td>
								
									<td>
										<div className="btn-group">
											<button
												type="button"
												className="btn btn-sm btn-primary dropdown-toggle"
												data-bs-toggle="dropdown"
												aria-expanded="false">
												Action
											</button>
											<ul className="dropdown-menu action">
												<li>
													<a
														onClick={() => {
															setCurrentData(el);
															showModal(true);
														}}
														className="dropdown-item"
														href="#">
														edit
													</a>
												</li>
												<li>
													<hr className="dropdown-divider" />
												</li>
												<li>
													<a
														onClick={() => {
															deleteData(el.id);
														}}
														className="dropdown-item"
														href="#">
														delete
													</a>
												</li>
												<li>
													<hr className="dropdown-divider" />
												</li>
											</ul>
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				) : null}
			</table>
			<div className="text-center">
				{nextPageLink ? (
					<button
						className="btn btn-primary"
						onClick={() => {
							loadData(nextPageLink);
						}}>
						Load More ...
					</button>
				) : data.length ? (

					prevPageLink ? (
						"No more data to show"
					) : (
						""
					)

				) : (
                     loading?("Loading.."):("No data to show")
				)}
			</div>
			<CustomModal
				isOpen={modalIsOpen}
				showModal={showModal}
				type="Update Case">
				<AddCaseForm
					value={currentData}
					updateDataStates={updateDataStates}
					showModal={showModal}
					type="update"
				/>
			</CustomModal>
		</>
	);
};

export default ListCasePageComponent;
