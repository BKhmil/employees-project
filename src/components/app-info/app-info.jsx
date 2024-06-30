import './app-info.css';

const AppInfo = (props) => {
    const { employeesAmount, increasedEmployeesAmount } = props;
    return (
        <div className="app-info">
            <h1>Облік співробітників у компанії N</h1>
            <h2>Загальна кількість співробітників: { employeesAmount }</h2>
            <h2>Премію отримають: { increasedEmployeesAmount }</h2>
        </div>
    )
}

export default AppInfo;