import React from 'react';
import { connect } from 'react-redux';

//Components
import Header from './Header';
import MatchForm from './MatchForm';

//Actions
import { startAddMatch } from '../actions/matches';

export class AddMatchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (match) => {
    this.props.startAddMatch(match);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <Header />
        <div className="content-container">
          <h1>Add Match</h1>
          <MatchForm onSubmit={this.onSubmit}/>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state, props) => {
  return {
    matches: state.matches
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  startAddMatch: (match) => dispatch(startAddMatch(match))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMatchPage);
