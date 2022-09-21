import React, { useState, useEffect } from "react";
import { BACKENDAPI } from "../../../config";
import { apiClient } from "../../../utils/apiClient";
import { toast } from "react-toastify";
import { UpdateFormInterface } from "../../../interfaces/UpdateFormInterfaced";
import { ErrorMessage } from "../../../utils/ErrorMessage";

interface FormData {

	payment_for:string;
	amount:string;
	current_year:string;
	union_id:string;
	method_id:string;
	non_citizen_id:string;
	due:string;

	
}

const AddNonHoldingTaxPaymentForm: React.FC<UpdateFormInterface> = (props) => {
	const [formData, setFormData] = useState<FormData>({
		payment_for:"",
		amount:"",
		current_year:"",
		union_id:"",
		non_citizen_id:"",
		method_id:"",
        due:""
	
	});
	
	const [errors, setErrors] = useState<any>(null);

	const [unions, setUnions] = useState([]);
	const [methods, setMethods] = useState([]);
	const [wards, setWards] = useState([]);
	const [citizens, setCitizens] = useState([]);
	

	useEffect(() => {
		loadUnions();
		loadMethods();
	}, []);
	// pagination required
	const loadMethods = () => {
		apiClient()
			.get(`${BACKENDAPI}/v1.0/methods/all`)
			.then((response: any) => {
				console.log(response);
				setMethods(response.data.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};
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
	const loadCitizens = (unionId:string) => {
		apiClient()
			.get(`${BACKENDAPI}/v1.0/nonholding-citizens/unions/${unionId}`)
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
			loadCitizens(e.target.value);
		  }
	
		
				  
	};
	const resetFunction = () => {
		setFormData({
		payment_for:"",
		amount:"",
		current_year:"",
		union_id:"",
		non_citizen_id:"",
		method_id:"",
        due:""
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
			.post(`${BACKENDAPI}/v1.0/non-citizen-tax-payments`, { ...formData })
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
		
			loadCitizens(props.value.union_id)
		}
	}, []);
	const updateData = () => {
		apiClient()
			.put(`${BACKENDAPI}/v1.0/non-citizen-tax-payments`, { ...formData })
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
			
			<div className="col-md-4">
				<label htmlFor="current_year" className="form-label">
				বছরের জন্য অর্থ প্রদান
				</label>
				<input
					type="date"
					className={
						errors
							? errors.payment_for
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="payment_for"
					name="payment_for"
					onChange={handleChange}
					value={formData.payment_for}
				/>
				{errors?.payment_for && (
					<div className="invalid-feedback">{errors.payment_for[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
		
			<div className="col-md-4">
				<label htmlFor="amount" className="form-label">
				পরিমাণ
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
			<div className="col-md-4">
				<label htmlFor="due" className="form-label">
				বকেয়া 
				</label>
				<input
					type="text"
					className={
						errors
							? errors.due
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="due"
					name="due"
					onChange={handleChange}
					value={formData.due}
				/>
				{errors?.due && (
					<div className="invalid-feedback">{errors.due[0]}</div>
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
		
			<div className="col-md-12">
				<label htmlFor="non_citizen_id" className="form-label">
				নন হোল্ডিং নাগরিক 
				</label>
				<select
					className={
						errors
							? errors.non_citizen_id
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="non_citizen_id"
					name="non_citizen_id"
					onChange={handleSelect}
					value={formData.non_citizen_id}>
					<option value="">Please Select</option>
					{citizens.map((el: any, index) => (
						<option
							key={index}
							value={el.id}
							style={{ textTransform: "uppercase" }}>
							{el.license_no}
						</option>
					))}
				</select>
				{errors?.non_citizen_id && (
					<div className="invalid-feedback">{errors.non_citizen_id[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-12">
				<label htmlFor="method_id" className="form-label">
					পরিশোধের পদ্ধতি 
				</label>
				<select
					className={
						errors
							? errors.method_id
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="method_id"
					name="method_id"
					onChange={handleSelect}
					value={formData.method_id}>
					<option value="">Please Select</option>
					{methods.map((el: any, index) => (
						<option
							key={index}
							value={el.id}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.method_id && (
					<div className="invalid-feedback">{errors.method_id[0]}</div>
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

export default AddNonHoldingTaxPaymentForm;
