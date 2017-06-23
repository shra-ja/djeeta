import React from 'react';
import { connect } from 'react-redux';
import { fetchServers } from '../actions/player'
import ServerSelect from './serverselect'
import PlaylistControl from './playlistcontrol'

class Player extends React.Component {
  componentDidMount() {
    this.props.fetchServers();
  }

  handleClick() {
    this.props.fetchServers();
  }

  renderComponents() {
    if (this.props.servers.length > 0) {
      return (
        <div>
          <ServerSelect />
          <PlaylistControl />
        </div>
      );
    } else {
      return (
        'No servers available.'
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Player</h2>
        <button onClick={() => this.handleClick()}>Update</button>
        <br/>
        {this.renderComponents()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    servers: state.servers,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchServers: () => dispatch(fetchServers()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);