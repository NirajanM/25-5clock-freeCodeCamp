function App() {

    const [breakValue, setBreakValue] = React.useState(5);
    const [sessionValue, setSessionValue] = React.useState(25);
    const [isTimerRunning, setIsTimerRunning] = React.useState(false);
    const [timingType, setTimingType] = React.useState("SESSION");
    const [timeLeft, setTimeLeft] = React.useState(1500);

    const timeout = setTimeout(() => {
        if (timeLeft && isTimerRunning) {
            setTimeLeft(timeLeft - 1)
        }
    }, 1000);

    const timeFormatter = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft - minutes * 60;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        return `${formattedMinutes}:${formattedSeconds}`;
    }

    function decreaseBreak() {
        if (breakValue > 1) {
            setBreakValue(breakValue - 1);
        }
    }
    function increaseBreak() {
        if (breakValue < 60) {
            setBreakValue(breakValue + 1);
        }
    }
    function decreaseSession() {
        if (sessionValue > 1) {
            setSessionValue(sessionValue - 1)
        }
    }
    function increaseSession() {
        if (sessionValue < 60) {
            setSessionValue(sessionValue + 1)
        }
    }
    function handleStart() {
        clearTimeout(timeout);
        setIsTimerRunning(!isTimerRunning);
    }

    function handleReset() {
        clearTimeout(timeout);
        setIsTimerRunning(false);
        setTimeLeft(1500);
        setBreakValue(5);
        setSessionValue(25);
        setTimingType("SESSION");
        const audio = document.getElementById("beep");
        audio.pause()
        audio.currentTime = 0;
    }

    const resetTimer = () => {
        const audio = document.getElementById("beep");
        if (!timeLeft && timingType === "SESSION") {
            setTimeLeft(breakLength * 60)
            setTimingType("BREAK")
            audio.play()
        }
        if (!timeLeft && timingType === "BREAK") {
            setTimeLeft(sessionLength * 60)
            setTimingType("SESSION")
            audio.pause()
            audio.currentTime = 0;
        }
    }

    const clock = () => {
        if (isTimerRunning) {
            timeout
            resetTimer();
        } else {
            clearTimeout(timeout);
        }
    }

    React.useEffect(() => {
        clock()
    }, [isTimerRunning, timeLeft, timeout])

    return (
        <>
            <header>25 + 5 Clock</header>
            <div className="holder">
                <h2 id="break-label">break length</h2>
                <div className="flexbox">
                    <button disabled={isTimerRunning} onClick={decreaseBreak} id="break-decrement">⬇</button>
                    <div id="break-length">{breakValue}</div>
                    <button disabled={isTimerRunning} onClick={increaseBreak} id="break-increment">⬆</button>
                </div>
            </div>
            <div className="holder">
                <h2 id="session-label">session length</h2>
                <div className="flexbox">
                    <button disabled={isTimerRunning} onClick={decreaseSession} id="session-decrement">⬇</button>
                    <div id="session-length">{sessionValue}</div>
                    <button disabled={isTimerRunning} onClick={increaseSession} id="session-increment">⬆</button>
                </div>
            </div>
            <div className="holder">
                <h2 id="timer-label">{timingType == "SESSION" ? "Session" : "Break"}</h2>
                <div id="time-left">{timeFormatter()}</div>
            </div>
            <button id="start_stop" onClick={handleStart}>start/stop</button>
            <button id="reset" onClick={handleReset}>reset</button>
            <audio
                id="beep"
                preload="auto"
                src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
            />
            <footer>created with ♥ by Nirajan</footer>
        </>
    );
}
ReactDOM.render(<App />, document.getElementById("root"));