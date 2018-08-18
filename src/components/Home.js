import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';

//Components
import Header from './Header.js';
import LoadingPage from './LoadingPage';
import MatchTableRow from './MatchTableRow';
import DeleteConfirmationModal from './DeleteConfirmationModal';

//Actions
import { startSetMatches, startRemoveMatch } from '../actions/matches';

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      matchesNotLoaded: true,
      modalVisible: false,
      matchToDelete: null
    }
  }

  handleAddMatch = () => {
    this.props.history.push('/addMatch');
  }

  handleModalResponse = (response) => {
    if (response) {
      this.props.startRemoveMatch(this.state.matchToDelete.id);
    }
    this.setState(() => ({
      modalVisible: false,
      matchToDelete: null
    }))
  }

  handleDeleteMatch = (matchInfo) => {
    this.setState(() => ({
      matchToDelete: matchInfo,
      modalVisible:true
     }))
  }

  renderDeleteConfirmationModal = () => {
      return (
        <DeleteConfirmationModal
          match={this.state.matchToDelete.match}
          teamNumber={this.state.matchToDelete.teamNumber}
          handleModalResponse={this.handleModalResponse}
        />
      )
  }
  //
  // handleCancelDelete = () => {
  //   this.setState(() => ({
  //     modalVisible: false,
  //     matchToDelete: null
  //   }))
  //


  // handleConfirmDeleteMatch = (e) => {
  //   e.persist();
  //   this.setState(() => ({
  //     modalVisible: false,
  //     matchToDelete: {e.currentTarget}
  //   }));
  //   console.log(this.state.matchToDelete);
  // }
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

  render() {
      return (
        <div>
          <Header />
          <div className="content-container">
            {this.state.modalVisible ? this.renderDeleteConfirmationModal() : false}
            <Button onClick={this.handleAddMatch}>
              <Glyphicon glyph="plus" /> Add Match
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
                   <th>Comments</th>
                   <th className="col-sm-2"></th>
                </tr>
              </thead>
              <tbody>
                {this.props.matches.map((match) =>
                  <MatchTableRow
                    key={match.id}
                    history={this.props.history}
                    handleDeleteMatch={this.handleDeleteMatch}
                    {...match}
                  />
                )}
              </tbody>
            </Table>
          </div>
         </div>
      );
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
