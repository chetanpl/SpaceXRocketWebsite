import SpaceX from './componnet/UISpaceX/UISpaceX'
import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";
import NoPage from './componnet/NoPage/NoPage';
import Space_X_Description from './componnet/Space_X_Description/Space_X_Description';
function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route exact path="/" element={<SpaceX/>}/>
          <Route exact path="/description/:id" element={<Space_X_Description/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
