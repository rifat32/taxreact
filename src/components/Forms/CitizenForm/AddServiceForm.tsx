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

// @@@@@@@@@@
	applicant_name:string;
	applicant_name_en:string;
	applicant_phone:string;
	applicant_nid:string;
	applicant_email:string;
	applicant_img:string;
	applicant_f_name:string;
	applicant_m_name:string;
	applicant_holding_no:string;


	apply_types:string;

	institute:string,
	
	owner:string,
	guadian:string,
	present_addess:string,
	license_no:string,
	business_type:string,
	permanent_addess:string,
	expire_date:string,
	current_year:string,
	fee:string,
	fee_des:string,
	vat:string,
	vat_des:string,
	total:string,
	died_name:string,
	died_father:string,
	died_mother:string,
	died_zilla:string,
	died_upozilla:string,
	died_ward:string,
	died_village:string,
	died_post_office:string,
	warish:Warish[],


	death_day:string,
	death_place:string;
	wife_name:string;
	disability:string;
	previous_village:string;
	previous_post_office:string;
	privious_zilla:string;
	previous_opozilla:string;
	gardian_income:string;
	gardian_occupaion:string;

	fighter_gadget_number:string;
	fighter_date:string;
	fighter_certificat_number:string;


	fighter_name:string;
	fighter_wife:string;

	tribal_community:string;

	occupation:string;
}

interface Warish  {
	name:string,
	relation:string,
	age:string,
	comment:string,
	id:string
}
const AddServiceForm: React.FC<UpdateFormInterface> = (props) => {
	const [formData, setFormData] = useState<FormData>({
		union_id: '',
		ward_id: '',
		village_id: "",
		post_office_id: "",
		upazila_id: "",
		district_id: "",
		fee:"",
	fee_des:"",
	vat:"",
	vat_des:"",
	total:"",



	applicant_name:"",
	applicant_name_en:"",
	applicant_phone:"",
	applicant_nid:"",
	applicant_email:"",
	applicant_img:"",
	applicant_f_name:"",
	applicant_m_name:"",
	applicant_holding_no:"",

	apply_types:"",

	institute:"",
	owner:"",
	guadian:"",
	present_addess:"",
	license_no:"",
	business_type:"",
	permanent_addess:"",
	expire_date:"",
	current_year:"",

	died_name:"",
	died_father:"",
	died_mother:"",
	died_zilla:"",
	died_upozilla:"",
	died_ward:"",
	died_village:"",
	died_post_office:"",
	warish:[{
		id:"",
		name:"",
	relation:"",
	age:"",
	comment:""
	}],

	death_day:"",
	death_place:"",
	wife_name:"",
	disability:"",
	previous_village:"",
	previous_post_office:"",
	privious_zilla:"",
	previous_opozilla:"",
	gardian_income:"",
	gardian_occupaion:"",
	fighter_gadget_number:"",
	fighter_date:"",
	fighter_certificat_number:"",
	fighter_name:"",
	fighter_wife:"",
	tribal_community:"",
	occupation:"",

	});
	const [imageFile, setImageFile] = useState<any>();
	const [errors, setErrors] = useState<any>(null);

	const [unions, setUnions] = useState([]);
	const [wards, setWards] = useState([]);
	const [villages, setVillages] = useState([]);
	const [postOffices, setPostOffices] = useState([]);
	const [subDistricts, setSubDistricts] = useState([]);
	const [districts, setDistricts] = useState([]);
	

	const handleWarishChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let index:number = parseInt(e.target.name.split(".")[1])
		let name:string = e.target.name.split(".")[2]
		console.log(index)
		const tempValues:any = [...formData.warish]
	console.log(name)
		tempValues[index][name] = e.target.value;
		setFormData({ ...formData,warish:tempValues });
	};
	const AddValue = () => {

		const tempValues = [...formData.warish]
		tempValues.push({
			id:"",
		name:"",
	relation:"",
	age:"",
	comment:""
		})

		setFormData({ ...formData, warish: tempValues });
	};
	const deleteValue = () => {

		const tempValues = [...formData.warish]

		if (tempValues.length > 1) {
			tempValues.pop()
		}
		setFormData({ ...formData, warish: tempValues });

	};
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
	const apply_types_array = [
		{
			id: 0,
			name: "নাগরিক সনদের আবেদন",
			value: "0"

		},
		{
			id: 1,
			name: "ট্রেড লাইসেন্স সনদের আবেদন",
			value: "1"
		}
		,
		{
			id: 2,
			name: "ওয়ারিশ সনদের আবেদন",
			value: "2"
		},
		{
			id: 3,
			name: "চারিত্রিক সনদের আবেদন",
			value: "3"
		}
		,
		{
			id: 4,
			name: "মৃত্যু সনদের আবেদন",
			value: "4"
		}
		,
		{
			id: 8,
			name: "পুনঃ বিবাহ না হওয়ার সনদের আবেদন  ",
			value: "8"
		}
		,
		{
			id: 10,
			name: "প্রতিবন্ধী সনদের আবেদন",
			value: "10"
		}
		,
		{
			id: 12,
			name: "প্রত্যয়নপত্র",
			value: "12"
		}
		,
		{
			id: 13,
			name: "ভোটার এলাকা স্থানান্তর অনাপত্তি",
			value: "13"
		}
		,
		{
			id: 14,
			name: "অবিভাবক আয়ের আবেদন",
			value: "14"
		}
		,
		{
			id: 15,
			name: "মুক্তিযোদ্ধা আবেদন",
			value: "15"
		}
		,
		{
			id: 16,
			name: "মুক্তিযোদ্ধা সন্তানের আবেদন",
			value: "16"
		}
		,
		{
			id: 17,
			name: "দুই নামীয় আবেদন",
			value: "17"
		}
		,
		{
			id: 18,
			name: "ক্ষুদ্র নৃগোষ্ঠী আবেদন",
			value: "18"
		},
		{
			id: 19,
			name: "পেশা সংক্রান্ত আবেদন",
			value: "19"
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
	applicant_img:response.data.image
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

			applicant_name:"",
			applicant_name_en:"",
			applicant_phone:"",
			applicant_nid:"",
			applicant_email:"",
			applicant_img:"",
			applicant_f_name:"",
			applicant_m_name:"",
			applicant_holding_no:"",

			apply_types:"",

			institute:"",
			owner:"",
	guadian:"",
	present_addess:"",
	license_no:"",
	business_type:"",
	permanent_addess:"",
	expire_date:"",
	current_year:"",
	fee:"",
	fee_des:"",
	vat:"",
	vat_des:"",
	total:"",
	died_name:"",
	died_father:"",
	died_mother:"",
	died_zilla:"",
	died_upozilla:"",
	died_ward:"",
	died_village:"",
	died_post_office:"",
	warish:[{
		id:"",
		name:"",
	relation:"",
	age:"",
	comment:""
	}],

	death_day:"",
	death_place:"",
	wife_name:"",
	disability:"",
	previous_village:"",
	previous_post_office:"",
	privious_zilla:"",
	previous_opozilla:"",
	gardian_income:"",
	gardian_occupaion:"",
	fighter_gadget_number:"",
	fighter_date:"",
	fighter_certificat_number:"",
	fighter_name:"",
	fighter_wife:"",

	tribal_community:"",
	occupation:"",
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
			.post(`${BACKENDAPI}/v1.0/services`, { ...formData })
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

		

		
			<br />
			<h3 className="text-center">আবেদনকারীর তথ্য </h3>

			<div className="col-md-4">
				<label htmlFor="applicant_name" className="form-label">
				আবেদনকারীর পূর্ণ নাম*
				</label>
				<input
					type="text"
					className={
						errors
							? errors.applicant_name
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="applicant_name"
					name="applicant_name"
					onChange={handleChange}
					value={formData.applicant_name}
				/>
				{errors?.applicant_name && (
					<div className="invalid-feedback">{errors.applicant_name[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
		
			<div className="col-md-4">
				<label htmlFor="applicant_name_en" className="form-label">
				আবেদনকারীর পূর্ণ নাম ইংরেজিতে*
				</label>
				<input
					type="text"
					className={
						errors
							? errors.applicant_name_en
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="applicant_name_en"
					name="applicant_name_en"
					onChange={handleChange}
					value={formData.applicant_name_en}
				/>
				{errors?.applicant_name_en && (
					<div className="invalid-feedback">{errors.applicant_name_en[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="applicant_phone" className="form-label">
				মোবাইল
				</label>
				<input
					type="text"
					className={
						errors
							? errors.applicant_phone
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="applicant_phone"
					name="applicant_phone"
					onChange={handleChange}
					value={formData.applicant_phone}
				/>
				{errors?.applicant_phone && (
					<div className="invalid-feedback">{errors.applicant_phone[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="applicant_nid" className="form-label">
				জাতীয় পরিচয় পত্র নাম্বার
				</label>
				<input
					type="text"
					className={
						errors
							? errors.applicant_nid
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="applicant_nid"
					name="applicant_nid"
					onChange={handleChange}
					value={formData.applicant_nid}
				/>
				{errors?.applicant_nid && (
					<div className="invalid-feedback">{errors.applicant_nid[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="applicant_email" className="form-label">
				ইমেইল
				</label>
				<input
					type="text"
					className={
						errors
							? errors.applicant_email
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="applicant_email"
					name="applicant_email"
					onChange={handleChange}
					value={formData.applicant_email}
				/>
				{errors?.applicant_email && (
					<div className="invalid-feedback">{errors.applicant_email[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="image" className="form-label">
				 {imageFile?.name?imageFile.name:"জন্ম সনদ/ভোটার আইডির স্ক্যান কপি"}
				</label>
				<br />
				{imageFile && 	<img src={URL.createObjectURL(imageFile)} alt="..." height={100} width={100} />}
	
				<input
					type="file"
					className={
						errors
							? errors.applicant_img
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="applicant_img"
					name="applicant_img"
					onChange={handleImageChange}
			
				/>
				{errors?.applicant_img && (
					<div className="invalid-feedback">{errors.applicant_img[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="applicant_f_name" className="form-label">
				পিতা/স্বামীর নাম
				</label>
				<input
					type="text"
					className={
						errors
							? errors.applicant_f_name
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="applicant_f_name"
					name="applicant_f_name"
					onChange={handleChange}
					value={formData.applicant_f_name}
				/>
				{errors?.applicant_f_name && (
					<div className="invalid-feedback">{errors.applicant_f_name[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="applicant_m_name" className="form-label">
				মাতার নাম
				</label>
				<input
					type="text"
					className={
						errors
							? errors.applicant_m_name
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="applicant_m_name"
					name="applicant_m_name"
					onChange={handleChange}
					value={formData.applicant_m_name}
				/>
				{errors?.applicant_m_name && (
					<div className="invalid-feedback">{errors.applicant_m_name[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>

			<div className="col-md-4">
				<label htmlFor="applicant_holding_no" className="form-label">
				হোল্ডিং নং
				</label>
				<input
					type="text"
					className={
						errors
							? errors.applicant_holding_no
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="applicant_holding_no"
					name="applicant_holding_no"
					onChange={handleChange}
					value={formData.applicant_holding_no}
				/>
				{errors?.applicant_holding_no && (
					<div className="invalid-feedback">{errors.applicant_holding_no[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>

			<div className="col-md-4">
				<label htmlFor="apply_types" className="form-label">
					সেবাসমূহ
				</label>
				<select
					className={
						errors
							? errors.apply_types
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="apply_types"
					name="apply_types"
					onChange={handleSelect}
					value={formData.apply_types}>
					<option value="">Please Select</option>
					{apply_types_array.map((el, index) => (
						<option
							key={index}
							value={el.id}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.apply_types && (
					<div className="invalid-feedback">{errors.apply_types[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			
			<div className="row">
				{
					formData.apply_types == '1'?(
						<>
						<div className="col-md-4">
				<label htmlFor="institute" className="form-label">
				institute
				</label>
				<input
					type="text"
					className={
						errors
							? errors.institute
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="institute"
					name="institute"
					onChange={handleChange}
					value={formData.institute}
				/>
				{errors?.institute && (
					<div className="invalid-feedback">{errors.institute[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="owner" className="form-label">
				owner
				</label>
				<input
					type="text"
					className={
						errors
							? errors.owner
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="owner"
					name="owner"
					onChange={handleChange}
					value={formData.owner}
				/>
				{errors?.owner && (
					<div className="invalid-feedback">{errors.owner[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="guadian" className="form-label">
				guadian
				</label>
				<input
					type="text"
					className={
						errors
							? errors.guadian
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="guadian"
					name="guadian"
					onChange={handleChange}
					value={formData.guadian}
				/>
				{errors?.guadian && (
					<div className="invalid-feedback">{errors.guadian[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="present_addess" className="form-label">
				present addess
				</label>
				<input
					type="text"
					className={
						errors
							? errors.present_addess
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="present_addess"
					name="present_addess"
					onChange={handleChange}
					value={formData.present_addess}
				/>
				{errors?.present_addess && (
					<div className="invalid-feedback">{errors.present_addess[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="license_no" className="form-label">
				license no
				</label>
				<input
					type="text"
					className={
						errors
							? errors.license_no
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="license_no"
					name="license_no"
					onChange={handleChange}
					value={formData.license_no}
				/>
				{errors?.license_no && (
					<div className="invalid-feedback">{errors.license_no[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="business_type" className="form-label">
				business type
				</label>
				<input
					type="text"
					className={
						errors
							? errors.business_type
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="business_type"
					name="business_type"
					onChange={handleChange}
					value={formData.business_type}
				/>
				{errors?.business_type && (
					<div className="invalid-feedback">{errors.business_type[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="permanent_addess" className="form-label">
				permanent addess
				</label>
				<input
					type="text"
					className={
						errors
							? errors.permanent_addess
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="permanent_addess"
					name="permanent_addess"
					onChange={handleChange}
					value={formData.permanent_addess}
				/>
				{errors?.permanent_addess && (
					<div className="invalid-feedback">{errors.permanent_addess[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			
	
	
	
	
	
	
	<div className="col-md-4">
				<label htmlFor="fee" className="form-label">
				fee
				</label>
				<input
					type="text"
					className={
						errors
							? errors.fee
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="fee"
					name="fee"
					onChange={handleChange}
					value={formData.fee}
				/>
				{errors?.fee && (
					<div className="invalid-feedback">{errors.fee[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="fee_des" className="form-label">
				fee_des
				</label>
				<input
					type="text"
					className={
						errors
							? errors.fee_des
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="fee_des"
					name="fee_des"
					onChange={handleChange}
					value={formData.fee_des}
				/>
				{errors?.fee_des && (
					<div className="invalid-feedback">{errors.fee_des[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="vat" className="form-label">
				vat
				</label>
				<input
					type="text"
					className={
						errors
							? errors.vat
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="vat"
					name="vat"
					onChange={handleChange}
					value={formData.vat}
				/>
				{errors?.vat && (
					<div className="invalid-feedback">{errors.vat[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="vat_des" className="form-label">
				vat_des
				</label>
				<input
					type="text"
					className={
						errors
							? errors.vat_des
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="vat_des"
					name="vat_des"
					onChange={handleChange}
					value={formData.vat_des}
				/>
				{errors?.vat_des && (
					<div className="invalid-feedback">{errors.vat_des[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="total" className="form-label">
				total
				</label>
				<input
					type="text"
					className={
						errors
							? errors.total
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="total"
					name="total"
					onChange={handleChange}
					value={formData.total}
				/>
				{errors?.total && (
					<div className="invalid-feedback">{errors.total[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="expire_date" className="form-label">
				expire date
				</label>
				<input
					type="date"
					className={
						errors
							? errors.expire_date
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="expire_date"
					name="expire_date"
					onChange={handleChange}
					value={formData.expire_date}
				/>
				{errors?.expire_date && (
					<div className="invalid-feedback">{errors.expire_date[0]}</div>
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



						</>
					):(null)
				}

				{
					formData.apply_types == "2"?(
						<>
			<div className="col-md-4">
				<label htmlFor="died_name" className="form-label">
				died name
				</label>
				<input
					type="text"
					className={
						errors
							? errors.died_name
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="died_name"
					name="died_name"
					onChange={handleChange}
					value={formData.died_name}
				/>
				{errors?.died_name && (
					<div className="invalid-feedback">{errors.died_name[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>				
			<div className="col-md-4">
				<label htmlFor="died_father" className="form-label">
				died father
				</label>
				<input
					type="text"
					className={
						errors
							? errors.died_father
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="died_father"
					name="died_father"
					onChange={handleChange}
					value={formData.died_father}
				/>
				{errors?.died_father && (
					<div className="invalid-feedback">{errors.died_father[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>	
			<div className="col-md-4">
				<label htmlFor="died_mother" className="form-label">
				died mother
				</label>
				<input
					type="text"
					className={
						errors
							? errors.died_mother
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="died_mother"
					name="died_mother"
					onChange={handleChange}
					value={formData.died_mother}
				/>
				{errors?.died_mother && (
					<div className="invalid-feedback">{errors.died_mother[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>	
			<div className="col-md-4">
				<label htmlFor="died_zilla" className="form-label">
					জেলা
				</label>
				<select
					className={
						errors
							? errors.died_zilla
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="died_zilla"
					name="died_zilla"
					onChange={handleSelect}
					value={formData.died_zilla}>
					<option value="">Please Select</option>
					{districts.map((el: any, index) => (
						<option
							key={index}
							value={el.name}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.died_zilla && (
					<div className="invalid-feedback">{errors.died_zilla[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>

			<div className="col-md-4">
				<label htmlFor="died_upozilla" className="form-label">
					উপজেলা
				</label>
				<select
					className={
						errors
							? errors.died_upozilla
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="died_upozilla"
					name="died_upozilla"
					onChange={handleSelect}
					value={formData.died_upozilla}>
					<option value="">Please Select</option>
					{subDistricts.map((el: any, index) => (
						<option
							key={index}
							value={el.name}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.died_upozilla && (
					<div className="invalid-feedback">{errors.died_upozilla[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="died_ward" className="form-label">
					ওয়ার্ড
				</label>
				<select
					className={
						errors
							? errors.died_ward
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="died_ward"
					name="died_ward"
					onChange={handleSelect}
					value={formData.died_ward}>
					<option value="">Please Select</option>
					{wards.map((el: any, index) => (
						<option
							key={index}
							value={el.name}
							style={{ textTransform: "uppercase" }}>
							{el.ward_no}
						</option>
					))}
				</select>
				{errors?.died_ward && (
					<div className="invalid-feedback">{errors.died_ward[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="died_village" className="form-label">
					গ্রাম
				</label>
				<select
					className={
						errors
							? errors.died_village
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="died_village"
					name="died_village"
					onChange={handleSelect}
					value={formData.died_village}>
					<option value="">Please Select</option>
					{villages.map((el: any, index) => (
						<option
							key={index}
							value={el.name}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.died_village && (
					<div className="invalid-feedback">{errors.died_village[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="died_post_office" className="form-label">
					 পোস্ট অফিস
				</label>
				<select
					className={
						errors
							? errors.died_post_office
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="died_post_office"
					name="died_post_office"
					onChange={handleSelect}
					value={formData.died_post_office}>
					<option value="">Please Select</option>
					{postOffices.map((el: any, index) => (
						<option
							key={index}
							value={el.name}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.died_post_office && (
					<div className="invalid-feedback">{errors.died_post_office[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>

			<h1 className="text-center mt-5">
			ওয়ারিশগণের তথ্য
			</h1>
			{
					formData.warish.map( (el,index) => {
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
							? errors[`warish.${index}.name`]
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id={`warish.${index}.name`}
					name={`warish.${index}.name`}
				
					onChange={handleWarishChange}
					value={formData.warish[index].name}
				/>
					{errors && (
				<>	
				{
					errors[`warish.${index}.name`] ? (<div className="invalid-feedback">This field is required</div>):(<div className="valid-feedback">Looks good!</div>)

				}
				
				</>
					
				)}
			</div>
			<div className="col-md-4">
				<label htmlFor="relation" className="form-label">
				relation
				</label>
				<input
					type="text"
					className={
						errors
							? errors[`warish.${index}.relation`]
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id={`warish.${index}.relation`}
					name={`warish.${index}.relation`}
				
					onChange={handleWarishChange}
					value={formData.warish[index].relation}
				/>
					{errors && (
				<>	
				{
					errors[`warish.${index}.relation`] ? (<div className="invalid-feedback">This field is required</div>):(<div className="valid-feedback">Looks good!</div>)

				}
				
				</>
					
				)}
			</div>
		
			<div className="col-md-4">
				<label htmlFor="age" className="form-label">
				age
				</label>
				<input
					type="text"
					className={
						errors
							? errors[`warish.${index}.age`]
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id={`warish.${index}.age`}
					name={`warish.${index}.age`}
				
					onChange={handleWarishChange}
					value={formData.warish[index].age}
				/>
					{errors && (
				<>	
				{
					errors[`warish.${index}.age`] ? (<div className="invalid-feedback">This field is required</div>):(<div className="valid-feedback">Looks good!</div>)

				}
				
				</>
					
				)}
			</div>
			
			<div className="col-md-4">
				<label htmlFor="comment" className="form-label">
				comment
				</label>
				<input
					type="text"
					className={
						errors
							? errors[`warish.${index}.comment`]
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id={`warish.${index}.comment`}
					name={`warish.${index}.comment`}
				
					onChange={handleWarishChange}
					value={formData.warish[index].comment}
				/>
					{errors && (
				<>	
				{
					errors[`warish.${index}.comment`] ? (<div className="invalid-feedback">This field is required</div>):(<div className="valid-feedback">Looks good!</div>)

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
						
						
						</>
					):(null)
				}

{
	formData.apply_types == "4"?(<>
	<div className="col-md-4">
				<label htmlFor="death_day" className="form-label">
				death day
				</label>
				<input
					type="date"
					className={
						errors
							? errors.death_day
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="death_day"
					name="death_day"
					onChange={handleChange}
					value={formData.death_day}
				/>
				{errors?.death_day && (
					<div className="invalid-feedback">{errors.death_day[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>	

			<div className="col-md-4">
				<label htmlFor="death_place" className="form-label">
				death place
				</label>
				<input
					type="text"
					className={
						errors
							? errors.death_place
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="death_place"
					name="death_place"
					onChange={handleChange}
					value={formData.death_place}
				/>
				{errors?.death_place && (
					<div className="invalid-feedback">{errors.death_place[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>	
	</>):(null)
}

{
	formData.apply_types == "8"?(<>
		<div className="col-md-4">
				<label htmlFor="wife_name" className="form-label">
				wife name
				</label>
				<input
					type="text"
					className={
						errors
							? errors.wife_name
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="wife_name"
					name="wife_name"
					onChange={handleChange}
					value={formData.wife_name}
				/>
				{errors?.wife_name && (
					<div className="invalid-feedback">{errors.wife_name[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>	

	
	</>):(null)
}
{
	formData.apply_types == "10"?(<>
	
	<div className="col-md-4">
				<label htmlFor="disability" className="form-label">
				disability
				</label>
				<input
					type="text"
					className={
						errors
							? errors.disability
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="disability"
					name="disability"
					onChange={handleChange}
					value={formData.disability}
				/>
				{errors?.disability && (
					<div className="invalid-feedback">{errors.disability[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
	</>):(null)
}

{
	formData.apply_types == "13"?(<>
		<div className="col-md-4">
				<label htmlFor="previous_village" className="form-label">
				previous village
				</label>
				<input
					type="text"
					className={
						errors
							? errors.previous_village
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="previous_village"
					name="previous_village"
					onChange={handleChange}
					value={formData.previous_village}
				/>
				{errors?.previous_village && (
					<div className="invalid-feedback">{errors.previous_village[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="previous_post_office" className="form-label">
				previous post office
				</label>
				<input
					type="text"
					className={
						errors
							? errors.previous_post_office
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="previous_post_office"
					name="previous_post_office"
					onChange={handleChange}
					value={formData.previous_post_office}
				/>
				{errors?.previous_post_office && (
					<div className="invalid-feedback">{errors.previous_post_office[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="privious_zilla" className="form-label">
				privious zilla
				</label>
				<input
					type="text"
					className={
						errors
							? errors.privious_zilla
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="privious_zilla"
					name="privious_zilla"
					onChange={handleChange}
					value={formData.privious_zilla}
				/>
				{errors?.privious_zilla && (
					<div className="invalid-feedback">{errors.privious_zilla[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="previous_opozilla" className="form-label">
				previous opozilla
				</label>
				<input
					type="text"
					className={
						errors
							? errors.previous_opozilla
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="previous_opozilla"
					name="previous_opozilla"
					onChange={handleChange}
					value={formData.previous_opozilla}
				/>
				{errors?.previous_opozilla && (
					<div className="invalid-feedback">{errors.previous_opozilla[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>


	</>):(null)
}

{
	formData.apply_types == "14"?(<>
		<div className="col-md-4">
				<label htmlFor="gardian_income" className="form-label">
				gardian income
				</label>
				<input
					type="text"
					className={
						errors
							? errors.gardian_income
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="gardian_income"
					name="gardian_income"
					onChange={handleChange}
					value={formData.gardian_income}
				/>
				{errors?.gardian_income && (
					<div className="invalid-feedback">{errors.gardian_income[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="gardian_occupaion" className="form-label">
				gardian occupaion
				</label>
				<input
					type="text"
					className={
						errors
							? errors.gardian_occupaion
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="gardian_occupaion"
					name="gardian_occupaion"
					onChange={handleChange}
					value={formData.gardian_occupaion}
				/>
				{errors?.gardian_occupaion && (
					<div className="invalid-feedback">{errors.gardian_occupaion[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			
		


	</>):(null)
}
{
	formData.apply_types == "15"?(<>
		<div className="col-md-4">
				<label htmlFor="fighter_gadget_number" className="form-label">
				fighter gadget number
				</label>
				<input
					type="text"
					className={
						errors
							? errors.fighter_gadget_number
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="fighter_gadget_number"
					name="fighter_gadget_number"
					onChange={handleChange}
					value={formData.fighter_gadget_number}
				/>
				{errors?.fighter_gadget_number && (
					<div className="invalid-feedback">{errors.fighter_gadget_number[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="fighter_date" className="form-label">
				fighter date
				</label>
				<input
					type="date"
					className={
						errors
							? errors.fighter_date
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="fighter_date"
					name="fighter_date"
					onChange={handleChange}
					value={formData.fighter_date}
				/>
				{errors?.fighter_date && (
					<div className="invalid-feedback">{errors.fighter_date[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="fighter_certificat_number" className="form-label">
				fighter certificat number
				</label>
				<input
					type="text"
					className={
						errors
							? errors.fighter_certificat_number
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="fighter_certificat_number"
					name="fighter_certificat_number"
					onChange={handleChange}
					value={formData.fighter_certificat_number}
				/>
				{errors?.fighter_certificat_number && (
					<div className="invalid-feedback">{errors.fighter_certificat_number[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
		


	</>):(null)
}
{
	formData.apply_types == "16"?(<>
	<div className="col-md-4">
				<label htmlFor="fighter_name" className="form-label">
				fighter name
				</label>
				<input
					type="text"
					className={
						errors
							? errors.fighter_name
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="fighter_name"
					name="fighter_name"
					onChange={handleChange}
					value={formData.fighter_name}
				/>
				{errors?.fighter_name && (
					<div className="invalid-feedback">{errors.fighter_name[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="fighter_wife" className="form-label">
				fighter wife
				</label>
				<input
					type="text"
					className={
						errors
							? errors.fighter_wife
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="fighter_wife"
					name="fighter_wife"
					onChange={handleChange}
					value={formData.fighter_wife}
				/>
				{errors?.fighter_wife && (
					<div className="invalid-feedback">{errors.fighter_wife[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
		<div className="col-md-4">
				<label htmlFor="fighter_gadget_number" className="form-label">
				fighter gadget number
				</label>
				<input
					type="text"
					className={
						errors
							? errors.fighter_gadget_number
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="fighter_gadget_number"
					name="fighter_gadget_number"
					onChange={handleChange}
					value={formData.fighter_gadget_number}
				/>
				{errors?.fighter_gadget_number && (
					<div className="invalid-feedback">{errors.fighter_gadget_number[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="fighter_date" className="form-label">
				fighter date
				</label>
				<input
					type="date"
					className={
						errors
							? errors.fighter_date
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="fighter_date"
					name="fighter_date"
					onChange={handleChange}
					value={formData.fighter_date}
				/>
				{errors?.fighter_date && (
					<div className="invalid-feedback">{errors.fighter_date[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="fighter_certificat_number" className="form-label">
				fighter certificat number
				</label>
				<input
					type="text"
					className={
						errors
							? errors.fighter_certificat_number
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="fighter_certificat_number"
					name="fighter_certificat_number"
					onChange={handleChange}
					value={formData.fighter_certificat_number}
				/>
				{errors?.fighter_certificat_number && (
					<div className="invalid-feedback">{errors.fighter_certificat_number[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
		


	</>):(null)
}

{
	formData.apply_types == "18"?(<>
		<div className="col-md-4">
				<label htmlFor="tribal_community" className="form-label">
				tribal community
				</label>
				<input
					type="text"
					className={
						errors
							? errors.tribal_community
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="tribal_community"
					name="tribal_community"
					onChange={handleChange}
					value={formData.tribal_community}
				/>
				{errors?.tribal_community && (
					<div className="invalid-feedback">{errors.tribal_community[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
		
		
		


	</>):(null)
}
{
	formData.apply_types == "19"?(<>
		<div className="col-md-4">
				<label htmlFor="occupation" className="form-label">
				occupation
				</label>
				<input
					type="text"
					className={
						errors
							? errors.occupation
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="occupation"
					name="occupation"
					onChange={handleChange}
					value={formData.occupation}
				/>
				{errors?.occupation && (
					<div className="invalid-feedback">{errors.occupation[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
		
		
		


	</>):(null)
}


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

export default AddServiceForm;
