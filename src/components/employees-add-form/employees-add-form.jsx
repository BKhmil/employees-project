import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addEmployee({
            name: e.target.name.value,
            salary: e.target.salary.value
        });
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Додайте нового співробітника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={(e) => {
                        this.onSubmit(e);
                    }}
                >
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Як його звати?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}
                    />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}
                    />

                    <button
                        type="submit"
                        className="btn btn-outline-light"
                    >Додати</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;