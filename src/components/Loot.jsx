import React from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends React.Component {
	componentDidMount() {
		this.props.fetchBitcoin();
	}

	computeBitcoin = () => {
		const { bitcoin, balance } = this.props;

		if (Object.keys(bitcoin).length === 0) return '';

		return balance / parseInt(bitcoin.bpi.USD.rate.replace(',', '', 10));
	}

	render() {
		return (
			<h3 className=''>Bitcoin balance: {this.computeBitcoin()}</h3>
		)
	}
}

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProps(dispatch) {
	return {
		fetchBitcoin: () => {
			dispatch(fetchBitcoin())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Loot);