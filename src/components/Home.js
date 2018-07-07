import React from 'react';
import { connect } from 'react-redux';
import Header from './Header.js'
import { Table, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { startSetMatches, startRemoveMatch } from '../actions/matches';
import LoadingPage from './LoadingPage'

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      matchesNotLoaded: true
    }
  }

  componentDidMount() {
    this.props.startSetMatches().then(() => {
      this.setState(() => ({matchesNotLoaded: false}));
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
        <td className="col-md-2">
        {
          <ButtonGroup>
            <Button id={match.id} onClick={this.handleEditMatch}>
              <Glyphicon glyph="pencil" />
            </Button>
            <Button id={match.id} onClick={this.handleDeleteMatch}>
              <Glyphicon glyph="trash" />
            </Button>
          </ButtonGroup>
        }
        </td>
      </tr>
    )
  }

  handleDeleteMatch = (e) => {
    this.props.startRemoveMatch(e.currentTarget.id);
    console.log(this.props.matches);
  }

  handleEditMatch = (id) => {

  }

  render() {
    if (this.state.matchesNotLoaded) {
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
              <Link className="button" to="/addMatch">Add Match</Link>
             </Button>
            <Table className="match-table" condensed={true}>
              <thead>
                <tr>
                   <th>Team</th>
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
                   <th>Climb Assists</th>
                   <th>Card</th>
                   <th>Scout</th>
                   <th >Comments</th>
                   <th className="col-md-2"></th>
                </tr>
              </thead>
              <tbody>
                {this.props.matches.map((match) => this.renderMatchRow(match))}
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
  startSetMatches: () => dispatch(startSetMatches()),
  startRemoveMatch: (id) => dispatch(startRemoveMatch(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
