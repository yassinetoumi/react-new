import './App.css'; 
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './home';
import About from './about';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormGroup, ControlLabel } from "react-bootstrap";
//layouts
import Front from './layout/front'
import Back from './layout/back'

// 
const AppRoute=({component:Component,layout:Layout, ...rest})=>(
  <Route {...rest} render={props=>(
    <Layout> <Component {...props}></Component></Layout>
  )}></Route>
)
  function App() {
    return (
      <>
       <div>
      <h4>React-Bootstrap Form Component</h4>
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
    
      <Router>
         <AppRoute path='/' exact layout={Front} component={Home} />
         <AppRoute path='/about' exact layout={Back} component={About} /> 
      </Router>
      </>
    );
}

export default App;