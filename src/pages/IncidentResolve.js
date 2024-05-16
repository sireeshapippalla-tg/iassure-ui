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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect } from 'react';


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
    const [widgets, setWidgets] = useState([]);
    const [rows, setRows] = useState([
        { id: 1, task: "", dueDate: "", comment: "", resolved: false }
    ]);
    const [correctiveRows, setCorrectiveRows] = useState([
        { id: 1, task: "", dueDate: "", comment: "", resolved: false }
    ]);
    const [showAlert, setShowAlert] = useState(false);
    const [correctiveShowAlert, setCorrectieShowAlert] = useState(false);
    const [problemDescription, setProblemDescription] = useState('');
    const [whyInputs, setWhyInputs] = useState([{ label: 'first why', value: '' }]);
    const [movingDivTop, setMovingDivTop] = useState(200);
    const [selectedWidget, setSelectedWidget] = useState(null);
    const [taskAssignRows, setTaskAssignRows] = useState([1]);


    const addTaskAssignRow = () => {
        setTaskAssignRows([...taskAssignRows, taskAssignRows.length + 1])
    }

    const assignOptions = [
        "Interim Investigation",
        "Root cause analysis",
        "Corrective action",
        "Preventive action"
    ];

    function numberToWords(number) {
        const units = ['', 'first', 'second', 'Third', 'Forth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth'];
        const teens = ['Tenth', 'Eleventh', 'Twelveth', 'Thirteenth', 'Fourteenth', 'Fifteenth', 'Sixteenth', 'Seventeenth', 'Eighteenth', 'Nineteenth'];
        const tens = ['', '', 'Twentyth', 'Thirtyth', 'Fortyth', 'Fiftyth', 'Sixtyth', 'Seventyth', 'Eightyth', 'Ninetyth'];

        if (number < 10) {
            return units[number];
        } else if (number < 20) {
            return teens[number - 10];
        } else if (number < 100) {
            return `${tens[Math.floor(number / 10)]} ${units[number % 10]}`.trim();
        } else {
            return number.toString();
        }
    }


    const whyInputshandleAddRow = () => {
        const newInputs = [...whyInputs, { label: `Why ${whyInputs.length + 1}`, value: '' }];
        setWhyInputs(newInputs);
    };
    const whyInputshandleRemoveRow = (index) => {
        const updatedInputs = [...whyInputs];
        updatedInputs.splice(index, 1);
        setWhyInputs(updatedInputs);
    };

    const whyInputshandleInputChange = (index, value) => {
        const updatedInputs = [...whyInputs];
        updatedInputs[index].value = value;
        setWhyInputs(updatedInputs);
    };

    const handleAddWidgets = () => {
        // Add all draggable items to widgets state
        setWidgets(draggableItems);
    };


    const handleAddRow = () => {
        const newRow = { id: rows.length + 1, task: "", dueDate: "", comment: "", resolved: false };
        setRows([...rows, newRow]);
    };
    const CorrectivehandleAddRow = () => {
        const newRow = { id: correctiveRows.length + 1, task: "", dueDate: "", comment: "", resolved: false };
        setCorrectiveRows([...correctiveRows, newRow]);
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
    const correctivehandleDeleteRow = (id) => {
        if (correctiveRows.length === 1) {
            console.log("Cannot delete the only row.");
            setCorrectieShowAlert(true);
        } else {
            const updatedRows = correctiveRows.filter(row => row.id !== id);
            setCorrectiveRows(updatedRows);
        }
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const correctiveHandleCloseAlert = () => {
        setCorrectieShowAlert(false);
    };
    const handleChange = (id, field, value) => {
        const updatedRows = rows.map(row =>
            row.id === id ? { ...row, [field]: value } : row
        );
        setRows(updatedRows);
    };
    const correctiveRowshandleChange = (id, field, value) => {
        const updatedRows = correctiveRows.map(row =>
            row.id === id ? { ...row, [field]: value } : row
        );
        setCorrectiveRows(updatedRows);
    };


    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const toggleModal3 = () => {
        setShowModal3(!showModal3);
    };



    const handleDragStart = (e, widgetType, label, options) => {
        e.dataTransfer.setData("widgetType", widgetType);
        e.dataTransfer.setData("label", label);
        if (widgetType === 'dropdown') {
            e.dataTransfer.setData("options", JSON.stringify(options));
        }
        else {

            e.dataTransfer.setData("options", JSON.stringify([]));
        }
    };


    const handleDragOver = (e) => {
        e.preventDefault();
    };


    const handleOnDrop = (e) => {
        const widgetType = e.dataTransfer.getData("widgetType");
        console.log('widgetType:', widgetType); // Add logging
        const label = e.dataTransfer.getData("label");
        console.log('label:', label); // Add logging
        const optionString = e.dataTransfer.getData("options");
        console.log('optionString:', optionString); // Add logging

        // checking if optionstring is not empty
        if (optionString.trim() !== "") {
            try {
                const options = JSON.parse(optionString);
                setWidgets([...widgets, { widgetType, label, options }]);
            } catch (error) {
                console.error("Error parsing options JSON:", error);
            }
        } else {
            console.error("No options data provided.");
            setWidgets([...widgets, { widgetType, label, options: [] }]);
        }
    };


    const handleCloseWidget = (label, widgetType) => {
        setWidgets(widgets.filter(widget => !(widget.label === label && widget.widgetType === widgetType)));
    };

    const draggableItems = [
        // { widgetType: 'dropdown', label: 'Severity', options: ["Critical", "High", "Moderate", "Low"] },
        { widgetType: 'dropdown', label: 'Product name', options: ["Product 1", "Product 2", "Product 3"] },
        { widgetType: 'dropdown', label: 'Issue type', options: ["Audit", "Quality", "Security"] },
        { widgetType: 'dropdown', label: 'Supplier Name', options: ["One", "Two", "Three"] },
        { widgetType: 'input', label: 'Affected quantity' },
        { widgetType: 'dropdown', label: 'Issue Area', options: ["Footwear", "Apparel", "Leather Boots", "Production Components and Materials", "Work Inprogress", "Finished Product waiting for distribution"] },
        { widgetType: 'input', label: 'Product Code' },
        { widgetType: 'input', label: 'Batch number' },
    ].filter(item => !widgets.some(widget => widget.label === item.label && widget.widgetType === item.widgetType));


    useEffect(() => {
        const handleScroll = () => {
            setMovingDivTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <div>
            <div className='right-cont'>
                <div className='card'>

                    <div className='m-4 '>
                        {/*----------------- Form ------------------------*/}
                        <div>
                            <div className='row'>
                                <div class="col-md-7">
                                    <h5 style={{ fontSize: "30px", fontWeight: "600" }}>Case details</h5>
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
                                                    <Form.Label className='text_color'>Case Summary <span className='star'>*</span></Form.Label>
                                                    <Form.Control className='input_border' as="textarea" rows={1} placeholder='Write the description' />
                                                </Form.Group>
                                            </div>
                                            <div className='col-md-9'>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label className='text_color'>Case Description <span className='star'>*</span></Form.Label>
                                                    <Form.Control className='input_border' as="textarea" rows={2} placeholder='Write the description' />
                                                </Form.Group>
                                            </div>
                                            <div className='col-md-9'>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label className='text_color'>Severity <span className='star'>*</span></Form.Label>
                                                    <Form.Select className='input_border' aria-label="Default select example">
                                                        <option>Please select Severity</option>
                                                        <option value="1">Critical</option>
                                                        <option value="2">High</option>
                                                        <option value="3">Moderate</option>
                                                        <option value="4">Low</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>

                                            <div className='col-md-9'>
                                                <label className='text_color'>Upload Attachment <span className='star'>*</span></label>
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
                                                <div>
                                                    <div
                                                        className='right-cont col-md-12'
                                                        onDrop={handleOnDrop}
                                                        onDragOver={handleDragOver}
                                                    >
                                                        <div className='drop_text'>
                                                            <label>Drop your fields here (or) </label>
                                                            <label onClick={handleAddWidgets}> &nbsp; Add to click here</label>
                                                        </div>

                                                        {widgets.map((widget, index) => (
                                                            <div key={index}>
                                                                <Form.Group className="mb-3" controlId={`exampleForm.ControlInput${index}`}>
                                                                    <Form.Label className='text_color'>{widget.label}</Form.Label>
                                                                    <div style={{ display: "flex" }}>
                                                                        {widget.widgetType === 'dropdown' ? (
                                                                            <Form.Select className='input_border' aria-label="Default select example">
                                                                                <option>Please select {widget.label}</option>
                                                                                {widget.options.map((option, i) => (
                                                                                    <option key={i} value={option}>{option}</option>
                                                                                ))}

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
                                                                        <IconButton onClick={() => handleCloseWidget(widget.label, widget.widgetType)}>
                                                                            <CloseIcon className='close_icon' />
                                                                        </IconButton>
                                                                    </div>
                                                                </Form.Group>

                                                            </div>
                                                        ))}

                                                        {widgets.map((widget, index) => (
                                                            <div key={index}>
                                                                <Form.Group controlId={`exampleForm.ControlInput${index}`}>
                                                                    {/* Render widget based on selectedWidget state */}
                                                                    {selectedWidget === widget && (
                                                                        <div style={{ display: "flex" }}>
                                                                            {/* Render widget content */}
                                                                        </div>
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
                                <div className="col-md-5 mt-5 movingdiv2" >
                                    <div className=''>
                                        <h6 className='m-3 text-white' style={{ fontSize: '24px', fontWeight: '500' }}>
                                            Drag and drop dynamic fields into Case details
                                        </h6>
                                        <div className='row m-2'>
                                            {/* Render draggable items */}
                                            {draggableItems.map((item, index) => (
                                                <div key={index} className='col-md-6 p-2'>
                                                    <div
                                                        className='dragable_btn'
                                                        draggable={true}
                                                        onDragStart={(e) => handleDragStart(e, item.widgetType, item.label, item.options)}
                                                    >
                                                        {item.label}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* <div className='row'>
                                <div className='col-md-12'>
                                    <div className='col-md-9 mt-4'>
                                        <div className='row'>
                                            <label className='subhead_lbl'
                                            // style={{ color: "#4a6bce", fontWeight: "bold" }}
                                            >Interim Investigation</label>
                                            <div className='col-md-5'>
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
                                            <div className='col-md-5'>
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
                                            <div className='col-md-2 m-auto'>
                                                <label class="form-check-label" for="flexCheckDefault" className='text_color mt-4'>
                                                    Redo <Checkbox />
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-9 mt-4'>
                                        <div className='row'>
                                            <label
                                                className='subhead_lbl'
                                            >Root cause analysis</label>
                                            <div className='col-md-5'>
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
                                            <div className='col-md-5'>
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
                                            <div className='col-md-2 m-auto'>
                                                <label class="form-check-label" for="flexCheckDefault" className='text_color mt-4'>
                                                    Redo <Checkbox />
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-9 mt-4'>
                                        <div className='row'>
                                            <label
                                                className='subhead_lbl'
                                            >Corrective action</label>
                                            <div className='col-md-5'>
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
                                            <div className='col-md-5'>
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
                                            <div className='col-md-2 m-auto'>
                                                <label class="form-check-label" for="flexCheckDefault" className='text_color mt-4'>
                                                    Redo <Checkbox />
                                                </label>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='col-md-9 mt-4'>
                                        <div className='row'>
                                            <label
                                                className='subhead_lbl'
                                            >preventive action</label>
                                            <div className='col-md-5'>
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
                                            <div className='col-md-5'>
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
                                            <div className='col-md-2 m-auto'>
                                                <label class="form-check-label" for="flexCheckDefault" className='text_color mt-4'>
                                                    Redo <Checkbox />
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                   
                                </div>
                             
                            </div>

                            <div className='m-3'>
                                <Button
                                    variant="contained"
                                    onClick={toggleModal3}
                                    style={{ backgroundColor: "#7b39f1", marginRight: "10px", padding: "10px", fontSize: "17px" }}
                                >
                                    Close the incident
                                </Button>
                                <Modal show={showModal3} onHide={toggleModal3}>
                                    <Modal.Header className='blue-bg text-white'>
                                        <Modal.Title>Close the incident</Modal.Title>
                                        <button type="button" className="btn-close bg-white" onClick={toggleModal3}></button>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <label>Are you sure you want to close the incident!</label>

                                    </Modal.Body>
                                    <Modal.Footer>
                                        <button className='blue-bg border-0 text-white rounded btn-blue'>Yes</button>
                                        <button className="btn btn-danger btn-orange" onClick={toggleModal3}>No</button>

                                    </Modal.Footer>
                                </Modal>

                            </div> */}

                        </div>
                        {/* <div className='row mt-5'>
                            <label className='subhead_lbl'>Task assigning</label>
                            <div className='col-md-3'>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='text_color'>Assign</Form.Label>
                                    <Form.Select className='input_border' aria-label="Default select example">
                                        <option value="1">Interim Investigation</option>
                                        <option value="2">Root cause analysis</option>
                                        <option value="3">Corrective action</option>
                                        <option value="3">preventive action</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className='col-md-3'>
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
                            <div className='col-md-3'>
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
                            <div className='col-md-2 d-flex '>
                                <label class="form-check-label" for="flexCheckDefault" className='text_color m-auto'>
                                    Redo <Checkbox /></label>
                                <AddIcon className='close_icon m-auto' />
                            </div>
                            <div className='col-md-1'>
                              
                            </div>

                            <div className='col-md-9'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className='text_color'>Comments</Form.Label>
                                    <Form.Control className='input_border' as="textarea" rows={4} placeholder='Write your comments' />
                                </Form.Group>
                            </div>
                        </div> */}
                        <div className='row mt-5'>
                            <label className='subhead_lbl'>Task assigning</label>

                            {taskAssignRows.map((row, index) => (
                                <div key={index} className='row mt-4'>
                                    <div className='col-md-3'>

                                        <Form.Group className="mb-3" controlId={`exampleForm.ControlInput1-${row}`}>
                                            <Form.Label className='text_color'>Assign</Form.Label>
                                            <Form.Select className='input_border' aria-label="Default select example">
                                                {/* <option value="1">Interim Investigation</option>
                                            <option value="2">Root cause analysis</option>
                                            <option value="3">Corrective action</option>
                                            <option value="3">preventive action</option> */}
                                                {assignOptions.map((option, optionIndex) => (
                                                    <option key={optionIndex} value={optionIndex + 1}>{option}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-3'>
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
                                    <div className='col-md-3'>
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
                                    <div className='col-md-1 d-flex '>
                                        <label class="form-check-label" for="flexCheckDefault" className='text_color m-auto'>
                                            Redo <Checkbox /></label>
                                        {/* <AddIcon className='close_icon m-auto' /> */}

                                    </div>
                                    <div className='col-md-1' style={{marginTop:"35px"}}>
                                        {index < assignOptions.length - 1 && (
                                            <AddIcon className='close_icon m-auto p-0' onClick={addTaskAssignRow} />
                                        )}
                                    </div>
                                </div>
                            ))}

                            <div className='col-md-9'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className='text_color'>Comments</Form.Label>
                                    <Form.Control className='input_border' as="textarea" rows={4} placeholder='Write your comments' />
                                </Form.Group>
                            </div>
                            <div className='mt-3'>
                                <Button
                                    variant="contained"
                                    onClick={toggleModal3}
                                    style={{ backgroundColor: "#7b39f1", marginRight: "10px", padding: "10px", fontSize: "17px" }}
                                >
                                    Close the incident
                                </Button>
                                <Modal show={showModal3} onHide={toggleModal3}>
                                    <Modal.Header className='blue-bg text-white'>
                                        <Modal.Title>Close the incident</Modal.Title>
                                        <button type="button" className="btn-close bg-white" onClick={toggleModal3}></button>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <label>Are you sure you want to close the incident!</label>

                                    </Modal.Body>
                                    <Modal.Footer>
                                        <button className='blue-bg border-0 text-white rounded btn-blue'>Yes</button>
                                        <button className="btn btn-danger btn-orange" onClick={toggleModal3}>No</button>

                                    </Modal.Footer>
                                </Modal>

                            </div>
                        </div>
                        {/* <hr className='mt-5' /> */}

                        {/* -----------------------------Accordian----------------------------------------------------------- */}
                        <div className='mt-5'>
                            {/* Interim Investigation */}
                            <Accordion className='mb-3 border' >
                                <AccordionSummary
                                    style={{
                                        color: "#0c63e4",
                                        backgroundColor: "#e7f1ff",
                                        boxShadow: "inset 0 -1px 0 rgba(0, 0, 0, .125);",
                                        padding: "10px 20px",
                                        width: "100%",

                                    }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    className='text-primary w-full accordian_sum'
                                >
                                 <Typography className='accord_typo'>Interim Investigation</Typography>
                                </AccordionSummary>
                                <AccordionDetails>

                                    <textarea className='input_border' as="textarea" rows={4} placeholder='Write your findings' />
                                    <div className='d-flex justify-content-end gap-3 mt-4'>
                                        <Button variant="contained" style={{ backgroundColor: "#7b39f1" }}>Submit</Button>
                                        <Button variant="contained" style={{ backgroundColor: "#fa531c" }}>Close</Button>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            {/* Root cause analysis */}
                            <Accordion className='mb-3'>
                                <AccordionSummary
                                    style={{
                                        color: "#0c63e4",
                                        backgroundColor: "#e7f1ff",
                                        boxShadow: "inset 0 -1px 0 rgba(0, 0, 0, .125);",
                                        padding: "10px"
                                    }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                >
                                    <Typography className='accord_typo'>Root cause analysis</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <div className='row d-flex justify-content-between'>
                                            <div >
                                                <TableContainer className='border'>
                                                    <Table>
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell></TableCell> {/* Placeholder for vertical heading */}
                                                                <TableCell>
                                                                    <div className='trianglediv'><em className='triangle'></em>Why did this specific issue occur?</div>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <div className='trianglediv'><em className='triangle'></em>Why did this problem go undetected</div>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <div className='trianglediv'><em className='triangle'></em>Why was the problem not prevented?</div>
                                                                </TableCell>
                                                                <TableCell>
                                                                    {/* <div className='trianglediv'><em className='triangle'></em>Action</div> */}
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell>
                                                                    <label className='rootcause_label'>Problem description</label>
                                                                </TableCell>
                                                                <TableCell colSpan={4}>
                                                                    <textarea
                                                                        className="form-control"
                                                                        style={{ backgroundColor: "#f1f0ef" }}
                                                                        fullWidth
                                                                        value={problemDescription}
                                                                        onChange={(e) => setProblemDescription(e.target.value)}
                                                                    />
                                                                </TableCell>

                                                            </TableRow>

                                                            {whyInputs.map((input, index) => (
                                                                <TableRow key={index}>
                                                                    <TableCell>
                                                                        {/* <label className='rootcause_label'>{input.label}</label> */}
                                                                        <label className='rootcause_label'>{`${numberToWords(index + 1)} why`}</label>


                                                                    </TableCell>
                                                                    <TableCell>
                                                                        <textarea
                                                                            className="form-control"
                                                                            style={{ backgroundColor: "#f1f0ef" }}
                                                                            fullWidth
                                                                            value={input.value[0]}
                                                                            onChange={(e) => whyInputshandleInputChange(index, 0, e.target.value)}
                                                                        />
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        <textarea
                                                                            className="form-control"
                                                                            style={{ backgroundColor: "#f1f0ef" }}
                                                                            fullWidth
                                                                            value={input.value[1]}
                                                                            onChange={(e) => whyInputshandleInputChange(index, 1, e.target.value)}
                                                                        />
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        <textarea
                                                                            className="form-control"
                                                                            style={{ backgroundColor: "#f1f0ef" }}
                                                                            fullWidth
                                                                            value={input.value[2]}
                                                                            onChange={(e) => whyInputshandleInputChange(index, 2, e.target.value)}
                                                                        />
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        {index !== 0 && (
                                                                            <IconButton onClick={() => whyInputshandleRemoveRow(index)}>
                                                                                <CloseIcon style={{ color: "red" }} />
                                                                            </IconButton>
                                                                        )}
                                                                        <IconButton onClick={index === whyInputs.length - 1 ? whyInputshandleAddRow : () => whyInputshandleAddRow(index)}>
                                                                            <AddIcon className='blue' style={{ fontSize: "30px", fontWeight: "500" }} />
                                                                        </IconButton>
                                                                    </TableCell>
                                                                </TableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>

                                            </div>


                                        </div>
                                        <div className='row mt-4'>
                                            <div className='col-md-6 '>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label className='text_color'>Summery of root cause analysis</Form.Label>
                                                    <Form.Control className='input_border' as="textarea" rows={2} placeholder='Write your Summery' />
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-end gap-3 mt-4'>
                                            <Button variant="contained" style={{ backgroundColor: "#7b39f1" }}>Submit</Button>
                                            <Button variant="contained" style={{ backgroundColor: "#fa531c" }}>Close</Button>
                                        </div>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            {/* Corrective action */}
                            <Accordion className='mb-3'>
                                <AccordionSummary
                                    style={{
                                        color: "#0c63e4",
                                        backgroundColor: "#e7f1ff",
                                        boxShadow: "inset 0 -1px 0 rgba(0, 0, 0, .125);",
                                        padding: "10px"
                                    }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3-content"
                                    id="panel3-header"
                                >
                                    <Typography className='accord_typo'>Corrective action</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div >
                                        <TableContainer className='border'>
                                            <Table>
                                                <TableHead>
                                                    <TableRow style={{ backgroundColor: "#4a6bce" }}>
                                                        <TableCell className='text-center fs-6 fw-bold text-white' style={{ width: "250px" }}>Task</TableCell>
                                                        <TableCell className='text-center fs-6 fw-bold text-white'>Due Date</TableCell>
                                                        <TableCell className='text-center fs-6 fw-bold text-white'>Comment</TableCell>
                                                        <TableCell className='text-center fs-6 fw-bold text-white' style={{ width: '110px' }}>Is Resolved</TableCell>
                                                        <TableCell className='text-center fs-6 fw-bold text-white' style={{ width: "250px" }}>Supporting Document</TableCell>
                                                        <TableCell className='text-center fs-6 fw-bold text-white'>Action</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {correctiveRows.map(row => (
                                                        <TableRow key={row.id} style={{ backgroundColor: 'rgba(34, 41, 47, 0.05)' }}>
                                                            <TableCell style={{ margin: "auto", textAlign: "center" }}>
                                                                <select
                                                                    value={row.task}
                                                                    onChange={(e) => correctiveRowshandleChange(row.id, "task", e.target.value)}
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
                                                            <TableCell style={{ margin: "auto", textAlign: "center" }}>
                                                                <TextField
                                                                    value={row.dueDate}
                                                                    onChange={(e) => correctiveRowshandleChange(row.id, "dueDate", e.target.value)}
                                                                    type="date"
                                                                    variant="outlined"
                                                                    className='date-bg'
                                                                    style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '0px 12px', background: '#fff' }}
                                                                />
                                                            </TableCell>
                                                            <TableCell style={{ margin: "auto", textAlign: "center" }}>
                                                                <textarea
                                                                    value={row.comment}
                                                                    onChange={(e) => correctiveRowshandleChange(row.id, "comment", e.target.value)}
                                                                    className="form-control"
                                                                    id="exampleFormControlTextarea1"
                                                                    rows="1"
                                                                ></textarea>
                                                            </TableCell>
                                                            <TableCell style={{ margin: "auto", textAlign: "center" }}>
                                                                <Checkbox
                                                                    checked={correctiveRows.resolved}
                                                                    onChange={(e) => correctiveRowshandleChange(row.id, "resolved", e.target.checked)}
                                                                />
                                                            </TableCell>
                                                            <TableCell style={{ margin: "auto", textAlign: "center" }}>
                                                                <Input type="file" style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '0px 10px', background: '#fff' }} />
                                                            </TableCell>
                                                            <TableCell className='d-flex' style={{ textAlign: "center", justifyContent: "center" }}>
                                                                <IconButton onClick={() => correctivehandleDeleteRow(row.id)}>
                                                                    <CloseIcon style={{ color: 'red' }} />
                                                                </IconButton>
                                                                <IconButton onClick={CorrectivehandleAddRow}>
                                                                    <AddIcon className='blue' style={{ fontSize: "30px", fontWeight: "500" }} />
                                                                </IconButton>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        {correctiveShowAlert && (
                                            <Alert severity="error" onClose={correctiveHandleCloseAlert}>
                                                Cannot delete the only row.
                                            </Alert>
                                        )}

                                    </div>
                                    <div className='d-flex justify-content-end gap-3 mt-4'>
                                        <Button variant="contained" style={{ backgroundColor: "#7b39f1" }}>Submit</Button>
                                        <Button variant="contained" style={{ backgroundColor: "#fa531c" }}>Close</Button>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            {/* Preventive actions */}
                            <Accordion  >
                                <AccordionSummary
                                    style={{
                                        color: "#0c63e4",
                                        backgroundColor: "#e7f1ff",
                                        boxShadow: "inset 0 -1px 0 rgba(0, 0, 0, .125);",
                                        padding: "10px"
                                    }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4-content"
                                    id="panel4-header"
                                >
                                    <Typography className='accord_typo'>preventive action</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <textarea className='input_border' as="textarea" rows={4} placeholder='Write your findings' />
                                    <div className='d-flex justify-content-end gap-3 mt-4'>
                                        <Button variant="contained" style={{ backgroundColor: "#7b39f1" }}>Submit</Button>
                                        <Button variant="contained" style={{ backgroundColor: "#fa531c" }}>Close</Button>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>

                        <div className='mt-4'>
                            <div className='col-md-9'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className='subhead_lbl'>History</Form.Label>
                                    <Form.Control className='input_border' as="textarea" rows={4} placeholder='Write history...' />
                                </Form.Group>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div >
    )
}

export default IncidentResolve