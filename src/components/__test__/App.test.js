import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

const app = shallow(<App />);

describe('App', () => {
	it('renders', () => {
		expect(app).toMatchSnapshot();
	});

	it('contains a connected wallet component', () => {
		expect(app.find('Connect(Wallet)').exists()).toBe(true);
	});
});