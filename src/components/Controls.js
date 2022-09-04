import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

const Controls = ({ isRunning, onStartStop, onHandleReset }) => {
    return (
        <div>
            {/* User Story #9: I can see a clickable element with a corresponding id="start_stop". */}
            <button id="start_stop" onClick={onStartStop}>{isRunning ? <FontAwesomeIcon icon={faPause} size={'2xl'} /> : <FontAwesomeIcon icon={faPlay} size={'2xl'} />}</button>
            {/* User Story #10: I can see a clickable element with a corresponding id="reset". */}
            <button id="reset" onClick={onHandleReset}><FontAwesomeIcon icon={faArrowsRotate} size={'2xl'} /></button>
        </div>
    );
}

export default Controls;