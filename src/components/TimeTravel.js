import React from "react";
import Button from '@material-ui/core/Button';
import '../styles/TimeTravel.scss'

function TimeTravel({action, children, disabled}) {
    return (
        <Button
            className="time-travel-btn"
            onClick={action}
            variant="contained"
            color="primary"
            disabled={disabled}
        >
            {children}
        </Button>
    )
}
export default  TimeTravel