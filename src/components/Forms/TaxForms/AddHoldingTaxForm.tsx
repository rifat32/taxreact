import React, { useState, useEffect } from "react";
import { BACKENDAPI } from "../../../config";
import { apiClient } from "../../../utils/apiClient";
import { toast } from "react-toastify";
import { UpdateFormInterface } from "../../../interfaces/UpdateFormInterfaced";
import { ErrorMessage } from "../../../utils/ErrorMessage";

interface FormData {
	union_id: string;
	ward_id: string;
	note:string;
	amount:string;
	current_year:string;
	citizen_id:string;
	holding_no:string
	
}

const AddHoldingTaxForm: React.FC<UpdateFormInterface> = (props) => {
	const [formData, setFormData] = useState<FormData>({
	union_id:'',
	ward_id:'',
	note:"",
	amount:"",
	current_year:"",
	citizen_id:"",
	holding_no:""
	
	});
	
	const [errors, setErrors] = useState<any>(null);

	const [unions, setUnions] = useState([]);
	const [wards, setWards] = useState([]);
	const [citizens, setCitizens] = useState([]);
	

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
				if(props.type !== "update") {
					setFormData({...formData,union_id:response.data.data[0]?.id})
					loadWards(response.data.data[0]?.id );
				}
				
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
	const loadCitizens = (wardId:string) => {
		apiClient()
			.get(`${BACKENDAPI}/v1.0/citizens/wards/${wardId}`)
			.then((response: any) => {
				console.log("dddd",response.data.data);
				setCitizens(response.data.data);
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
	const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		
	};
	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		if(e.target.name == "union_id"){
			loadWards(e.target.value );
		  }
		if(e.target.name == "ward_id"){
			loadCitizens(e.target.value );
		  }
		
				  
	};
	const resetFunction = () => {
		setFormData({
			union_id:'',
			ward_id:'',
			note:"",
			amount:"",
			current_year:"",
			citizen_id:"",
			holding_no:""
		});
	};
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
			.post(`${BACKENDAPI}/v1.0/cizen-taxes`, { ...formData })
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
			loadCitizens(props.value.ward_id)
		}
	}, []);
	const updateData = () => {
		apiClient()
			.put(`${BACKENDAPI}/v1.0/cizen-taxes`, { ...formData })
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
					
					{unions.map((el: any, index) => (
						<option
							key={index}
							value={el.id}
							style={{ textTransform: "uppercase" }}
							selected={index == 0}>
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
			<div className="col-md-12">
				<label htmlFor="holding_no" className="form-label">
				হোল্ডিং নাম্বার 
				</label>
				<input 
				className={
						errors
							? errors.holding_no
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="holding_no"
					name="holding_no"
					onChange={handleChange}
					value={formData.holding_no}>
				</input>
				
				{errors?.holding_no && (
					<div className="invalid-feedback">{errors.holding_no[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="current_year" className="form-label">
			অর্থ বছর
				</label>
				<input
					type="date"
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
			<div className="col-md-4">
				<label htmlFor="amount" className="form-label">
				পরমাণ 
				</label>
				<input
					type="text"
					className={
						errors
							? errors.amount
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="amount"
					name="amount"
					onChange={handleChange}
					value={formData.amount}
				/>
				{errors?.amount && (
					<div className="invalid-feedback">{errors.amount[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-12">
				<label htmlFor="note" className="form-label">
					নোট
				</label>
				<textarea
				
					className={
						errors
							? errors.note
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="note"
					name="note"
					onChange={handleTextAreaChange}
					value={formData.note}
			>
			</textarea>
				{errors?.note && (
					<div className="invalid-feedback">{errors.note[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			
		
		
			<div className="col-md-12">
				<label htmlFor="citizen_id" className="form-label">
				নাগরিক
				</label>
				<select
					className={
						errors
							? errors.citizen_id
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="citizen_id"
					name="citizen_id"
					onChange={handleSelect}
					value={formData.citizen_id}>
					<option value="">Please Select</option>
					{citizens.map((el: any, index) => (
						<option
							key={index}
							value={el.id}
							style={{ textTransform: "uppercase" }}>
							{el.thana_head_name}
						</option>
					))}
				</select>
				{errors?.citizen_id && (
					<div className="invalid-feedback">{errors.citizen_id[0]}</div>
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

export default AddHoldingTaxForm;
