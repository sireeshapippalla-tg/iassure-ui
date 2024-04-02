import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Asgardia from '../assets/images/Assessment/Asgardia.png';
import Edit from '../assets/images/edit.png';
import Frame1 from '../assets/images/Frame1.png';
import {  MenuItem, Select, OutlinedInput } from '@mui/material';
import { Form } from 'react-bootstrap';
import { Add as AddIcon } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { Modal, Button } from '@mui/material';
import { Box, CardContent } from '@mui/material';
import Card from '@mui/material/Card';  
import SgardiLogo from '../assets/images/Assessment/SgardiLogo.png';
import Delete from '../assets/images/Delete.png';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit'


function QuickAuditTask() {
    const [open, setOpen] = useState(false); // State to manage the open/close state of the modal

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

  return (
    <div className='right-cont'>
        <div className='card'>
            <div className='body-cont'>
                <div className='bodycont-in d-flex bd-highlight border-0 mb-0'>
                    <Grid container spacing={2} className='mb-2 p-2'>
                        <Grid item sx={{ display: 'flex', alignItems: 'center' }} className='me-3 mb-3'>
                            <Grid item className='me-3'>
                                <img src={Asgardia} alt="Asgardia" />
                            </Grid>
                            <Typography 
                                sx={{ fontSize:'26px', color:'#181818' }} 
                                className='flex-grow-1 bd-highlight'
                            >
                                Warehouse Safety Check
                            </Typography>
                            <Grid item className='me-3 ms-3'>
                                <img src={Edit} alt="Edit" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button onClick={handleOpen} className='btn btn-orange text-white'>Finish</button>
                    </Grid>
                </div>
                {/* Modal component */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                >
                    <Box
                        sx={{
                            position: 'relative',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            maxWidth: 1200,
                            width: '90%',
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            borderRadius: '16px',
                            p: 4,
                        }}
                    >
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            sx={{
                                fontSize: '32px',
                                fontWeight: '500',
                                textAlign: 'left',
                                color: '#515151',
                            }}
                        >
                            Report Preview
                        </Typography>
                        
                        <Box
                            sx={(theme) => ({
                                border: '1px solid #E0E0E0',
                                borderRadius: '16px',
                                boxShadow: 8,
                                p: 2,
                                height: '400px',
                                overflowY: 'auto',
                                '& > div': {
                                  overflow: 'auto hidden',
                                  '&::-webkit-scrollbar': { height: 10, WebkitAppearance: 'none' },
                                  '&::-webkit-scrollbar-thumb': {
                                    borderRadius: 8,
                                    border: '2px solid',
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
                        
                        <div class="mt-3 d-flex justify-content-end">
                            <Button
                                onClick={handleClose} // Handle edit button click event
                                startIcon={<EditIcon />} // Add Edit icon
                                variant="contained" 
                                sx={{ mr: 1, bgcolor:'#ECECEC', color:'#000' }} // Add margin-right to separate buttons
                            >
                                Edit
                            </Button>
                            <Button
                                 // Handle save button click event
                                variant="contained" // Apply contained variant for colored background
                                sx={{ bgcolor: '#FA531C', color: '#FFFFFF' }} // Add custom styles for orange background and white text
                            >
                                Done
                            </Button>
                        </div>
                    </Box>
                </Modal>


                <div class="row d-flex align-items-center mb-3">
                    <div class="col-md-2">
                        <span class="tasktext">Task</span>
                    </div>
                    <div class="col-md-3 d-flex">
                        <label class="mt-2 me-2">Assessment:</label>
                        <Form.Select aria-label="Default select example" className='dropdown-bg'>
                            <option selected>Warehouse Safety Questioner</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <div class="col-md-4 d-flex">
                        <label class="mt-1 me-2">Questions :</label>
                        <div className='dropdown-bg p-2'>
                            <small style={{color:'#2B3B7B',padding:'5px', fontSize:'16px'}}>Page 1, S1-Q1 to Page 2, Q1</small>
                        </div>
                    </div>
                    <div class="col-md-3 d-flex align-items-center">
                        <label class="mt-1 me-2">Assigned to :</label>
                        <div className='dropdown-bg p-2 d-flex'>
                            <div class="pinkbg me-2">
                                <img src={Frame1} alt="Frame" class="pe-2"/>
                                <CloseIcon />
                            </div>
                            <div class="bg-white plusbg align-items-center rounded-2 ml-2">
                                <AddIcon/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="row d-flex align-items-center mb-3">
                    <div class="col-md-2">
                    </div>
                    <div class="col-md-3 d-flex">
                        <label class="mt-2 me-2">Assessment:</label>
                        <Form.Select aria-label="Default select example" className='dropdown-bg'>
                            <option selected>Warehouse Safety Questioner</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <div class="col-md-4 d-flex">
                        <label class="mt-1 me-2">Questions :</label>
                        <div className='dropdown-bg p-2'>
                            <small style={{color:'#2B3B7B',padding:'5px', fontSize:'16px'}}>Page 1, S1-Q1 to Page 2, Q1</small>
                        </div>
                    </div>
                    <div class="col-md-3 d-flex align-items-center">
                        <label class="mt-1 me-2">Assigned to :</label>
                        <div className='dropdown-bg p-2 d-flex'>
                            <div class="pinkbg me-2">
                                <img src={Frame1} alt="Frame" class="pe-2"/>
                                <CloseIcon />
                            </div>
                            <div class="bg-white plusbg align-items-center rounded-2 ml-2">
                                <AddIcon/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="row d-flex align-items-center mb-4">
                    <div class="col-md-2">
                    </div>
                    <div class='col-md-10'>
                     <button class="btn btnsuccess"><AddIcon/> Assign New Task</button>
                    </div>
                </div>
                
                <div class="row d-flex align-items-center mb-3">
                    <div class="col-md-2">
                        <span  class="tasktext">Repeat</span>
                    </div>
                    <div class="col-md-3 d-flex">
                        <Form.Select aria-label="Default select example" className='dropdown-bg'>
                            <option selected>Monthly</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                </div>

                <div class="row d-flex align-items-center mb-3">
                    <div class="col-md-2">
                        <span  class="tasktext">Due Date</span>
                    </div>
                    <div class="col-md-3 d-flex">
                        <div className='dropdown-bg p-2'>
                            <small style={{color:'#2B3B7B',padding:'5px', fontSize:'16px'}}>Feb 15 - 21 <CloseIcon/></small>
                        </div>
                    </div>
                </div>

                <div class="row d-flex mb-3">
                    <div class="col-md-2">
                        <span  class="tasktext">Description</span>
                    </div>
                    <div class="col-md-10 d-flex card" style={{minHeight:'100px', padding:'10px 20px'}}>
                        Comment
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default QuickAuditTask