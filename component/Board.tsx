import { MDBInput, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ["X", "O", "X"],
// ["O", "X", "O"],
// ["X", "O", "X"],
const steps = [];
const Board = () => {
    const initialState = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ];
    const [state, setState] = useState(initialState);
    const [xTurn, setXTurn] = useState(true);
    const [x, setX] = useState(0);
    const [o, setO] = useState(0);
    const [draw, setDraw] = useState(0);
    const [d, setD] = useState(false);
    const [xName, setXName] = useState("X");
    const [oName, setOName] = useState("O");
    const [xEditable, setXEditable] = useState(false);
    const [oEditable, setOEditable] = useState(false);

    const clearBoard = (e?: string) => {
        setD(true);
        setTimeout(() => {
            if (e === "X") {
                setX(x + 1);
                toast.success(xName + " Won The Game");
            } else if (e === "O") {
                setO(o + 1);
                toast.error(oName + " Won The Game");
            } else {
                setDraw(draw + 1);
                toast.info("Game Draw");
            }
            let clearBoardRef;
            clearTimeout(clearBoardRef);
            clearBoardRef = setTimeout(() => {
                setState(initialState);
                setD(false);
                steps.map((v) => (v.style.backgroundColor = ""));
            }, 5000);
        }, 0);
    };

    const stateChange = (e, b) => {
        steps.push(e.target);
        const c = e.target.value;
        e.target.disabled = true;
        if (!c && xTurn) {
            e.target.style.backgroundColor = "yellowgreen";
            e.target.style.color = "#f7f7f7";
        } else if (!c && !xTurn) {
            e.target.style.color = "#f7f7f7";
            e.target.style.backgroundColor = "red";
        } else {
            e.target.style.backgroundColor = "";
        }
        let temp = state;
        switch (b) {
            case "00":
                temp[0][0] = xTurn ? "X" : "O";
                break;
            case "01":
                temp[0][1] = xTurn ? "X" : "O";
                break;
            case "02":
                temp[0][2] = xTurn ? "X" : "O";
                break;
            case "10":
                temp[1][0] = xTurn ? "X" : "O";
                break;
            case "11":
                temp[1][1] = xTurn ? "X" : "O";
                break;
            case "12":
                temp[1][2] = xTurn ? "X" : "O";
                break;
            case "20":
                temp[2][0] = xTurn ? "X" : "O";
                break;
            case "21":
                temp[2][1] = xTurn ? "X" : "O";
                break;
            case "22":
                temp[2][2] = xTurn ? "X" : "O";
                break;
            default:
                break;
        }
        checkWinner();
        setXTurn(!xTurn);
        setState(temp);
    };

    const checkWinner = () => {
        if (state[0][0] === "X" && state[0][1] === "X" && state[0][2] === "X") {
            clearBoard("X");
        } else if (
            state[0][0] === "O" &&
            state[0][1] === "O" &&
            state[0][2] === "O"
        ) {
            clearBoard("O");
        } else if (
            state[0][0] === "X" &&
            state[1][0] === "X" &&
            state[2][0] === "X"
        ) {
            clearBoard("X");
        } else if (
            state[0][0] === "O" &&
            state[1][0] === "O" &&
            state[2][0] === "O"
        ) {
            clearBoard("O");
        } else if (
            state[0][1] === "X" &&
            state[1][1] === "X" &&
            state[2][1] === "X"
        ) {
            clearBoard("X");
        } else if (
            state[0][1] === "O" &&
            state[1][1] === "O" &&
            state[2][1] === "O"
        ) {
            clearBoard("O");
        } else if (
            state[0][2] === "X" &&
            state[1][2] === "X" &&
            state[2][2] === "X"
        ) {
            clearBoard("X");
        } else if (
            state[0][2] === "O" &&
            state[1][2] === "O" &&
            state[2][2] === "O"
        ) {
            clearBoard("O");
        } else if (
            state[0][0] === "X" &&
            state[1][1] === "X" &&
            state[2][2] === "X"
        ) {
            clearBoard("X");
        } else if (
            state[0][0] === "O" &&
            state[1][1] === "O" &&
            state[2][2] === "O"
        ) {
            clearBoard("O");
        } else if (
            state[2][0] === "X" &&
            state[1][1] === "X" &&
            state[0][2] === "X"
        ) {
            clearBoard("X");
        } else if (
            state[2][0] === "O" &&
            state[1][1] === "O" &&
            state[0][2] === "O"
        ) {
            clearBoard("O");
        } else if (
            state[1][0] === "X" &&
            state[1][1] === "X" &&
            state[1][2] === "X"
        ) {
            clearBoard("X");
        } else if (
            state[1][0] === "O" &&
            state[1][1] === "O" &&
            state[1][2] === "O"
        ) {
            clearBoard("O");
        } else if (
            state[2][0] === "X" &&
            state[2][1] === "X" &&
            state[2][2] === "X"
        ) {
            clearBoard("X");
        } else if (
            state[2][0] === "O" &&
            state[2][1] === "O" &&
            state[2][2] === "O"
        ) {
            clearBoard("O");
        } else if (
            state[0][0] !== " " &&
            state[0][1] !== " " &&
            state[0][2] !== " " &&
            state[1][0] !== " " &&
            state[1][1] !== " " &&
            state[1][2] !== " " &&
            state[2][0] !== " " &&
            state[2][1] !== " " &&
            state[2][2] !== " "
        ) {
            clearBoard();
        }
    };
    return (
        <div className="container py-5">
            <h1 className="h1 text-center text-light pb-5">Tic Tac Toe</h1>
            <div className="row text-center">
                <div id="btn" className="col-6">
                    {state.map((rows, r) => (
                        <div className="row" key={r}>
                            {rows.map((cols, c) => (
                                <button
                                    key={c}
                                    id={"" + c}
                                    className="col"
                                    onClick={(e) => {
                                        stateChange(e, `${r}${c}`);
                                    }}
                                    disabled={d}
                                >
                                    {cols}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="col-6 text-light">
                    <h3>Score Board</h3>
                    <hr className="bg-danger" />
                    <p></p>
                    <MDBTable borderless>
                        <MDBTableBody>
                            <tr
                                className={`bg-${
                                    !xTurn ? "danger" : "success"
                                }`}
                            >
                                <td className="h5 text-light">
                                    Turned: {xTurn ? "X" : "O"}
                                </td>
                                <td className="h5 text-light">
                                    <i className="fa fa-arrow-right"></i>
                                </td>
                                <td className="h5 text-light">
                                    {xTurn ? "X" : "O"}
                                </td>
                            </tr>
                            <tr>
                                <td
                                    className={`h5 text-success ${
                                        !xEditable && "py-3"
                                    }`}
                                >
                                    {xEditable ? (
                                        <input
                                            type="text"
                                            onChange={(e: any) => {
                                                setXName(e.target.value);
                                            }}
                                            value={xName}
                                            onBlur={() => {
                                                setXEditable(false);
                                            }}
                                        />
                                    ) : (
                                        <p
                                            onDoubleClick={() => {
                                                setXEditable(true);
                                            }}
                                        >
                                            {xName}
                                        </p>
                                    )}
                                </td>
                                <td className="h5 py-3 text-success">
                                    <i className="fa fa-arrow-right"></i>
                                </td>
                                <td className="h5 py-3 text-success">{x}</td>
                            </tr>
                            <tr>
                                <td>
                                    {oEditable ? (
                                        <input
                                            type="text"
                                            onChange={(e) => {
                                                setOName(e.target.value);
                                            }}
                                            value={oName}
                                            onBlur={() => {
                                                setOEditable(false);
                                            }}
                                        />
                                    ) : (
                                        <p
                                            className="h5 pb-3 text-danger"
                                            onDoubleClick={() => {
                                                setOEditable(true);
                                            }}
                                        >
                                            {oName}
                                        </p>
                                    )}
                                </td>
                                <td className="h5 py-3 text-danger">
                                    <span className="px-3">
                                        <i className="fa fa-arrow-right"></i>
                                    </span>
                                </td>
                                <td className="h5 py-3 text-danger">{o}</td>
                            </tr>
                            {draw !== 0 && (
                                <tr>
                                    <td className="h5 py-3 text-primary">
                                        Draw
                                    </td>
                                    <td className="h5 py-3 text-primary">
                                        <span className="px-3">
                                            <i className="fa fa-arrow-right"></i>
                                        </span>
                                    </td>
                                    <td className="h5 py-3 text-primary">
                                        {draw}
                                    </td>
                                </tr>
                            )}
                        </MDBTableBody>
                    </MDBTable>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Board;
