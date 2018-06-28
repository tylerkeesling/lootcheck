import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

const app = shallow(<App />);

describe('App', () => {
	it('renders', () => {
		expect(app).toMatchSnapshot();
	});

	it('contains a connected Wallet component', () => {
		expect(app.find('Connect(Wallet)').exists()).toBe(true);
	});

	it('contains a connected Loot component', () => {
		expect(app.find('Connect(Loot)').exists()).toBe(true);
	});

	it('contains a link to the Coindesk price page', () => {
		expect(app.find('a').props().href).toBe('https://www.coindesk.com/price');
	});
});