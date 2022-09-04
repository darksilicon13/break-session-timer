import React, { useEffect, useState } from 'react';
import Break from './Break';
import Controls from './Controls';
import Session from './Session';
import Timer from './Timer';
import '../App.css';

const Clock = () => {

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
        setIsSession(true);
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


    return (
        <div>
            <h1>25 + 5 Clock</h1>

            <div className='length-items'>
                <Break breakLen={breakLen} onBreakDec={onBreakDec} onBreakInc={onBreakInc} />
                <Session sessionLen={sessionLen} onSessionDec={onSessionDec} onSessionInc={onSessionInc} />
            </div>
            <Timer timeLeft={timeLeft} isSession={isSession} />
            <Controls isRunning={isRunning} onStartStop={onStartStop} onHandleReset={onHandleReset} />
            {/* User Story #26: When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play.
                This should utilize an HTML5 audio tag and have a corresponding id="beep". */}
            {/* User Story #27: The audio element with id="beep" must be 1 second or longer. */}
            <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
        </div>
    );
}

export default Clock;