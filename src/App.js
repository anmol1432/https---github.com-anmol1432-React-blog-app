import NAVBAR from "./components/navbar";
import AllBlog from "./page/blog/index";
import ReadBlog from "./page/blog/read/index";
import AddBlog from "./page/blog/add/index";
import EditBlog from "./page/blog/edit/index";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";


function App() {

  return (
    <>
      <div className="App">
        <NAVBAR />
        <Switch>
          <Route exact path="/blog" render={() => <AllBlog />} />
          <Route exact path="/blog/add" render={() => <AddBlog />} />
          <Route exact path="/blog/read/:blogId" render={() => <ReadBlog />} />
          <Route exact path="/blog/edit/:blogId" render={() => <EditBlog />} />
          <Redirect to="/blog" />
        </Switch>
      </div>
    </>
  );
}

export default App;
