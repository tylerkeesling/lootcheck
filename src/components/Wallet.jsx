import React from 'react';
import { connect } from 'react-redux';

export class Wallet extends React.Component {
  state = { balance: undefined };

  updateBalance = e => {
    this.setState({ balance: parseInt(e.target.value, 10) });
  };

  render() {
    return (
      <div>
        <h3 className="balance">Wallet balance: {this.props.balance}</h3>
        <br />
        <input className="input-wallet" onChange={this.updateBalance} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    balance: state
  };
}

export default connect(
  mapStateToProps,
  null
)(Wallet);
