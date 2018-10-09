import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import Root from '../../Root';

import Nav from '../nav/Nav';
import Home from '../home/Home';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});

afterEach(()=> {
  wrapped.unmount();
});

it('loads a nav bar', () => {
  expect(wrapped.find(Nav).length).toEqual(1);
});

it('loads a home page', () => {
  expect(wrapped.find(Home).length).toEqual(1);
});
