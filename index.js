function App() {
    function decreaseBreak() {

    }
    function increaseBreak() {

    }
    function decreaseSession() {

    }
    function increaseSession() {

    }
    return (
        <>
            <div id="break-label">break length</div>
            <div id="session-label">session length</div>
            <button onClick={decreaseBreak} id="break-decrement">B.D.</button>
            <button onClick={decreaseSession} id="session-decrement">S.D.</button>
            <button onClick={increaseBreak} id="break-increment">B.I.</button>
            <button onClick={increaseSession} id="session-increment">S.I.</button>
        </>
    );
}
ReactDOM.render(<App />, document.getElementById("root"));