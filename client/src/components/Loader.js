import React from 'react';

export const Loader = () => (
  <div 
    className="progress" 
    style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: ' center', 
      margin: '40% auto 0', 
      width: '50%'
      }}
  >
    <div class="indeterminate"/>
  </div>
        
);