import { Button } from 'react-bootstrap';
import React, { Component } from 'react';   
class  Btn extends Component {
    state = {  }
    render() { 
        return ( 

            <div>

<Button variant="primary" size="lg" >
    Button
  </Button>{' '}
  <Button href="#" variant="secondary" size="lg"  >
    Link
  </Button>

            </div>
         );
    }
}
 
export default Btn;