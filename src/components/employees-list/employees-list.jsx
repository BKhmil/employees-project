import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({ employees, onDelete, onToggleProp }) => {
    const elements = employees.map(employee => {
        const { id, ...employeeProps } = employee;
        return (
            <EmployeesListItem
                key={id}
                {...employeeProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => {onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}}
                // onToggleIncrease={() => onToggleIncrease(id)}
                // onToggleRise={() => onToggleRise(id)}
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