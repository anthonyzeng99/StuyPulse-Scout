import React from 'react';
import {Grid, Row, Col, FormGroup, InputGroup, FormControl, DropdownButton, MenuItem, ButtonToolbar, Button} from 'react-bootstrap';

import Header from './Header';

export default class ExpenseForm extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    teamNumber : props.match ? props.match.teamNumber : null,
    matchType: 'Practice',
    matchNumber: '',
    mobility: false,
    climb: 'No'
  }
}

handleTeamNumberChange = (e) => {
  e.persist();
  this.setState(() => ({teamNumber: e.target.value}));
  console.log(e.target.value)
};

handleMatchTypeChange = (e) => {
  this.setState(() => ({matchType: e}));
}

handleMobilityChange = () => {
  if (this.state.mobility) {
    this.setState(() => ({mobility: false}))
  } else {
    this.setState(() => ({mobility: true}))
  }
};

handleClimbChange = () => {
  if (this.state.climb === 'No') {
    this.setState(() => ({climb: 'Yes'}));
  } else if (this.state.climb === 'Yes') {
    this.setState(() => ({climb: 'Assisted'}));
  } else if (this.state.climb === 'Assisted') {
    this.setState(() => ({climb: 'No'}));
  }
};

renderClimbButtonColor = () => {
  if (this.state.climb === 'No') {
    return 'danger';
  } else if (this.state.climb === 'Yes') {
    return 'success';
  } else if (this.state.climb === 'Assisted') {
    return 'warning';
  }
};

handleMatchTypechange = () => {
  this.setState();
};

  render() {
    return (
      <div>
        <Header />
        <div className="content-container">
          <h1>Add Match</h1>
          <Grid>
           <FormGroup>
            <Row className="show-grid">
              <Col xs={3} md={2}>
                <InputGroup>
                  <h4>Team #</h4>
                  <FormControl type="number" value={this.state.teamNumber ? this.state.teamNumber : ''} onChange={this.handleTeamNumberChange}/>
                </InputGroup>
              </Col>
              <Col xs={6} md={4}>
                <h4>Match #</h4>
                <InputGroup>
                  <DropdownButton
                    componentClass={InputGroup.Button}
                    id="input-dropdown-addon"
                    title={this.state.matchType}
                    onSelect={this.handleMatchTypeChange}
                    >
                    <MenuItem value="Practice" eventKey="Practice">Practice</MenuItem>
                    <MenuItem value="Qualification" eventKey="Qualification">Qualification</MenuItem>
                    <MenuItem value="Quarter-finals" eventKey="Quarter-finals">Quarter-finals</MenuItem>
                    <MenuItem value="Semi-finals" eventKey="Semi-finals">Semi-finals</MenuItem>
                    <MenuItem value="Finals" eventKey="Finals">Finals</MenuItem>
                  </DropdownButton>
                  <FormControl type="text" />
                </InputGroup>
              </Col>
              <Col xs={6} md={4}>
                <InputGroup>
                  <h4>Scout</h4>
                  <FormControl type="text" />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <h3>Autonomous</h3>
              <Col xs={2} md={1}>
                <ButtonToolbar>
                  <h4>Mobility</h4>
                  <Button
                    bsStyle= {this.state.mobility ? 'success' : 'danger'}
                    onClick={this.handleMobilityChange}
                  >
                  {this.state.mobility ? 'Yes' : 'No'}
                  </Button>
                </ButtonToolbar>
              </Col>
              <Col xs={2} md={1}>
                <ButtonToolbar>
                  <h4>Attempt</h4>
                  <Button bsStyle="danger">N</Button>
                </ButtonToolbar>
              </Col>
            </Row>
            <Row>
              <h3>Teleoperated</h3>
              <Col xs={2} md={1}>
                <h4>Alliance Switch</h4>
                <FormGroup>
                  <FormControl type="number"/>
                </FormGroup>
              </Col>
              <Col xs={2} md={1}>
                <h4>Scale Scored</h4>
                <FormGroup>
                  <FormControl type="number"/>
                </FormGroup>
              </Col>
              <Col xs={2} md={1}>
                <h4>Scale Dropped</h4>
                <FormGroup>
                  <FormControl type="number"/>
                </FormGroup>
              </Col>
              <Col xs={2} md={1}>
                <h4>Opposing Scale</h4>
                <FormGroup>
                  <FormControl type="number"/>
                </FormGroup>
              </Col>
              <Col xs={2} md={1}>
                <h4>Exchange Scored</h4>
                <FormGroup>
                  <FormControl type="number"/>
                </FormGroup>
              </Col>
              <Col xs={2} md={1}>
                <h4>Climbed Tower</h4>
                <ButtonToolbar>
                  <Button
                    bsStyle= {this.renderClimbButtonColor()}
                    onClick={this.handleClimbChange}
                  >
                  {this.state.climb}
                  </Button>
                </ButtonToolbar>
              </Col>
              <Col xs={2} md={1}>
                <h4>Climb Assists</h4>
                <FormGroup>
                  <FormControl type="number"/>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <h3>Comments</h3>
              <Col xs={8} md={6 }>
                <FormGroup controlId="formControlsTextarea">
                  <FormControl componentClass="textarea" placeholder="Comments" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
               <Col xs={8} xsOffset={8}>
                <ButtonToolbar>
                  <Button bsStyle="danger">Clear form</Button>
                  <Button bsStyle="success">Submit</Button>
                </ButtonToolbar>
               </Col>
            </Row>
           </FormGroup>
          </Grid>
        </div>
      </div>
    );
  };
}
