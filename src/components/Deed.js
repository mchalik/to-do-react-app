import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import { CSSTransitionGroup } from 'react-transition-group';
import '../styles/Deed.scss'

function Deed({deedName, done, deleteDeed, checkDeed}) {
    return (
        <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
        >
            <div className='deed'>
                <label>
                    <Checkbox
                        checked={done}
                        onClick={checkDeed}
                    />
                    <span>{deedName}</span>
                </label>
                <IconButton
                    className="deed__delete"
                    aria-label="Delete"
                    onClick={deleteDeed}
                >
                    <DeleteOutline fontSize="large" />
                </IconButton>
            </div>
        </CSSTransitionGroup>
    )
}
export default  Deed