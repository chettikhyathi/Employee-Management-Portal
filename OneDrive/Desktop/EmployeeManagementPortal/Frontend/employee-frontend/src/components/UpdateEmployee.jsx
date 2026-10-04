import { useEffect, useState } from "react";
import {
    getEmployeeById,
    updateEmployee
} from "../services/api";

import {
    useNavigate,
    useParams
} from "react-router-dom";

function UpdateEmployee() {

    const { eid } = useParams();

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        ename: "",
        salary: "",
        age: "",
        city: "",
        state: ""
    });

    useEffect(() => {

        const getEmployee = async () => {

            try {

                const data = await getEmployeeById(eid);

                setEmployee({
                    ename: data.ename,
                    salary: data.salary,
                    age: data.age,
                    city: data.city,
                    state: data.state
                });

            } catch (error) {

                console.log(error);

                alert("Employee not found");

                navigate("/");

            }

        };

        getEmployee();

    }, [eid, navigate]);

    const handleChange = (e) => {

        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await updateEmployee(eid, {
                ename: employee.ename,
                salary: Number(employee.salary),
                age: Number(employee.age),
                city: employee.city,
                state: employee.state
            });

            alert("Employee updated successfully!");

            navigate("/");

        } catch (error) {

            console.log(error);

            alert("Employee update failed");

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

                    <h1>Update Employee</h1>

                    <p>
                        Update employee #{eid} details
                    </p>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label>Employee Name</label>

                        <input
                            type="text"
                            name="ename"
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
                        Update Employee
                    </button>

                </form>

            </div>

        </div>
    );
}

export default UpdateEmployee;