import React  from 'react';
import * as Pages from "./halpers/routingPages";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';

function App() {
  return (
    <Router>
      <Pages.MainApp >
        <Switch>
          <Route exact path="/" component={Pages.HomePage} />
          <Route exact path="/uers-form" component={Pages.UersForm} />
          <Route component={notFound} />
        </Switch>
      </Pages.MainApp>
    </Router>
  );
}


export default App


export const notFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Link to='/'><Button type="primary"> Back Home</Button></Link>}
    />)
} 