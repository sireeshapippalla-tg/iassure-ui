import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import Asgardia from '../assets/images/Assessment/Asgardia.png';
import { Modal, Box, Typography, Button, CardContent, Grid } from '@mui/material';
import Card from '@mui/material/Card';  
import Group1 from '../assets/images/Assessment/Group1.png'
import Group2 from '../assets/images/Assessment/Group2.png'
import Group3 from '../assets/images/Assessment/Group3.png'

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import UploadIcon from '../assets/images/Assessment/UplodIcon.png';
import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AssessmentDetails from './AssessmentDetails';
import Link from '@mui/material/Link';


function Assessment() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });

      const handleClick = () => {
        
      }

    // Table
    const columns = [
        { field: 'assessment', headerName: 'Assessment', width: 300, renderCell: (params) => ( // Customize the cell renderer
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={Asgardia} alt="Warehouse" style={{ marginRight: '8px', width: '30px', height: '30px' }} /> {/* Display the image */}
                <span>{params.value}</span> {/* Display the assessment name */}
            </div>
        )},
        { field: 'lastpublished', headerName: 'Last Published', width: 130 },
        {
            field: 'lastmodified',
            headerName: 'Last modified',
            width: 130,
        },
        {
            field: 'scheduled',
            headerName: 'Scheduled',
            width: 100,
        },
        {
            field: 'access',
            headerName: 'Access',
            width: 130,
        },
        { 
            field: 'startassessment', 
            headerName: '', 
            width: 180,
            renderCell: (params) => (
                <Link href="/schedule" style={{ color: '#2B3B7B', textDecoration:'underline' }}>{params.value}</Link>
            )
        },
        { 
            field: 'action', 
            headerName: '', 
            width: 130,
            renderCell: () => (
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            )
        },

    ];

    const rows = [
        { id: 1, assessment: 'Warehouse Safety Checklist', lastpublished: '7 days ago', lastmodified: '7 days ago', scheduled:'Yes', access:'All Users', startassessment:'Start Assessment', action:'' },
        { id: 2, assessment: 'Warehouse Safety Checklist', lastpublished: '7 days ago', lastmodified: '7 days ago', scheduled:'Yes', access:'All Users', startassessment:'Start Assessment', action:'' },
    ];

    return (
        <div>
            <div className='right-cont'>
                <div className='card'>
                    <div className='body-cont'>
                        <div className='bodycont-in d-flex bd-highlight border-0 mb-0'>
                            <h3 className='flex-grow-1 bd-highlight'>Recent Assessments</h3>
                            <LocalizationProvider dateAdapter={AdapterDayjs} className="d-flex bd-highlight pt-0">
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Date Filter" className='date-block'/>
                                </DemoContainer>
                            </LocalizationProvider>
                            <button className='btn btn-edit bd-highlight me-2 ms-2'><SearchIcon /></button>
                            <button className='btn btn-danger btn-orange d-flex bd-highlight' onClick={handleOpen}>New Assessments</button>
                        </div>
                        <div style={{ height: 400, width: '100%'}}>
                            <DataGrid
                                sx={{
                                    '.MuiDataGrid-columnHeaderTitle': { 
                                       fontWeight: '400 !important',
                                       fontSize: '16px'
                                    },
                                    '.MuiDataGrid-cellContent':{
                                        fontWeight: '500 !important',
                                       fontSize: '16px'
                                    }
                                  }}
                                rows={rows}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 5 },
                                    },
                                }}
                                pageSizeOptions={[5, 10]}
                                checkboxSelection
                            />

                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    borderRadius:'32px',
                                    transform: 'translate(-50%, -50%)',
                                    bgcolor: 'background.paper',
                                    boxShadow: 24,
                                    p: 4,
                                    maxWidth: 1000,
                                    width: '100%',
                                }}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2"
                                        sx={{
                                            fontSize:'32px',
                                            fontWeight:'500',
                                            textAlign:'center',
                                            color:'#515151'
                                        }}
                                    >
                                        Create a new assessment
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        <Grid container spacing={2}> {/* Grid container */}
                                            <Grid item xs={4} > {/* Grid item for each card, xs={4} means it takes 4/12 of the container width */}
                                                <Card className='border rounded shadow-none text-center pt-4 pb-4' sx={{height:'235px'}}>
                                                    <CardContent>
                                                        <Link href="/assessment/assessement-details">
                                                            <Typography variant="h6" component="div" className='mb-4'>
                                                                <img src={Group1} alt="Group1" />
                                                            </Typography>
                                                            <Typography variant="body2" sx={{fontSize:'16px'}}>
                                                                Simple assessment
                                                            </Typography>
                                                        </Link>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Card className='border rounded shadow-none text-center pt-4 pb-4' sx={{height:'235px'}}>
                                                    <CardContent onClick={handleOpenModal}>
                                                        <Typography variant="h6" component="div" className='mb-4'>
                                                            <img src={Group2} alt="Group2" />
                                                        </Typography>
                                                        <Typography variant="body2" sx={{fontSize:'16px'}}>
                                                            Document assessment
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Grid>

                                            <Modal
                                                open={openModal}
                                                onClose={handleCloseModal}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                                <Box sx={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    borderRadius:'32px',
                                                    transform: 'translate(-50%, -50%)',
                                                    bgcolor: 'background.paper',
                                                    boxShadow: 24,
                                                    p: 4,
                                                    maxWidth: 1000,
                                                    width: '100%',
                                                }}>
                                                    <Typography id="modal-modal-title" variant="h6" component="h2"
                                                        sx={{
                                                            fontSize:'32px',
                                                            fontWeight:'500',
                                                            textAlign:'center',
                                                            color:'#515151'
                                                        }}
                                                    >
                                                        Upload Documents
                                                    </Typography>
                                                    <Typography className='mb-4' id="modal-modal-description" sx={{
                                                            fontSize:'16px',
                                                            fontWeight:'500',
                                                            textAlign:'center',
                                                            color:'#515151'
                                                        }}>
                                                        submit your comprehensive documentation for evaluation.
                                                    </Typography>
                                                    <Typography id="modal-modal-description" sx={{
                                                            textAlign:'center',
                                                            background:'#A9ECFF',
                                                            maxWidth:'880px',
                                                            borderRadius:'16px',
                                                            padding:'20px',
                                                            margin:'0 auto'
                                                        }}>
                                                        <Box sx={{
                                                            minHeight:'314px',
                                                            borderRadius:'24px',
                                                            padding:'48px 16px 48px 16px',
                                                            gap:'8',
                                                            background:'#00AADB'
                                                        }}>
                                                            <Typography id="modal-modal-description" sx={{
                                                                textAlign:'center',
                                                            }}>
                                                                <div className='m-auto d-block'>
                                                                    <img src={UploadIcon} alt="UploadIcon" />
                                                                </div>
                                                                <Button
                                                                    sx={{
                                                                        textTransform:'none',
                                                                        fontSize:'20px',
                                                                        color:'#FA531C',
                                                                        marginTop:'40px',
                                                                        background:'#fff',
                                                                        '&:hover': {
                                                                            background: '#fff',
                                                                        },
                                                                    }}
                                                                    component="label"
                                                                    role={undefined}
                                                                    variant="contained"
                                                                    tabIndex={-1}
                                                                    >
                                                                    Choose File
                                                                    <VisuallyHiddenInput type="file" />
                                                                </Button>
                                                                {/* <input type="file" onChange={handleImageChange} />
                                                                    {selectedImage && (
                                                                        <img src={URL.createObjectURL(selectedImage)} alt="Uploaded Image" />
                                                                    )} */}
                                                            </Typography>
                                                            
                                                        </Box>
                                                        
                                                    </Typography>
                                                    <Button onClick={handleCloseModal}>Close</Button>
                                                </Box>
                                            </Modal>
                                            <Grid item xs={4}> {/* Third card */}
                                                <Card className='border rounded shadow-none text-center pt-4 pb-4' sx={{height:'235px'}}>
                                                    <CardContent>
                                                        <Typography variant="h6" component="div" className='mb-4'>
                                                            <img src={Group3} alt="Group3
                                                            " />
                                                        </Typography>
                                                        <Typography variant="body2" sx={{fontSize:'16px'}}>
                                                            Inventory assessment
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                    </Typography>
                                    <Button onClick={handleClose} sx={{ mt: 2 }}>
                                        Close
                                    </Button>
                                </Box>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assessment