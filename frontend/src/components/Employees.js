import React, {useState, useEffect} from 'react';
import Table from './Table';
import axios from 'axios';


function Employees() {

    const baseApi = 'http://127.0.0.1:8000/';
    const headings = [
        { 'name': 'First Name', 'id' : 'first_name' },
        { 'name': 'Last Name', 'id': 'last_name' },
        { 'name': 'Salary', 'id': 'salary'}
    ];

    const [employeeDataState, setEmployeeDataState] = useState([]);
    const [employeeDataEdit, setEmployeeDataEdit] = useState([]);
    const [editStatus, setEditStatus] = useState([]);

    useEffect(() => {
        getEmployeesList();
    }, []);

    const getEmployeesList = () => {
        axios
            .get(baseApi, {})
            .then((resp) => {
                setEmployeeDataState(resp.data);
                setEmployeeDataEdit(resp.data);
                let editStatusIntialize = [];
                resp.data.forEach(element => {
                    editStatusIntialize.push({'id': element['id'], 'status': false})
                });
                setEditStatus(editStatusIntialize);
            }).catch(() => {
                console.log('Error: employees list cannot be obtained');
            })
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

    const handleDeleteClick = (employeeId) => {
        console.log('delete clicked on employee', employeeId);
        setEmployeeDataEdit((employeeList) =>
            employeeList.filter((employee) => employee['id'] !== employeeId)
        );
        setEditStatus(
            editStatus.filter((edit) => edit['id'] !== employeeId)
        );
    }

    return(
        <div>
            <Table
                headings={headings}
                data={employeeDataEdit}
                editStatus={editStatus}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
                editingData={editingData}
            />
        </div>
    );
}

export default Employees;