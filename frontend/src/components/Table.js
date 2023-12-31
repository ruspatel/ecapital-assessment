import React from 'react';
import ContentEditable from 'react-contenteditable';
import {
    StyledTable,
    DataCell,
    TableHeader,
    TableHeaderRow,
    HeaderCell,
    TableBody,
    TableRow,
    StyledButton,
    StyledInput,
    DataEntryRow,
    AddButton
} from './CommonComponents';

// Table component is responsible for generating the table with data and callback functions passed from Employee.
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
                            <TableRow backgroundColor={index%2 === 0 ? "white" : "#EEEEEE"}>
                                {headings.map((heading) => {
                                    return(
                                        <DataCell>
                                            <ContentEditable 
                                                html={String(dataRow[heading['id']])}
                                                disabled={!editStatus[index]['status']}
                                                onChange={(e) => editingData(dataRow['id'], heading['id'], e.target.value)
                                            }/>  
                                        </DataCell>
                                    )
                                })}
                                <DataCell>
                                    <StyledButton
                                        buttonType={editStatus[index]['status'] === false ? 'Edit' : 'Confirm Edit'}
                                        onClick={() => handleEditClick(dataRow['id'])}>
                                            {editStatus[index]['status'] === false ? 'Edit' : 'Confirm Edit'}
                                    </StyledButton>
                                </DataCell>
                                <DataCell>
                                    <StyledButton buttonType={'Delete'} onClick={() => handleDeleteClick(dataRow['id'])}>Delete</StyledButton>
                                </DataCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
                <DataEntryRow>
                    <form onSubmit={(e) => handleAddEmployee(e)}>
                        {headings.map((heading) => {
                            return(
                                <DataCell>
                                    <StyledInput
                                        placeholder={'Enter ' + heading['name']}
                                        type='text'
                                        value={newEmployee[heading['id']]}
                                        onChange={e => updateNewEmployee(heading['id'], e.target.value)}
                                    />
                                </DataCell>
                            );
                        })}
                        <DataCell>
                            <AddButton type='submit' buttonType={'Add'}>Add Employee</AddButton>
                        </DataCell>
                    </form>
                </DataEntryRow>
            </StyledTable>
        </div>
    )
}

export default Table;