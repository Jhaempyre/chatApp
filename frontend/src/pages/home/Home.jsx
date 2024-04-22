import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';

function Home() {
  return (
		
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden
		 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
		<div>
			<Sidebar></Sidebar>
			</div>	
		<div className='divider px-3'></div>	
		</div>
	);
}

export default Home