import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import { CSSTransitionGroup } from 'react-transition-group';
function Deed({deedName, done, deleteDeed, key}) {
    return (
        <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
        >
            <div className='deed' key={key}>
                <label>
                    <Checkbox value={done}/>
                    <span>{deedName}</span>
                </label>
                <IconButton className='deed__delete' aria-label="Delete" onClick={deleteDeed}>
                    <DeleteOutline fontSize="large" />
                </IconButton>
            </div>
        </CSSTransitionGroup>
    )
}
export default  Deed