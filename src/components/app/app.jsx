import { Component } from 'react';

import nextId from "react-id-generator";

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, name: 'John C.', salary: 800 },
                { id: 2, name: 'Alex M.', salary: 3000 },
                { id: 3, name: 'Carl W.', salary: 5000 }
            ]
        }
    }

    addEmployee = (formData) => {
        this.setState(({ data }) => {
            const newData = [...data, {
                id: nextId(),
                ...formData
            }];
            return {
                data: newData
            }
        });
    }

    deleteEmployee = (id) => {
        this.setState(({ data }) => {
            // BY findIndex + slice
            // const index = data.findIndex(elem => elem.id === id);
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // return {
            //     data: [...before, ...after]
            // }

            // BY filter
            const newData = data.filter(elem => elem.id !== id);
            return {
                data: newData
            }
        });
    }

    render() {
        const { data } = this.state;

        return (<div className='app'>
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList
                employees={data}
                onDelete={this.deleteEmployee}
            />
            <EmployeesAddForm addEmployee={this.addEmployee} />
        </div>)
    }
}

export default App;