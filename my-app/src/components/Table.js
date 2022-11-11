import React from 'react';
import './Table.css';

const Table = () => {
    return <div className='table'>
        <table >
            <tr>
                <td>Time</td>
                <td>Driver</td>
            </tr>
            <tr>
                <td>12.35</td>
                <td>Ruslan</td>
            </tr>
            <tr>
                <td>12.68</td>
                <td>Stuart</td>
            </tr>
        </table>
    </div>
}

export default Table;