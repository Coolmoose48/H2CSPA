import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button} from 'react-bootstrap';
import { Form} from 'react-bootstrap';

class Login extends React.Component {
    render() {
        return (
      
      <header className="App-header">
     	 	        
       	<div>
            <p>
                 
                 <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button  variant="primary" value="Login" size="lg" block>
                LOGIN
                </Button>
               
                </Form>
              
            </p>
               
        </div>
    </header>
     	
    );
    }
}
export default Login;
