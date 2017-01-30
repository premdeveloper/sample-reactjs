import React, {Component} from 'react';
import { PageHeader, Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Welcome extends Component {
  render() {
    return (
      <div>
        <PageHeader>Welcome <small>Assignment</small></PageHeader>
        <Jumbotron>
          <h3>About</h3>
          <p>Hello this react assignment used 'nedb' in memory database to store documents</p>
          <p>
            <LinkContainer to="/signin">
              <Button bsStyle="primary">Sign in</Button>
            </LinkContainer>
          </p>
        </Jumbotron>    
      </div>
    );
  }
}

export default Welcome;