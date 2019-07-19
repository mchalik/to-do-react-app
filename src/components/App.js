import React, { Component } from "react";
import Button from '@material-ui/core/Button'
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>My React App!</h1>
                <Button>
                    Press me
                </Button>
            </div>
        );
    }
}

export default App;