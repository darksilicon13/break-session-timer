import React from 'react';

const Controls = ({onStartStop, onHandleReset}) => {
    return (
        <div>
            {/* User Story #9: I can see a clickable element with a corresponding id="start_stop". */}
            <button id="start_stop" onClick={onStartStop}>start/stop</button>
            {/* User Story #10: I can see a clickable element with a corresponding id="reset". */}
            <button id="reset" onClick={onHandleReset}>reset</button>
        </div>
    );
}

export default Controls;