import React from 'react';

function SimpleComp() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-8'>
			<div className='bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-12 text-center max-w-md mx-auto border border-white/50'>
				<h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 animate-pulse'>
					React Test
				</h1>
				<p className='text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium'>
					Lets have test react component with Tailwind CSS styling!
				</p>
				<button className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300'>
					Get Started
				</button>
			</div>
		</div>
	);
}

export default SimpleComp;
