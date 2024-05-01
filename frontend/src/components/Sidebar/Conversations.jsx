import React from 'react'
import Conversation from './Conversation'
function Conversations() {
  return (
    <div className='py-2 flex flex-col overflow-auto'  style={{ maxHeight: 'calc(100vh - 120px)' }}  >
 			 <div className="scrollbar">
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
		<Conversation />
        <Conversation />
      
      </div>

		</div>
  )
}

export default Conversations