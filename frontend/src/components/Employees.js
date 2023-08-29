import React, {useState} from 'react';
import Table from './Table';


function Employees() {

    const headings = [
        { 'name': 'First Name', 'id' : 'first_name' },
        { 'name': 'Last Name', 'id': 'last_name' },
        { 'name': 'Salary', 'id': 'salary'}
    ];

    const employeeData = [
        {'id': '1', 'first_name': 'Jane', 'last_name': 'Doe', 'salary': '$99,000'},
        {'id': '2', 'first_name': 'Ian', 'last_name': 'Malcolm', 'salary': '$99,000'},
        {'id': '3', 'first_name': 'Ellie', 'last_name': 'Sattler', 'salary': '$99,000'},
        {'id': '4', 'first_name': 'Dennis', 'last_name': 'Nedry', 'salary': '$99,000'},
    ];

    const editStatusTemp = [
        {'id': '1', 'status': false},
        {'id': '2', 'status': false},
        {'id': '3', 'status': false},
        {'id': '4', 'status': false},
    ];

    const [employeeDataState, setEmployeeDataState] = useState(employeeData);
    const [employeeDataEdit, setEmployeeDataEdit] = useState(employeeData);
    const [editStatus, setEditStatus] = useState(editStatusTemp);

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
        setEmployeeDataEdit(employeeDataEdit.filter((employee) => employee['id'] !== employeeId));

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