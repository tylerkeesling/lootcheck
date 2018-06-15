import React from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';

export class Wallet extends React.Component {
  state = { balance: undefined };

  updateBalance = e => {
    this.setState({ balance: parseInt(e.target.value, 10) });
	};
	
	deposit = () => this.props.deposit(this.state.balance);

	withdraw = () => this.props.withdraw(this.state.balance);

  render() {
    return (
      <div>
        <h3 className="balance">Wallet balance: {this.props.balance}</h3>
        <br />
        <input className="input-wallet" onChange={this.updateBalance} />
				<button className='btn-deposit' onClick={this.deposit}>Deposit</button>
				<button className='btn-withdraw' onClick={this.withdraw}>Withdraw</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    balance: state
  };
}

function mapDispatchToProps(dispatch) {
	return {
		deposit: (balance) => {
			dispatch(deposit(balance))
		},
		withdraw: (balance) => {
			dispatch(withdraw(balance))
		}
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wallet);
