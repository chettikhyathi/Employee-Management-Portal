import { useState } from "react";
import { createEmployee } from "../services/api";
import { useNavigate } from "react-router-dom";

function CreateEmployee() {

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        ename: "",
        salary: "",
        age: "",
        city: "",
        state: ""
    });

    const handleChange = (e) => {

        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await createEmployee({
                ename: employee.ename,
                salary: Number(employee.salary),
                age: Number(employee.age),
                city: employee.city,
                state: employee.state
            });

            alert("Employee created successfully!");

            navigate("/");

        } catch (error) {

            console.log(error);

            alert("Employee creation failed");

        }
    };

    return (

        <div className="form-page">

            <div className="form-card">

                <div className="form-header">

                    <button
                        className="back-button"
                        onClick={() => navigate("/")}
                    >
                        ← Back
                    </button>

                    <h1>Create Employee</h1>

                    <p>
                        Add a new employee to the system
                    </p>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label>Employee Name</label>

                        <input
                            type="text"
                            name="ename"
                            placeholder="Enter employee name"
                            value={employee.ename}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="form-row">

                        <div className="form-group">

                            <label>Salary</label>

                            <input
                                type="number"
                                name="salary"
                                placeholder="Enter salary"
                                value={employee.salary}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="form-group">

                            <label>Age</label>

                            <input
                                type="number"
                                name="age"
                                placeholder="Enter age"
                                value={employee.age}
                                onChange={handleChange}
                                required
                            />

                        </div>

                    </div>

                    <div className="form-row">

                        <div className="form-group">

                            <label>City</label>

                            <input
                                type="text"
                                name="city"
                                placeholder="Enter city"
                                value={employee.city}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="form-group">

                            <label>State</label>

                            <input
                                type="text"
                                name="state"
                                placeholder="Enter state"
                                value={employee.state}
                                onChange={handleChange}
                                required
                            />

                        </div>

                    </div>

                    <button
                        type="submit"
                        className="submit-button"
                    >
                        Create Employee
                    </button>

                </form>

            </div>

        </div>
    );
}

export default CreateEmployee;