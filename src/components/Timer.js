import React, { useEffect, useState } from 'react';

const Timer = () => {

    const [sessionLen, setSessionLen] = useState(25);
    const [breakLen, setBreakLen] = useState(5);
    const [isSession, setIsSession] = useState(true);
    const [isRunning, setIsRunning] = useState(false);
    const [timeLeft, setTimeLeft] = useState(sessionLen * 60);


    // User Story #11: When I click the element with the id of reset, 
    // any running timer should be stopped, 
    // the value within id="break-length" should return to 5, 
    // the value within id="session-length" should return to 25, 
    // and the element with id="time-left" should reset to its default state.
    // User Story #28: The audio element with id of beep must stop playing and be rewound to the beginning when the element with the id of reset is clicked.
    const onHandleReset = () => {
        document.getElementById('beep').pause();
        setIsRunning(false);
        setSessionLen(25);
        setBreakLen(5);
        setTimeLeft(25 * 60);
    }

    // User Story #12: When I click the element with the id of break-decrement, 
    // the value within id="break-length" decrements by a value of 1, 
    // and I can see the updated value.
    const onBreakDec = () => {
        if (isRunning) return;
        if (breakLen === 1) {
            if (isSession) return;
            setTimeLeft(60);
            return;
        }
        setBreakLen(breakLen - 1);
        if (!isSession) {
            setTimeLeft((breakLen - 1) * 60);
        }
    }
    // User Story #13: When I click the element with the id of break-increment, 
    // the value within id="break-length" increments by a value of 1, 
    // and I can see the updated value.
    const onBreakInc = () => {
        if (isRunning) return;
        if (breakLen === 60) {
            if (isSession) return;
            setTimeLeft(breakLen * 60);
            return;
        }
        setBreakLen(breakLen + 1);
        if (!isSession) {
            setTimeLeft((breakLen + 1) * 60);
        }
    }
    // User Story #14: When I click the element with the id of session-decrement, 
    // the value within id="session-length" decrements by a value of 1, 
    // and I can see the updated value.
    const onSessionDec = () => {
        if (isRunning) return;
        if (sessionLen === 1) {
            if (!isSession) return;
            setTimeLeft(60);
            return;
        }
        setSessionLen(sessionLen - 1);
        if (isSession) {
            setTimeLeft((sessionLen - 1) * 60);
        }
    }
    // User Story #15: When I click the element with the id of session-increment,
    // the value within id="session-length" increments by a value of 1, 
    // and I can see the updated value.
    const onSessionInc = () => {
        if (isRunning) return;
        if (sessionLen === 60) {
            if (!isSession) return;
            setTimeLeft(sessionLen * 60);
            return;
        }
        setSessionLen(sessionLen + 1);
        if (isSession) {
            setTimeLeft((sessionLen + 1) * 60);
        }
    }

    // User Story #16: I should not be able to set a session or break length to <= 0.
    // User Story #17: I should not be able to set a session or break length to > 60.


    // User Story #18: When I first click the element with id="start_stop", 
    // the timer should begin running from the value currently displayed in id="session-length", 
    // even if the value has been incremented or decremented from the original value of 25.
    const onStartStop = () => {
        setIsRunning(!isRunning);
    }

    // User Story #20: If the timer is running and I click the element with id="start_stop", 
    // the countdown should pause.
    // User Story #21: If the timer is paused and I click the element with id="start_stop", 
    // the countdown should resume running from the point at which it was paused.
    useEffect(() => {
        if (!isRunning) return;

        if (timeLeft === 0) {
            document.getElementById('beep').play();
            if (isSession) {
                setTimeLeft(breakLen * 60);
                setIsSession(!isSession);
            } else {
                setTimeLeft(sessionLen * 60);
                setIsSession(isSession);
            }
        }
        let timer = setInterval(() => {
            setTimeLeft(timeLeft - 1)
        }, 1000)

        return () => {
            clearInterval(timer);
        }
    }, [timeLeft, isRunning, breakLen, sessionLen, isSession])

    const timerStyle = {
        color: timeLeft < 60 ? "red" : "black"
    }


    return (
        <div>
            <h1>25 + 5 Clock</h1>

            <div>
                {/* User Story #1: I can see an element with id="break-label" that contains a string (e.g. "Break Length"). */}
                <h2 id="break-label">Break Length</h2>
                {/* User Story #3: I can see two clickable elements with corresponding IDs: id="break-decrement" and id="session-decrement". */}
                <button id="break-decrement" onClick={onBreakDec}>break -</button>
                {/* User Story #5: I can see an element with a corresponding id="break-length", which by default (on load) displays a value of 5. */}
                <span id="break-length">{breakLen}</span>
                {/* User Story #4: I can see two clickable elements with corresponding IDs: id="break-increment" and id="session-increment". */}
                <button id="break-increment" onClick={onBreakInc}>break+</button>
            </div>

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

            <div style={timerStyle}>
                {/* User Story #7: I can see an element with a corresponding id="timer-label", that contains a string indicating a session is initialized (e.g. "Session"). */}
                {/* User Story #22: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a break has begun. */}
                {/* User Story #24: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a session has begun. */}
                <h3 id="timer-label">{isSession ? "Session" : "Break"}</h3>
                {/* User Story #8: I can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00). */}
                {/* User Story #19: If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms). */}
                {/* User Story #23: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the id="break-length" element. */}
                {/* User Story #25: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the id="session-length" element. */}
                <h1 id="time-left">{parseInt(timeLeft / 60).toString()}:{(timeLeft % 60).toString().padStart(2, '0')}</h1>
            </div>

            <div>
                {/* User Story #9: I can see a clickable element with a corresponding id="start_stop". */}
                <button id="start_stop" onClick={onStartStop}>start/stop</button>
                {/* User Story #10: I can see a clickable element with a corresponding id="reset". */}
                <button id="reset" onClick={onHandleReset}>reset</button>
            </div>

            {/* User Story #26: When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play.
                This should utilize an HTML5 audio tag and have a corresponding id="beep". */}
            {/* User Story #27: The audio element with id="beep" must be 1 second or longer. */}
            <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
        </div>
    );
}

export default Timer;