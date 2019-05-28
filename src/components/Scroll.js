import React from 'react';
import '../containers/App.css'

const Scroll = (args) => {
	return (
		<div  className = "scroll">
		  {args.children}
		</div>

    );
}

export default Scroll;