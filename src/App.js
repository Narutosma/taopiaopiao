import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routers/home/Index"

function NotFound(){
    return <div> 404 not found</div>
}
function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
