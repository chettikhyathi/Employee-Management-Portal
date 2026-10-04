import React, { useEffect, useState } from "react";
import {
    getAllEmployees,
    deleteEmployee
} from "../services/api";

import { useNavigate } from "react-router-dom";

function EmployeeList() {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const getEmployees = async () => {

        try {

            setLoading(true);

            const data = await getAllEmployees();

            setEmployees(data);

        } catch (error) {

            console.log(error);

            alert("Unable to load employees");

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {

        getEmployees();

    }, []);

    const handleDelete = async (eid) => {

        const result = window.confirm(
            "Are you sure you want to delete this employee?"
        );

        if (!result) {
            return;
        }

        try {

            await deleteEmployee(eid);

            alert("Employee deleted successfully!");

            getEmployees();

        } catch (error) {

            console.log(error);

            alert("Delete failed");

        }
    };

    return (

        <div className="app-container">

            <nav className="navbar">

                <div className="logo">
                    Employee<span>Hub</span>
                </div>

                <button
                    className="nav-button"
                    onClick={() => navigate("/create")}
                >
                    + Add Employee
                </button>

            </nav>

            <div className="page-container">

                <div className="page-header">

                    <div>
                        <h1>Employee Management</h1>

                        <p>
                            Manage your employees easily and efficiently
                        </p>
                    </div>

                    <div className="employee-count">

                        <span>{employees.length}</span>

                        <small>
                            Total Employees
                        </small>

                    </div>

                </div>

                <div className="table-card">

                    {loading ? (

                        <div className="loading">
                            Loading employees...
                        </div>

                    ) : employees.length === 0 ? (

                        <div className="empty">

                            <h2>No Employees Found</h2>

                            <p>
                                Start by adding your first employee.
                            </p>

                            <button
                                className="primary-button"
                                onClick={() => navigate("/create")}
                            >
                                + Add Employee
                            </button>

                        </div>

                    ) : (

                        <table>

                            <thead>

                                <tr>

                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Salary</th>
                                    <th>Age</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Actions</th>

                                </tr>

                            </thead>

                            <tbody>

                                {employees.map((employee) => (

                                    <tr key={employee.eid}>

                                        <td>
                                            <span className="id-badge">
                                                #{employee.eid}
                                            </span>
                                        </td>

                                        <td>
                                            <strong>
                                                {employee.ename}
                                            </strong>
                                        </td>

                                        <td>
                                            ₹{employee.salary}
                                        </td>

                                        <td>
                                            {employee.age}
                                        </td>

                                        <td>
                                            {employee.city}
                                        </td>

                                        <td>
                                            {employee.state}
                                        </td>

                                        <td>

                                            <div className="action-buttons">

                                                <button
                                                    className="view-button"
                                                    onClick={() =>
                                                        navigate(
                                                            "/view/" +
                                                            employee.eid
                                                        )
                                                    }
                                                >
                                                    View
                                                </button>

                                                <button
                                                    className="edit-button"
                                                    onClick={() =>
                                                        navigate(
                                                            "/update/" +
                                                            employee.eid
                                                        )
                                                    }
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    className="delete-button"
                                                    onClick={() =>
                                                        handleDelete(
                                                            employee.eid
                                                        )
                                                    }
                                                >
                                                    Delete
                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    )}

                </div>

            </div>

        </div>
    );
}

export default EmployeeList;