import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Card } from 'react-bootstrap';
import { Button} from '@mui/material';
import SgardiLogo from '../assets/images/Assessment/SgardiLogo.png';
import Delete from '../assets/images/Delete.png';
import EditIcon from '@mui/icons-material/Edit';
import Edit from '../assets/images/edit.png';
import { CardContent } from '@mui/material';

function CustomTabPanel(props) {
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
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function AssessmentReport() {
    const [value, setValue] = React.useState(0);
    const [drawerOpen, setDrawerOpen] = React.useState(false); // State to manage drawer open/close
    const [pageSize, setPageSize] = React.useState('afour');
    const [photo, setPhoto] = React.useState('standard');
    const handleChange = (event, newValue) => {
        setValue(newValue);

    };

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const tabItems = [
        {
            icon: <AddIcon />,
            label: "Create from scratch",
        },
        {
            icon: <AutoAwesomeMosaicIcon />,
            label: "Template 1",
        },
        {
            icon: <AutoAwesomeMosaicIcon />,
            label: "Template 2",
        },
        {
            icon: <AutoAwesomeMosaicIcon />,
            label: "Template 3",
        },
        {
            icon: <AutoAwesomeMosaicIcon />,
            label: "Template 4",
        },
        {
            icon: <AutoAwesomeMosaicIcon />,
            label: "Template 5",
        },
        {
            icon: <AutoAwesomeMosaicIcon />,
            label: "Template 6",
        },
        {
            icon: <AutoAwesomeMosaicIcon />,
            label: "Template 7",
        },
        {
            icon: <AutoAwesomeMosaicIcon />,
            label: "Template 8",
        },
    ]


    const PageSizehandleChange = (event) => {
        setPageSize(event.target.value);
    };

    const PhotohandleChange = (event) => {
        setPhoto(event.target.value)
    }
    return (
      <div className='right-cont'>
        <div className='card body-cont'>
          <Box sx={{ width: '100%'}}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                      <Tab label="Style" {...a11yProps(0)} />
                      <Tab label="Data Elements" {...a11yProps(1)} />
                      <Tab label="Email Template" {...a11yProps(2)} />
                  </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                  <h4>Templates</h4>
                  {tabItems.map((item, index) => (
                      index % 3 === 0 && (
                          <Grid container spacing={2} key={`row-${index}`} style={{ width: "50%" }}>
                              {tabItems.slice(index, index + 3).map((subItem, subIndex) => (
                                  <Grid item xs={4} key={subIndex}>
                                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }} onClick={() => toggleDrawer()}>
                                          <span style={{ height: "90px", width: "90px", color: "rgb(180,180,180)", backgroundColor: "rgb(236,236,236)", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                              {subItem.icon}
                                          </span>
                                          {subItem.label}
                                      </div>
                                  </Grid>
                              ))}
                          </Grid>
                      )
                  ))}
                  <div>

                      <FormControl>
                          <h4>Page Size</h4>
                          <RadioGroup
                              aria-labelledby="demo-controlled-radio-buttons-group"
                              name="controlled-radio-buttons-group"
                              value={pageSize}
                              onChange={PageSizehandleChange}
                              style={{ display: "flex", flexDirection: "row" }}
                          >
                              <FormControlLabel  value="afour" control={<Radio />} label="A4" />
                              <FormControlLabel value="usletter" control={<Radio />} label="US Letter" />
                          </RadioGroup>
                      </FormControl>

                  </div>
                  <div>
                      <FormControl>
                          <h4>Photo Resolution</h4>
                          <RadioGroup
                              aria-labelledby="demo-controlled-radio-buttons-group"
                              name="controlled-radio-buttons-group"
                              value={photo}
                              onChange={PhotohandleChange}
                              style={{ display: "flex", flexDirection: "row" }}
                          >
                              <FormControlLabel value="standard" control={<Radio />} label="Standard" />
                              <FormControlLabel value="high" control={<Radio />} label="High" />
                          </RadioGroup>
                      </FormControl>

                  </div>

                <div>

              </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                  Item Two
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                  Item Three
              </CustomTabPanel>

              {/* Drawer Component */}
              <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={toggleDrawer}
                  className='mt-5'
              >
                  <Box sx={{ width: 800, marginTop: "0px" }}>
                    <Box sx={{ background:'#2B3B7B', padding:'25px 48px', minHeight:'300px' }}>
                        <Grid container alignItems="center">
                            <Grid item xs={6}>
                                <Typography variant="h5" align="left" className='text-white'>Report set up and preview</Typography>
                            </Grid>
                            <Grid item xs={6} textAlign="right">
                                <Button variant="contained" className='btn btn-orange'>Save Report</Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box
                    sx={(theme) => ({
                      border: '0px solid #E0E0E0',
                      borderRadius: '16px',
                      position: 'relative',
                      top: '-200px',
                      m: 2,
                      height: '400px',
                      overflowY: 'auto',
                      overflowX: 'hidden', // Updated to hide horizontal scrollbar
                      '& > div': {
                          overflow: 'auto hidden',
                          '&::-webkit-scrollbar': { height: 10, WebkitAppearance: 'none' },
                          '&::-webkit-scrollbar-thumb': {
                              borderColor: theme.palette.mode === 'dark' ? '' : '#E7EBF0',
                              backgroundColor: 'rgba(0 0 0 / 0.5)',
                          },
                      },
                  })}
                >
                    <Grid container spacing={2} sx={{ width: '100%'}}>
                        <Grid item xs={12}>
                            <Card className='shadow-none text-center pb-4' sx={{ width: '100%'}}>
                                <CardContent style={{ display: 'flex', width:'100%'}}>
                                    <div className='d-flex'>
                                        <Typography variant="h6" component="div" className='mb-4 me-3'>
                                            <img src={SgardiLogo} alt="SgardiLogo" />
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography variant="body2" sx={{ fontSize: '16px', display:'flex', alignItems:'center' }}>
                                            <img src={Delete} alt="Delete" />
                                        </Typography>
                                    </div>
                                </CardContent>
                                
                                <Grid container spacing={1} alignItems="center" className='ms-3 mb-3'> 
                                    <Grid item>
                                        <Typography sx={{ color:'#000000', fontSize:'16px', fontWeight:'500' }}>Warehouse Safety Checklist</Typography>
                                    </Grid>
                                    <Grid item>
                                        <img src={Edit} alt="Edit" />
                                    </Grid>
                                    <Grid item>
                                        <img className='ms-3' src={Delete} alt="Delete" />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} alignItems="center" className='ms-3 mb-3'> 
                                    <Grid item>
                                        <Typography sx={{ color:'#919191', fontSize:'16px', fontWeight:'500' }}>30 Jan 2024 / John</Typography>
                                    </Grid>
                                    <Grid item>
                                        <img src={Edit} alt="Edit" />
                                    </Grid>
                                    <Grid item>
                                        <img className='ms-3' src={Delete} alt="Delete" />
                                    </Grid>
                                </Grid>
                                <div class="col-md-12 text-left">
                                    <p className='listrow'>Client / Site</p>
                                    <p className='listrow'>Building#</p>
                                    <p className='listrow'>Location</p>
                                    <p className='listrow'>Conducted on (Date and Time)</p>
                                    <p className='listrow'>Inspected by</p>
                                </div>
                            </Card>
                        </Grid>
                    </Grid>
                  </Box>
                </Box>

              </Drawer>
          </Box>
        </div>
      </div>

    );
}