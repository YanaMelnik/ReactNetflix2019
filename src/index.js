import React from 'react';
import * as ReactDOM from 'react-dom';
import HelloWorld from './js/components/HelloWorld.jsx';
import HelloWorldPure from './js/components/HelloWorldPure.jsx';

const CreateElementComponent = React.createElement(
  'h1',
  { className: 'createElement' },
  'Hello World (create element)',
);

const FuncComponent = ({ name }) => <h1>Hello Functional {name}</h1>;

const container = document.getElementById('container');
ReactDOM.render((
  <div>
    {CreateElementComponent}
    <HelloWorld/>
    <HelloWorldPure showText={'Hello World with React PureComponent'}/>
    <FuncComponent name={'World'}/>
  </div>
), container);
