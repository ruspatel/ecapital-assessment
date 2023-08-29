import React from 'react';

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
                                        <td contentEditable={editStatus[index]['status']} onChange={(e) => editingData(dataRow['id'], heading['id'], e.target.value)}>
                                            {dataRow['id']}
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
                </tbody>
            </table>
        </div>
    )
}

export default Table;