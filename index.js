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


const HeaderComponent = () => (
    <div>
        <h1>hdgghh</h1>
    </div>
)

const title = (
    <div>
        <h1>Hello!! It's a JSX</h1>
        <HeaderComponent/>
    </div>
)
// const HeaderComponent = () => {
//     return (
//         <div>
//             <h1>hdgghh</h1>
//             {title}
//         </div>
//     )
// }


// const HeaderComponent = () => (
//     <div>
//         <h1>hdgghh</h1>
//         {title}
//     </div>
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(title);