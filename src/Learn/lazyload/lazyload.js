// lets have example of lazy loading in react
// can we decide a min time for lazy loading?
//  No, it depends on the network speed and the size of the component being loaded.
//  The fallback will be shown until the component is fully loaded.

import React, { Suspense } from 'react';
// lazy load the component
const LazyComponent = React.lazy(() => import('./lazycompo'));
function LazyLoadExample() {
	return (
		<div>
			<h1>Lazy Load Example</h1>
			{/* wrap the lazy loaded component with Suspense and provide a fallback */}
			<Suspense fallback={<div>Loading...</div>}>
				<LazyComponent />
			</Suspense>
		</div>
	);
}
export default LazyLoadExample;
