import Board from "../component/Board";

function App() {
    return (
        <div
            style={{
                width: "100%",
                minHeight: "100vh",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0,.7)), url('./cool-background.png')`,
            }}
            className="d-flex justify-content-center align-content-center"
        >
            <Board />
        </div>
    );
}

export default App;
