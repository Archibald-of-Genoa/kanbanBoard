import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Board } from "./Components/Board";
import { GlobalStyle } from "./Components/Board/Board.styled";
import TaskDetail from "./Components/TaskDetail/TaskDetail";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Board />}>
                    <Route path="task/:taskId" element={<TaskDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
