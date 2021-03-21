import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

interface AppBarProps {
  index: number;
  handleChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

export const AppBarComponent: React.FC<AppBarProps> = (props) => {
  return (
    <AppBar position="static" color="inherit">
      <Tabs
        value={props.index}
        onChange={props.handleChange}
        indicatorColor="primary"
        variant="fullWidth"
        aria-label="simple tabs example"
      >
        <Tab label="System Data" {...a11yProps(0)} />
        <Tab label=" System Diagnostics Manager" {...a11yProps(1)} />
        <Tab label="System State" {...a11yProps(2)} />
      </Tabs>
    </AppBar>
  );
};
