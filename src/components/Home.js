import React from 'react';
import { connect } from 'react-redux';
import Header from './Header.js'
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { startSetMatches } from '../actions/matches'
import LoadingPage from './LoadingPage'

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.startSetMatches().then(() => {
      this.setState(() => ({matches: this.props.matches}));
    });
  }

  formatMatchNumber = (type, number) => {
    switch (type) {
      case 'Practice':
        return 'P' + number;
      case 'Qualification':
        return 'Q' + number;
      case 'Quarter-finals':
        return 'QF' + number;
      case 'Semi-finals':
        return 'SF' + number;
      case 'Finals':
        return 'F' + number;
    }
  }

  matchFormat = (match) => {
    return match.matchType + match.matchNumber;
  }

  renderMatchRow = (match) => {
    return (
      <tr key={match.id}>
        <td>{match.teamNumber}</td>
        <td>{this.formatMatchNumber(match.matchType, match.matchNumber)}</td>
        <td>{match.mobility ? 'Y' : 'N'}</td>
        <td>{match.autoAttempt}</td>
        <td>{match.autoSwitch}</td>
        <td>{match.autoScale}</td>
        <td>{match.allianceSwitch}</td>
        <td>{match.scaleDropped}</td>
        <td>{match.opposingScale}</td>
        <td>{match.exchangeScored}</td>
        <td>{match.climb}</td>
        <td>{match.climbAssists}</td>
        <td>{match.card}</td>
        <td>{match.scoutName}</td>
        <td>{match.comments}</td>
      </tr>
    )
  }

  render() {
    if (this.state.matches === undefined) {
      return (
        <div>
          <LoadingPage />
        </div>
      )
    } else {
      return (
        <div>
          <Header />
          <div className="content-container">
            <Button>
              <Link className="button" to="/addMatch">Add Expense</Link>
             </Button>
            <Table className="match-table" condensed="true">
              <thead>
                <tr>
                   <th>Team Number</th>
                   <th>Match</th>
                   <th>Mobility</th>
                   <th>Auto Attempt</th>
                   <th>Auto Switch</th>
                   <th>Auto Scale</th>
                   <th>Alliance Switch</th>
                   <th>Scale Dropped</th>
                   <th>Opposing Scale</th>
                   <th>Exchange</th>
                   <th>Climb</th>
                   <th>Climb Assits</th>
                   <th>Card</th>
                   <th>Scout</th>
                   <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                {this.state.matches.map((match) => this.renderMatchRow(match))}
              </tbody>
            </Table>
          </div>
         </div>
      );
    }
  }
};

const mapStateToProps = (state, props) => {
  return {
    matches: state.matches
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  startSetMatches: () => dispatch(startSetMatches())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
