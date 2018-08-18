import React from 'react';
import { connect } from 'react-redux';

//Components
import Header from './Header';
import MatchForm from './MatchForm';

//Actions
import { startEditMatch } from '../actions/matches';

export class EditMatchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (match) => {
    this.props.startEditMatch(match);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <Header />
        <div className="content-container">
          <h1>Edit Match</h1>
          <MatchForm
            match={this.props.match}
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state, props) => {
  const idToFind = parseInt(props.match.params.id);
  return {
    match: state.matches.find((match) => match.id === idToFind)
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditMatch: (match) => dispatch(startEditMatch(match))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditMatchPage);
