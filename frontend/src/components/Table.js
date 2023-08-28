import React from 'react';

function Table(
    {
        headings,
        data,
        handleEditClick,
        handleDeleteClick
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
                    {data.map((dataRow) => {
                        return(
                            <tr>
                                {headings.map((heading) => {
                                    return(
                                        <td>{dataRow[heading.id]}</td> 
                                    )
                                })}
                                <td>
                                    <button onClick={() => handleEditClick(dataRow['id'])}>edit</button>
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