import SuperForm from './tasks/hooks/useState/superForm';
import SelectCountry from './tasks/hooks/useState/dropdown';
import SimpleEffect from './tasks/hooks/useEffect/simpleEffect';
import Cardgrid from './tasks/EmpCards/cardgrid';
import Dashboard from './tasks/EmpCards/dashboard';
import CompanyData from './tasks/hooks/useState/companyData';

import contact from './tasks/Routing/contact';
import about from './tasks/Routing/about';
import Nav from './tasks/Routing/nav';
import UseMemo from './tasks/hooks/useMemo/usememo';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<UseMemo />
		</div>
	);
}
export default App;
