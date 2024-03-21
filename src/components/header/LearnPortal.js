import React from 'react';
import Dashboard from './Dashboard';
import LearnWindow from './LearnWindow';
// import VirtualAssistant from './VirtualAssistant';


function LearnPortal() {
  return (
    <div>
      <Dashboard />
      <LearnWindow />
     {/* <VirtualAssistant />  */}
    </div>
  );
}

// Export the LearnPortal component
export default LearnPortal;