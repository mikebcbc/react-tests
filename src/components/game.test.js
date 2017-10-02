import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
	it('Renders without crashing', () => {
		shallow(<Game />);
	});

	it('Should reset state on newGame()', () => {
		const component = shallow(<Game />);
		component.instance().newGame();
		expect(component.state('guesses')).toEqual([]);
		expect(component.state('feedback')).toEqual('Make your guess!');
	})

	it('Should ask for valid number if guess !number', () => {
		const component = shallow(<Game />);
		component.instance().guess('string');
		expect(component.state('feedback')).toEqual('Please enter a valid number');
	})

	it('Should return Ice Cold if guess >= 50', () => {
		const component = shallow(<Game />);
		component.instance().setState({correctAnswer: 50});
		component.instance().guess(0);
		expect(component.state('feedback')).toEqual('You\'re Ice Cold...');
	});

	it('Should return Cold if guess => 30', () => { // Seperate tests
		const component = shallow(<Game />);
		component.instance().setState({correctAnswer: 50});
		component.instance().guess(20);
		expect(component.state('feedback')).toEqual('You\'re Cold...');
	});

	it('Should return Warm if guess => 10', () => { // Seperate tests
		const component = shallow(<Game />);
		component.instance().setState({correctAnswer: 50});
		component.instance().guess(40);
		expect(component.state('feedback')).toEqual('You\'re Warm');
	});

	it('Should return Hot if guess => 10', () => { // Seperate tests
		const component = shallow(<Game />);
		component.instance().setState({correctAnswer: 50});
		component.instance().guess(49);
		expect(component.state('feedback')).toEqual('You\'re Hot!');
	});

	it('Should return You Got It if guess = guess', () => {
		const component = shallow(<Game />);
		component.instance().setState({correctAnswer: 50});
		component.instance().guess(50);
		expect(component.state('feedback')).toEqual('You got it!');
	});
});