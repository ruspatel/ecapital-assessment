import React from 'react';
import ContentEditable from 'react-contenteditable';
import {
    StyledTable,
    DataCell,
    TableHeader,
    TableHeaderRow,
    HeaderCell,
    TableBody,
    TableRow
} from './CommonComponents';

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
            <StyledTable>
                <TableHeader>
                    <TableHeaderRow>
                        {headings.map((heading) => {
                            return(
                                <HeaderCell>{heading['name']}</HeaderCell>
                            )
                        })}
                        <HeaderCell></HeaderCell>
                        <HeaderCell></HeaderCell>
                    </TableHeaderRow>
                </TableHeader>
                <TableBody>
                    {data.map((dataRow, index) => {
                        return(
                            <TableRow>
                                {headings.map((heading) => {
                                    return(
                                        <DataCell>
                                            <ContentEditable html={String(dataRow[heading['id']])} disabled={!editStatus[index]['status']} onChange={(e) => editingData(dataRow['id'], heading['id'], e.target.value)}/>  
                                        </DataCell>
                                    )
                                })}
                                <DataCell>
                                    <button onClick={() => handleEditClick(dataRow['id'])}>{editStatus[index]['status'] === false ? 'Edit' : 'Confirm Edit'}</button>
                                </DataCell>
                                <DataCell>
                                    <button onClick={() => handleDeleteClick(dataRow['id'])}>Delete</button>
                                </DataCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
                <TableRow>
                    {headings.map((heading) => {
                        return(
                            <DataCell>
                                <input placeholder={'Enter ' + heading['name']} type='text' value={newEmployee[heading['id']]} onChange={e => updateNewEmployee(heading['id'], e.target.value)}/>
                            </DataCell>
                        );
                    })}
                    <DataCell><button onClick={() => handleAddEmployee()}>Add Employee</button></DataCell>
                </TableRow>
            </StyledTable>
        </div>
    )
}

export default Table;