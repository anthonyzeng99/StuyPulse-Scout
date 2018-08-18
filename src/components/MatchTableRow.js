import React from 'react';
import { ButtonGroup, Button, Glyphicon } from 'react-bootstrap';

export default class MatchTableRow extends React.Component {
  constructor(props) {
    super(props);
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

  handleEditMatch = (e) => {
    this.props.history.push(`/editMatch/${e.currentTarget.id}`);
  }

  handleDeleteMatch = (id) => {
    // this.props.startRemoveMatch(id);
    console.log('hello');
  }
  //
  // handleCancelDelete = () => {
  //   this.setState(() => ({
  //     modalVisible: false,
  //     matchToDelete: null
  //   }))
  //

  // renderDeleteConfirmationModal = () => {
  //   return (
  //     <DeleteConfirmationModal
  //       match={this.state.matchToDelete.match}
  //       teamNumber={this.state.matchToDelete.team_number}
  //       handleDeleteMatch={this.handleDeleteMatch(this.state.matchToDelete.id)}
  //       handleCancelDelete={this.handleCancelDelete()}
  //     />
  //   )
  // }

  // handleConfirmDeleteMatch = (e) => {
  //   e.persist();
  //   this.setState(() => ({
  //     modalVisible: false,
  //     matchToDelete: {e.currentTarget}
  //   }));
  //   console.log(this.state.matchToDelete);
  // }
  //

  render() {
    return (
      <tr key={this.props.id}>
        <td>{this.props.teamNumber}</td>
        <td>{this.props.matchNumber}</td>
        <td>{this.props.mobility ? 'Y' : 'N'}</td>
        <td>{this.props.autoAttempt}</td>
        <td>{this.props.autoSwitch}</td>
        <td>{this.props.autoScale}</td>
        <td>{this.props.allianceSwitch}</td>
        <td>{this.props.scaleDropped}</td>
        <td>{this.props.opposingScale}</td>
        <td>{this.props.exchangeScored}</td>
        <td>{this.props.climb}</td>
        <td>{this.props.climbAssists}</td>
        <td>{this.props.card}</td>
        <td>{this.props.scoutName}</td>
        <td>{this.props.comments}</td>
        <td className="col-sm-2">
        {
          <ButtonGroup>
            <Button
              id={this.props.id}
              onClick={this.handleEditMatch}
            >
                <Glyphicon glyph="pencil" />
            </Button>
            <Button

            >
              <Glyphicon glyph="trash" />
            </Button>
          </ButtonGroup>
        }
        </td>
      </tr>
    )
  };
};
