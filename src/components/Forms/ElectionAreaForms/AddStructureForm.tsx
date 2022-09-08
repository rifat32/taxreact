import React, { useState, useEffect } from "react";
import { BACKENDAPI } from "../../../config";
import { apiClient } from "../../../utils/apiClient";
import { toast } from "react-toastify";
import { UpdateFormInterface } from "../../../interfaces/UpdateFormInterfaced";
import { ErrorMessage } from "../../../utils/ErrorMessage";

interface FormData {
	
	union_id: string;
	strong_house_tax: string;
	half_strong_house_tax: string;
	weak_house_tax: string;




	strong_house_yearly_tax: string;
	half_strong_yearly_tax: string;
	weak_house_yearly_tax: string;
}

const AddStructureForm: React.FC<UpdateFormInterface> = (props) => {
	const [formData, setFormData] = useState<FormData>({
	union_id:'',
	strong_house_tax: "",
	half_strong_house_tax: "",
	weak_house_tax: "",


	strong_house_yearly_tax: "",
	half_strong_yearly_tax: "",
	weak_house_yearly_tax: "",
	});
	
	const [errors, setErrors] = useState<any>(null);

	const [unions, setUnions] = useState([]);

	

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
	
				  
	};
	const resetFunction = () => {
		setFormData({
	union_id:'',
	strong_house_tax: "",
	half_strong_house_tax: "",
	weak_house_tax: "",


	strong_house_yearly_tax: "",
	half_strong_yearly_tax: "",
	weak_house_yearly_tax: "",
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
			.post(`${BACKENDAPI}/v1.0/house-structure`, { ...formData })
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
		}
	}, []);
	const updateData = () => {
		apiClient()
			.put(`${BACKENDAPI}/v1.0/house-structure`, { ...formData })
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
			
			<div className="col-md-6">
				<label htmlFor="strong_house_tax" className="form-label">
				পাকা ঘরের  কর 
				</label>
				<input
					type="text"
					className={
						errors
							? errors.strong_house_tax
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="strong_house_tax"
					name="strong_house_tax"
					onChange={handleChange}
					value={formData.strong_house_tax}
				/>
				{errors?.strong_house_tax && (
					<div className="invalid-feedback">{errors.strong_house_tax[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-6">
				<label htmlFor="strong_house_yearly_tax" className="form-label">
				পাকা ঘরের বার্ষিক কর 
				</label>
				<input
					type="text"
					className={
						errors
							? errors.strong_house_yearly_tax
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="strong_house_yearly_tax"
					name="strong_house_yearly_tax"
					onChange={handleChange}
					value={formData.strong_house_yearly_tax}
				/>
				{errors?.strong_house_yearly_tax && (
					<div className="invalid-feedback">{errors.strong_house_yearly_tax[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			{/* half strong */}
			<div className="col-md-6">
				<label htmlFor="half_strong_house_tax" className="form-label">
				আধা পাকা ঘরের  কর 
				</label>
				<input
					type="text"
					className={
						errors
							? errors.half_strong_house_tax
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="half_strong_house_tax"
					name="half_strong_house_tax"
					onChange={handleChange}
					value={formData.half_strong_house_tax}
				/>
				{errors?.half_strong_house_tax && (
					<div className="invalid-feedback">{errors.half_strong_house_tax[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-6">
				<label htmlFor="half_strong_yearly_tax" className="form-label">
				আধা পাকা ঘরের বার্ষিক কর 
				</label>
				<input
					type="text"
					className={
						errors
							? errors.half_strong_yearly_tax
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="half_strong_yearly_tax"
					name="half_strong_yearly_tax"
					onChange={handleChange}
					value={formData.half_strong_yearly_tax}
				/>
				{errors?.half_strong_yearly_tax && (
					<div className="invalid-feedback">{errors.half_strong_yearly_tax[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			{/* weak  */}
			<div className="col-md-6">
				<label htmlFor="weak_house_tax" className="form-label">
				কাঁচা  ঘরের  কর 
				</label>
				<input
					type="text"
					className={
						errors
							? errors.weak_house_tax
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="weak_house_tax"
					name="weak_house_tax"
					onChange={handleChange}
					value={formData.weak_house_tax}
				/>
				{errors?.weak_house_tax && (
					<div className="invalid-feedback">{errors.weak_house_tax[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-6">
				<label htmlFor="weak_house_yearly_tax" className="form-label">
				কাঁচা  ঘরের বার্ষিক কর 
				</label>
				<input
					type="text"
					className={
						errors
							? errors.weak_house_yearly_tax
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="weak_house_yearly_tax"
					name="weak_house_yearly_tax"
					onChange={handleChange}
					value={formData.weak_house_yearly_tax}
				/>
				{errors?.weak_house_yearly_tax && (
					<div className="invalid-feedback">{errors.weak_house_yearly_tax[0]}</div>
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

export default AddStructureForm;
