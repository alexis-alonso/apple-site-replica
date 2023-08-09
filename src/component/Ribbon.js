import React, { useState } from 'react';
import Tab from './Tab';
import './css/Tab.css';

export default function Ribbon() {
  // how to change what tab is 'active'
  const [activeTab, setActiveTab] = useState(0);


  // click tab and it sets its state to 'active'
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="ribbon-container">
        <Tab
          label="Tab 1"
          isActive={activeTab === 0}
          onClickFunction={() => handleTabClick(0)}
        />
        <Tab
          label="Tab 2"
          isActive={activeTab === 1}
          onClickFunction={() => handleTabClick(1)}
        />
        <Tab
          label="Tab 3"
          isActive={activeTab === 2}
          onClickFunction={() => handleTabClick(2)}
        />
      </div>

      {activeTab === 0 && <div>Content for Tab 1</div>}
      {activeTab === 1 && <div>Content for Tab 2</div>}
      {activeTab === 2 && <div>Content for Tab 3</div>}
    </div>
  );
};
