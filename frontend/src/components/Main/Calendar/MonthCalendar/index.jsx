import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import create from '../../../../helpers/create';
import Week from './Week';
import MonthHeader from './MonthHeader';
import WeekHeader from './WeekHeader';
import { TaskMenu } from '../../../Sections';
import AppContext from '../../../../context/AppContext';
import '../../../../css/Calendar/MonthCalendar.css';

const INITIAL_MENU = {
	show: false,
	date: {},
};

function MonthCalendar() {
	const [menu, setMenu] = useState(INITIAL_MENU);
	const [calendar, setCalendar] = useState([]);
	const [date, setDate] = useState(moment().startOf('month'));
	const { state } = useContext(AppContext);

	const currMonthName = () => date.format('MMMM');
	const currYear = () => date.format('YYYY');
	const advanceMonth = () => setDate(date.clone().add(1, 'months'));
	const retreatMonth = () => setDate(date.clone().subtract(1, 'months'));
	const openMenu = (date) => setMenu({ show: true, date });
	const closeMenu = () => setMenu(INITIAL_MENU);

	useEffect(() => {
		setCalendar(create.calendar.month.format(date));
	}, [date]);

	const main = (
		calendar.length > 0 && calendar.map((week) => (
			<Week
				key={ calendar.indexOf(week) }
				week={ week }
				date={ date }
				onClick={ openMenu }
			/>
		))
	);

	const menuRender = (
		menu.show &&
		<TaskMenu
			date={ menu.date }
			taskAmount={ menu.taskAmount }
			closeMenu={ closeMenu }
		/>
	) ;

	return (
		!state.apiIsLoading && state.isLoggedIn &&
		<main>
			<div className="calendar__month">
				<MonthHeader
					month={ currMonthName() }
					year={ currYear() }
					advanceMonth={ advanceMonth }
					retreatMonth={ retreatMonth }
				/>
				<WeekHeader />
				{ main }
			</div>
			{ menuRender }
		</main>
	);
}

export default MonthCalendar;
