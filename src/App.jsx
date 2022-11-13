import { createGlobalStyle } from "styled-components"
import { AppRoutes } from "./routes/routes.jsx"

function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <AppRoutes />
    </div>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  .App {
    min-height: 100vh;
    background-color: aliceblue;
    display: flex;

    @media(max-width: 875px) {
      flex-direction: column;
    }
  }
`