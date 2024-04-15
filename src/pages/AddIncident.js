import React from 'react'
import Form from 'react-bootstrap/Form';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useState } from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import TableCell from '@mui/material/TableCell';



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



const AddIncident = () => {
    const [category, setCategory] = useState('');
    const [showCustomerName, setShowCustomerName] = useState(false);
    const [showSupplierName, setShowSupplierName] = useState(false)

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setCategory(selectedCategory);
        setShowCustomerName(selectedCategory === 'customer');
        setShowSupplierName(selectedCategory === 'supplier')
    };


    return (
        <div>
            <div className='right-cont'>
                <div className='card'>

                    <div className='m-4'>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-9">
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                        <label for="floatingTextarea">Enter your prompt</label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <Button variant="contained" style={{ backgroundColor: "#7b39f1" }}>GO</Button>
                                </div>
                            </div>
                        </div>
                        {/* Case details */}
                        <div className='mt-4'>
                            {/* <strong>Case summary</strong> */}
                            <h5 style={{ fontWeight: "bold" }}>Case Details</h5>
                            <div className='mt-4'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Location <span className='star'>*</span></Form.Label>
                                            <Form.Select aria-label="Default select example" onChange={handleCategoryChange} value={category}>
                                                <option>Select Location</option>
                                                <option value="UK">UK</option>
                                                <option value="US" >US</option>
                                                <option value="Paris">Paris</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Italy">Italy</option>
                                                <option value="France">France</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Reported by <span className='star'>*</span></Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option>Select</option>
                                                <option value="Report1">Report1</option>
                                                <option value="Report2" >Report2</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Department <span className='star'>*</span></Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option>Select Department</option>
                                                <option value="Department1">Department1</option>
                                                <option value="Department2" >Department2</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color '>Affected Product  <span className='star'>*</span></Form.Label>
                                            <Form.Control type="text" placeholder="Enter Affected Product " />
                                        </Form.Group>
                                    </div>




                                    {/* {showCustomerName && <div className='col-md-3'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Customer Name <span className='star'>*</span></Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option>Please select the Customer</option>
                                                <option value="1">Internal</option>
                                                <option value="2">Food Link</option>
                                                <option value="3">Cordina Chickens Pty Ltd</option>
                                                <option value="4">M & J Chickens Pty Ltd</option>
                                                <option value="5">Game Farm Galston</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>}

                                    {showSupplierName &&
                                        <div className='col-md-3'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label className='text_color'>Supplier Name <span className='star'>*</span></Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option>Please select the Supplier</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>} */}

                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color '>Batch/Lot  <span className='star'>*</span></Form.Label>
                                            <Form.Control type="text" placeholder="Enter Batch/Lot" />
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color '>Product Code   <span className='star'>*</span></Form.Label>
                                            <Form.Control type="text" s="Enter Product Code " />
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color '>Initiating Reason    <span className='star'>*</span></Form.Label>
                                            <Form.Control type="text" s="Enter Initiating Reason " />
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Person Responsible for action <span className='star'>*</span></Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option>Please select Action</option>
                                                <option value="1">Internal</option>
                                                <option value="2">Food Link</option>
                                                <option value="3">Cordina Chickens Pty Ltd</option>
                                                <option value="4">M & J Chickens Pty Ltd</option>
                                                <option value="5">Game Farm Galston</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>cc'd teams <span className='star'>*</span></Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option>Please select Teams</option>
                                                <option value="1">Internal</option>
                                                <option value="2">Food Link</option>
                                                <option value="3">Cordina Chickens Pty Ltd</option>
                                                <option value="4">M & J Chickens Pty Ltd</option>
                                                <option value="5">Game Farm Galston</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Severity <span className='star'>*</span></Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option>Please select Severity</option>
                                                <option value="1">Critical</option>
                                                <option value="2">High</option>
                                                <option value="3">Moderate</option>
                                                <option value="4">Low</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    
                                    <div className='col-md-3'>
                                        <Form.Group className="mb-3 riskrating" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color '>Risk Rating <span className='star'>*</span></Form.Label>
                                            <TextField sx={{ width:'100%', border:'1px solid #ddd',height: '40px', borderRadius:'4px',padding:'4px 10px'}}
                                            id="standard-number"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="outlined"
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color '>Response Due date <span className='star'>*</span></Form.Label>
                                            <TextField type="date" variant="outlined" className='date-bg'  style={{border:'1px solid #ddd',borderRadius:'4px',padding:'0px 12px', background:'#fff', width:'100%'}}/>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className='row'>
                                    
                                    <div className='col-md-3'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label className='text_color'>Case Description <span className='star'>*</span></Form.Label>
                                            <Form.Control as="textarea" rows={1} />
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-3'>
                                        <FormControl>
                                            <Form.Label className='text_color'>Serious <span className='star'>*</span></Form.Label>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </div>

                            </div>

                        </div>




                        {/* <strong>Case summary</strong> */}
                        <h5 style={{ fontWeight: "bold", marginTop: "30px" }}>Case summary</h5>
                        <div className='mt-4'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label className='text_color '>Subject <span className='star'>*</span></Form.Label>
                                        <Form.Control type="text" placeholder="Subject" />
                                    </Form.Group>
                                </div>
                                <div className='col-md-3'>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className='text_color'>Case Description <span className='star'>*</span></Form.Label>
                                        <Form.Control as="textarea" rows={1} />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className='row mt-4'>
                                {/* <div className='col-md-3'>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className='text_color'>Case Description <span className='star'>*</span></Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </div> */}

                                {/* <div className='row'> */}
                                <div className='col-md-8'>
                                    <label className='text_color'>Upload Attachment</label>
                                    <Button
                                        fullWidth
                                        component="label"
                                        role={undefined}
                                        variant="secondary"
                                        tabIndex={-1}
                                        style={{ backgroundColor: "rgb(241,240,239)", padding: "15px", textTransform: "capitalize" }}
                                    // startIcon={<CloudUploadIcon />}
                                    >
                                        Drag and drop your files or  <span style={{ textDecoration: "underline", marginLeft: "5px" }}>Browse</span>
                                        <VisuallyHiddenInput type="file" />
                                    </Button>
                                </div>

                            </div>
                            {/* </div> */}
                        </div>

                    </div>


                    <div className='m-3 '>
                        <Button variant="contained" style={{ backgroundColor: "#7b39f1" }}>Create Incident/Case</Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddIncident