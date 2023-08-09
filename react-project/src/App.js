import "./App.css";
import Nav from "./feature/Navbar";
import Home from "./feature";
import Container from "./feature/Container";

function App() {
  return (
    <>
      <Nav />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
