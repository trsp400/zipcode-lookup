import {useState} from 'react'
import {Box, Tabs, Tab, Divider } from '@mui/material';

import { PlaceOutlined } from '@mui/icons-material';

import { TabPanelProps, TabsContentProps } from '../types/tabs'
import { DataLocalityProps } from '../types/form'

import EnterAddress from './enterAddress';
import AddressHistoryList from './addressHistoryList';

const tabContent: TabsContentProps[] = [
  {
    label: 'Addres',
    iconLabel: <PlaceOutlined />,
  },
  {
    label: 'Historic',
    iconLabel: <PlaceOutlined />,
  }
]


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box width="100%">{children}</Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function TabsSection() {
  const [value, setValue] = useState(0);

  const [dataLocalyStorage] = useState<DataLocalityProps[]>(() => {
    const dataLocaly =  localStorage.getItem("#postalCodeSearch") as string

    if(dataLocaly){
      return JSON.parse(dataLocaly)
    }
    
    return [] as unknown as DataLocalityProps;

  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: '#001e3c'}}>
      <Tabs 
        indicatorColor='primary'
        textColor='primary'
        centered
        value={value} 
        onChange={handleChange} 
      >
        {
          tabContent.map((content, index) => (
          <Tab 
            key={(index * Math.random()).toString()}
            icon={content.iconLabel} 
            label={content.label}  
            {...a11yProps(index)} 
            sx={{ 
              color: "#fff", 
              fontSize: {xs: 15, md: 18 }, 
              width: "20%"
            }} 
          />
        ))} 
      </Tabs>
      <Divider color='#8789af' sx={{ opacity: 0.4 }} />    
        <TabPanel value={value} index={0}>
          <EnterAddress />
        </TabPanel>
        <TabPanel value={value} index={1}>
            {dataLocalyStorage.map((dataItem, index) => (
            <AddressHistoryList
              key={(index * Math.random()).toString()}
              {...dataItem}
            />
            ))}
        </TabPanel>
       
    </Box>
  );
}
