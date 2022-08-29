import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";
import Main from "./components/Main";
import WorkPage from "./components/WorkPage";
import BlogPage from "./components/BlogPage";
import AboutPage from "./components/AboutPage";
import MySkillsPage from "./components/MySkillsPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/about" component={AboutPage}></Route>
          <Route exact path="/blog" component={BlogPage}></Route>
          <Route exact path="/work" component={WorkPage}></Route>
          <Route exact path="/skills" component={MySkillsPage}></Route>
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
