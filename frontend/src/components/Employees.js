import React, {useState, useEffect} from 'react';
import Table from './Table';
import axios from 'axios';
import {
    Header,
    Title,
    Card,
    ErrorMessage
} from './CommonComponents';


function Employees() {

    const baseApi = 'http://127.0.0.1:8000/';
    const headings = [
        { 'name': 'First Name', 'id' : 'first_name' },
        { 'name': 'Last Name', 'id': 'last_name' },
        { 'name': 'Salary', 'id': 'salary'},
    ];

    const [employeeDataState, setEmployeeDataState] = useState([]);
    const [employeeDataEdit, setEmployeeDataEdit] = useState([]);
    const [editStatus, setEditStatus] = useState([]);
    const [errorStatus, setErrorStatus] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [newEmployee, setNewEmployee] = useState({
        first_name: '',
        last_name: '',
        salary: ''
    });

    useEffect(() => {
        getEmployeesList();
    }, []);

    // Populating table with result from GET employees endpoint
    const getEmployeesList = () => {
        axios
            .get(baseApi, {})
            .then((resp) => {
                let formattedResp = resp.data.map((employee) => {
                    let salary = '$' + employee['salary'].toLocaleString('en-US');
                    return {...employee, 'salary': salary};
                });
                setEmployeeDataState(formattedResp);
                setEmployeeDataEdit(formattedResp);
                let editStatusIntialize = [];
                resp.data.forEach(element => {
                    editStatusIntialize.push({'id': element['id'], 'status': false})
                });
                setEditStatus(editStatusIntialize);
                setErrorStatus(false);
            }).catch(() => {
                setErrorStatus(true);
                setErrorMessage('Error: could not obtain list of employees');
            })
    }

    // PUT request to update employee data
    const updateEmployeeData = (employeeId, employeeData) => {
        axios
            .put(baseApi + `update-employee/${employeeId}/`, employeeData)
            .then((resp) => {
                let formattedResp = {...resp.data, 'salary': '$' + resp.data['salary'].toLocaleString('en-US')};
                setEmployeeDataEdit(employeeDataEdit.map(employee => {
                    if (employee['id'] == employeeId){
                        return formattedResp;
                    } else {
                        return employee;
                    }
                }));
                setErrorStatus(false);
            }).catch(() => {
                setErrorStatus(true);
                setErrorMessage('Error: employee could not be updated');
            })
    }

    // Delete request to delete employee from table
    const deleteEmployee = (employeeId) => {
        axios
            .delete(baseApi + `delete-employee/${employeeId}/`)
            .then(() => {
                setEmployeeDataEdit((employeeList) =>
                    employeeList.filter((employee) => employee['id'] !== employeeId)
                );
                setEditStatus((editStatuses) =>
                    editStatuses.filter((employeeEditStatus) => employeeEditStatus['id'] !== employeeId)
                );
                setErrorStatus(false);
            }).catch(() => {
                setErrorStatus(true);
                setErrorMessage('Error: could not delete employee from table.');
            });
    }

    const handleEditClick = (employeeId) => {
        console.log('edit clicked on employee', employeeId);
        let currEditStatus = false;

        // Toggle edit status
        setEditStatus(editStatus.map(edit => {
            if (edit['id'] === employeeId) {
                currEditStatus = edit['status'];
                return {...edit, 'status': !edit['status']};
            } else {
                return edit;
            }
        }));

        // Edit was confirmed, save changes
        if(currEditStatus === true){
            console.log("call update api");
            setEmployeeDataState(employeeDataEdit);
            const employeeData = employeeDataEdit.filter(employee => employee['id'] === employeeId);
            let formattedSalary = employeeData[0]['salary'].replaceAll('$', '').replaceAll(',', '');
            let employeeRequestBody = {
                first_name: employeeData[0]['first_name'],
                last_name: employeeData[0]['last_name'],
                salary: formattedSalary
            }
            updateEmployeeData(employeeId, employeeRequestBody);
        }
    }

    // Update data as it is being edited
    const editingData = (employeeId, headerId, newValue) => {
        console.log("new value", newValue);
        setEmployeeDataEdit(employeeDataEdit.map(employeeData => {
            if (employeeData['id'] === employeeId){
                return {...employeeData, [headerId]: newValue};
            } else {
                return employeeData;
            }
        }));

    }

    // Handler to respond to delete click on rows
    const handleDeleteClick = (employeeId) => {
        console.log('delete clicked on employee', employeeId);
        deleteEmployee(employeeId);
    }

    const handleAddEmployee = (e) => {
        axios
            .post(baseApi + `add-employee/`, newEmployee)
            .then((resp) => {
                let formattedResp = {...resp.data, 'salary': '$' + resp.data['salary'].toLocaleString('en-US')};
                setEmployeeDataEdit(oldEmployeeList => [...oldEmployeeList, formattedResp])
                setEditStatus(oldEditList => [...oldEditList, {id: formattedResp['id'], status: false}])
                setNewEmployee({
                    first_name: "",
                    last_name: "",
                    salary: ""
                });
                setErrorStatus(false);
            }).catch((err) => {
                setErrorStatus(true);
                setErrorMessage('Error: could not create a new employee');
            });
        e.preventDefault();
    }

    const updateNewEmployee = (field, newValue) => {
        console.log('Updating employee', newValue);
        setNewEmployee({...newEmployee, [field]: newValue});
    }

    return(
        <div>
            <Header>
                <Title>Employees</Title>
            </Header>
            <Card>
                <Table
                    headings={headings}
                    data={employeeDataEdit}
                    editStatus={editStatus}
                    newEmployee={newEmployee}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                    handleAddEmployee={handleAddEmployee}
                    editingData={editingData}
                    updateNewEmployee={updateNewEmployee}
                />
                {errorStatus ? <ErrorMessage>{errorMessage}</ErrorMessage> : <div></div>}
            </Card>
        </div>
    );
}

export default Employees;