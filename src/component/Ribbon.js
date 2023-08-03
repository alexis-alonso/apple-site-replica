import React, { useState } from 'react';
import Tab from './Tab';
import './css/Ribbon.css';

export default function Ribbon() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="my-component-container">
        <Tab
          label="Tab 1"
          isActive={activeTab === 0}
          onClick={() => handleTabClick(0)}
        />
        <Tab
          label="Tab 2"
          isActive={activeTab === 1}
          onClick={() => handleTabClick(1)}
        />
        <Tab
          label="Tab 3"
          isActive={activeTab === 2}
          onClick={() => handleTabClick(2)}
        />
      </div>

      {activeTab === 0 && <div>Content for Tab 1</div>}
      {activeTab === 1 && <div>Content for Tab 2</div>}
      {activeTab === 2 && <div>Content for Tab 3</div>}
    </div>
  );
};
