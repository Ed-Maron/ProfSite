import React from 'react';
import Person from '../../blocks/sidebar/personalInfo';
import SidebarList from '../../blocks/sidebar/menu';
class Sidebar extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div  className={'sidebar'}>
                <div className={'sidebar__logo'}>
                    Logotype
                </div>
                <Person />
                <SidebarList />
			</div>
		)
	}
}

export default Sidebar;
