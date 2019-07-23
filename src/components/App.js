import React, { Component } from "react";
import Container from '@material-ui/core/Container'
import Input from './Input.js';
import Deed from './Deed.js';
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                []
            ],
            input: 'Дело',
            currentView: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.addDeed = this.addDeed.bind(this);
        this.deleteDeed = this.deleteDeed.bind(this);
    }
    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }
    addDeed(e) {
        e.preventDefault();
        console.log(e);
        if (this.state.input === '') return;

        const historyCopy = this.state.history.slice();
        const lastEntry = historyCopy[historyCopy.length - 1];

        historyCopy.push([...lastEntry, {
            name: this.state.input,
            done: false,
            order: historyCopy.length
        }]);
        this.setState({
            history: historyCopy,
            input: '',
            currentView: this.state.currentView + 1
        });

    }
    deleteDeed( num ) {
        const historyCopy = this.state.history.slice();
        const lastEntry = historyCopy[historyCopy.length - 1];
        const reducedEntry = lastEntry.filter(({order}) => order !== num );

        historyCopy.push(reducedEntry);
        this.setState({
            history: historyCopy,
            currentView: this.state.currentView + 1
        })
    }
    render() {
        const current = this.state.history[this.state.history.length - 1];
        const thingsList = current.map(item => (
            <Deed
                deedName={item.name}
                done={item.done}
                deleteDeed={this.deleteDeed.bind(this, item.order)}
                key={item.order}
            />
        ));

        return (
            <Container className="container" maxWidth="sm">
                <h1>Список Дел</h1>
                <Input currentValue={this.state.input} onChange={this.handleChange} addDeed={this.addDeed} />
                {thingsList}

                {!!this.state.currentView && <div>Show something</div>}
            </Container>
        );
    }
}

export default App;