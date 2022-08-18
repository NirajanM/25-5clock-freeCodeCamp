function App() {
    function decreaseBreak() {

    }
    function increaseBreak() {

    }
    function decreaseSession() {

    }
    function increaseSession() {

    }
    function handleStart() {

    }
    function handleReset() {

    }
    return (
        <>
            <div id="break-label">break length</div>
            <div id="session-label">session length</div>
            <button onClick={decreaseBreak} id="break-decrement">B.D.</button>
            <button onClick={decreaseSession} id="session-decrement">S.D.</button>
            <button onClick={increaseBreak} id="break-increment">B.I.</button>
            <button onClick={increaseSession} id="session-increment">S.I.</button>
            <div id="break-length">5</div>
            <div id="session-length">25</div>
            <div id="timer-label">Session</div>
            <div id="time-left">25:00</div>
            <button id="start_stop" onClick={handleStart}>start/stop</button>
            <button id="reset" onClick={handleReset}></button>
        </>
    );
}
ReactDOM.render(<App />, document.getElementById("root"));