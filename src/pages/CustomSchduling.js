import { Typography } from '@mui/material'
import React from 'react'
import Questioner from '../assets/images/Questioner.png'
import Checklist from '../assets/images/Checklist.png'
import Auditor from '../assets/images/Auditor.png'
import AuditingManager from '../assets/images/AuditingManager.png'
import Asgardia from '../assets/images/Assessment/Asgardia.png';
import Edit from '../assets/images/edit.png';
import { Grid } from '@mui/material';
import Link from '@mui/material/Link';

function CustomSchduling() {
  return (
    <div>
        <div className='right-cont' style={{ display: 'flex', }}>
            <div className='leftbarschedule body-cont border card text-center'>
                <Typography sx={{fontSize:'16px', color:'#000000', fontWeight:'700'}}>
                Work flow Elememts
                </Typography>
                <div style={{ marginTop: '20px' }}>
                    <img src={Questioner} alt="Questioner" />
                </div>
                <div style={{ marginTop: '20px'  }}>
                    <img src={Checklist} alt="Checklist" />
                </div>
                <div style={{ marginTop: '20px'  }}>
                    <img src={Auditor} alt="Auditor" />
                </div>
                <div style={{ marginTop: '20px'  }}>
                    <img src={AuditingManager} alt="Auditing Manager" />
                </div>
            </div>
            <div className='rightbarschedule body-cont border card text-center d-flex'>
                <Grid container spacing={2} className='mb-2 p-2 d-flex justify-content-between'>
                    <Grid item  sx={{ display: 'flex', alignItems: 'center' }} className='me-3 mb-3'>
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
                    <Grid item sx={{ }}>
                        <button  className='btn btn-orange text-white'>
                        <Link className='text-white' href="/QuickauditTask">Assign Task </Link>
                        </button>
                    </Grid>
                </Grid>
                
            </div>
        </div>
    </div>
  )
}

export default CustomSchduling