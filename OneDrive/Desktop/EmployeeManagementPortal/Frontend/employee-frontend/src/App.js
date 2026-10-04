import { BrowserRouter, Routes, Route } from "react-router-dom";

import EmployeeList from "./components/EmployeeList";
import CreateEmployee from "./components/CreateEmployee";
import ViewEmployee from "./components/ViewEmployee";
import UpdateEmployee from "./components/UpdateEmployee";

import "./App.css";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<EmployeeList />}
                />

                <Route
                    path="/create"
                    element={<CreateEmployee />}
                />

                <Route
                    path="/view/:eid"
                    element={<ViewEmployee />}
                />

                <Route
                    path="/update/:eid"
                    element={<UpdateEmployee />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;