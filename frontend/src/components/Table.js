import React from 'react';
import ContentEditable from 'react-contenteditable'

function Table(
    {
        headings,
        data,
        editStatus,
        newEmployee,
        handleEditClick,
        handleDeleteClick,
        handleAddEmployee,
        editingData,
        updateNewEmployee,
    }
) {

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        {headings.map((heading) => {
                            return(
                                <th>{heading['name']}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((dataRow, index) => {
                        return(
                            <tr>
                                {headings.map((heading) => {
                                    return(
                                        <td>
                                            <ContentEditable html={String(dataRow[heading['id']])} disabled={!editStatus[index]['status']} onChange={(e) => editingData(dataRow['id'], heading['id'], e.target.value)}/>  
                                        </td>
                                    )
                                })}
                                <td>
                                    <button onClick={() => handleEditClick(dataRow['id'])}>{editStatus[index]['status'] === false ? 'Edit' : 'Confirm Edit'}</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteClick(dataRow['id'])}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    <tr>
                        {headings.map((heading) => {
                            return(
                                <td>
                                    <input placeholder={'Enter ' + heading['name']} type='text' value={newEmployee[heading['id']]} onChange={e => updateNewEmployee(heading['id'], e.target.value)}/>
                                </td>
                            );
                        })}
                        <td><button onClick={() => handleAddEmployee()}>Add Employee</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;