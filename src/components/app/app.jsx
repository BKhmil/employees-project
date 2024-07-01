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
            ],
            term: '',
            filter: 'all'
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

    searchEmp = (items, term) => {
        if (term.length === 0) return items;

        return items.filter(elem => elem.name.indexOf(term) > -1)
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(elem => elem.rise);
            case 'moreThen1000':
                return items.filter(elem => elem.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter });
    }

    render() {
        const { data, term, filter } = this.state;

        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (<div className='app'>
            <AppInfo
                employeesAmount={data.length}
                increasedEmployeesAmount={data.filter(employee => employee.increase).length}
            />

            <div className="search-panel">
                <SearchPanel term={term} onUpdateSearch={this.onUpdateSearch} />
                <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
            </div>

            <EmployeesList
                employees={visibleData}
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