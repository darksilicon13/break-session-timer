import React from 'react';

const Session = ({ sessionLen, onSessionDec, onSessionInc }) => {
    return (
        <div>
            {/* User Story #2: I can see an element with id="session-label" that contains a string (e.g. "Session Length"). */}
            <h2 id="session-label">Session Length</h2>
            {/* User Story #3: I can see two clickable elements with corresponding IDs: id="break-decrement" and id="session-decrement". */}
            <button id="session-decrement" onClick={onSessionDec}>session -</button>
            {/* User Story #6: I can see an element with a corresponding id="session-length", which by default displays a value of 25. */}
            <span id="session-length">{sessionLen}</span>
            {/* User Story #4: I can see two clickable elements with corresponding IDs: id="break-increment" and id="session-increment". */}
            <button id="session-increment" onClick={onSessionInc}>session +</button>
        </div>
    );
}

export default Session;