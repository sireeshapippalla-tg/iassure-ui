import React, { useState } from 'react';
import SgardiLogo from '../assets/images/Assessment/SgardiLogo.png';
import Logic from '../assets/images/Assessment/Logic.png';
import Delete from '../assets/images/Delete.png';
import AddLogic from '../assets/images/AddLogic.png';
import PhotoLib from '../assets/images/PhotoLib.png';
import Action from '../assets/images/Action.png';

import Note from '../assets/images/Note.png';
import { Grid, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { Edit as EditIcon } from '@mui/icons-material';
import { Add as AddIcon } from '@mui/icons-material';
import RemoveIcon from '@mui/icons-material/Remove';
import { Accordion, AccordionSummary, AccordionDetails,IconButton } from '@mui/material';
import {  MenuItem, Select, OutlinedInput } from '@mui/material';

function AssessmentDetails() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };
  

    return (
        <div >
            <div className='right-cont'>
                <div className='card body-cont'>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Button variant="contained" color="error" className="btn btn-danger btn-orange float-end mt-3 shadow-none">
                                Save Assessments
                            </Button>
                        </Grid>
                        <Grid item container spacing={2}>
                            <Grid item className='mt-4'>
                                <img src={SgardiLogo} alt="SgardiLogo" />
                            </Grid>
                            <Grid item xs>
                                <Typography className='mb-3' variant="h3" sx={{ color:'#2B3B7B',fontSize:'32px',fontWeight:'600' }}>Warehouse Safety Checklist</Typography>
                                <Typography className='mb-3' variant="p" sx={{ color:'#919191', fontSize:'16px'}}>
                                    This general warehouse safety checklist aims to evaluate potential risks observed during warehouse
                                operations. Start by providing general information about the business then proceed with an evaluation of
                                warehouse location, dock areas (exterior and interior), equipment, and sanitation. It also focuses on
                                evaluating warehouse safety training programs and the implementation of emergency and safety
                                procedures. If defects are identified, the inspector can add recommendations and actions to improve
                                overall safety in the warehouse premises.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className='mt-5'>
                        <Grid item container alignItems="center" xs={12}>
                            <Grid item>
                                <ExpandMoreIcon />
                            </Grid>
                            <Grid item>
                                <Typography variant="h3" sx={{ color:'#2B3B7B', fontSize:'32px', fontWeight:'600',marginRight:'20px' }}>Title Page</Typography>
                            </Grid>
                            <Grid item className='me-3'>
                                <EditIcon />
                            </Grid>
                            <Grid item>
                                <img src={Logic} alt="Logic" />
                            </Grid>
                            <Grid item>
                                <Typography className='ms-2' variant="h6" sx={{ color:'#181818', fontSize:'16px', fontWeight:'500' }}>Add Logic</Typography>
                            </Grid>
                            <Grid item>
                                <img className='ms-3' src={Delete} alt="Delete" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className='mt-2'>
                        <Grid item>
                            <Typography className='ms-2' variant="span" sx={{ color:'#919191', fontSize:'16px', fontWeight:'500' }}>This is where you add your inspection questions and how you want them answered. E.g. “Is the floor clean?”</Typography>
                        </Grid>
                    </Grid>

                    {/* Accordian Start */}
                    <Grid container spacing={2} sx={{ width: '100%', marginTop: '24px' }}>
                        <Grid item xs={12}>
                            {/* Accordian 1 */}
                            <Grid container sx={{ background: '#ECECEC', borderRadius: '32px', paddingTop: '24px', marginBottom:'20px' }}>
                                <Grid item xs={12} sx={{ background: '#FFC6C6', padding: '24px' }}>
                                    <div>
                                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                                            sx={{background:'none',boxShadow:'none'}}
                                        >
                                            <AccordionSummary
                                                aria-controls="panel1d-content"
                                                id="panel1d-header"
                                                // expandIcon={<ExpandMoreIcon />}
                                                sx={{ flexDirection: 'row-reverse' }}
                                            >
                                                 <ExpandMoreIcon sx={{ backgroundColor: '#2B3B7B', borderRadius: '50%', color:'#ffffff', marginTop:'15px', marginRight:'20px' }} />
                                                <Typography sx={{ color:'#2B3B7B', fontSize:'32px', fontWeight:'500', paddingTop:'5px' }}>Section 1</Typography>
                                                <Grid item className='mt-3 ms-3'>
                                                    <img src={Logic} alt="Logic" />
                                                </Grid>
                                                <Grid item  className='mt-3'>
                                                    <Typography className='ms-2' variant="h6" sx={{ color:'#181818', fontSize:'16px', fontWeight:'500' }}>Add Logic</Typography>
                                                </Grid>
                                                <Grid item xs={7} className='mt-3'>
                                                    <Typography className='ms-2' variant="h6" sx={{ color:'#515151', fontSize:'14px', fontWeight:'500',paddingTop:'3px' }}>3 Items hidden</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <img className='ms-3 mt-3' src={Delete} alt="Delete" />
                                                </Grid>
                                            </AccordionSummary>
                                            <AccordionDetails
                                                sx={{background:'#fff', borderRadius: '32px',padding:'0'}}
                                            >
                                                <Grid sx={{background:'#ECECEC', borderRadius: '32px 32px 0 0',height:'24px'}}><Typography></Typography></Grid>
                                                <Grid container sx={{ width: '100%',background: '#EBFAFF', padding: '10px 25px',  }}>
                                                    <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Typography sx={{ color: '#181818', fontSize: '24px', fontWeight: '500' }}>Question</Typography>
                                                    </Grid>
                                                    <Grid item sx={{ display: 'flex', alignItems: 'center', color:'#FA531C' }}>
                                                        <AddIcon />
                                                    </Grid>
                                                    <Grid item sx={{ display: 'flex', alignItems: 'center' }} className='me-3'>
                                                        <Typography sx={{ color: '#181818', fontSize: '16px', fontWeight: '500' }}>Add Question</Typography>
                                                    </Grid>
                                                    <Grid item sx={{ display: 'flex', alignItems: 'center', color:'#FA531C' }} className='me-1'>
                                                        <img src={AddLogic} alt="AddLogic" />
                                                    </Grid>
                                                    <Grid item sx={{ display: 'flex', alignItems: 'center' }} className='me-3'>
                                                        <Typography sx={{ color: '#181818', fontSize: '16px', fontWeight: '500' }}>Add logic</Typography>
                                                    </Grid>
                                                    <Grid item sx={{ display: 'flex', alignItems: 'center', color:'#FA531C' }} className='me-1'>
                                                        <AddIcon />
                                                    </Grid>
                                                    <Grid item sx={{ display: 'flex', alignItems: 'center' }} className='me-3'>
                                                        <Typography sx={{ color: '#181818', fontSize: '16px', fontWeight: '500' }}>Copy</Typography>
                                                    </Grid>
                                                    <Grid item sx={{ display: 'flex', alignItems: 'center', color:'#FA531C' }}>
                                                        <AddIcon />
                                                    </Grid>
                                                    <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Typography sx={{ color: '#181818', fontSize: '16px', fontWeight: '500' }}>Required</Typography>
                                                    </Grid>
                                                    <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <img className='ms-3' src={Delete} alt="Delete" />
                                                    </Grid>
                                                </Grid>
                                                
                                                <Grid container spacing={2} className='p-4'>
                                                    <Grid item xs={7}>
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={12} sx={{display:'flex', alignItems: 'center', background:'#ECECEC',borderRadius:'6px', padding:'5px', fontSize:'16px', marginRight:'10px'}}>
                                                                <Typography>
                                                                    Are aisles clear and open for material transfers? • No product shall be stored in aisles where it blocks equipment maneuvering.
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={5} sx={{background:'#ECECEC',borderRadius:'6px', padding:'5px', fontSize:'16px'}}>
                                                    <Select
                                                        fullWidth
                                                        input={<OutlinedInput />}
                                                        sx={{paddingTop:'0px'}}
                                                        >
                                                        <MenuItem value="">Select Option</MenuItem>
                                                        <MenuItem value={1}>Option 1</MenuItem>
                                                        <MenuItem value={2}>Option 2</MenuItem>
                                                        <MenuItem value={3}>Option 3</MenuItem>
                                                    </Select>
                                                    </Grid>
                                                </Grid>

                                                <Grid container spacing={2} className='mb-2 p-2'>
                                                  <Grid item xs={9}>
                                                    <Grid className='me-3' sx={{borderRadius:'8px',padding:'12px 13px 12px 13px', border:'1px solid #2D2D61', textAlign:'center'}}>
                                                      <Typography>Yes</Typography>
                                                    </Grid>
                                                  </Grid>
                                                  <Grid item className='me-3' sx={{ display: 'flex', alignItems: 'center', color:'#FA531C' }}>
                                                      <AddIcon />
                                                  </Grid>
                                                  <Grid item sx={{ display: 'flex', alignItems: 'center', color: '#FA531C' }}>
                                                      <RemoveIcon />
                                                  </Grid>
                                                </Grid>
                                                <Grid container spacing={2} className='mb-2 p-2'>
                                                  <Grid item xs={9}>
                                                    <Grid className='me-3' sx={{borderRadius:'8px',padding:'12px 13px 12px 13px', border:'1px solid #2D2D61', textAlign:'center'}}>
                                                      <Typography>No</Typography>
                                                    </Grid>
                                                  </Grid>
                                                  <Grid item className='me-3' sx={{ display: 'flex', alignItems: 'center', color:'#FA531C' }}>
                                                      <AddIcon />
                                                  </Grid>
                                                  <Grid item sx={{ display: 'flex', alignItems: 'center', color: '#FA531C' }}>
                                                      <RemoveIcon />
                                                  </Grid>
                                                </Grid>
                                                <Grid container spacing={2} className='mb-3 p-2'>
                                                  <Grid item xs={9}>
                                                    <Grid className='me-3' sx={{borderRadius:'8px',padding:'12px 13px 12px 13px', border:'1px solid #2D2D61', textAlign:'center'}}>
                                                      <Typography>N/A</Typography>
                                                    </Grid>
                                                  </Grid>
                                                  <Grid item className='me-3' sx={{ display: 'flex', alignItems: 'center', color:'#FA531C' }}>
                                                      <AddIcon />
                                                  </Grid>
                                                  <Grid item sx={{ display: 'flex', alignItems: 'center', color: '#FA531C' }}>
                                                      <RemoveIcon />
                                                  </Grid>
                                                </Grid>

                                                <Grid container
                                                      sx={{
                                                          width: '100%',
                                                          padding: '10px 25px',
                                                           // Align items with space in between
                                                      }}>
                                                    <Grid item sx={{ display: 'flex', alignItems: 'center', color:'#FA531C' }} className='me-1'>
                                                        <img src={Note} alt="Note" />
                                                    </Grid>
                                                    <Grid item sx={{ display: 'flex', alignItems: 'center' }} className='me-3'>
                                                        <Typography sx={{ color: '#181818', fontSize: '16px', fontWeight: '500' }}>Note</Typography>
                                                    </Grid>
                                                    <Grid item sx={{ display: 'flex', alignItems: 'center', color:'#FA531C' }} className='me-1'>
                                                      <img src={PhotoLib} alt="PhotoLib" />
                                                    </Grid>
                                                    <Grid item sx={{ display: 'flex', alignItems: 'center' }} className='me-3'>
                                                        <Typography sx={{ color: '#181818', fontSize: '16px', fontWeight: '500' }}>Media</Typography>
                                                    </Grid>
                                                    <Grid item sx={{ display: 'flex', alignItems: 'center', color:'#FA531C' }}>
                                                      <img src={Action} alt="Action" />
                                                    </Grid>
                                                    <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Typography sx={{ color: '#181818', fontSize: '16px', fontWeight: '500' }}>Action</Typography>
                                                    </Grid>
                                                    <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                                        <button className='btn btn-danger btn-orange'>Save</button>
                                                    </Grid>
                                                </Grid>

                                            </AccordionDetails>
                                        </Accordion>
                                    </div>
                                </Grid>
                            </Grid>
                            {/* Accordian 2 */}
                            <Grid container sx={{ background: '#ECECEC', borderRadius: '32px', paddingTop: '24px' }}>
                                <Grid item xs={12} sx={{ background: '#FFC6C6', padding: '24px' }}>
                                    <div>
                                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                            <AccordionSummary
                                                aria-controls="panel2d-content"
                                                id="panel2d-header"
                                                expandIcon={<ExpandMoreIcon />}
                                                sx={{ flexDirection: 'row-reverse' }}
                                            >
                                                <Typography>Collapsible Group Item #2</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                    sit amet blandit leo lobortis eget.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}
  
export default AssessmentDetails