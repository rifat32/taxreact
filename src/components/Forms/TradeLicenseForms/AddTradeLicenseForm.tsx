import React, { useState, useEffect } from "react";
import { BACKENDAPI } from "../../../config";
import { apiClient } from "../../../utils/apiClient";
import { toast } from "react-toastify";
import { UpdateFormInterface } from "../../../interfaces/UpdateFormInterfaced";
import { ErrorMessage } from "../../../utils/ErrorMessage";

interface FormData {

	union_id: string;
	ward_id: string;
	institute: string;
	owner: string;
	guadian: string;
	mother_name: string;
	present_addess: string;
	license_no: string;
	business_type: string;
	permanent_addess: string;
	fee_des: string;
	mobile_no: string;
	fee: string;
	vat: string;
	nid: string;
	expire_date: string;
	total: string;
	vat_des: string;
	current_year: string;
	
}

const AddTradeLicenseForm: React.FC<UpdateFormInterface> = (props) => {
	const [formData, setFormData] = useState<FormData>({

	union_id:'',
	ward_id:'',
	institute: '',
	owner: '',
	guadian: '',
	mother_name: '',
	present_addess: '',
	license_no: '',
	business_type: '',
	permanent_addess: '',
	fee_des: '',
	mobile_no: '',
	fee: '',
	vat: '',
	nid: '',
	expire_date: '',
	total: '',
	vat_des: '',
	current_year: '',
	});
	
	const [errors, setErrors] = useState<any>(null);

	const [unions, setUnions] = useState([]);
	const [wards, setWards] = useState([]);
	

	useEffect(() => {
		loadUnions();
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
	const loadWards = (unionId:string) => {
		apiClient()
			.get(`${BACKENDAPI}/v1.0/wards/unions/${unionId}`)
			.then((response: any) => {
				console.log("dddd",response.data.data);
				setWards(response.data.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};






const invalidInputHandler = (error:any) => {
	if (error.status === 422) {
		setErrors(error.data.errors);
	}
}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		
	};
	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		if(e.target.name == "union_id"){
			loadWards(e.target.value );
		  }
				  
	};
	const resetFunction = () => {
		setFormData({

	union_id:'',
	ward_id:'',
	institute: '',
	owner: '',
	guadian: '',
	mother_name: '',
	present_addess: '',
	license_no: '',
	business_type: '',
	permanent_addess: '',
	mobile_no: '',
	fee: '',
	fee_des: '',
	vat: '',
	vat_des: '',
	nid: '',
	expire_date: '',
	total: '',
	
	current_year: '',
		});
	};
		{/* aaaaaaa */}
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
			.post(`${BACKENDAPI}/v1.0/trade-license`, { ...formData })
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
			loadWards(props.value.union_id)
			
		}
	}, []);
	const updateData = () => {
		apiClient()
			.put(`${BACKENDAPI}/v1.0/trade-license`, { ...formData })
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
		<div className="col-md-12">
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
			<div className="col-md-12">
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
				<label htmlFor="business_type" className="form-label">
					বেবসার ধরণ 
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
				<label htmlFor="license_no" className="form-label">
					লাইসেন্স নং 
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
				<label htmlFor="institute" className="form-label">
					প্রতিস্থানের নাম
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
					মালিকের  নাম
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
					পিতা/স্বামীর নাম 
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
				<label htmlFor="mother_name" className="form-label">
					মায়ের  নাম 
				</label>
				<input
					type="text"
					className={
						errors
							? errors.mother_name
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="mother_name"
					name="mother_name"
					onChange={handleChange}
					value={formData.mother_name}
				/>
				{errors?.mother_name && (
					<div className="invalid-feedback">{errors.mother_name[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="present_addess" className="form-label">
				বর্তমান ঠিকানা 
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
				<label htmlFor="permanent_addess" className="form-label">
				স্থায়ী ঠিকানা 
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
				<label htmlFor="mobile_no" className="form-label">
				মোবাইল 
				</label>
				<input
					type="text"
					className={
						errors
							? errors.mobile_no
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="mobile_no"
					name="mobile_no"
					onChange={handleChange}
					value={formData.mobile_no}
				/>
				{errors?.mobile_no && (
					<div className="invalid-feedback">{errors.mobile_no[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="fee" className="form-label">
				লাইসেন্স ফী  
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
				লাইসেন্স ফী প্রদানের পরিমাণ কথায় 
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
				ভ্যাট
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
				 ভ্যাট প্রদানের পরিমান কথায়
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
				<label htmlFor="nid" className="form-label">
				 এনআইডি 
				</label>
				<input
					type="text"
					className={
						errors
							? errors.nid
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="nid"
					name="nid"
					onChange={handleChange}
					value={formData.nid}
				/>
				{errors?.nid && (
					<div className="invalid-feedback">{errors.nid[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="expire_date" className="form-label">
				লাইসেন্স মেয়াদ 
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
				<label htmlFor="total" className="form-label">
মোট  
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
				<label htmlFor="current_year" className="form-label">
অর্থ বছর   
				</label>
				<input
					type="text"
					className={
						errors
							? errors.current_year
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="current_year"
					name="current_year"
					onChange={handleChange}
					value={formData.current_year}
				/>
				{errors?.current_year && (
					<div className="invalid-feedback">{errors.current_year[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			
	
		

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

export default AddTradeLicenseForm;
