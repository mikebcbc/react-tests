import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => { // Pass in props for smoke tests?
	it('Renders without crashing', () => {
		shallow(<GuessList guesses={[]}/>);
	});
});