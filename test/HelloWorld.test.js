import React from 'react';
import HelloWorld from '../src/js/components/HelloWorld.jsx';

xdescribe('<HelloWorld /> rendering', () => {
  it('should render one <h1>', () => {
    const wrapper = shallow(<HelloWorld />);
    console.log(Object.keys(wrapper));
    expect(wrapper.get(0).content())
      .eq(<h1>Hello World with React Component</h1>);
  });
});
