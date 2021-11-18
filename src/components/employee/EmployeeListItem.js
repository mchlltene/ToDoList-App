import React from 'react'
import '../../styles/employee.css';

const EmployeeListItem = () => {
    return (
        <div className="employee-list">
            <img src="https://unper.ac.id/wp-content/uploads/2016/08/dummy-prod-1.jpg" alt="Nama Gambar"/>
            <ul>
                <li>Nama Lengkap</li>
                <li>Jabatan</li>
            </ul>
        </div>
    )
}

export default EmployeeListItem
