//  const h1 = React.createElement('h1', {}, 'Hello Sonal!! Learn React');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(h1);


// <div id="parent">
//     <div id="child">
//         <h1>Hello....</h1>
//     </div>
//      <div id="child2">
//         <h1>Hello....</h1>
//     </div>
// </div>

import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    'div', 
    {id:"parent"}, 
    [React.createElement(
        'div', 
        {id:"child1"}, 
        React.createElement(
            'h1', 
            {}, 
            "Child1"
        )
    ),
    React.createElement(
        'div', 
        {id:"child2"}, 
        React.createElement(
            'h1', 
            {}, 
            "Child2"
        )
    )]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);