import "./App.css";
import { Board } from "./Components/Board";
import { GlobalStyle } from "./Components/Board/Board.styled";

function App() {
    return (
        <>
            <GlobalStyle />
            <Board />
        </>
    );
}

export default App;
