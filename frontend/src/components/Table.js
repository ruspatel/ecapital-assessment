import React from 'react';
import {DataCell} from './CommonComponents';

function Table(
    {
        headings,
        data,
        editStatus,
        handleEditClick,
        handleDeleteClick,
        editingData
    }
) {

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        {headings.map((heading) => {
                            return(
                                <th>{heading.name}</th>
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
                                            <DataCell readOnly={!editStatus[index]['status']} onChange={(e) => editingData(dataRow['id'], heading['id'], e.target.value)}>{dataRow[heading.id]}</DataCell> 
                                        </td>
                                    )
                                })}
                                <td>
                                    <button onClick={() => handleEditClick(dataRow['id'])}>{editStatus[index]['status'] === false ? 'edit' : 'confirm edit'}</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteClick(dataRow['id'])}>delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table;