import React from "react";
import IconButton from '@material-ui/core/IconButton';
import { CSSTransitionGroup } from 'react-transition-group';
import '../styles/TimeTravel.scss'

function TimeTravel({goBack, goForth}) {
    return (
            <div className='time-travel'>
                <IconButton
                    className="time-travel__button"
                    aria-label="Step back"
                    onClick={goBack}
                >
                    Назад
                </IconButton>
                <IconButton
                    className="time-travel__button"
                    aria-label="Step forth"
                    onClick={goForth}
                >
                    Вперед
                </IconButton>
            </div>
    )
}
export default  TimeTravel