import React from 'react';
import Table from './Table';


function Employees() {

    const headings = [
        { name: 'First Name', id : 'first_name' },
        { name: 'Last Name', id: 'last_name' },
        { name: 'Salary', id: 'salary'}
    ];

    const employeeData = [
        {'id': '1', 'first_name': 'Jane', 'last_name': 'Doe', 'salary': '$99,000'},
        {'id': '2', 'first_name': 'Ian', 'last_name': 'Malcolm', 'salary': '$99,000'},
        {'id': '3', 'first_name': 'Ellie', 'last_name': 'Sattler', 'salary': '$99,000'},
        {'id': '4', 'first_name': 'Dennis', 'last_name': 'Nedry', 'salary': '$99,000'},
    ];

    const handleEditClick = (employeeId) => {
        console.log('edit clicked on employee', employeeId);
    }

    const handleDeleteClick = (employeeId) => {
        console.log('delete clicked on employee', employeeId);
    }

    return(
        <div>
            <Table
                headings={headings}
                data={employeeData}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
            />
        </div>
    );
}

export default Employees;