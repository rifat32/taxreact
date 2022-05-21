import React, { useState, useEffect } from "react";
import { BACKENDAPI } from "../../../config";
import { apiClient } from "../../../utils/apiClient";
import { toast } from "react-toastify";
import { UpdateFormInterface } from "../../../interfaces/UpdateFormInterfaced";
import { ErrorMessage } from "../../../utils/ErrorMessage";

interface FormData {
	union_id: string;
	ward_id: string;
	village_id: string;
	post_office_id: string;
	upazila_id: string;
	district_id: string;
	holding_no: string;
	thana_head_name: string;
	thana_head_religion: string;
	thana_head_gender: string;
	thana_head_occupation: string;
	mobile: string;
	guardian: string;
	c_mother_name: string;
	nid_no: string;
	is_tubewell: string;
	latrin_type: string;
	type_of_living: string;
	type_of_organization: string;
	previous_due: string;
	tax_amount: string;
	male: string;
	female: string;
	annual_price: string;
	gov_advantage: string;
	image: string;
	current_year: string;
	raw_house: string;
	half_building_house: string;
	building_house: string;
	members: Members[];

}
interface Members {
	id: string;
	name: string;
	father_name: string;
	mother_name: string;
	village_name: string;
	post_office: string;
	upazila: string;
	district: string;
	nid: string;


}
const AddCitizenForm: React.FC<UpdateFormInterface> = (props) => {
	const [formData, setFormData] = useState<FormData>({
		union_id: '',
		ward_id: '',
		village_id: "",
		post_office_id: "",
		upazila_id: "",
		district_id: "",

		holding_no: "0",
		thana_head_name: "",
		mobile: "",
		guardian: "",
		c_mother_name: "",
		nid_no: "",
		thana_head_religion: "",
		thana_head_gender: "",
		thana_head_occupation: "",
		is_tubewell: "",
		latrin_type: "",
		type_of_living: "",
		type_of_organization: "",
		gov_advantage: "",
		male: "",
		female: "",
		current_year: "",
		annual_price: "",
		tax_amount: "",
		previous_due: "",
		image: "",
		raw_house: "0",
		half_building_house: "0",
		building_house: "0",
		members: [
			{
				id: "",
				name: "",
				father_name: "",
				mother_name: "",
				village_name: "test",
				post_office: "test",
				upazila: "test",
				district: "test",
				nid: "",
				
			}
		]
	});
	const [imageFile, setImageFile] = useState<any>();
	const [errors, setErrors] = useState<any>(null);

	const [unions, setUnions] = useState([]);
	const [wards, setWards] = useState([]);
	const [villages, setVillages] = useState([]);
	const [postOffices, setPostOffices] = useState([]);
	const [subDistricts, setSubDistricts] = useState([]);
	const [districts, setDistricts] = useState([]);
	const religions = [
		{
			id: 1,
			value: "islam",
			name:"ইসলাম"
		},
		{
			id: 2,
			value: "christian",
			name:"খ্রিস্টান"
		},
		{
			id: 1,
			value: "hindu",
			name:"হিন্দু"
		},
	]

	const sexs = [
		{
			id: 1,
			name: "পুরুষ",
			value: "male",
		},
		{
			id: 2,
			name:"মহিলা",
			value: "female"
		}
	];
	const boolean = [
		{
			id: 1,
			name: "হাঁ",
			value: "true"

		},
		{
			id: 2,
			name: "না",
			value: "false"
		}
	];
	const latrinType = [
		{
			id: 1,
			value: "old",
			name:"কাঁচা"


		},
		{
			id: 2,
			value: "new",
			name:"পাকা"
		},
		{
			id: 3,
			value: "no",
			name:"না"
		}
	];
	const house = [
		{
			id: 1,
			value: "self",
			name:"নিজে বসবাস "


		},
		{
			id: 2,
			value: "rent", 
			name:"ভাড়া"
		}
	];
	const organizations = [
		{
			id: 1,
			value: "residential",
			name:"আবাসিক"
  

		},
		{
			id: 2,
			value: "business",
			name:"বেবসা"
		}
		,
		{
			id: 3,
			value: "both",
			name:"উভয়"
		}
	];
	const govAdvantages = [
		{
			id: 1,
			name: "বৃদ্ধ",
			value: "old",


		},
		{
			id: 2,
			name: "বিধবা",
			value: "widow"
		}
		,
		{
			id: 3,
			name: "প্রতিবিন্ধি",
			value: "autistic"
		}
		,
		{
			id: 3,
			name: "অন্য",
			value: "other"
		}
	];
	const years = [];
	for (let i = 0; i <= 100; i++) {
		years.push({
			id: i,
			value1: i + 2020,
			value2: i + 2020 + 1
		})
	}
	useEffect(() => {
		loadUnions();
		loadDistricts();
	}, []);

	// pagination required
	const loadUnions = () => {
		apiClient()
			.get(`${BACKENDAPI}/v1.0/unions/all`)
			.then((response: any) => {
				console.log(response);
				setUnions(response.data.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};
	const loadDistricts = () => {
		apiClient()
			.get(`${BACKENDAPI}/v1.0/districts/all`)
			.then((response: any) => {
				console.log(response);
				setDistricts(response.data.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};
	const loadWards = (unionId: string) => {
		apiClient()
			.get(`${BACKENDAPI}/v1.0/wards/unions/${unionId}`)
			.then((response: any) => {
				console.log("dddd", response.data.data);
				setWards(response.data.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};
	const loadSubDistricts = (unionId: string) => {
		apiClient()
			.get(`${BACKENDAPI}/v1.0/upazilas/unions/${unionId}`)
			.then((response: any) => {
				console.log("dddd", response.data.data);
				setSubDistricts(response.data.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	const loadVillages = (wardId: string) => {
		apiClient()
			.get(`${BACKENDAPI}/v1.0/villages/wards/${wardId}`)
			.then((response: any) => {
				console.log("dddd", response.data.data);
				setVillages(response.data.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};
	const loadPostOffices = (wardId: string) => {
		apiClient()
			.get(`${BACKENDAPI}/v1.0/post-office/wards/${wardId}`)
			.then((response: any) => {
				console.log("dddd", response.data.data);
				setPostOffices(response.data.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};





	const invalidInputHandler = (error: any) => {
		if (error.status === 422) {
			setErrors(error.data.errors);
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });

	};
	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		if (e.target.name == "union_id") {
			loadWards(e.target.value);
			loadSubDistricts(e.target.value)
		}
		if (e.target.name == "ward_id") {
			loadVillages(e.target.value);
			loadPostOffices(e.target.value);
		}
	};
	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	
		if (!e.target.files) {
			return;
		  }
		 
		let file = e.target.files[0]
		setImageFile(file)

            let data:any = new FormData();
            data.append('image', file, file.name);
            apiClient().post(`${BACKENDAPI}/v1.0/image/upload/single/citizen`, data, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                }
            })
			.then((response: any) => {
				console.log(response);
			setFormData((prevData)=> {
return {
	...prevData,
	image:response.data.image
}
			})
			})
			.catch((error) => {
				console.log(error.response);
			});

		
	  };
	const resetFunction = () => {
		setFormData({
			union_id: '',
			ward_id: '',
			village_id: "",
			post_office_id: "",
			upazila_id: "",
			district_id: "",

			holding_no: "0",
			thana_head_name: "",
			mobile: "",
			guardian: "",
			c_mother_name: "",
			nid_no: "",
			thana_head_religion: "",
			thana_head_gender: "",
			thana_head_occupation: "",
			is_tubewell: "",
			latrin_type: "",
			type_of_living: "",
			type_of_organization: "",
			gov_advantage: "",
			male: "",
			female: "",
			current_year: "",
			annual_price: "",
			tax_amount: "",
			previous_due: "",
			image: "",
			raw_house: "0",
			half_building_house: "0",
			building_house: "0",
			members: [
				{
					id: "",
					name: "",
					father_name: "",
					mother_name: "",
					village_name: "test",
					post_office: "test",
					upazila: "test",
					district: "test",
					nid: "",
					
				}
			]
		});
	};
	{/* ccccccc */ }
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setErrors(null);
		if (props.type === "update") {
			updateData();

		} else {
			createData();
		}
	};
	const createData = () => {
		apiClient()
			.post(`${BACKENDAPI}/v1.0/citizens`, { ...formData })
			.then((response) => {
				console.log(response);
				toast.success("Data saved");
				resetFunction();
			})
			.catch((error) => {
				console.log(error.response);


				invalidInputHandler(error.response)
				ErrorMessage(error.response)
			});
	};
	// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	// edit data section
	useEffect(() => {
		if (props.type == "update") {
			 setFormData(props.value);
			console.log(props.value)
			loadWards(props.value.union_id)
			loadUnions();
		loadDistricts();
		}
	}, []);
	const updateData = () => {
		apiClient()
			.put(`${BACKENDAPI}/v1.0/citizens`, { ...formData })
			.then((response: any) => {
				console.log(response);
				toast.success("Data Updated");

				props.updateDataStates(response.data.data);
				props.showModal(false);
			})
			.catch((error) => {
				console.log(error);
				console.log(error.response);
				ErrorMessage(error.response)
				invalidInputHandler(error.response)
			});
	};
	// end edit Data section
	// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	const AddValue = () => {

		const tempValues = [...formData.members]
		tempValues.push({
			id: "0",
			name: "",
			father_name: "",
			mother_name: "",
			village_name: "test",
			post_office: "test",
			upazila: "test",
			district: "test",
			nid: "",
		
		})

		setFormData({ ...formData, members: tempValues });
	};
	const deleteValue = () => {

		const tempValues = [...formData.members]

		if (tempValues.length > 1) {
			tempValues.pop()
		}
		setFormData({ ...formData, members: tempValues });

	};
	const handleMemberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let index:number = parseInt(e.target.name.split(".")[1])
		let name:string = e.target.name.split(".")[2]
		console.log(index)
		const tempValues:any = [...formData.members]
	console.log(name)
		tempValues[index][name] = e.target.value;
		setFormData({ ...formData,members:tempValues });
	};
	return (
		<form className="row g-3" onSubmit={handleSubmit}>
			<div className="col-md-4">
				<label htmlFor="union_id" className="form-label">
					ইউনিয়ন
				</label>
				<select
					className={
						errors
							? errors.union_id
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="union_id"
					name="union_id"
					onChange={handleSelect}
					value={formData.union_id}>
					<option value="">Please Select</option>
					{unions.map((el: any, index) => (
						<option
							key={index}
							value={el.id}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.union_id && (
					<div className="invalid-feedback">{errors.union_id[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>


			<div className="col-md-4">
				<label htmlFor="union_id" className="form-label">
					ওয়ার্ড
				</label>
				<select
					className={
						errors
							? errors.ward_id
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="ward_id"
					name="ward_id"
					onChange={handleSelect}
					value={formData.ward_id}>
					<option value="">Please Select</option>
					{wards.map((el: any, index) => (
						<option
							key={index}
							value={el.id}
							style={{ textTransform: "uppercase" }}>
							{el.ward_no}
						</option>
					))}
				</select>
				{errors?.ward_id && (
					<div className="invalid-feedback">{errors.ward_id[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="union_id" className="form-label">
					গ্রাম
				</label>
				<select
					className={
						errors
							? errors.village_id
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="village_id"
					name="village_id"
					onChange={handleSelect}
					value={formData.village_id}>
					<option value="">Please Select</option>
					{villages.map((el: any, index) => (
						<option
							key={index}
							value={el.id}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.village_id && (
					<div className="invalid-feedback">{errors.village_id[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="post_office_id" className="form-label">
					 পোস্ট অফিস
				</label>
				<select
					className={
						errors
							? errors.post_office_id
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="post_office_id"
					name="post_office_id"
					onChange={handleSelect}
					value={formData.post_office_id}>
					<option value="">Please Select</option>
					{postOffices.map((el: any, index) => (
						<option
							key={index}
							value={el.id}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.post_office_id && (
					<div className="invalid-feedback">{errors.post_office_id[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="post_office_id" className="form-label">
					উপজেলা
				</label>
				<select
					className={
						errors
							? errors.upazila_id
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="upazila_id"
					name="upazila_id"
					onChange={handleSelect}
					value={formData.upazila_id}>
					<option value="">Please Select</option>
					{subDistricts.map((el: any, index) => (
						<option
							key={index}
							value={el.id}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.upazila_id && (
					<div className="invalid-feedback">{errors.upazila_id[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="district_id" className="form-label">
					জেলা
				</label>
				<select
					className={
						errors
							? errors.upazila_id
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="district_id"
					name="district_id"
					onChange={handleSelect}
					value={formData.district_id}>
					<option value="">Please Select</option>
					{districts.map((el: any, index) => (
						<option
							key={index}
							value={el.id}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.district_id && (
					<div className="invalid-feedback">{errors.district_id[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>

			<div className="col-md-4">
				<label htmlFor="thana_head_name" className="form-label">
					থানা প্রধানের নাম
				</label>
				<input
					type="text"
					className={
						errors
							? errors.thana_head_name
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="thana_head_name"
					name="thana_head_name"
					onChange={handleChange}
					value={formData.thana_head_name}
				/>
				{errors?.thana_head_name && (
					<div className="invalid-feedback">{errors.thana_head_name[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="mobile" className="form-label">
					থানা প্রধানেদ মোবাইল
				</label>
				<input
					type="text"
					className={
						errors
							? errors.mobile
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="mobile"
					name="mobile"
					onChange={handleChange}
					value={formData.mobile}
				/>
				{errors?.mobile && (
					<div className="invalid-feedback">{errors.mobile[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="guardian" className="form-label">
					অভিভাবক
				</label>
				<input
					type="text"
					className={
						errors
							? errors.guardian
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="guardian"
					name="guardian"
					onChange={handleChange}
					value={formData.guardian}
				/>
				{errors?.guardian && (
					<div className="invalid-feedback">{errors.guardian[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="c_mother_name" className="form-label">
				মায়ের নাম
				</label>
				<input
					type="text"
					className={
						errors
							? errors.c_mother_name
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="c_mother_name"
					name="c_mother_name"
					onChange={handleChange}
					value={formData.c_mother_name}
				/>
				{errors?.c_mother_name && (
					<div className="invalid-feedback">{errors.c_mother_name[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="nid_no" className="form-label">
					এনআইডি
				</label>
				<input
					type="text"
					className={
						errors
							? errors.nid_no
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="nid_no"
					name="nid_no"
					onChange={handleChange}
					value={formData.nid_no}
				/>
				{errors?.nid_no && (
					<div className="invalid-feedback">{errors.nid_no[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="thana_head_religion" className="form-label">
					ধর্ম 
				</label>
				<select
					className={
						errors
							? errors.upazila_id
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="thana_head_religion"
					name="thana_head_religion"
					onChange={handleSelect}
					value={formData.thana_head_religion}>
					<option value="">Please Select</option>
					{religions.map((el, index) => (
						<option
							key={index}
							value={el.value}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.thana_head_religion && (
					<div className="invalid-feedback">{errors.thana_head_religion[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="thana_head_religion" className="form-label">
					লিঙ্গ
				</label>
				<select
					className={
						errors
							? errors.thana_head_gender
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="thana_head_gender"
					name="thana_head_gender"
					onChange={handleSelect}
					value={formData.thana_head_gender}>
					<option value="">Please Select</option>
					{sexs.map((el, index) => (
						<option
							key={index}
							value={el.value}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.thana_head_gender && (
					<div className="invalid-feedback">{errors.thana_head_gender[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="thana_head_occupation" className="form-label">
					পেশা
				</label>
				<input
					type="text"
					className={
						errors
							? errors.thana_head_occupation
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="thana_head_occupation"
					name="thana_head_occupation"
					onChange={handleChange}
					value={formData.thana_head_occupation}
				/>
				{errors?.thana_head_occupation && (
					<div className="invalid-feedback">{errors.thana_head_occupation[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="is_tubewell" className="form-label">
					টিউবওয়েল আছে?
					
				</label>
				<select
					className={
						errors
							? errors.is_tubewell
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="is_tubewell"
					name="is_tubewell"
					onChange={handleSelect}
					value={formData.is_tubewell}>
					<option value="">Please Select</option>
					{boolean.map((el, index) => (
						<option
							key={index}
							value={el.value}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.is_tubewell && (
					<div className="invalid-feedback">{errors.is_tubewell[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="latrin_type" className="form-label">
					পায়খানার ধরন
				</label>
				<select
					className={
						errors
							? errors.latrin_type
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="latrin_type"
					name="latrin_type"
					onChange={handleSelect}
					value={formData.latrin_type}>
					<option value="">Please Select</option>
					{latrinType.map((el, index) => (
						<option
							key={index}
							value={el.value}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.latrin_type && (
					<div className="invalid-feedback">{errors.latrin_type[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="type_of_living" className="form-label">
					বাড়ি
				</label>
				<select
					className={
						errors
							? errors.type_of_living
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="type_of_living"
					name="type_of_living"
					onChange={handleSelect}
					value={formData.type_of_living}>
					<option value="">Please Select</option>
					{house.map((el, index) => (
						<option
							key={index}
							value={el.value}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.type_of_living && (
					<div className="invalid-feedback">{errors.type_of_living[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="type_of_organization" className="form-label">
				 প্রতিষ্ঠানের  ধরিন
				</label>
				<select
					className={
						errors
							? errors.type_of_organization
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="type_of_organization"
					name="type_of_organization"
					onChange={handleSelect}
					value={formData.type_of_organization}>
					<option value="">Please Select</option>
					{organizations.map((el, index) => (
						<option
							key={index}
							value={el.value}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.type_of_organization && (
					<div className="invalid-feedback">{errors.type_of_organization[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="gov_advantage" className="form-label">
					সরকারি সুবিধাভোগী 
				</label>
				<select
					className={
						errors
							? errors.gov_advantage
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="gov_advantage"
					name="gov_advantage"
					onChange={handleSelect}
					value={formData.gov_advantage}>
					<option value="">Please Select</option>
					{govAdvantages.map((el: any, index) => (
						<option
							key={index}
							value={el.name}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.gov_advantage && (
					<div className="invalid-feedback">{errors.gov_advantage[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>

			<div className="col-md-4">
				<label htmlFor="male" className="form-label">
					পুরুষের সংখ্যা 
				</label>
				<input
					type="number"
					className={
						errors
							? errors.male
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="male"
					name="male"
					onChange={handleChange}
					value={formData.male}
				/>
				{errors?.male && (
					<div className="invalid-feedback">{errors.male[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="female" className="form-label">
					মহিলার সংখ্যা 
				</label>
				<input
					type="number"
					className={
						errors
							? errors.male
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="female"
					name="female"
					onChange={handleChange}
					value={formData.female}
				/>
				{errors?.female && (
					<div className="invalid-feedback">{errors.female[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>

			<div className="col-md-4">
				<label htmlFor="gov_advantage" className="form-label">
					অর্থ বছর
				</label>
				<select
					className={
						errors
							? errors.current_year
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="current_year"
					name="current_year"
					onChange={handleSelect}
					value={formData.current_year}>
					<option value="">Please Select</option>

					{years.map((el: any, index) => (
						<option
							key={index}
							value={`${el.value1}-${el.value2}`}
							style={{ textTransform: "uppercase" }}>
							{`${el.value1}-${el.value2}`}
						</option>
					))}
				</select>
				{errors?.current_year && (
					<div className="invalid-feedback">{errors.current_year[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="female" className="form-label">
					বাৎসরিক মূল্য
				</label>
				<input
					type="text"
					className={
						errors
							? errors.annual_price
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="annual_price"
					name="annual_price"
					onChange={handleChange}
					value={formData.annual_price}
				/>
				{errors?.annual_price && (
					<div className="invalid-feedback">{errors.annual_price[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="female" className="form-label">
					কর
				</label>
				<input
					type="text"
					className={
						errors
							? errors.tax_amount
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="tax_amount"
					name="tax_amount"
					onChange={handleChange}
					value={formData.tax_amount}
				/>
				{errors?.tax_amount && (
					<div className="invalid-feedback">{errors.tax_amount[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="female" className="form-label">
					পূর্বের বকেয়া 
				</label>
				<input
					type="text"
					className={
						errors
							? errors.previous_due
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="previous_due"
					name="previous_due"
					onChange={handleChange}
					value={formData.previous_due}
				/>
				{errors?.previous_due && (
					<div className="invalid-feedback">{errors.previous_due[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="sku" className="form-label">
				 {imageFile?.name?imageFile.name:"upload image"}
				</label>
				<br />
				{imageFile && 	<img src={URL.createObjectURL(imageFile)} alt="..." height={100} width={100} />}
	
				<input
					type="file"
					className={
						errors
							? errors.image
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="image"
					name="image"
					onChange={handleImageChange}
			
				/>
				{errors?.image && (
					<div className="invalid-feedback">{errors.image[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<br />
			<h3 className="text-center">সদস্য  গণ </h3>
			{
					formData.members.map( (el,index) => {
						return (
					<div className="row">
				<br/>
				<div className="col-md-4">
				<label htmlFor="name" className="form-label">
					নাম
				</label>
				<input
					type="text"
					className={
						errors
							? errors[`members.${index}.name`]
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id={`members.${index}.name`}
					name={`members.${index}.name`}
				
					onChange={handleMemberChange}
					value={formData.members[index].name}
				/>
					{errors && (
				<>	
				{
					errors[`members.${index}.name`] ? (<div className="invalid-feedback">This field is required</div>):(<div className="valid-feedback">Looks good!</div>)

				}
				
				</>
					
				)}
			</div>
			
			<div className="col-md-4">
				<label htmlFor="father_name" className="form-label">
					পিতার নাম
				</label>
				<input
					type="text"
					className={
						errors
							? errors[`members.${index}.father_name`]
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id={`members.${index}.father_name`}
					name={`members.${index}.father_name`}
				
					onChange={handleMemberChange}
					value={formData.members[index].father_name}
				/>
					{errors && (
				<>	
				{
					errors[`members.${index}.father_name`] ? (<div className="invalid-feedback">This field is required</div>):(<div className="valid-feedback">Looks good!</div>)

				}
				
				</>
					
				)}
			</div>
			
			<div className="col-md-4">
				<label htmlFor="mother_name" className="form-label">
					মাতার নাম
				</label>
				<input
					type="text"
					className={
						errors
							? errors[`members.${index}.mother_name`]
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id={`members.${index}.mother_name`}
					name={`members.${index}.mother_name`}
				
					onChange={handleMemberChange}
					value={formData.members[index].mother_name}
				/>
					{errors && (
				<>	
				{
					errors[`members.${index}.mother_name`] ? (<div className="invalid-feedback">This field is required</div>):(<div className="valid-feedback">Looks good!</div>)

				}
				
				</>
					
				)}
			</div>
			<div className="col-md-4">
				<label htmlFor="nid" className="form-label">
				এনআইডি
				</label>
				<input
					type="text"
					className={
						errors
							? errors[`members.${index}.nid`]
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id={`members.${index}.nid`}
					name={`members.${index}.nid`}
				
					onChange={handleMemberChange}
					value={formData.members[index].nid}
				/>
					{errors && (
				<>	
				{
					errors[`members.${index}.nid`] ? (<div className="invalid-feedback">This field is required</div>):(<div className="valid-feedback">Looks good!</div>)

				}
				
				</>
					
				)}
			</div>

		
		
					</div>
					)})
				}
		
			<div className="text-center">
				<button className="btn btn-danger me-2" type="button" onClick={deleteValue}>-</button>
				<button className="btn btn-primary" type="button" onClick={AddValue}>+</button>

			</div>
			{/* ccccccc */}

			<div className="text-center">
				<button type="submit" className="btn btn-primary me-2">
					Submit
				</button>
				<button
					type="button"
					onClick={resetFunction}
					className="btn btn-secondary">
					Reset
				</button>
			</div>
		</form>
	);
};

export default AddCitizenForm;
