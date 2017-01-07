import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import StorePicker from './components/StorePicker';
import ProjectPicker from './components/ProjectPicker';
import notFound from './components/notFound';
// import './index.css';
import { BrowserRouter, Match, Miss } from 'react-router';

const Root = () => {
	return (
		<BrowserRouter>
			 <div>
			 	<Match exactly pattern="/" component={StorePicker} />
			 	<Match pattern="/store/:storeId" component={App} />

			 	<Match exactly pattern="/project" component={ProjectPicker} />
			 	<Match pattern="/sing/:projectId" component={App} />
			 	<Miss component={notFound} />

			 </div>
		</BrowserRouter>
	)
}

render(
  <Root />,
  document.querySelector('#root')
);
