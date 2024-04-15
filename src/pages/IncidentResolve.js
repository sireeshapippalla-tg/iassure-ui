import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import DescriptionIcon from '@mui/icons-material/Description';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';
import Modal from 'react-bootstrap/Modal';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Checkbox from '@mui/material/Checkbox';
import Input from '@mui/material/Input';
import CloseIcon from '@mui/icons-material/Close';

const IncidentResolve = () => {

    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    const toggleModal2 = () => {
        setShowModal2(!showModal2);
    };
    const toggleModal3 = () => {
        setShowModal3(!showModal3);
    };


    return (
        <div>
            <div className='right-cont'>
                <div className='card'>

                    <div className='m-4'>
                        {/*----------------- Form ------------------------*/}
                        <div className=''>
                            <h4 className='mb-3'>Subject</h4>
                            <div className='row'>
                                <div className='col-md-6 detail-list'>
                                    <div className='mb-2'>
                                        <label class="labels">Subject </label>
                                        <span class="text1">:  Floor is not clean</span>
                                    </div>
                                    <div className='mb-2'>
                                        <label class="labels">Description </label>
                                        <span class="text1">:  Need to reclean the floor</span>
                                    </div>
                                    <div className='mb-2'>
                                        <label class="labels">Created On </label>
                                        <span class="text1">:   2024-04-12 09:24:43.0</span>
                                    </div>
                                </div>
                                <div className='col-md-6 detail-list'>
                                    <div className='mb-2'>
                                        <label class="labels">Incident Id </label>
                                        <span class="text1">: INN-001</span>
                                    </div>
                                    <div className='mb-2'>
                                        <label class="labels">Organization Name	 </label>
                                        <span class="text1">: ABC</span>
                                    </div>
                                    <div className='mb-2'>
                                        <label class="labels">Priority</label>
                                        <span class="text1">:  Minor</span>
                                    </div>
                                </div>

                                <div className='col-m-12'>
                                    <div className='detail-doc mt-3 row'>
                                        <div className='col-md-3 detail-doc-icon'>
                                        <DescriptionIcon style={{ fontSize: "30px" }} />
                                        </div>
                                        <div className='col-md-9 pt-2'>
                                            <span>20240405222432809.jpeg</span>
                                            <div className=''>
                                                <TextSnippetIcon style={{ fontSize: "14px", color:'blue' }} />
                                                <small className='blue me-2 pe-2 border-end'>View</small>
                                                <DownloadIcon style={{ fontSize: "14px", color:'blue' }} />
                                                <small className='blue'>Download</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/*----------------- Resolutions ------------------------*/}
                        <div className='mt-5'>
                            <h4 className='mb-3'>Resolutions and corrective actions</h4>
                            <div className='col-md-12'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className='mb-4'>
                                            <label class="labels">Incident Type </label>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className='mb-2'>
                                            <label class="labels">Investigation Findings</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                    </div>
                                     {/* Add Case Type */}
                                    <div className='col-md-4'>
                                        <p className='blue' onClick={toggleModal}><AddIcon/> Add Incident Type</p>
                                    </div>

                                    {/* Modal */}
                                    <Modal show={showModal} onHide={toggleModal}>
                                    <Modal.Header className='blue-bg text-white'>
                                        <Modal.Title>Add Incident Type</Modal.Title>
                                        <button type="button" className="btn-close bg-white" onClick={toggleModal}></button>
                                    </Modal.Header>
                                        <Modal.Body>
                                            <label>Incident:</label>
                                            <input type="text" className='form-control' placeholder='Enter Incident'></input>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <button className='blue-bg border-0 text-white rounded btn-blue'>Add Incident Type</button>
                                            <button className="btn btn-danger btn-orange" onClick={toggleModal}>Close</button>
                                            {/* Add any other buttons or actions here */}
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                        </div>

                        {/*----------------- Corrective Actions ------------------------*/}
                        <div className='mt-5'>
                            <h4 className='mb-3'>Corrective Actions</h4>
                            <div className='col-md-12'>
                                <div className='row d-flex justify-content-between'>
                                    <div className='col-md-4'>
                                        <p className='blue'><AddIcon/> Corrective Action Plan</p>
                                    </div>
                                    <div className='col-md-4'>
                                        <p className='blue' style={{textAlign:'right'}}  onClick={toggleModal2}><AddIcon/> Add Task</p>
                                        {/* Modal */}
                                        <Modal show={showModal2} onHide={toggleModal2}>
                                        <Modal.Header className='blue-bg text-white'>
                                            <Modal.Title>Add Task Form</Modal.Title>
                                            <button type="button" className="btn-close bg-white" onClick={toggleModal2}></button>
                                        </Modal.Header>
                                            <Modal.Body>
                                                <label>Task:</label>
                                                <input type="text" className='form-control' placeholder='Enter Task'></input>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <button className='blue-bg border-0 text-white rounded btn-blue'>Add Task</button>
                                                <button className="btn btn-danger btn-orange" onClick={toggleModal2}>Close</button>
                                                {/* Add any other buttons or actions here */}
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                    <div >
                                    <TableContainer className='border'>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Task</TableCell>
                                                    <TableCell>Due Date</TableCell>
                                                    <TableCell>Comment</TableCell>
                                                    <TableCell style={{width: '110px'}}>Is Resolved</TableCell>
                                                    <TableCell>Supporting Document</TableCell>
                                                    <TableCell>Action</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow style={{backgroundColor: 'rgba(34, 41, 47, 0.05)'}}>
                                                    <TableCell>
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>Please Select</option>
                                                        <option value="1">Cleaned properly </option>
                                                        <option value="2">Clean the Floor and sink</option>
                                                        <option value="3">Wash Again</option>
                                                        <option value="4">Cleaned the walls again</option>
                                                    </select>
                                                    </TableCell>
                                                    <TableCell>
                                                        <TextField type="date" variant="outlined" className='date-bg'  style={{border:'1px solid #ddd',borderRadius:'4px',padding:'0px 12px', background:'#fff'}}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Checkbox />
                                                    </TableCell>
                                                    <TableCell>
                                                        <Input type="file"  style={{border:'1px solid #ddd',borderRadius:'4px',padding:'0px 12px', background:'#fff'}}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <IconButton>
                                                            <CloseIcon style={{color:'red'}} />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    </div>
                                    <div className='col-md-12 mt-3'>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='mb-2'>
                                                    <label class="labels">Preventive Actions</label>
                                                    <div className='col-md-5'>
                                                        <textarea class="form-control" id="" rows="3"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-2'>
                                                <div className='mb-2'>
                                                    <label class="labels">Resolution Type</label>
                                                    <div className='col-md-12'>
                                                        <input className='form-control' type='text'/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <p className='blue' style={{textAlign:'left'}}  onClick={toggleModal3}><AddIcon/>Add Resolution Type</p>
                                                {/* Modal */}
                                            <Modal show={showModal3} onHide={toggleModal3}>
                                            <Modal.Header className='blue-bg text-white'>
                                                <Modal.Title>Add Resolution Type</Modal.Title>
                                                <button type="button" className="btn-close bg-white" onClick={toggleModal3}></button>
                                            </Modal.Header>
                                                <Modal.Body>
                                                    <label>Resolution:</label>
                                                    <input type="text" className='form-control' placeholder='Enter Resolution'></input>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button className='blue-bg border-0 text-white rounded btn-blue'>Add Resolution Type</button>
                                                    <button className="btn btn-danger btn-orange" onClick={toggleModal3}>Close</button>
                                                    {/* Add any other buttons or actions here */}
                                                </Modal.Footer>
                                            </Modal>
                                            </div>
                                        </div>
                                        <div className='col-md-6 mt-3'>
                                            <label>Authorized By </label>
                                            <span className='border p-2 rounded d-block' style={{minHeight:'100px'}}></span>
                                            <button className="btn btn-danger btn-orange mt-2 float-end">Clear</button>
                                        </div>
                                        <div class="mt-3">
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Is Resolved<Checkbox />
                                            </label>
                                        </div>
                                    </div>
                                     
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div >
    )
}

export default IncidentResolve