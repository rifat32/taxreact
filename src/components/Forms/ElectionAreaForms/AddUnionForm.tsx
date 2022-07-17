import React, { useState, useEffect } from "react";
import { BACKENDAPI } from "../../../config";
import { apiClient } from "../../../utils/apiClient";
import { toast } from "react-toastify";
import { UpdateFormInterface } from "../../../interfaces/UpdateFormInterfaced";
import { ErrorMessage } from "../../../utils/ErrorMessage";

interface FormData {
	name: string;
	image: string;
}

const AddUnionForm: React.FC<UpdateFormInterface> = (props) => {
	const [formData, setFormData] = useState<FormData>({
	name: "",
	image: ""
	});
	
	const [errors, setErrors] = useState<any>(null);

const invalidInputHandler = (error:any) => {
	if (error.status === 422) {
		setErrors(error.data.errors);
	}
}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const resetFunction = () => {
		setFormData({
			name: "",
			image: ""
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
			.post(`${BACKENDAPI}/v1.0/unions`, { ...formData })
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
			.put(`${BACKENDAPI}/v1.0/unions`, { ...formData })
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

	const [imageFile, setImageFile] = useState<any>();
	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	
		if (!e.target.files) {
			return;
		  }
		 
		let file = e.target.files[0]
		setImageFile(file)

            let data:any = new FormData();
            data.append('image', file, file.name);
            apiClient().post(`${BACKENDAPI}/v1.0/image/upload/single/union`, data, {
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
	
	return (
		<form className="row g-3" onSubmit={handleSubmit}>
		
			<div className="col-md-4">
				<label htmlFor="name" className="form-label">
					 নাম
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
				<label htmlFor="sku" className="form-label">
				 {" image"}
				</label>
				
	
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

export default AddUnionForm;
