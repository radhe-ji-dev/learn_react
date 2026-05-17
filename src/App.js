import SuperForm from './tasks/hooks/useState/superForm';
import SelectCountry from './tasks/hooks/useState/dropdown';
import SimpleEffect from './tasks/hooks/useEffect/simpleEffect';
import Cardgrid from './tasks/EmpCards/cardgrid';
import Dashboard from './tasks/EmpCards/dashboard';
import CompanyData from './tasks/hooks/useState/companyData';

import contact from './tasks/Routing/contact';
import about from './tasks/Routing/about';
import Nav from './tasks/Routing/nav';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Nav />

				<Routes>
					<Route path='/' element={<h1>Home</h1>} />
					<Route path='/about' element={<about />} />
					<Route path='/contact' element={<contact />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
export default App;
