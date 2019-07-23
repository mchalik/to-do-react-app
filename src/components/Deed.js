import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutline from '@material-ui/icons/DeleteOutline';

function Deed({deedName, done, deleteDeed}) {
    return (
        <div className='deed'>
            <label>
                <Checkbox value={done}/>
                <span>{deedName}</span>
            </label>
            <IconButton className='deed__delete' aria-label="Delete" onClick={deleteDeed}>
                <DeleteOutline fontSize="large" />
            </IconButton>
        </div>
    )
}
export default  Deed