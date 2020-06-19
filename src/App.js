import React, { Component } from 'react';
import CardList from './CardList';
import { employees } from './employees';
import SearchBox from './SearchBox';


class App extends Component {
    //allows searchbox to talk with cardlist and filter
    //employees based on what is typed
    constructor() {
        super()
        this.state = {
            employees: employees,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filtered = this.state.employees.filter(employees => {
            return employees.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return (
            <div className="tc">
            <h1>Dunder Mifflin Employees</h1>
            <SearchBox onSearchChange={this.onSearchChange}/>
            <CardList employees={filtered}/>
            </div>
        );
    }
}
export default App;
