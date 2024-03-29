import React, { useState } from 'react';
import { shape, func } from 'prop-types';
import MenuHeader from './MenuHeader';
import TaskTable from '../../Tables/TaskTable';
import { EditTaskForm, NewTaskForm } from '../../Forms';
import { TaskDetails } from '../';
import MenuFooter from './MenuFooter';
import '../../../css/Calendar/TaskMenu.css';

const INITIAL_MENU = {
	name: 'table',
	task: {},
};

function TaskMenu(props) {
	const [menu, setMenu] = useState(INITIAL_MENU);
	const { date, closeMenu } = props;

	const goToTaskTable = () => setMenu({ ...INITIAL_MENU, name: 'table' });

	const goToTaskEdit = (e, task) => {
		e.stopPropagation();
		setMenu({ name: 'edit', task });
	};

	const goToNewTask = () => setMenu({ ...INITIAL_MENU, name: 'new' });
	
	const goToTaskDetails = (task) => setMenu({ name: 'details', task });

	const main = (
		<>
			{ menu.name === 'table' &&
				<TaskTable
					date={ date }
					goToTaskEdit={ goToTaskEdit }
					goToTaskDetails={ goToTaskDetails }
				/> }
			{ menu.name === 'edit' &&
			<EditTaskForm
				task={ menu.task }
				goToTaskTable={ goToTaskTable }
			/> }
			{ menu.name === 'new' &&
			<NewTaskForm date={ date }
				goToTaskTable={ goToTaskTable }
			/> }
			{ menu.name === 'details' &&
			<TaskDetails task={ menu.task }
				goToTaskEdit={ goToTaskEdit }
			/> }
		</>
	);
	
	return (
		<section>
			<div className="task__menu">
				<MenuHeader
					date={ date }
					closeMenu={ closeMenu }
				/>
				{ main }
				<MenuFooter
					goToTaskTable={ goToTaskTable }
					goToNewTask={ goToNewTask }
				/>
			</div>
			<div className="menu__background" />
		</section>
	);
}

TaskMenu.propTypes = {
	date: shape({}).isRequired,
	closeMenu: func.isRequired,
};

export default TaskMenu;
