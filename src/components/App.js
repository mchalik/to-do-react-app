import React, { Component } from "react";
import Input from './Input.js';
import Deed from './Deed.js';

import Container from '@material-ui/core/Container'
import '../styles/App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                []
            ],
            input: 'Дело'
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
    addDeed() {
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
            input: ''
        });
        console.log('copy', historyCopy);
        console.log('original', this.state.history);
    }
    deleteDeed(num) {
        const historyCopy = this.state.history.slice();
        const lastEntry = historyCopy[historyCopy.length - 1];
        console.log('lastEntry', lastEntry);
        const reducedEntry = lastEntry.filter(({order}) => order !== num );
        console.log('reducedEntry', reducedEntry);

        historyCopy.push([...lastEntry, reducedEntry]);
        
        this.setState({
            history: historyCopy
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
            </Container>
        );
    }
}

export default App;