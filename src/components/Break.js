import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Break = ({breakLen, onBreakDec, onBreakInc}) => {

    return (
        <div>
            {/* User Story #1: I can see an element with id="break-label" that contains a string (e.g. "Break Length"). */}
            <h2 id="break-label">Break Length</h2>
            {/* User Story #3: I can see two clickable elements with corresponding IDs: id="break-decrement" and id="session-decrement". */}
            <button id="break-decrement" onClick={onBreakDec}><FontAwesomeIcon icon={faArrowDown} /></button>
            {/* User Story #5: I can see an element with a corresponding id="break-length", which by default (on load) displays a value of 5. */}
            <span id="break-length">{breakLen}</span>
            {/* User Story #4: I can see two clickable elements with corresponding IDs: id="break-increment" and id="session-increment". */}
            <button id="break-increment" onClick={onBreakInc}><FontAwesomeIcon icon={faArrowUp} /></button>
        </div>
    );
}

export default Break;