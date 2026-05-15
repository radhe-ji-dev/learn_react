const companyData = [
	{
		companyId: 101,
		companyName: 'TechNova',
		location: { city: 'Delhi', country: 'India' },
		departments: [
			{
				deptId: 1,
				deptName: 'Frontend',
				manager: { id: 11, name: 'Aman' },
				employees: [
					{
						empId: 1001,
						name: 'Rahul',
						age: 25,
						salary: 45000,
						skills: ['HTML', 'CSS', 'React'],
						projects: [
							{
								projectId: 'P1',
								title: 'Ecommerce',
								completed: true,
								bugs: 12,
							},
							{
								projectId: 'P2',
								title: 'Dashboard',
								completed: false,
								bugs: 20,
							},
						],
					},
					{
						empId: 1002,
						name: 'Karan',
						age: 29,
						salary: 60000,
						skills: ['React', 'NextJS'],
						projects: [
							{
								projectId: 'P3',
								title: 'Portfolio',
								completed: true,
								bugs: 5,
							},
						],
					},
				],
			},
			{
				deptId: 2,
				deptName: 'Backend',
				manager: { id: 12, name: 'Vikas' },
				employees: [
					{
						empId: 1003,
						name: 'Mohit',
						age: 31,
						salary: 80000,
						skills: ['Node', 'MongoDB', 'Express'],
						projects: [
							{
								projectId: 'P4',
								title: 'API System',
								completed: false,
								bugs: 35,
							},
						],
					},
				],
			},
		],
	},
	{
		companyId: 102,
		companyName: 'CodeCraft',
		location: { city: 'Mumbai', country: 'India' },
		departments: [
			{
				deptId: 3,
				deptName: 'UI/UX',
				manager: { id: 13, name: 'Priya' },
				employees: [
					{
						empId: 1004,
						name: 'Sneha',
						age: 27,
						salary: 55000,
						skills: ['Figma', 'Photoshop'],
						projects: [
							{
								projectId: 'P5',
								title: 'Bank App',
								completed: true,
								bugs: 2,
							},
						],
					},
				],
			},
			{
				deptId: 4,
				deptName: 'FullStack',
				manager: { id: 14, name: 'Arjun' },
				employees: [
					{
						empId: 1005,
						name: 'Rohit',
						age: 26,
						salary: 70000,
						skills: ['React', 'Node', 'MongoDB'],
						projects: [
							{
								projectId: 'P6',
								title: 'Food App',
								completed: false,
								bugs: 18,
							},
							{
								projectId: 'P7',
								title: 'Chat App',
								completed: true,
								bugs: 4,
							},
						],
					},
					{
						empId: 1006,
						name: 'Neha',
						age: 24,
						salary: 48000,
						skills: ['Vue', 'Firebase'],
						projects: [
							{
								projectId: 'P8',
								title: 'CRM',
								completed: false,
								bugs: 27,
							},
						],
					},
				],
			},
		],
	},
];
//console.log(companyData);

//incomplete projects
let imcompltedProject = companyData.map((c) =>
	c.departments.map((d) =>
		d.employees.map((e) =>
			e.projects.filter((projects) => projects.status === true),
		),
	),
);
//console.log(imcompltedProject);

// Common skills

let skills = companyData.map((c) =>
	c.departments.map((d) =>
		d.employees.map((e) =>
			e.projects.map((p) =>
				console.log('company skills', c.companyName, e.skills),
			),
		),
	),
);

console.log(skills.filter);

//emplye with max bugs
companyData.map((c) =>
	c.departments.map((d) =>
		d.employees.map((e) =>
			e.projects.map((p) => console.log('emp name', e.name, 'bugs', p.bugs)),
		),
	),
);
