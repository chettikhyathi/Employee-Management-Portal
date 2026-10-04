import { useEffect, useState } from "react";
import { getEmployeeById } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

function ViewEmployee() {

    const { eid } = useParams();

    const navigate = useNavigate();

    const [employee, setEmployee] = useState(null);

    useEffect(() => {

        const getEmployee = async () => {

            try {

                const data = await getEmployeeById(eid);

                setEmployee(data);

            } catch (error) {

                console.log(error);

                alert("Employee not found");

                navigate("/");

            }

        };

        getEmployee();

    }, [eid, navigate]);

    if (!employee) {

        return (
            <div className="loading-page">
                Loading employee details...
            </div>
        );

    }

    return (

        <div className="form-page">

            <div className="details-card">

                <button
                    className="back-button"
                    onClick={() => navigate("/")}
                >
                    ← Back
                </button>

                <h1>Employee Details</h1>

                <p className="details-subtitle">
                    Employee ID #{employee.eid}
                </p>

                <div className="profile-circle">
                    {employee.ename.charAt(0).toUpperCase()}
                </div>

                <h2 className="employee-name">
                    {employee.ename}
                </h2>

                <div className="details-grid">

                    <div className="detail-box">

                        <span>Employee ID</span>

                        <strong>
                            #{employee.eid}
                        </strong>

                    </div>

                    <div className="detail-box">

                        <span>Name</span>

                        <strong>
                            {employee.ename}
                        </strong>

                    </div>

                    <div className="detail-box">

                        <span>Salary</span>

                        <strong>
                            ₹{employee.salary}
                        </strong>

                    </div>

                    <div className="detail-box">

                        <span>Age</span>

                        <strong>
                            {employee.age}
                        </strong>

                    </div>

                    <div className="detail-box">

                        <span>City</span>

                        <strong>
                            {employee.city}
                        </strong>

                    </div>

                    <div className="detail-box">

                        <span>State</span>

                        <strong>
                            {employee.state}
                        </strong>

                    </div>

                </div>

                <button
                    className="submit-button"
                    onClick={() =>
                        navigate("/update/" + employee.eid)
                    }
                >
                    Edit Employee
                </button>

            </div>

        </div>
    );
}

export default ViewEmployee;