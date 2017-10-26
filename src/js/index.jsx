import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import '../styles/style.less';

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));
