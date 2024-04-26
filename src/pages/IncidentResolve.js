import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import DescriptionIcon from '@mui/icons-material/Description';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';
import Modal from 'react-bootstrap/Modal';
import Button from '@mui/material/Button';
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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Alert from '@mui/material/Alert';
import FormControlLabel from '@mui/material/FormControlLabel';

import { styled } from '@mui/material/styles';


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

const IncidentResolve = () => {

    const [showModal3, setShowModal3] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [rows, setRows] = useState([
        { id: 1, task: "", dueDate: "", comment: "", resolved: false }
    ]);
    const [showAlert, setShowAlert] = useState(false);

    const handleAddRow = () => {
        const newRow = { id: rows.length + 1, task: "", dueDate: "", comment: "", resolved: false };
        setRows([...rows, newRow]);
    };

    const handleDeleteRow = (id) => {
        if (rows.length === 1) {
            console.log("Cannot delete the only row.");
            setShowAlert(true);
        } else {
            const updatedRows = rows.filter(row => row.id !== id);
            setRows(updatedRows);
        }
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };
    const handleChange = (id, field, value) => {
        const updatedRows = rows.map(row =>
            row.id === id ? { ...row, [field]: value } : row
        );
        setRows(updatedRows);
    };


    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
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
                            <h4 className='mb-3 sub_head'>Subject</h4>
                            {/* <div className='row'>
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
                            </div> */}
                            <div className='mt-4'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Source <span className='star'>*</span></Form.Label>
                                            <Form.Select className='input_border' aria-label="Default select example">
                                                <option>Please select Source</option>
                                                <option value="1">Phone call</option>
                                                <option value="2">Mail</option>
                                                <option value="3">Production line</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Product name <span className='star'>*</span></Form.Label>
                                            <Form.Select className='input_border' aria-label="Default select example">
                                                <option>Please select Product</option>
                                                <option value="1">Product 1</option>
                                                <option value="2">Product 2</option>
                                                <option value="3">Product 3</option>
                                                <option value="4">Product 4</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Issue type <span className='star'>*</span></Form.Label>
                                            <Form.Select className='input_border' aria-label="Default select example">
                                                <option>Please select Issue</option>
                                                <option value="issue">Audit</option>
                                                <option value="issue" >Qulaity</option>
                                                <option value="issue" >Security</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>


                                </div>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Issue Area <span className='star'>*</span></Form.Label>
                                            <Form.Select className='input_border' aria-label="Default select example">
                                                <option>Please select Issue Area</option>
                                                <option value="1">Footwear</option>
                                                <option value="2">Apparel</option>
                                                <option value="3">Leather Boots</option>
                                                <option value="4">Production Components and Materials</option>
                                                <option value="5">Work Inprogress</option>
                                                <option value="6">Finished Product waiting for distribution</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    {/* <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color '>Product Code</Form.Label>
                                            <Form.Control className='input_border' type="text" placeholder="Enter Product Code " />
                                        </Form.Group>
                                    </div> */}
                                    <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Risk type <span className='star'>*</span></Form.Label>
                                            <Form.Select className='input_border' aria-label="Default select example">
                                                <option>Please select Risk type</option>
                                                <option value="1">Risk type 1</option>
                                                <option value="2">Risk type 2</option>
                                                <option value="3">Risk type 3</option>
                                                <option value="4">Risk type 4</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Supplier Name</Form.Label>
                                            <Form.Select className='input_border' aria-label="Default select example">
                                                <option>Please select the Supplier</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>


                                </div>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Severity</Form.Label>
                                            <Form.Select className='input_border' aria-label="Default select example">
                                                <option>Please select Severity</option>
                                                <option value="1">Critical</option>
                                                <option value="2">High</option>
                                                <option value="3">Moderate</option>
                                                <option value="4">Low</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>

                                    <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color '>Product Code</Form.Label>
                                            <Form.Control className='input_border' type="text" placeholder="Enter Product Code " />
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color '>Due date</Form.Label>
                                            <TextField className='input_border date-bg' type="date" variant="outlined" style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '0px 12px', background: '#fff', width: '100%' }} />
                                        </Form.Group>
                                    </div>

                                </div>

                                <div className='row'>

                                    <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Assigned To/Person</Form.Label>
                                            <Form.Select className='input_border' aria-label="Default select example">
                                                <option>Please select Person</option>
                                                <option value="1">Person 1</option>
                                                <option value="2">Person 2</option>
                                                <option value="3">Person 3</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>CC </Form.Label>
                                            <Form.Select className='input_border' aria-label="Default select example">
                                                <option>Please select CC</option>
                                                <option value="1">CC 1</option>
                                                <option value="2">CC 2</option>
                                                <option value="3">CC 3</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color '>Batch number</Form.Label>
                                            <Form.Control className='input_border' type="text" placeholder="Enter Batch number " />
                                        </Form.Group>
                                    </div>



                                </div>
                                <div className='row'>
                                    <div className='col-md-8'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label className='text_color'>Case Description</Form.Label>
                                            <Form.Control className='input_border' as="textarea" rows={3} placeholder='Write the description' />
                                        </Form.Group>
                                    </div>

                                    <div className='col-md-4'>
                                        <label className='text_color'>Upload Attachment</label>
                                        <Button
                                            fullWidth
                                            component="label"
                                            role={undefined}
                                            variant="secondary"
                                            tabIndex={-1}
                                            style={{ backgroundColor: "rgb(241,240,239)", padding: "15px", textTransform: "capitalize", marginTop: "10px" }}
                                        // startIcon={<CloudUploadIcon />}
                                        >
                                            Drag and drop your files or  <span style={{ textDecoration: "underline", marginLeft: "5px" }}>Browse</span>
                                            <VisuallyHiddenInput type="file" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='mt-5' />

                        {/*----------------- Resolutions ------------------------*/}
                        <div className='mt-5'>
                            {/* <h4 className='mb-3'>Resolutions and corrective actions</h4> */}
                            {/* <h4 className='mb-3 sub_head'>Interim Investigation</h4> */}
                            <div className='col-md-12'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className='text_color'>Interim Investigation</Form.Label>
                                    <Form.Control className='input_border' as="textarea" rows={4} placeholder='Write your findings' />
                                </Form.Group>
                            </div>
                            <div className='col-md-12'>
                                <div className='row mt-2'>
                                    <div className='col-md-6'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Assign to/Person </Form.Label>
                                            <Form.Select className='input_border' aria-label="Default select example">
                                                <option>Please select Person</option>
                                                <option value="1">Person 1</option>
                                                <option value="2">Person 2</option>
                                                <option value="3">Person 3</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-6'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>CC </Form.Label>
                                            <Form.Select className='input_border' aria-label="Default select example">
                                                <option>Please select CC</option>
                                                <option value="1">CC 1</option>
                                                <option value="2">CC 2</option>
                                                <option value="3">CC 3</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>

                                </div>
                            </div>
                        </div>
                        

                        <hr className='mt-5' />

                        {/*----------------- Corrective Actions ------------------------*/}
                        <div className='mt-5'>
                            <h4 className='mb-3 sub_head'>Root cause analysis</h4>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='row d-flex justify-content-between'>

                                        <div >
                                            <TableContainer className='border'>
                                                <Table>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>Task</TableCell>
                                                            <TableCell>Due Date</TableCell>
                                                            <TableCell>Comment</TableCell>
                                                            <TableCell style={{ width: '110px' }}>Is Resolved</TableCell>
                                                            <TableCell>Supporting Document</TableCell>
                                                            <TableCell>Action</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    {/* <TableBody>
                                                        <TableRow style={{ backgroundColor: 'rgba(34, 41, 47, 0.05)' }}>
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
                                                                <TextField type="date" variant="outlined" className='date-bg' style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '0px 12px', background: '#fff' }} />
                                                            </TableCell>
                                                            <TableCell>
                                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                                                            </TableCell>
                                                            <TableCell>
                                                                <Checkbox />
                                                            </TableCell>
                                                            <TableCell>
                                                                <Input type="file" style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '0px 10px', background: '#fff' }} />
                                                            </TableCell>
                                                            <TableCell className='d-flex'>
                                                                <IconButton>
                                                                    <CloseIcon style={{ color: 'red' }} />

                                                                </IconButton>
                                                                <IconButton><AddIcon className='blue' style={{ fontSize: "30px", fontWeight: "500" }} /></IconButton>
                                                            </TableCell>
                                                        </TableRow>
                                                    </TableBody> */}
                                                    <TableBody>
                                                        {rows.map(row => (
                                                            <TableRow key={row.id} style={{ backgroundColor: 'rgba(34, 41, 47, 0.05)' }}>
                                                                <TableCell>
                                                                    <select
                                                                        value={row.task}
                                                                        onChange={(e) => handleChange(row.id, "task", e.target.value)}
                                                                        className="form-select"
                                                                        aria-label="Default select example"
                                                                    >
                                                                        <option value="">Please Select</option>
                                                                        <option value="Cleaned properly">Cleaned properly</option>
                                                                        <option value="Clean the Floor and sink">Clean the Floor and sink</option>
                                                                        <option value="Wash Again">Wash Again</option>
                                                                        <option value="Cleaned the walls again">Cleaned the walls again</option>
                                                                    </select>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <TextField
                                                                        value={row.dueDate}
                                                                        onChange={(e) => handleChange(row.id, "dueDate", e.target.value)}
                                                                        type="date"
                                                                        variant="outlined"
                                                                        className='date-bg'
                                                                        style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '0px 12px', background: '#fff' }}
                                                                    />
                                                                </TableCell>
                                                                <TableCell>
                                                                    <textarea
                                                                        value={row.comment}
                                                                        onChange={(e) => handleChange(row.id, "comment", e.target.value)}
                                                                        className="form-control"
                                                                        id="exampleFormControlTextarea1"
                                                                        rows="1"
                                                                    ></textarea>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <Checkbox
                                                                        checked={row.resolved}
                                                                        onChange={(e) => handleChange(row.id, "resolved", e.target.checked)}
                                                                    />
                                                                </TableCell>
                                                                <TableCell>
                                                                    <Input type="file" style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '0px 10px', background: '#fff' }} />
                                                                </TableCell>
                                                                <TableCell className='d-flex'>
                                                                    <IconButton onClick={() => handleDeleteRow(row.id)}>
                                                                        <CloseIcon style={{ color: 'red' }} />
                                                                    </IconButton>
                                                                    <IconButton onClick={handleAddRow}>
                                                                        <AddIcon className='blue' style={{ fontSize: "30px", fontWeight: "500" }} />
                                                                    </IconButton>
                                                                </TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                            {showAlert && (
                                                <Alert severity="error" onClose={handleCloseAlert}>
                                                    Cannot delete the only row.
                                                </Alert>
                                            )}
                                            <div className='row mt-4'>
                                                <div className='col-md-4'>
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                        <Form.Label className='text_color'>Assign to/Person </Form.Label>
                                                        <Form.Select className='input_border' aria-label="Default select example">
                                                            <option>Please select Person</option>
                                                            <option value="1">Person 1</option>
                                                            <option value="2">Person 2</option>
                                                            <option value="3">Person 3</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </div>
                                                <div className='col-md-4'>
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                        <Form.Label className='text_color'>CC </Form.Label>
                                                        <Form.Select className='input_border' aria-label="Default select example">
                                                            <option>Please select CC</option>
                                                            <option value="1">CC 1</option>
                                                            <option value="2">CC 2</option>
                                                            <option value="3">CC 3</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className='col-md-12 mt-3'>
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
                                                        <input className='form-control' type='text' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <p className='blue' style={{ textAlign: 'left' }} onClick={toggleModal3}><AddIcon />Add Resolution Type</p>
                                          
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
                                                    
                                                    </Modal.Footer>
                                                </Modal>
                                            </div>
                                        </div>
                                        <div className='col-md-6 mt-3'>
                                            <label>Authorized By </label>
                                            <span className='border p-2 rounded d-block' style={{ minHeight: '100px' }}></span>
                                            <button className="btn btn-danger btn-orange mt-2 float-end">Clear</button>
                                        </div>
                                        <div class="mt-3">
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Is Resolved<Checkbox />
                                            </label>
                                        </div>
                                    </div> */}

                                    </div>
                                </div>
                            </div>
                        </div>


                        <hr className='mt-5' />
                        <div className='mt-5'>
                            <h4 className='mb-3 sub_head'>Manager section</h4>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className='text_color'>Comments</Form.Label>
                                        <Form.Control className='input_border' as="textarea" rows={4} placeholder='Write your comments' />
                                    </Form.Group>
                                </div>
                                <div className='col-md-6'>
                                    <div className='row'>
                                        <div className='col-md-10'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label className='text_color'>Assign to/Person </Form.Label>
                                                <Form.Select className='input_border' aria-label="Default select example">
                                                    <option>Please select Person</option>
                                                    <option value="1">Person 1</option>
                                                    <option value="2">Person 2</option>
                                                    <option value="3">Person 3</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-2 mt-2'>

                                            <label class="form-check-label" for="flexCheckDefault" className='text_color'>
                                                Approve<Checkbox />
                                            </label>
                                        </div>
                                        <div className='col-md-10'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label className='text_color'>CC </Form.Label>
                                                <Form.Select className='input_border' aria-label="Default select example">
                                                    <option>Please select CC</option>
                                                    <option value="1">CC 1</option>
                                                    <option value="2">CC 2</option>
                                                    <option value="3">CC 3</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>

                                        <div className='col-md-2 mt-2'>
                                            <label class="form-check-label" for="flexCheckDefault" className='text_color'>
                                                Read<Checkbox />
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className='mt-5' />

                        <div className='mt-5'>
                            <label htmlFor="flexCheckDefault" className='text_color'>
                                Close the incident
                                <Checkbox
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                            </label>
                            <div className='mt-4'>
                                <Button
                                    variant="contained"
                                    style={{ backgroundColor: "#7b39f1", marginRight: "10px" }}
                                    disabled={!isChecked}
                                >
                                    Submit
                                </Button>
                                <Button variant="contained" style={{ backgroundColor: "#7b39f1" }} onClick={toggleModal3}>Close</Button>
                                <Modal show={showModal3} onHide={toggleModal3}>
                                    <Modal.Header className='blue-bg text-white'>
                                        <Modal.Title>Close the incident</Modal.Title>
                                        <button type="button" className="btn-close bg-white" onClick={toggleModal3}></button>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <label>Are you sure you wnat to close the incident!</label>

                                    </Modal.Body>
                                    <Modal.Footer>
                                        <button className='blue-bg border-0 text-white rounded btn-blue'>Yes</button>
                                        <button className="btn btn-danger btn-orange" onClick={toggleModal3}>No</button>

                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div >
    )
}

export default IncidentResolve