import React from 'react';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import './tabs.css';

export default () => (
  <Tabs>
    <TabList>
      <Tab>About</Tab>
      <Tab>Projects</Tab>
      <Tab>Contact</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
);
