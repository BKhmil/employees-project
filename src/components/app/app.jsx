import { Component } from 'react';

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
                { id: 1, name: 'John C.', salary: 800, increase: false, rise: true },
                { id: 2, name: 'Alex M.', salary: 3000, increase: true, rise: false },
                { id: 3, name: 'Carl W.', salary: 5000, increase: false, rise: false }
            ]
        };
        this.maxId = 4;
    }

    onToggleProp = (id, propName) => {
        // this.setState(({ data }) => {
        //     // BY findIndex and slice
        //     const index = data.findIndex(elem => elem.id === id);

        //     const oldObj = data[index];
        //     const newObj = { ...oldObj, increase: !oldObj.increase }

        //     const newData = [...data.slice(0, index), newObj, ...data.slice(index + 1)];

        //     return {
        //         data: newData
        //     };
        // });
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [propName]: !item[propName] };
                }
                return item;
            })
        }));
    }

    // onToggleRise = (id) => {
    //     this.setState(({ data }) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return { ...item, rise: !item.rise };
    //             }
    //             return item;
    //         })
    //     }));
    // }

    addEmployee = (formData) => {
        this.setState(({ data }) => {
            const newData = [...data, {
                id: this.maxId,
                increase: false,
                rise: false,
                ...formData
            }];
            this.maxId++;
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
            <AppInfo
                employeesAmount={data.length}
                increasedEmployeesAmount={data.filter(employee => employee.increase).length}
            />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList
                employees={data}
                onDelete={this.deleteEmployee}
                onToggleProp={this.onToggleProp}
                // onToggleIncrease={this.onToggleIncrease}
                // onToggleRise={this.onToggleRise}
            />
            <EmployeesAddForm addEmployee={this.addEmployee} />
        </div>)
    }
}

export default App;