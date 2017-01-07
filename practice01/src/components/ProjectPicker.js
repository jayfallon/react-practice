import React from 'react';
import { getFunName } from '../helpers';
import { Link } from 'react-router';

class ProjectPicker extends React.Component {

  goToProject(event) {
  	// event.preventDefault();
  	// console.log("you clicked");
  	// console.log(this.projectId);

  	const projectId = this.projectName;
  	// console.log(`going to have a ${this.projectName}`);

  	this.context.router.transitionTo(`/sing/${projectId}`);
  }

  render() {
    return (
      <div className="App">
		<Link
		  to="/project"
		  style={{ color: 'blue', background: 'gray' }}
		  activeStyle={{ color: 'red' }}
		>Hello</Link>
      </div>
    )
  }
}

ProjectPicker.contextTypes = {
	router: React.PropTypes.object
}

export default ProjectPicker;
