import React from "react";
import TextField  from '@material-ui/core/TextField';
import Fab from "@material-ui/core/Fab/Fab";
import AddIcon from '@material-ui/icons/Add';
import '../styles/Input.scss';

function Input({currentValue, onChange, addDeed}) {
    return (
        <form onSubmit={addDeed} action="">
            <div className="input">
                <TextField
                    margin="normal"
                    onChange={onChange}
                    value={currentValue}
                    fullWidth
                />
                <Fab type="submit" className="input__add" color="secondary" aria-label="Add">
                    <AddIcon />
                </Fab>
            </div>
        </form>
    )
}

export default Input