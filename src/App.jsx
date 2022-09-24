import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash);

    console.log(cash);

    function addCash(count) {
        dispatch({ type: "ADD_CASH", payload: count });
    }

    function getCash(count) {
        dispatch({ type: "GET_CASH", payload: count });
    }

    return (
        <div className="App">
            <div style={{ display: "flex" }}>
                <button onClick={() => addCash(+prompt())}>
                    Пополнить счет
                </button>
                <button onClick={() => getCash(+prompt())}>
                    Снять со счета
                </button>
            </div>
            <h1>{cash}</h1>
        </div>
    );
}

export default App;
