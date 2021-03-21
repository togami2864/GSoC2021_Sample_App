import React, { useState } from 'react';
import Head from 'next/head';
import { AppBarComponent } from '../components/AppBar';
import { TabPanel } from '../components/TabPanel';

export const Home: React.FC = () => {
  const [index, setIndex] = useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setIndex(newValue);
  };
  if (typeof window !== 'undefined') {
    document.addEventListener('customEvent', function (event) {
      //@ts-ignore
      const data = event.detail;
      console.log(data);
    });
  }

  return (
    <div>
      <AppBarComponent index={index} handleChange={handleChange} />
      <TabPanel value={index} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={index} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={index} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
};

export default Home;
