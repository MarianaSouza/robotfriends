import React from 'react';

const Scroll = (args) => {
	return (
		<div style= {{overflowY: 'scroll', border: '3px solid #095959', height: '900px', margin: '20px auto'}}>
		  {args.children}
		</div>

    );
}

export default Scroll;