import React, { useState, useEffect } from "react";
import { BACKENDAPI } from "../../../config";
import { apiClient } from "../../../utils/apiClient";
import { toast } from "react-toastify";
import { UpdateFormInterface } from "../../../interfaces/UpdateFormInterfaced";
import { ErrorMessage } from "../../../utils/ErrorMessage";

interface FormData {
	
	union_id: string;
	name: string;
	nid: string;
	mobile: string;
	pro_image: string;
	sign_image: string;
	address: string;
}

const AddChairmanForm: React.FC<UpdateFormInterface> = (props) => {
	const [formData, setFormData] = useState<FormData>({
	
	union_id:'',
	name: "",
	nid: "",
	mobile: "",
	pro_image: "",
	sign_image: "",
	address: "",
	});
	const [imageFile, setImageFile] = useState<any>();
	const [errors, setErrors] = useState<any>(null);

	const [unions, setUnions] = useState([]);
	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	
		if (!e.target.files) {
			return;
		  }
		 
		let file = e.target.files[0]
		setImageFile(file)

            let data:any = new FormData();
            data.append('image', file, file.name);
            apiClient().post(`${BACKENDAPI}/v1.0/image/upload/single/chairman`, data, {
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
	[e.target.name]:response.data.image
}
			})
			})
			.catch((error) => {
				console.log(error.response);
			});

		
	  };
	

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
					
				}
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
	name: "",
	nid: "",
	mobile: "",
	pro_image: "",
	sign_image: "",
	address: "",
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
			.post(`${BACKENDAPI}/v1.0/chairmans`, { ...formData })
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
			.put(`${BACKENDAPI}/v1.0/chairmans`, { ...formData })
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
							selected={index == 0}
							>
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
				<label htmlFor="name" className="form-label"> নাম
				</label>
				<input
					type="text"
					className={
						errors
							? errors.name
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="name"
					name="name"
					onChange={handleChange}
					value={formData.name}
				/>
				{errors?.name && (
					<div className="invalid-feedback">{errors.name[0]}</div>
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
				<label htmlFor="mobile" className="form-label">
				মোবাইল 
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
				<label htmlFor="address" className="form-label">
				থিকানা 
				</label>
				<input
					type="text"
					className={
						errors
							? errors.address
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="address"
					name="address"
					onChange={handleChange}
					value={formData.address}
				/>
				{errors?.address && (
					<div className="invalid-feedback">{errors.address[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			
			<div className="col-md-4">
				<label htmlFor="sku" className="form-label">
				 {"profile image"}
				</label>
				
	
				<input
					type="file"
					className={
						errors
							? errors.pro_image
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="pro_image"
					name="pro_image"
					onChange={handleImageChange}
			
				/>
				{errors?.pro_image && (
					<div className="invalid-feedback">{errors.pro_image[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="sku" className="form-label">
				 {"sign image"}
				</label>
			
	
				<input
					type="file"
					className={
						errors
							? errors.sign_image
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="sign_image"
					name="sign_image"
					onChange={handleImageChange}
			
				/>

				{errors?.sign_image && (
					<div className="invalid-feedback">{errors.sign_image[0]}</div>
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

export default AddChairmanForm;
