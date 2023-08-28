import React from 'react';

function Table() {

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Lewis
                        </td>
                        <td>
                            Burson
                        </td>
                        <td>
                            $99,000
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Ian
                        </td>
                        <td>
                            Malcolm
                        </td>
                        <td>
                            $99,000
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Ellie
                        </td>
                        <td>
                            Sattler
                        </td>
                        <td>
                            $99,000
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Dennis
                        </td>
                        <td>
                            Nedry
                        </td>
                        <td>
                            $99,000
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;