import React from 'react';
import './Table.css';

const Table = () => {
    return <div className='table'>
        <table >
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Driver</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>12.35</td>
                    <td>Ruslan</td>
                </tr>
                <tr>
                    <td>12.68</td>
                    <td>Stuart</td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default Table;