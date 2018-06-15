import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
	it('sets a balance', () => {
		const balance = 10;

		expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance })).toEqual(balance);
	});

	it('deposits into the balance', () => {
		const deposit = 10;
		const initialState = 5;
		const action = { type: constants.DEPOSIT, deposit };

		expect(balanceReducer(initialState, action)).toEqual(initialState + deposit);
	});

	it('withdraws from the balance', () => {
		const withdrawal = 10;
		const initialState = 20;
		const action = { type: constants.WITHDRAW, withdrawal };
		expect(balanceReducer(initialState, action)).toEqual(initialState - withdrawal);
	});
});