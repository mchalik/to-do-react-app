import React from "react";
import TextField  from '@material-ui/core/TextField';
import Fab from "@material-ui/core/Fab/Fab";
import AddIcon from '@material-ui/icons/Add';

function Input({currentValue, onChange, addDeed}) {
    return (
        <form action="">
            <div className="input">
                <TextField
                    margin="normal"
                    onChange={onChange}
                    value={currentValue}
                    fullWidth
                />
                <Fab className="input__add" color="secondary" aria-label="Add" onClick={addDeed}>
                    <AddIcon />
                </Fab>
            </div>
        </form>
    )
}

export default Input