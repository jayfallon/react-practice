import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  goToStore(event) {
  	event.preventDefault();
  	console.log("You have changed the url");
  	// first grab text from box
  	const storeId = this.storeInput.value;
  	console.log(`going to ${this.storeInput.value}`);
  	// transition from / to /store/:storeId
  	this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return (
      <div className="App">
		<form onSubmit={this.goToStore.bind(this)} >
			<h2>Please Enter a Store</h2>
			<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
			<button type="submit">Enter</button>
		</form>
		
      </div>
    )
  }
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;
