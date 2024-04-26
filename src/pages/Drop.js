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

const Drop = () => {
    const [widgets, setWidgets] = useState([]);

    const handleDragStart = (e, widgetType, label) => {
        e.dataTransfer.setData("widgetType", widgetType);
        e.dataTransfer.setData("label", label);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleOnDrop = (e) => {
        const widgetType = e.dataTransfer.getData("widgetType");
        console.log('widget', widgetType)
        const label = e.dataTransfer.getData("label");
        setWidgets([...widgets, { widgetType, label }]);
    };

    return (
        <div>
            <div style={{ padding: "10px" }}>
                <div className='card'>

                    <div className='m-4 row'>
                        <div class="col-md-7">
                            <h5 className='sub_head'>Case Details</h5>
                            <div className='mt-4'>
                                <div className='row'>
                                    <div className='col-md-9'>
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
                                    <div className='col-md-9'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Category <span className='star'>*</span></Form.Label>
                                            <Form.Select className='input_border' aria-label="Default select example">
                                                <option>Please select Category</option>
                                                <option value="1">Incident</option>
                                                <option value="2">Injury</option>
                                                <option value="3">Complaint</option>
                                                <option value="4">Hazard</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-9'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label className='text_color'>Case Summary</Form.Label>
                                            <Form.Control className='input_border' as="textarea" rows={1} placeholder='Write the description' />
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-9'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label className='text_color'>Case Description</Form.Label>
                                            <Form.Control className='input_border' as="textarea" rows={2} placeholder='Write the description' />
                                        </Form.Group>
                                    </div>

                                    <div className='col-md-9'>
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
                                    <div className='col-md-9 mt-4'>
                                        <div
                                        // style={{ border: "5px solid red", padding: "10px" }}
                                        >
                                            {/* <h6 style={{ fontSize: "15px" }}>Extra Properties</h6> */}

                                            <div
                                                className='right-cont col-md-12'
                                                onDrop={handleOnDrop}
                                                onDragOver={handleDragOver}
                                            >
                                                <label className='text_color' style={{ fontWeight: "600" }}>Add</label>

                                                {/* Render dropped widgets */}
                                                {/* Render dropped widgets */}
                                                {widgets.map((widget, index) => (
                                                    <div key={index}>
                                                        <Form.Group className="mb-3" controlId={`exampleForm.ControlInput${index}`}>
                                                            <Form.Label className='text_color'>{widget.label}</Form.Label>
                                                            {widget.widgetType === 'dropdown' ? (
                                                                <Form.Select className='input_border' aria-label="Default select example">
                                                                    <option>Please select {widget.label}</option>
                                                                    <option value="1">Option 1</option>
                                                                    <option value="2">Option 2</option>
                                                                    <option value="3">Option 3</option>
                                                                    {/* Add more options if needed */}
                                                                </Form.Select>
                                                            ) : widget.widgetType === 'date' ? (
                                                                <TextField
                                                                    id={`date-picker-${index}`}
                                                                    label={widget.label}
                                                                    type="date"
                                                                    defaultValue=""
                                                                    className='input_border'
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                    style={{ width: "100%" }}
                                                                />
                                                            ) : (
                                                                // <Form className='input_border' type="text" placeholder={`Enter ${widget.label}`} />
                                                                <input className='input_border form-control' type='text' placeholder={`Enter ${widget.label}`} />
                                                            )}
                                                        </Form.Group>
                                                    </div>
                                                ))}



                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 " >
                            <div className='box_shadow m-5 p-2 rounded'>
                                <h6 className='m-3'>Drag and drop dynamic fields into case details</h6>
                                <div className='row m-2'>

                                    <div className='col-md-3 p-2'>
                                        <div
                                            className='dragable_btn'
                                            // style={{ color: "white", background: "blue", padding: "3px", textAlign:"center", fontSize:"16px", borderRadius:"10px" }}

                                            draggable={true}
                                            onDragStart={(e) => handleDragStart(e, 'dropdown', 'Severity')}
                                        >
                                            Severity
                                        </div>
                                    </div>
                                    <div className='col-md-5 p-2'>
                                        <div
                                            className='dragable_btn'
                                            draggable={true}
                                            onDragStart={(e) => handleDragStart(e, 'dropdown', 'Product name')}
                                        >
                                            Product name
                                        </div>
                                    </div>
                                    <div className='col-md-4 p-2'>
                                        <div
                                            className='dragable_btn'
                                            draggable={true}
                                            onDragStart={(e) => handleDragStart(e, 'dropdown', 'Issue type')}
                                        >
                                            Issue type
                                        </div>
                                    </div>
                                   
                                    {/* <div className='col-md-3 p-2'>
                                        <div
                                            className='dragable_btn'
                                            draggable={true}
                                            onDragStart={(e) => handleDragStart(e, 'dropdown', 'CC')}
                                        >
                                            CC
                                        </div>
                                    </div> */}
                                    {/* <div className='col-md-4 p-2'>
                                        <div
                                            className='dragable_btn'
                                            draggable={true}
                                            onDragStart={(e) => handleDragStart(e, 'date', 'Due date')}
                                        >
                                            Due date
                                        </div>
                                    </div> */}
                                    <div className='col-md-5 p-2'>
                                        <div
                                            className='dragable_btn'
                                            draggable={true}
                                            onDragStart={(e) => handleDragStart(e, 'dropdown', 'Supplier Name')}
                                        >
                                            Supplier Name
                                        </div>
                                    </div>


                                    <div className='col-md-7 p-2'>
                                        <div
                                            className='dragable_btn'
                                            draggable={true}
                                            onDragStart={(e) => handleDragStart(e, 'input', 'Affected quantity')}
                                        >
                                            Affected quantity
                                        </div>
                                    </div>
                                    <div className='col-md-4 p-2'>
                                        <div
                                            className='dragable_btn'

                                            draggable={true}
                                            onDragStart={(e) => handleDragStart(e, 'dropdown', 'Issue Area')}
                                        >
                                            Issue Area
                                        </div>
                                    </div>
                                    <div className='col-md-5 p-2'>
                                        <div
                                            className='dragable_btn'
                                            draggable={true}
                                            onDragStart={(e) => handleDragStart(e, 'input', 'Product Code')}
                                        >
                                            Product Code
                                        </div>
                                    </div>
                                    <div className='col-md-5 p-2'>
                                        <div
                                            className='dragable_btn'
                                            draggable={true}
                                            onDragStart={(e) => handleDragStart(e, 'input', 'Batch number')}
                                        >
                                            Batch number
                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default Drop