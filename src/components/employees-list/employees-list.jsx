import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({ employees }) => {
    return (
        <ul className="app-list list-group">
            {
                employees.map((employee, index) =>
                    <EmployeesListItem
                        key={index}
                        {...employee}
                    />)
            }
        </ul>
    )
}

export default EmployeesList;