import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// 主页
import Home from "./routers/home/Index";
// 我的
import My from "./routers/My"
// 详情页
import Detail from "./routers/Detail"
// 购票也
import Seat from "./routers/Seat"

function NotFound(){
    return <div> 404 not found</div>
}
function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/my" exact component={My} />
                <Route path="/detail" exact component={Detail} />
                <Route pth="/seat" exact component={Seat} />
                <Route component={NotFound}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
