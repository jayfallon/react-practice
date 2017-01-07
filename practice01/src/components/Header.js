import React from 'react';

const Header = (props) => {
	return (
      <div className="header">
		<p>{props.tagline}</p>
      </div>
    );
}

export default Header;
