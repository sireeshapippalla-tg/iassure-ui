import React, { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import { Tabs, Tab } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Asgardia from '../assets/images/Assessment/Asgardia.png';
import { Modal, Box, Typography, Button, CardContent, Grid } from '@mui/material';
import { Card } from 'react-bootstrap';
import Img1  from '../assets/images/Img1.png';
import Img2  from '../assets/images/Img2.png';
import QuitAuditImg from '../assets/images/QuitAuditImg.png'
import QuitAuditImg2 from '../assets/images/QuitAuditImg2.png'
import Link from '@mui/material/Link';


function Schedule() {
  const [activeTab, setActiveTab] = useState(0);
  

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const [openModal, setOpenModal] = useState(false);
  const [openSecondModal, setOpenSecondModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenSecondModal = () => {
    setOpenSecondModal(true);
  };

  const handleCloseSecondModal = () => {
    setOpenSecondModal(false);
  };

  const scheduledColumns = [
    { field: 'schedule', headerName: 'Schedules', width: 300, renderCell: (params) => ( // Customize the cell renderer
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={Asgardia} alt="Warehouse" style={{ marginRight: '8px', width: '30px', height: '30px' }} /> {/* Display the image */}
            <span>{params.value}</span> {/* Display the schedule name */}
        </div>
    )},
    { field: 'duedate', headerName: 'Due Date', width: 130 },
    { field: 'lastmodified', headerName: 'Last modified', width: 130 },
    { field: 'scheduled', headerName: 'Scheduled', width: 100 },
    { field: 'access', headerName: 'Access', type: '', width: 130 },
    { field: 'edit', headerName: '', type: 'number', width: 130 },
    { field: 'action', headerName: '', width: 130 },
    
];
const scheduledRows = [
    { id: 1, schedule: 'Warehouse Safety Checklist', duedate: 'Feb 15-21', lastmodified: '7 days ago', scheduled:'Yes', access:'All Users',edit:'Edit', action: '...'},
    { id: 2, schedule: 'Warehouse Safety Checklist', lastpublished: '7 days ago', lastmodified: '7 days ago', scheduled:'All users', startassessment:'Start Assessment' },
];

const activeColumns = [
  { field: 'schedule', headerName: 'Schedules', width: 300, renderCell: (params) => ( // Customize the cell renderer
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={Asgardia} alt="Warehouse" style={{ marginRight: '8px', width: '30px', height: '30px' }} /> {/* Display the image */}
            <span>{params.value}</span> {/* Display the schedule name */}
        </div>
    )},
    { field: 'duedate', headerName: 'Due Date', width: 130 },
    { field: 'lastmodified', headerName: 'Last modified', width: 130 },
    { field: 'scheduled', headerName: 'Scheduled', width: 100 },
    { field: 'access', headerName: 'Access', type: '', width: 130 },
    { field: 'edit', headerName: '', type: 'number', width: 130 },
    { field: 'action', headerName: '', width: 130 },
];

const activeRows = [
  { id: 1, schedule: 'Warehouse Safety Checklist', duedate: 'Feb 15-21', lastmodified: '7 days ago', scheduled:'Yes', access:'All Users',edit:'Edit', action: '...'},
  { id: 2, schedule: 'Warehouse Safety Checklist', lastpublished: '7 days ago', lastmodified: '7 days ago', scheduled:'All users', startassessment:'Start Assessment' },
];


  return (
    <div >
      <div className='right-cont'>
        <div className='card'>
          <div className='body-cont'>
            <div className='bodycont-in d-flex bd-highlight border-0 mb-0'>
              <Tabs value={activeTab} onChange={handleTabChange} className="flex-grow-1 bd-highlight">
                <Tab className='tab-text' label="Scheduled Tasks" />
                <Tab className='tab-text' label="Active Tasks" />
                <Tab className='tab-text' label="Completed Tasks" />
              </Tabs>
              <LocalizationProvider dateAdapter={AdapterDayjs} className="d-flex bd-highlight pt-0">
                <DemoContainer components={['DatePicker']}>
                  <DatePicker label="Date Filter" className='date-block'/>
                </DemoContainer>
              </LocalizationProvider>
              <button className='btn btn-edit bd-highlight me-2 ms-2'><SearchIcon /></button>
              <div>
                <button className='btn btn-danger btn-orange d-flex bd-highlight' onClick={handleOpenModal}>
                  Schedule New Assessments
                </button>

                {/* Modal component */}
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
                      Please select one option for Scheduling:
                    </Typography>
                    <CardContent sx={{
                      border:'1px solid #ddd',
                      borderRadius:'9px',
                      padding:'16px',
                      marginBottom:'20px'

                    }}>
                    <Link href="/CustomSchduling"  style={{ display: 'flex', alignItems: 'center' }}>
                      <div>
                        <img src={Img2} alt="Img2" />
                      </div>
                      <div style={{ marginLeft: '30px' }}>
                        <Typography sx={{ fontSize: '16px', color:'#181818',fontWeight:'600' }} gutterBottom>
                          Creator Custom Audit Flow
                        </Typography>
                      </div>
                    </Link>

                    </CardContent>
                    <CardContent sx={{
                      border:'1px solid #ddd',
                      borderRadius:'9px',
                      padding:'16px'

                    }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div>
                        <img src={Img1} alt="Img1" />
                      </div>
                      <div style={{ marginLeft: '30px' }}>
                        <Typography onClick={handleOpenSecondModal} sx={{ fontSize: '16px', color:'#181818',fontWeight:'600' }} gutterBottom>
                          Choose from Standard Audit Flows
                        </Typography>
                      </div>
                    </div>
                    <Modal
                        open={openSecondModal}
                        onClose={handleCloseSecondModal}
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
                                Please select one option for Scheduling:
                            </Typography>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Typography onClick={handleOpenSecondModal} sx={{ fontSize: '32px',textAlign:'center', color:'#181818',fontWeight:'600',background:'#ECECEC', width:'45px',height:'45px', borderRadius:'100%' }} gutterBottom>
                                  1
                                </Typography>
                              <div style={{ marginLeft: '30px' }}>
                                <Typography onClick={handleOpenSecondModal} sx={{ fontSize: '16px', color:'#181818',fontWeight:'600' }} gutterBottom>
                                  Quick Audit
                                </Typography>
                                <Typography>Lets auditors quickly inspect and make report.</Typography>
                              </div>
                            </div>
                            <div style={{ marginLeft: '40px' }}>
                              <img src={QuitAuditImg} alt="QuitAuditImg" />
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', marginTop:'20px' }}>
                                <Typography onClick={handleOpenSecondModal} sx={{ fontSize: '32px',textAlign:'center', color:'#181818',fontWeight:'600',background:'#ECECEC', width:'45px',height:'45px', borderRadius:'100%' }} gutterBottom>
                                  2
                                </Typography>
                              <div style={{ marginLeft: '30px' }}>
                                <Typography onClick={handleOpenSecondModal} sx={{ fontSize: '16px', color:'#181818',fontWeight:'600' }} gutterBottom>
                                Approvel Flow Audit
                                </Typography>
                                <Typography>An auditor inspects and sends it to a manager for approval.</Typography>
                              </div>
                            </div>
                            <div style={{ marginLeft: '40px' }}>
                              <img src={QuitAuditImg2} alt="QuitAuditImg2" />
                            </div>
                            <Button className='btn btn-orange text-white float-end' onClick={handleCloseSecondModal}>Close</Button>
                        </Box>
                    </Modal>

                    </CardContent>
                    
                    <Button className='btn btn-orange text-white mt-2 float-end' onClick={handleCloseModal}>Close</Button>
                  </Box>
                </Modal>
              </div>
            </div>
            {/* Render content based on active tab */}
            {activeTab === 0 && (
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
                        rows={scheduledRows}
                        columns={scheduledColumns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />


                </div>
            )}
            {activeTab === 1 && (
              <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                  rows={activeRows}
                  columns={activeColumns}
                  initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
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
                />
              </div>
            )}
            {/* Add more conditionals for additional tabs */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
