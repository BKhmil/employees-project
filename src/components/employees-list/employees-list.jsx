import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({ employees, onDelete }) => {
    const elements = employees.map(employee => {
        const { id, ...employeeProps } = employee;
        return (
            <EmployeesListItem
                key={id}
                {...employeeProps}
                onDelete={() => onDelete(id)}
            />
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;