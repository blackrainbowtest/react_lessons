import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const div = document.createElement('div');
// const h1 = document.createElement('h1');
// h1.classList.add('d1');
// h1.innerHTML = 'Hello world';
// const button = document.createElement('button');
// button.setAttribute('id', 'btn');
// button.innerHTML = 'Click me';
// button.addEventListener("click", () => {
//   alert('U clicked me')
// })
// div.append(h1, button);
// document.getElementById('root').append(div);

// const h1 = React.createElement('h1', { className: 'd1' }, 'Hello world');
// const button = React.createElement('button', { id: 'btn',  onClick:() => alert('Button clicked!') }, 'Click Me');
// const div = React.createElement('div', {}, h1, button);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(div);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);