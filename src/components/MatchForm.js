import React from 'react';
import {Grid, Row, Col, FormGroup, InputGroup, FormControl, DropdownButton, MenuItem, ButtonToolbar, Button, ToggleButton, ToggleButtonGroup} from 'react-bootstrap';

import Header from './Header';


const defaultState = {
  teamNumber : '',
  matchType: 'Practice',
  matchNumber: '',
  scoutName: '',
  mobility: false,
  autoAttempt: '',
  autoSwitch: '',
  autoScale: '',
  allianceSwitch: '',
  scaleScored: '',
  scaleDropped: '',
  opposingScale: '',
  exchangeScored: '',
  climb: 'No',
  climbAssists: '',
  comments: '',
  card: 'No Card'
}

export default class MatchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = defaultState;
  }

  handleValueChange = (e) => {
    e.persist();
    this.setState(() => ({[e.target.id]: e.target.value}));
  }

  handleMatchTypeChange = (e) => {
    this.setState(() => ({matchType: e}));
  }

  handleMobilityChange = () => {
    this.setState(() => ({mobility: !this.state.mobility}))
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
    switch (this.state.climb) {
      case 'No':
        return 'danger';
      case 'Yes':
        return 'success';
      case 'Assisted':
        return 'warning';
    }
  };

  handleCardChange = () => {
    if (this.state.card === 'No Card') {
      this.setState(() => ({card: 'Yellow Card'}));
    } else if (this.state.card === 'Yellow Card') {
      this.setState(() => ({card: 'Red Card'}));
    } else if (this.state.card === 'Red Card') {
      this.setState(() => ({card: 'No Card'}));
    }
  };

  renderCardButtonColor = () => {
    switch (this.state.card) {
      case 'No Card':
        return 'success';
      case 'Yellow Card':
        return 'warning';
      case 'Red Card':
        return 'danger';
    }
  };

  validateCubeValues = () => {

  }

  handleClearForm = () => {
    this.setState(() => ({...defaultState}));
  }

  handleSubmitForm = () => {
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div>
        <Grid>
         <FormGroup>
          <Row className="show-grid">
            <Col xs={3} md={2}>
              <InputGroup>
                <h4>Team #</h4>
                <FormControl
                  type="number"
                  id="teamNumber"
                  value={this.state.teamNumber ? this.state.teamNumber : ''}
                  onChange={this.handleValueChange}
                />
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
                <FormControl
                  type="text"
                  id="matchNumber"
                  value={this.state.matchNumber}
                  onChange={this.handleValueChange}
                />
              </InputGroup>
            </Col>
            <Col xs={6} md={4}>
              <InputGroup>
                <h4>Scout</h4>
                <FormControl
                  type = "text"
                  id = "scoutName"
                  value={this.state.scoutName}
                  onChange={this.handleValueChange}
                />
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
            <Col xs={2} md={2}>
              <h4>Attempt</h4>
              <FormGroup>
                <FormControl
                  type="text"
                  id="autoAttempt"
                  value={this.state.autoAttempt}
                  onChange={this.handleValueChange}
                />
              </FormGroup>
            </Col>
            <Col xs={2} md={2}>
              <h4>Switch</h4>
              <FormGroup>
                <FormControl
                  type="text"
                  id="autoSwitch"
                  value={this.state.autoSwitch}
                  onChange={this.handleValueChange}
                />
              </FormGroup>
            </Col>
            <Col xs={2} md={2}>
              <h4>Scale</h4>
              <FormGroup>
                <FormControl
                  type="text"
                  id="autoScale"
                  value={this.state.autoScale}
                  onChange={this.handleValueChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <h3>Teleoperated</h3>
            <Col xs={2} md={1}>
              <h4>Alliance Switch</h4>
              <FormGroup>
                <FormControl
                  type="number"
                  id="allianceSwitch"
                  value={this.state.allianceSwitch}
                  onChange={this.handleValueChange}
                />
              </FormGroup>
            </Col>
            <Col xs={2} md={1}>
              <h4>Scale Scored</h4>
              <FormGroup>
                <FormControl
                  type="number"
                  id="scaleScored"
                  value={this.state.scaleScored}
                  onChange={this.handleValueChange}
                />
              </FormGroup>
            </Col>
            <Col xs={2} md={1}>
              <h4>Scale Dropped</h4>
              <FormGroup>
                <FormControl
                  type="number"
                  id="scaleDropped"
                  value={this.state.scaleDropped}
                  onChange={this.handleValueChange}
                />
              </FormGroup>
            </Col>
            <Col xs={2} md={1}>
              <h4>Opposing Scale</h4>
              <FormGroup>
                <FormControl
                  type="number"
                  id="opposingScale"
                  value={this.state.opposingScale}
                  onChange={this.handleValueChange}
                />
              </FormGroup>
            </Col>
            <Col xs={2} md={1}>
              <h4>Exchange Scored</h4>
              <FormGroup>
                <FormControl
                  type="number"
                  id="exchangeScored"
                  value={this.state.exchangeScored}
                  onChange={this.handleValueChange}
                />
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
                <FormControl
                  type="number"
                  id="climbAssists"
                  value={this.state.climbAssists}
                  onChange={this.handleValueChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <h3>Comments</h3>
            <Col xs={8} md={6 }>
              <FormGroup>
                <FormControl
                  componentClass="textarea"
                  placeholder="Comments"
                  id="comments"
                  value={this.state.comments}
                  onChange={this.handleValueChange}
                />
              </FormGroup>
            </Col>
            <Col xs={8} md={6 }>
              <ButtonToolbar>
                <Button
                  bsStyle= {this.renderCardButtonColor()}
                  onClick={this.handleCardChange}
                >
                {this.state.card}
                </Button>
              </ButtonToolbar>
            </Col>
          </Row>
          <Row>
             <Col xs={8} xsOffset={8}>
              <ButtonToolbar>
                <Button bsStyle="default" onClick={this.handleClearForm}>Clear form</Button>
                <Button bsStyle="default" onClick={this.handleSubmitForm}>Submit</Button>
              </ButtonToolbar>
             </Col>
          </Row>
         </FormGroup>
        </Grid>
      </div>
    );
  };
}
