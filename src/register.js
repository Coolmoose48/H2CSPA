import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button} from 'react-bootstrap';

const newUser = " NEW USER";

class Register extends React.Component {
    
    render() {
         return ( 
        
        <Button variant="info" size="lg" block>REGISTER {newUser}</Button>
     
        );
    }
}

export default Register;
                    