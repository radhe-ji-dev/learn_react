import SuperForm from './tasks/hooks/useState/superForm';
import SelectCountry from './tasks/hooks/useState/dropdown';
import SimpleEffect from './tasks/hooks/useEffect/simpleEffect';
import Cardgrid from './tasks/EmpCards/cardgrid';
import Dashboard from './tasks/EmpCards/dashboard';
import CompanyData from './tasks/hooks/useState/companyData';

function App() {
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

	return (
		<div>
			<CompanyData database={companyData} />
		</div>
	);
}

export default App;
