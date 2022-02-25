import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Products} from './products';
import {ContactPage} from './contact_page';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
    >
        {value === index && (
        <Box className="h-100" sx={{ p: 3 }}>
            <Typography component={'div'}>{children}</Typography>
        </Box>
        )}
    </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };
    
    let tabsData= [
        {"title":"products","component":<Products/>},
        {"title":"products","component":<Products/>},
        {"title":"products","component":<Products/>},
        {"title":"products","component":<Products/>},
        {"title":"products","component":<Products/>},
        {"title":"products","component":<Products/>},
        {"title":"products","component":<Products/>},
        {"title":"products","component":<Products/>},
        {"title":"products","component":<Products/>},
        {"title":"products","component":<Products/>},
        {"title":"products","component":<Products/>}
    ]
    let tabs = tabsData.map((tab,i) =>
        <Tab key={i} label={tab.title} {...a11yProps(i)} />
    )
    let tabPanels = tabsData.map((tab,i)=>
        <TabPanel key={i} value={value} index={i}>
            {tab.component}
        </TabPanel>
    )
    return (
    <Box
        className="h-100"
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex',height:'100%' }}
        // sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 600 }}
    >
        <Tabs
        className="h-100"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
        >
        {tabs}

        {/* <Tab label="products" {...a11yProps(0)} />
        <Tab label="contact" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
        </Tabs>
        {tabPanels}
        {/* <TabPanel value={value} index={0}>
            <Products/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <ContactPage/>
        </TabPanel>
        <TabPanel value={value} index={2}>
        Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
        Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
        Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
        Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
        Item Seven
        </TabPanel> */}
    </Box>
    );
}