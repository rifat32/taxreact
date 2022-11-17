import React, { useState, useEffect } from "react";
import { BACKENDAPI } from "../../../config";
import { apiClient } from "../../../utils/apiClient";
import CustomModal from "../../Modal/Modal";
import { toast } from "react-toastify";
import AddWardForm from "../../Forms/ElectionAreaForms/AddWardForm";
import AddCitizenForm from "../../Forms/CitizenForm/AddCitizenForm";
import AddChairmanForm from "../../Forms/ChairmanForm/AddChairmanForm";
import { printInvoice } from "../../../utils/PrintInvoice";



const ListServicesPageComponent: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<any>([]);
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const showModal = (show: boolean) => {
		setIsOpen(show);
	};
	const [currentData, setCurrentData] = useState<any>(null);

	const [link, setLink] = useState(`${BACKENDAPI}/v1.0/services`);
	const [nextPageLink, setNextPageLink] = useState("");
	const [prevPageLink, setPrevPageLink] = useState("");

	const updateDataStates = (updatedData: any) => {
		const tempDatas = data.map((el: any) => {
			if (parseInt(el.id) === parseInt(updatedData.id)) {
				return updatedData;
			}
			return el;
		});
		setData(tempDatas);
	};

	useEffect(() => {
		loadData(link);
	},
	 []);

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
	const deleteData = (id: number) => {
		if (window.confirm("Are you sure  want to delete ?")) {
			apiClient()
				.delete(`${BACKENDAPI}/v1.0/services/${id}`)
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
	const getInvoice = (id:number) => {

		apiClient()
				.get(`${BACKENDAPI}/v1.0/services/get/invoice/${id}`)
				.then((response: any) => {
					setTimeout(() => {
						printInvoice(response.data.invoice);
					}, 1000);
					
				})
				.catch((error) => {
					console.log(error.response);
				});

	}
	const changeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const statusInfoArray = e.target.value.split("-")
		let id = statusInfoArray[0]
		let status = statusInfoArray[1]
		apiClient()
		.post(`${BACKENDAPI}/v1.0/services/change/status`,{
			status,
			id
		})
		.then((response: any) => {
		
			
		})
		.catch((error) => {
			setLoading(false)
			console.log(error.response);
		});
	}
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		if(e.target.value) {
			setLoading(true)
			apiClient()
				.get(`${BACKENDAPI}/v1.0/services/search/${e.target.value}`)
				.then((response: any) => {
					setLoading(false)
					console.log(response.data.data);
					setData([ ...response.data.data.data]);
					setNextPageLink(response.data.data.next_page_url);
					setPrevPageLink(response.data.data.prev_page_url);
				})
				.catch((error) => {
					setLoading(false)
					console.log(error.response);
				});
		} else {
			setLoading(true)
		apiClient()
			.get(link)
			.then((response: any) => {
				setLoading(false)
				console.log(response.data.data);
				setData([ ...response.data.data.data]);
				setNextPageLink(response.data.data.next_page_url);
				setPrevPageLink(response.data.data.prev_page_url);
			})
			.catch((error) => {
				setLoading(false)
				console.log(error.response);
			});
		}
	}

	const handleStatus = (value:string) => {
		if(value) {
			setLoading(true)
			apiClient()
				.get(`${BACKENDAPI}/v1.0/services/search/status/${value}`)
				.then((response: any) => {
					setLoading(false)
					console.log(response.data.data);
					setData([ ...response.data.data.data]);
					setNextPageLink(response.data.data.next_page_url);
					setPrevPageLink(response.data.data.prev_page_url);
				})
				.catch((error) => {
					setLoading(false)
					console.log(error.response);
				});
		} else {
			setLoading(true)
		apiClient()
			.get(link)
			.then((response: any) => {
				setLoading(false)
				console.log(response.data.data);
				setData([ ...response.data.data.data]);
				setNextPageLink(response.data.data.next_page_url);
				setPrevPageLink(response.data.data.prev_page_url);
			})
			.catch((error) => {
				setLoading(false)
				console.log(error.response);
			});
		}
	
	}
	const statuses = [
		{
			name:"pending",
			translation:"পেন্ডিং"
		},
		{
			name:"in_progress",
			translation:"প্রক্রিয়াধীন"
		},
		{
			name:"complete",
			translation:"সম্পন্ন"
		},
		{
			name:"cancelled",
			translation:"বাতিল"
		},
	
	]
	return (
		<>
			<div className="row">
			<div className="col-6 offset-3">

			<input type="text" className="form-control" onChange={handleSearch}/>
			</div>
	
		</div>
		<div className="row mt-2">
			<div className="col-6 offset-3">

<button type="button" className="btn btn-success me-1" onClick={() =>handleStatus("")}>সকল</button>
{
	statuses.map(el => (<button type="button" className="btn btn-success me-1" onClick={() =>handleStatus(el.name)}>  {el.translation}  </button>))
}



			</div>
	
		</div>
		
			<table className="table">
				<thead>
					<tr>
					
						<th scope="col"> আইডি</th>
						<th scope="col"> ইউনিয়ন</th>
						<th scope="col"> ওয়ার্ড</th>
						<th scope="col"> গ্রাম</th>
						<th scope="col"> পোস্ট অফিস</th>
						<th scope="col"> উপজেলা</th>
						<th scope="col"> জেলা</th>
						<th scope="col"> ফোন</th>
						<th scope="col"> এনআইডি</th>
						<th scope="col"> স্টেটাস</th>
						
						<th scope="col">Action</th>
						
					</tr>
				</thead>
				{data.length ? (
					<tbody>
						{data.map((el: any) => {
							return (
								<tr key={el.id}>
									<td>{el.id}</td>
									<td>{el.union?.name && el.union.name}</td>
									<td>{el.ward?.ward_no && el.ward.ward_no}</td>
									<td>{el.village?.name && el.village.name}</td>
									<td>{el.post_office?.name && el.post_office.name}</td>
									<td>{el.upazila?.name && el.upazila.name}</td>
									<td>{el.district?.name && el.district.name}</td>
								
									<td>{el.applicant_phone && el.applicant_phone}</td>
									<td>{el.applicant_nid && el.applicant_nid}</td>
									<td>

										<select onChange={changeStatus}>
											{statuses.map(el2=> {
												let selected:boolean = false
												if(el2.name == el.status) {
                                                     selected = true
												}
											return	(<option  selected={selected} value={`${el.id}-${el2.name}`}>
                                                   {el2.translation}
												</option>)
											})}
										</select>
									</td>
									
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
												{/* <li>
													<a
														onClick={() => {
															setCurrentData({...el});
															showModal(true);
														}}
														className="dropdown-item"
														href="#">
														edit
													</a>
												</li> */}
												<li>
													<a
														onClick={() => {
															getInvoice(el.id);
														
														}}
														className="dropdown-item"
														href="#">
														print
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
				type="Update Citizen">
				<AddCitizenForm
					value={currentData}
					updateDataStates={updateDataStates}
					showModal={showModal}
					type="update"
				/>
			</CustomModal>
		</>
	);
};

export default ListServicesPageComponent;
