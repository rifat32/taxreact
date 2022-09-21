import React, { useState, useEffect } from "react";
import { BACKENDAPI } from "../../../config";
import { apiClient } from "../../../utils/apiClient";
import { toast } from "react-toastify";
import { UpdateFormInterface } from "../../../interfaces/UpdateFormInterfaced";
import { ErrorMessage } from "../../../utils/ErrorMessage";

interface FormData {

	union_id: string;
    complain_no:string;
    year:string;
    complain_date:string;
    applicant_name:string;
    applicant_father_name:string;
    applicant_witness:string;
    applicant_village:string;
    applicant_post_office:string;
    applicant_district:string;
    applicant_thana:string;
    defendant_name:string;
    defendants:string;
    defendant_father_name:string;
    defendant_village:string;
    defendant_post_office:string;
    defendant_district:string;
    defendant_thana:string;
    applicant_mobile:string;
    date:string;
    time:string;
    place:string;
    status:string;
    chairman_id:string;

}

const AddCaseForm: React.FC<UpdateFormInterface> = (props) => {
	const [formData, setFormData] = useState<FormData>({
	union_id:'',
    complain_no:"",
    year:"",
    complain_date:"",
    applicant_name:"",
    applicant_father_name:"",
    applicant_witness:"",
    applicant_village:"",
    applicant_post_office:"",
    applicant_district:"",
    applicant_thana:"",
    defendant_name:"",
    defendants:"",
    defendant_father_name:"",
    defendant_village:"",
    defendant_post_office:"",
    defendant_district:"",
    defendant_thana:"",
    applicant_mobile:"",
    date:"",
    time:"",
    place:"",
    status:"unsolved",
    chairman_id:"",
	});
	
	const [errors, setErrors] = useState<any>(null);

	const [unions, setUnions] = useState([]);
    const [chairmans, setChairmans] = useState([]);
    
	

	useEffect(() => {
		loadUnions();
        loadChairman();
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
	const loadChairman = () => {
		apiClient()
			.get(`${BACKENDAPI}/v1.0/chairmans/all`)
			.then((response: any) => {
				console.log(response);
				setChairmans(response.data.data);
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
	
				  
	};
	const resetFunction = () => {
		setFormData({
	union_id:'',
    complain_no:"",
    year:"",
    complain_date:"",
    applicant_name:"",
    applicant_father_name:"",
    applicant_witness:"",
    applicant_village:"",
    applicant_post_office:"",
    applicant_district:"",
    applicant_thana:"",
    defendant_name:"",
    defendants:"",
    defendant_father_name:"",
    defendant_village:"",
    defendant_post_office:"",
    defendant_district:"",
    defendant_thana:"",
    applicant_mobile:"",
    date:"",
    time:"",
    place:"",
    status:"unsolved",
    chairman_id:"",
		});
	};
    // cccccccccccccccccccc
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
			.post(`${BACKENDAPI}/v1.0/complains`, { ...formData })
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
			.put(`${BACKENDAPI}/v1.0/complains`, { ...formData })
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
const handleBadiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  let index:any = e.target.name.split(".")[1];
 let name = formData.applicant_name.split(",");
 name[index] = e.target.value;
 let finalName = name.join(",");
 setFormData({
	...formData,
	applicant_name:finalName
 })
}
const AddBadiValue = () => {
	setFormData({
		...formData,
		applicant_name:`${formData.applicant_name},`
	 })
}
const deleteBadiValue = () => {
	let name = formData.applicant_name.split(",");
	name.pop();
 let finalName = name.join(",");
 setFormData({
	...formData,
	applicant_name:finalName
 })
}
const handleBiBadiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	let index:any = e.target.name.split(".")[1];
   let name = formData.defendant_name.split(",");
   name[index] = e.target.value;
   let finalName = name.join(",");
   setFormData({
	  ...formData,
	  defendant_name:finalName
   })
  }
  const AddBiBadiValue = () => {
	  setFormData({
		  ...formData,
		  defendant_name:`${formData.defendant_name},`
	   })
  }
  const deleteBiBadiValue = () => {
	  let name = formData.defendant_name.split(",");
	  name.pop();
   let finalName = name.join(",");
   setFormData({
	  ...formData,
	  defendant_name:finalName
   })
  }
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
				<label htmlFor="complain_no" className="form-label">
               অভিযোগ নং
				</label>
				<input
					type="text"
					className={
						errors
							? errors.complain_no
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="complain_no"
					name="complain_no"
					onChange={handleChange}
					value={formData.complain_no}
				/>
				{errors?.complain_no && (
					<div className="invalid-feedback">{errors.complain_no[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="year" className="form-label">
              বছর
				</label>
				<input
					type="text"
					className={
						errors
							? errors.year
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="year"
					name="year"
					onChange={handleChange}
					value={formData.year}
				/>
				{errors?.year && (
					<div className="invalid-feedback">{errors.year[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
            <div className="col-md-4">
				<label htmlFor="complain_date" className="form-label">
              অভিযোগের তারিখ
				</label>
				<input
					type="date"
					className={
						errors
							? errors.complain_date
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="complain_date"
					name="complain_date"
					onChange={handleChange}
					value={formData.complain_date}
				/>
				{errors?.complain_date && (
					<div className="invalid-feedback">{errors.complain_date[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<h3>বাদীর  বিবরণ </h3>
			{
					formData.applicant_name.split(",").map( (el,index) => {
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
							? errors[`badi.${index}.name`]
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id={`badi.${index}.name`}
					name={`badi.${index}.name`}
				
					onChange={handleBadiChange}
					value={el}
				/>
					{errors && (
				<>	
				{
					errors[`members.${index}.name`] ? (<div className="invalid-feedback">This field is required</div>):(<div className="valid-feedback">Looks good!</div>)

				}
				
				</>
					
				)}
			</div>
			
		
			
		
			

		
		
					</div>
					)})
				}
				<div className="row">
				<div className=" col-md-4 text-center">
				<button className="btn btn-danger me-2" type="button" onClick={deleteBadiValue}>-</button>
				<button className="btn btn-primary" type="button" onClick={AddBadiValue}>+</button>

			</div>
				</div>
				
           
            <div className="col-md-4">
				<label htmlFor="applicant_father_name" className="form-label">
              পিতার নাম
				</label>
				<input
					type="text"
					className={
						errors
							? errors.applicant_father_name
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="applicant_father_name"
					name="applicant_father_name"
					onChange={handleChange}
					value={formData.applicant_father_name}
				/>
				{errors?.applicant_father_name && (
					<div className="invalid-feedback">{errors.applicant_father_name[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
            <div className="col-md-4">
				<label htmlFor="applicant_witness" className="form-label">
               সাক্ষী 
				</label>
				<input
					type="text"
					className={
						errors
							? errors.applicant_witness
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="applicant_witness"
					name="applicant_witness"
					onChange={handleChange}
					value={formData.applicant_witness}
				/>
				{errors?.applicant_witness && (
					<div className="invalid-feedback">{errors.applicant_witness[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
            <div className="col-md-4">
				<label htmlFor="applicant_village" className="form-label">
                গ্রাম
				</label>
				<input
					type="text"
					className={
						errors
							? errors.applicant_village
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="applicant_village"
					name="applicant_village"
					onChange={handleChange}
					value={formData.applicant_village}
				/>
				{errors?.applicant_village && (
					<div className="invalid-feedback">{errors.applicant_village[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
            <div className="col-md-4">
				<label htmlFor="applicant_post_office" className="form-label">
                পোস্ট অফিস
				</label>
				<input
					type="text"
					className={
						errors
							? errors.applicant_post_office
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="applicant_post_office"
					name="applicant_post_office"
					onChange={handleChange}
					value={formData.applicant_post_office}
				/>
				{errors?.applicant_post_office && (
					<div className="invalid-feedback">{errors.applicant_post_office[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
             <div className="col-md-4">
				<label htmlFor="applicant_district" className="form-label">
                জেলা 
				</label>
				<input
					type="text"
					className={
						errors
							? errors.applicant_district
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="applicant_district"
					name="applicant_district"
					onChange={handleChange}
					value={formData.applicant_district}
				/>
				{errors?.applicant_district && (
					<div className="invalid-feedback">{errors.applicant_district[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
            <div className="col-md-4">
				<label htmlFor="applicant_thana" className="form-label">
               থানা 
				</label>
				<input
					type="text"
					className={
						errors
							? errors.applicant_thana
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="applicant_thana"
					name="applicant_thana"
					onChange={handleChange}
					value={formData.applicant_thana}
				/>
				{errors?.applicant_thana && (
					<div className="invalid-feedback">{errors.applicant_thana[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<h3>বাদীর  বিবরণ </h3>
			{
					formData.defendant_name.split(",").map( (el,index) => {
						return (
					<div className="row">
				<br/>
				<div className="col-md-4">
				<label htmlFor="defendant_name" className="form-label">
					নাম
				</label>
				<input
					type="text"
					className={
						errors
							? errors[`bibadi.${index}.name`]
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id={`bibadi.${index}.name`}
					name={`bibadi.${index}.name`}
				
					onChange={handleBiBadiChange}
					value={el}
				/>
					{errors && (
				<>	
				{
					errors[`members.${index}.name`] ? (<div className="invalid-feedback">This field is required</div>):(<div className="valid-feedback">Looks good!</div>)

				}
				
				</>
					
				)}
			</div>
			
		
			
		
			

		
		
					</div>
					)})
				}
				<div className="row">
				<div className=" col-md-4 text-center">
				<button className="btn btn-danger me-2" type="button" onClick={deleteBiBadiValue}>-</button>
				<button className="btn btn-primary" type="button" onClick={AddBiBadiValue}>+</button>

			</div>
				</div>
				
          
            <div className="col-md-12">
				<label htmlFor="defendants" className="form-label">
                বিবাদীগণ 
				</label>
				<textarea
					
					className={
						errors
							? errors.defendants
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="defendants"
					name="defendants"
					onChange={handleTextAreaChange}
					value={formData.defendants}
				></textarea>
				{errors?.defendants && (
					<div className="invalid-feedback">{errors.defendants[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
            <div className="col-md-4">
				<label htmlFor="defendant_father_name" className="form-label">
                বিবাদীর পিতার নাম
				</label>
				<input
					type="text"
					className={
						errors
							? errors.defendant_father_name
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="defendant_father_name"
					name="defendant_father_name"
					onChange={handleChange}
					value={formData.defendant_father_name}
				/>
				{errors?.defendant_father_name && (
					<div className="invalid-feedback">{errors.defendant_father_name[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
            <div className="col-md-4">
				<label htmlFor="defendant_village" className="form-label">
               গ্রাম
				</label>
				<input
					type="text"
					className={
						errors
							? errors.defendant_village
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="defendant_village"
					name="defendant_village"
					onChange={handleChange}
					value={formData.defendant_village}
				/>
				{errors?.defendant_village && (
					<div className="invalid-feedback">{errors.defendant_village[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
            <div className="col-md-4">
				<label htmlFor="defendant_post_office" className="form-label">
               পোস্ট অফিস
				</label>
				<input
					type="text"
					className={
						errors
							? errors.defendant_post_office
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="defendant_post_office"
					name="defendant_post_office"
					onChange={handleChange}
					value={formData.defendant_post_office}
				/>
				{errors?.defendant_post_office && (
					<div className="invalid-feedback">{errors.defendant_post_office[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
            <div className="col-md-4">
				<label htmlFor="defendant_district" className="form-label">
                জেলা
				</label>
				<input
					type="text"
					className={
						errors
							? errors.defendant_district
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="defendant_district"
					name="defendant_district"
					onChange={handleChange}
					value={formData.defendant_district}
				/>
				{errors?.defendant_district && (
					<div className="invalid-feedback">{errors.defendant_district[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
            <div className="col-md-4">
				<label htmlFor="defendant_thana" className="form-label">
            থানা
				</label>
				<input
					type="text"
					className={
						errors
							? errors.defendant_thana
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="defendant_thana"
					name="defendant_thana"
					onChange={handleChange}
					value={formData.defendant_thana}
				/>
				{errors?.defendant_thana && (
					<div className="invalid-feedback">{errors.defendant_thana[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
            <div className="col-md-4">
				<label htmlFor="applicant_mobile" className="form-label">
                মোবাইল
				</label>
				<input
					type="text"
					className={
						errors
							? errors.applicant_mobile
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="applicant_mobile"
					name="applicant_mobile"
					onChange={handleChange}
					value={formData.applicant_mobile}
				/>
				{errors?.defendant_thana && (
					<div className="invalid-feedback">{errors.applicant_mobile[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
            <div className="col-md-4">
				<label htmlFor="date" className="form-label">
                তারিখ
				</label>
				<input
					type="date"
					className={
						errors
							? errors.date
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="date"
					name="date"
					onChange={handleChange}
					value={formData.date}
				/>
				{errors?.date && (
					<div className="invalid-feedback">{errors.date[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
            <div className="col-md-4">
				<label htmlFor="time" className="form-label">
                সময় 
				</label>
				<input
					type="text"
					className={
						errors
							? errors.time
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="time"
					name="time"
					onChange={handleChange}
					value={formData.time}
				/>
				{errors?.time && (
					<div className="invalid-feedback">{errors.time[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
            <div className="col-md-4">
				<label htmlFor="place" className="form-label">
                স্থান
				</label>
				<input
					type="text"
					className={
						errors
							? errors.place
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="place"
					name="place"
					onChange={handleChange}
					value={formData.place}
				/>
				{errors?.place && (
					<div className="invalid-feedback">{errors.place[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
            <div className="col-md-4">
				<label htmlFor="status" className="form-label">
				is solved
				</label>
				<select
					className={
						errors
							? errors.status
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="status"
					name="status"
					onChange={handleSelect}
					value={formData.status}>
						<option value="unsolved"> অনিষ্পত্তিক্রিত  মামলা</option>
						<option value="ongoing">চলমান মামলা</option>
					<option value="solved">  নিষ্পত্তিক্রিত মামলা</option>
					
				
				</select>
				{errors?.status && (
					<div className="invalid-feedback">{errors.status[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
            <div className="col-md-12">
				<label htmlFor="chairman_id" className="form-label">
					Chairman
				</label>
				<select
					className={
						errors
							? errors.chairman_id
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="chairman_id"
					name="chairman_id"
					onChange={handleSelect}
					value={formData.chairman_id}>
					<option value="">Please Select</option>
					{chairmans.map((el: any, index) => (
						<option
							key={index}
							value={el.id}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.chairman_id && (
					<div className="invalid-feedback">{errors.chairman_id[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
            
            {/* cccccccccccccccccccc */}
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

export default AddCaseForm;
