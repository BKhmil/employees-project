import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Знайти співробітника"
                value={this.props.term}
                onChange={this.onUpdateSearch}
            />
        );
    }
}

export default SearchPanel;