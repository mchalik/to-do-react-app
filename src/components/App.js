import React, {Component} from "react";
import Container from '@material-ui/core/Container'
import Input from './Input.js';
import Deed from './Deed.js';
import TimeTravel from './TimeTravel.js';
import '../styles/App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                []
            ],
            input: 'Дело',
            currentView: 0,
            allDeedsCount: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.addDeed = this.addDeed.bind(this);
        this.deleteDeed = this.deleteDeed.bind(this);
        this.textInput = React.createRef();
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }

    addDeed(e) {
        e.preventDefault();
        this.textInput.current.focus();
        if (this.state.input === '') return;

        const historyCopy = deepClone(this.state.history.slice(0, this.state.currentView + 1));
        const lastEntry = historyCopy[this.state.currentView];

        historyCopy.push([...lastEntry, {
            name: this.state.input,
            done: false,
            order: this.state.allDeedsCount
        }]);

        this.setState({
            history: historyCopy,
            input: '',
            currentView: this.state.currentView + 1,
            allDeedsCount: this.state.allDeedsCount + 1
        });
    }

    checkDeed(num) {
        const historyCopy = deepClone(this.state.history.slice(0, this.state.currentView + 1));
        const lastEntry = deepClone(historyCopy[this.state.currentView]);
        const newEntry = lastEntry.map((item) => {
            if (item.order === num) item.done = !item.done;
            return item;
        });

        historyCopy.push(newEntry);

        this.setState({
            history: historyCopy,
            currentView: this.state.currentView + 1
        });

    }

    deleteDeed(num) {
        const historyCopy = deepClone(this.state.history.slice(0, this.state.currentView + 1));
        const lastEntry = historyCopy[this.state.currentView];
        const reducedEntry = lastEntry.filter(({order}) => order !== num);

        historyCopy.push(reducedEntry);

        this.setState({
            history: historyCopy,
            currentView: this.state.currentView + 1
        })
    }

    turnStep(direction) {
        if (direction === 'back') {
            this.setState({
                currentView: this.state.currentView - 1
            });
        } else if (direction === 'forth') {
            this.setState({
                currentView: this.state.currentView + 1
            });
        }
    }

    render() {
        const current = this.state.history[this.state.currentView];
        const thingsList = current.map(item => (
            <Deed
                deedName={item.name}
                done={item.done}
                deleteDeed={this.deleteDeed.bind(this, item.order)}
                checkDeed={this.checkDeed.bind(this, item.order)}
                key={item.order}
            />
        ));

        return (
            <Container className="container" maxWidth="sm">
                <h1>Список Дел</h1>
                <Input
                    currentValue={this.state.input}
                    onChange={this.handleChange}
                    addDeed={this.addDeed}
                    curRef={this.textInput}
                />
                {thingsList}
                <div className="container__time-control time-control">
                    <TimeTravel
                        action={this.turnStep.bind(this, 'back')}
                        disabled={this.state.currentView === 0}
                        className="time-control__btn"
                    >
                        Назад{this.state.currentView > 0}
                    </TimeTravel>
                    <TimeTravel
                        action={this.turnStep.bind(this, 'forth')}
                        disabled={this.state.currentView + 1 === this.state.history.length}
                        className="time-control__btn"
                    >
                        Вперед{this.state.currentView + 1 < this.state.history.length}
                    </TimeTravel>
                </div>
            </Container>
        );
    }
}

export default App;

function deepClone(arrObj) {
    if (!arrObj) return arrObj;
    if (typeof arrObj !== 'object') return arrObj;

    let newArrObj;
    if (Array.isArray(arrObj)) {
        newArrObj = [];
    } else {
        newArrObj = {};
    }

    for (let i in arrObj) {
        if (typeof arrObj[i] === 'object') {
            newArrObj[i] = deepClone(arrObj[i]);
        } else {
            newArrObj[i] = arrObj[i]
        }
    }
    return newArrObj;
}