import React, { useState } from 'react'
import { useForm} from "react-hook-form"
import axios from "axios";
import SkillsCard from './SkillsCard';
const CandidateDetailsForm = ({ userId }) => {
    const [showSkillsCard, setShowSkillsCard] = useState(); 
    const [candidateId, setCandidateId] = useState(null);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const selectedDegree = watch("degree");

    const onSubmit = async (data) => {

        data.user = {
            userId: userId
        };

         try {
            const response = await axios.post(
                "http://localhost:8080/addCandidateProfile",
                data
            );

            console.log("Candidate Profile:", response.data);
            setCandidateId(response.data.candidateId);
            setShowSkillsCard(true);
        } catch (error) {
            console.error(error);
        }
    }

    if(showSkillsCard){
        return <SkillsCard  candidateId={candidateId}/>;
    }
  return (
    <div className='candidate-container'>
        <h2>Register as a candidate</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name</label>
                <input type="text" {...register("name")} />
            </div>

            <div>
                <label>Email</label>
                <input type="text" {...register("email")}/>
            </div>

            <div>
                <label>Mobile</label>
                <input type="text" {...register("mobile")}/>
            </div>
                
           
           <div>
                 <label>Gender</label>

                <div className="gender-options">
                    <label>
                        <input
                            type="radio"
                            value="Male"
                            {...register("gender")}
                        />
                        Male
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="Female"
                            {...register("gender")}
                        />
                        Female
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="Other"
                            {...register("gender")}
                        />
                        Other
                    </label>
                </div>
           </div>


            <div>
                <label>Degree</label>

                <select {...register("degree")}>
                    <option value="">Select</option>
                    <option value="B.E./B.Tech">B.E./B.Tech</option>
                    <option value="BCA">BCA</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="MCA">MCA</option>
                    <option value="M.Tech">M.Tech</option>
                    <option value="MBA">MBA</option>
                    <option value="Other">Other</option>
                </select>
            </div>

           <div>
                <label>Branch</label>

                <select {...register("branch")}>
                    <option value="">Select</option>

                    {selectedDegree === "B.E./B.Tech" && (
                        <>
                            <option value="Computer Engineering">Computer Engineering</option>
                            <option value="Information Technology">Information Technology</option>
                            <option value="Artificial Intelligence & Data Science">Artificial Intelligence & Data Science</option>
                            <option value="Electronics & Telecommunication">Electronics & Telecommunication</option>
                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                            <option value="Civil Engineering">Civil Engineering</option>
                            <option value="Electrical Engineering">Electrical Engineering</option>
                        </>
                    )}

                    {selectedDegree === "BCA" && (
                        <>
                            <option value="Computer Applications">Computer Applications</option>
                        </>
                    )}

                    {selectedDegree === "B.Sc" && (
                        <>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Information Technology">Information Technology</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Physics">Physics</option>
                        </>
                    )}

                    {selectedDegree === "MCA" && (
                        <>
                            <option value="Computer Applications">Computer Applications</option>
                        </>
                    )}

                    {selectedDegree === "M.Tech" && (
                        <>
                            <option value="Computer Engineering">Computer Engineering</option>
                            <option value="Artificial Intelligence">Artificial Intelligence</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Cyber Security">Cyber Security</option>
                        </>
                    )}

                    {selectedDegree === "MBA" && (
                        <>
                            <option value="Finance">Finance</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Human Resource">Human Resource</option>
                            <option value="Business Analytics">Business Analytics</option>
                            <option value="Operations">Operations</option>
                        </>
                    )}

                    {selectedDegree === "Other" && (
                        <>
                            <option value="Other">Other</option>
                        </>
                    )}
                </select>
            </div>

           <div>
                <label>Passout Year</label>

                <select {...register("passoutYear")}>
                    <option value="">Select</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                </select>
            </div>

            <div>
                <label>CGPA</label>

                <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="10"
                    placeholder="Enter your CGPA"
                    {...register("cgpa")}
                />
            </div> 

            <div>
                <button type='submit'>Next</button>
            </div>
        </form>
    </div>
  )
}

export default CandidateDetailsForm
