import React from 'react';
import Table from './Table';


function Employees() {

    const headings = [
        { name: "First Name", id : "first_name" },
        { name: "Last Name", id: "last_name" },
        { name: "Salary", id: "salary"}
    ];

    const employeeData = [
        {"first_name": "Jane", "last_name": "Doe", "salary": "$99,000"},
        {"first_name": "Ian", "last_name": "Malcolm", "salary": "$99,000"},
        {"first_name": "Ellie", "last_name": "Sattler", "salary": "$99,000"},
        {"first_name": "Dennis", "last_name": "Nedry", "salary": "$99,000"},
    ];

    return(
        <div>
            <Table
                headings={headings}
                data={employeeData}
            />
        </div>
    );
}

export default Employees;