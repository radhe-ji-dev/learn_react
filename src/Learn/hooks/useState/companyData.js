import React, { useState } from 'react';

function CompanyData({ database }) {
	console.log(database);
	const [filtercompany, setFilterCompany] = useState('');

	function handlefilterdata() {
		console.log('handle clicked');
		console.log(database);

		// const filterdata = database.filter(
		// 	(data) => data.departments.employees.projects.completed === true,
		// );

		let imcompltedProject = database.map((c) =>
			c.departments.map((d) =>
				d.employees.map((e) =>
					e.projects.map((p) =>
						console.log('project status', e.name, p.completed),
					),
				),
			),
		);
		setFilterCompany(imcompltedProject);

		console.log(filtercompany);
	}

	return (
		<div>
			<p>company compnent</p>
			<button
				className={'bg-slate-400 rounded-xl text-fuchsia-50'}
				onClick={handlefilterdata}>
				Get Data
			</button>
		</div>
	);
}
export default CompanyData;
