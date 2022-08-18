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
            <header>25 + 5 Clock</header>
            <div className="holder">
                <h2 id="break-label">break length</h2>
                <div className="flexbox">
                    <button onClick={decreaseBreak} id="break-decrement">⬇</button>
                    <div id="break-length">5</div>
                    <button onClick={increaseBreak} id="break-increment">⬆</button>
                </div>
            </div>
            <div className="holder">
                <h2 id="session-label">session length</h2>
                <div className="flexbox">
                    <button onClick={decreaseSession} id="session-decrement">⬇</button>
                    <div id="session-length">25</div>
                    <button onClick={increaseSession} id="session-increment">⬆</button>
                </div>
            </div>
            <div className="holder">
                <h2 id="timer-label">Session</h2>
                <div id="time-left">25:00</div>
            </div>
            <button id="start_stop" onClick={handleStart}>start/stop</button>
            <button id="reset" onClick={handleReset}>reset</button>
        </>
    );
}
ReactDOM.render(<App />, document.getElementById("root"));