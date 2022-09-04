import React from 'react';
import '../App.css'

const Timer = ({ timeLeft, isSession }) => {

    const timerStyle = {
        color: timeLeft < 60 ? "red" : "black"
    }
    
    return (
        <div className="timer" style={timerStyle}>
            {/* User Story #7: I can see an element with a corresponding id="timer-label", that contains a string indicating a session is initialized (e.g. "Session"). */}
            {/* User Story #22: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a break has begun. */}
            {/* User Story #24: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a session has begun. */}
            <h3 id="timer-label">{isSession ? "Session" : "Break"}</h3>
            {/* User Story #8: I can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00). */}
            {/* User Story #19: If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms). */}
            {/* User Story #23: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the id="break-length" element. */}
            {/* User Story #25: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the id="session-length" element. */}
            <h1 id="time-left">{parseInt(timeLeft / 60).toString().padStart(2, '0')}:{(timeLeft % 60).toString().padStart(2, '0')}</h1>
        </div>
    );
}

export default Timer;