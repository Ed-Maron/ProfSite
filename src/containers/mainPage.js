import React from 'react';
import Sidebar from './sidebar/sidebar';


class MainPage extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<Sidebar />
		)
	}
}

export default MainPage;
