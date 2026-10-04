import axios from "axios";

const API_URL = "http://localhost:3737";

export const getAllEmployees = async () => {
    const response = await axios.get(`${API_URL}/getEmpList`);
    return response.data;
};

export const getEmployeeById = async (eid) => {
    const response = await axios.get(`${API_URL}/getEmp/${eid}`);
    return response.data;
};

export const createEmployee = async (employee) => {
    const response = await axios.post(
        `${API_URL}/createEmp`,
        employee
    );
    return response.data;
};

export const updateEmployee = async (eid, employee) => {
    const response = await axios.put(
        `${API_URL}/updateEmp/${eid}`,
        employee
    );
    return response.data;
};

export const deleteEmployee = async (eid) => {
    const response = await axios.delete(
        `${API_URL}/delEmp/${eid}`
    );
    return response.data;
};