import './App.css';
import CustomNavbar from "./components/CustomNavbar";
import { Route, Routes } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { MainBox } from "./components/Styled";
import FarmPage from "./pages/FarmPage";

function App() {
    return (
        <div className="App">
            <CustomNavbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <MainBox />
                        <Container>
                            <Row>
                            </Row>
                        </Container>
                    </>
                } />
                <Route path="/farm-ideas" element={<FarmPage />} />
                <Route path="/characters" element={<h2>Characters Page</h2>} />
                <Route path="/quests" element={<h2>Quests Page</h2>} />
            </Routes>
        </div>
    );
}

export default App;
