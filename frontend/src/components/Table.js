import React from 'react';

function Table(
    {
        headings,
        data
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
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table;