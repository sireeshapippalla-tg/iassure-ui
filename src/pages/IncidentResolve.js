import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
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
import Checkbox from '@mui/material/Checkbox';
import Input from '@mui/material/Input';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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
        { id: 1, task: '', dueDate: '', comment: '', resolved: false },
    ]);
    const [correctiveRows, setCorrectiveRows] = useState([
        { id: 1, task: '', dueDate: '', comment: '', resolved: false },
    ]);
    const [showAlert, setShowAlert] = useState(false);
    const [correctiveShowAlert, setCorrectieShowAlert] = useState(false);
    const [problemDescription, setProblemDescription] = useState('');
    // const [whyInputs, setWhyInputs] = useState([{ label: 'first why', value: '' }]);
    const [whyInputs, setWhyInputs] = useState([
        { label: 'first why', value: ['', '', ''] },
    ]);
    const [movingDivTop, setMovingDivTop] = useState(200);
    const [selectedWidget, setSelectedWidget] = useState(null);
    const [taskAssignRows, setTaskAssignRows] = useState([1]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [interimSelectedFiles, setInterimSelectedFiles] = useState([]);
    const [rootSelectedFiles, setRootSelectedFiles] = useState([]);
    const [correctiveSelectedFiles, setCorrectiveSelectecFiles] = useState([]);
    const [tableCorrectveSelectedFiles, setTableCorectiveSelectedFiles] = useState([]);
    const [preventiveSelectedFiles, setPreventiveSelectedFiles] = useState([]);
    const [selectedSection, setSelectedSection] = useState('');
    const [interimInvestigation, setInterimInvestigation] = useState({
        assignTo: '',
        cc: '',
        redo: false,
    });
    const [rootCauseAnalysis, setRootCauseAnalysis] = useState({
        assignTo: '',
        cc: '',
        redo: false,
    });
    const [correctiveAction, setCorrectiveAction] = useState({
        assignTo: '',
        cc: '',
        redo: false,
    });
    const [preventiveAction, setPreventiveAction] = useState({
        assignTo: '',
        cc: '',
        redo: false,
    });

    const [files, setFiles] = useState([]);

    const handleSectionChange = (section) => {
        setSelectedSection(section);
    };

    const handleFieldChange = (section, field, value) => {
        switch (section) {
            case 'Interim Investigation':
                setInterimInvestigation({ ...interimInvestigation, [field]: value });
                break;
            // case 'Root cause analysis':
            //     setRootCauseAnalysis({ ...rootCauseAnalysis, [field]: value });
            //     break;
            case 'Corrective action':
                setCorrectiveAction({ ...correctiveAction, [field]: value });
                break;
            case 'Preventive Action':
                setPreventiveAction({ ...preventiveAction, [field]: value });
                break;
            default:
                break;
        }
    };

    const assignOptions = ['Person 1', 'Person 2', 'Person 3', 'Person 4'];

    const ccOptions = ['CC 1', 'CC 2', 'CC 3', 'CC 4'];

    function numberToWords(number) {
        const units = [
            '',
            'first',
            'second',
            'Third',
            'Forth',
            'Fifth',
            'Sixth',
            'Seventh',
            'Eighth',
            'Ninth',
        ];
        const teens = [
            'Tenth',
            'Eleventh',
            'Twelveth',
            'Thirteenth',
            'Fourteenth',
            'Fifteenth',
            'Sixteenth',
            'Seventeenth',
            'Eighteenth',
            'Nineteenth',
        ];
        const tens = [
            '',
            '',
            'Twentyth',
            'Thirtyth',
            'Fortyth',
            'Fiftyth',
            'Sixtyth',
            'Seventyth',
            'Eightyth',
            'Ninetyth',
        ];

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

        if (whyInputs.length < 5) {
            const newInputs = [
                ...whyInputs,
                { label: `Why ${whyInputs.length + 1}`, value: ['', '', ''] },
            ];
            setWhyInputs(newInputs);
        }
    };
    const whyInputshandleRemoveRow = (index) => {
        const updatedInputs = [...whyInputs];
        updatedInputs.splice(index, 1);
        setWhyInputs(updatedInputs);
    };

    const whyInputshandleInputChange = (index, subIndex, value) => {
        const updatedInputs = [...whyInputs];
        updatedInputs[index].value[subIndex] = value;
        setWhyInputs(updatedInputs);
    };

    const handleFileChange = (e) => {
        setSelectedFiles([...e.target.files]);
    };
    const interimHandleFileChange = (e) => {
        setInterimSelectedFiles([...e.target.files]);
    };

    const rootHandleFileChange = (e) => {
        setRootSelectedFiles([...e.target.files]);
    };
    const correctiveHandleFileChange = (e) => {
        setCorrectiveSelectecFiles([...e.target.files]);
    };
    const tableCorrectiveHandleFileChange = (e) => {
        setTableCorectiveSelectedFiles([...e.target.files]);
    };
    const preventiveHandleFileChange = (e) => {
        setPreventiveSelectedFiles([...e.target.files]);
    };
    const handleRemoveFile = (index) => {
        setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
    };
    const interimHandleRemoveFile = (index) => {
        setInterimSelectedFiles(interimSelectedFiles.filter((_, i) => i !== index));
    };
    const rootHandleRemoveFile = (index) => {
        setRootSelectedFiles(rootSelectedFiles.filter((_, i) => i !== index));
    };
    const correctiveHandleRemoveFile = (index) => {
        setCorrectiveSelectecFiles(correctiveSelectedFiles.filter((_, i) => i !== index));
    };
    const tableCorrectiveHandleRemoveFile = (index) => {
        setTableCorectiveSelectedFiles(tableCorrectveSelectedFiles.filter((_, i) => i !== index));
    };
    const preventiveHandleRemoveFile = (index) => {
        setPreventiveSelectedFiles(preventiveSelectedFiles.filter((_, i) => i !== index));
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    };

    const handleAddWidgets = () => {
        // Add all draggable items to widgets state
        setWidgets(draggableItems);
    };

    const CorrectivehandleAddRow = () => {
        const newRow = {
            id: correctiveRows.length + 1,
            task: '',
            dueDate: '',
            comment: '',
            resolved: false,
        };
        setCorrectiveRows([...correctiveRows, newRow]);
    };

    const correctivehandleDeleteRow = (id) => {
        if (correctiveRows.length === 1) {
            console.log('Cannot delete the only row.');
            setCorrectieShowAlert(true);
        } else {
            const updatedRows = correctiveRows.filter((row) => row.id !== id);
            setCorrectiveRows(updatedRows);
        }
    };



    const correctiveHandleCloseAlert = () => {
        setCorrectieShowAlert(false);
    };

    const correctiveRowshandleChange = (id, field, value) => {
        const updatedRows = correctiveRows.map((row) =>
            row.id === id ? { ...row, [field]: value } : row
        );
        setCorrectiveRows(updatedRows);
    };

    const toggleModal3 = () => {
        setShowModal3(!showModal3);
    };

    const handleDragStart = (e, widgetType, label, options) => {
        e.dataTransfer.setData('widgetType', widgetType);
        e.dataTransfer.setData('label', label);
        if (widgetType === 'dropdown') {
            e.dataTransfer.setData('options', JSON.stringify(options));
        } else {
            e.dataTransfer.setData('options', JSON.stringify([]));
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleOnDrop = (e) => {
        const widgetType = e.dataTransfer.getData('widgetType');
        console.log('widgetType:', widgetType); // Add logging
        const label = e.dataTransfer.getData('label');
        console.log('label:', label); // Add logging
        const optionString = e.dataTransfer.getData('options');
        console.log('optionString:', optionString); // Add logging

        // checking if optionstring is not empty
        if (optionString.trim() !== '') {
            try {
                const options = JSON.parse(optionString);
                setWidgets([...widgets, { widgetType, label, options }]);
            } catch (error) {
                console.error('Error parsing options JSON:', error);
            }
        } else {
            console.error('No options data provided.');
            setWidgets([...widgets, { widgetType, label, options: [] }]);
        }
    };

    const handleCloseWidget = (label, widgetType) => {
        setWidgets(
            widgets.filter(
                (widget) =>
                    !(widget.label === label && widget.widgetType === widgetType)
            )
        );
    };

    const draggableItems = [
        // { widgetType: 'dropdown', label: 'Severity', options: ["Critical", "High", "Moderate", "Low"] },
        {
            widgetType: 'dropdown',
            label: 'Product name',
            options: ['Product 1', 'Product 2', 'Product 3'],
        },
        {
            widgetType: 'dropdown',
            label: 'Issue type',
            options: ['Audit', 'Quality', 'Security'],
        },
        {
            widgetType: 'dropdown',
            label: 'Supplier Name',
            options: ['One', 'Two', 'Three'],
        },
        // { widgetType: 'input', label: 'Affected quantity' },
        {
            widgetType: 'dropdown',
            label: 'Issue Area',
            options: [
                'Footwear',
                'Apparel',
                'Leather Boots',
                'Production Components and Materials',
                'Work Inprogress',
                'Finished Product waiting for distribution',
            ],
        },
        { widgetType: 'input', label: 'Product Code' },
        { widgetType: 'input', label: 'Batch number' },
        { widgetType: 'input', label: 'Affected quantity' },
    ].filter(
        (item) =>
            !widgets.some(
                (widget) =>
                    widget.label === item.label && widget.widgetType === item.widgetType
            )
    );

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
                                <div class='col-md-7'>
                                    <h5 style={{ fontSize: '24px', fontWeight: '600' }}>
                                        Case details
                                    </h5>
                                    <div className='mt-2'>
                                        <div className='row'>
                                            <div className='col-md-9 mt-2'>
                                                <div className='row'>
                                                    <div className='col-md-3'>
                                                        <Form.Group
                                                            className='mb-0'
                                                            controlId='exampleForm.ControlInput1'
                                                        >
                                                            <Form.Label className='text_color'>
                                                                Source <span className='star'>*</span>
                                                            </Form.Label>
                                                            <Form.Select
                                                                className='input_border'
                                                                aria-label='Default select example'
                                                            >
                                                                <option>Select Source</option>
                                                                <option value='1'>Phone call</option>
                                                                <option value='2'>Mail</option>
                                                                <option value='3'>Production line</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </div>
                                                    <div className='col-md-3'>
                                                        <Form.Group
                                                            className='mb-0'
                                                            controlId='exampleForm.ControlInput1'
                                                        >
                                                            <Form.Label className='text_color'>
                                                                Category <span className='star'>*</span>
                                                            </Form.Label>
                                                            <Form.Select
                                                                className='input_border'
                                                                aria-label='Default select example'
                                                            >
                                                                <option>Select Category</option>
                                                                <option value='1'>Incident</option>
                                                                <option value='2'>Injury</option>
                                                                <option value='3'>Complaint</option>
                                                                <option value='4'>Hazard</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </div>
                                                    <div className='col-md-3'>
                                                        <Form.Group
                                                            className='mb-0'
                                                            controlId='exampleForm.ControlInput1'
                                                        >
                                                            <Form.Label className='text_color'>
                                                                Severity <span className='star'>*</span>
                                                            </Form.Label>
                                                            <Form.Select
                                                                className='input_border'
                                                                aria-label='Default select example'
                                                            >
                                                                <option>Select Severity</option>
                                                                <option value='1'>Critical</option>
                                                                <option value='2'>High</option>
                                                                <option value='3'>Moderate</option>
                                                                <option value='4'>Low</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </div>{' '}
                                                    <div className='col-md-3 mt-1'>
                                                        <Form.Group
                                                            className='mb-0'
                                                            controlId='exampleForm.ControlInput1'
                                                        >
                                                            <Form.Label className='text_color'>
                                                                Assign to{' '}
                                                            </Form.Label>
                                                            <Form.Select
                                                                className='input_border mt-1'
                                                                aria-label='Default select example'
                                                            >
                                                                <option>Select Person</option>
                                                                <option value='1'>Assign 1</option>
                                                                <option value='2'>Assign 2</option>
                                                                <option value='3'> Assign 3</option>
                                                                <option value='4'>Assign 4</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-md-9 mt-2'>
                                                <Form.Group
                                                    className='mb-0'
                                                    controlId='exampleForm.ControlTextarea1'
                                                >
                                                    <Form.Label className='text_color'>
                                                        Case Summary <span className='star'>*</span>
                                                    </Form.Label>
                                                    <Form.Control
                                                        className='input_border'
                                                        as='textarea'
                                                        rows={1}
                                                        placeholder='Write the description'
                                                    />
                                                </Form.Group>
                                            </div>
                                            <div className='col-md-9 mt-2'>
                                                <Form.Group
                                                    className='mb-0'
                                                    controlId='exampleForm.ControlTextarea1'
                                                >
                                                    <Form.Label className='text_color'>
                                                        Case Description <span className='star'>*</span>
                                                    </Form.Label>
                                                    <Form.Control
                                                        className='input_border'
                                                        as='textarea'
                                                        rows={2}
                                                        placeholder='Write the description'
                                                    />
                                                </Form.Group>
                                            </div>

                                            {/* <div className='col-md-9 mt-2'>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <Form.Group
                                                            className='mb-0'
                                                            controlId='exampleForm.ControlInput1'
                                                        >
                                                            <Form.Label className='text_color'>
                                                                Severity <span className='star'>*</span>
                                                            </Form.Label>
                                                            <Form.Select
                                                                className='input_border'
                                                                aria-label='Default select example'
                                                            >
                                                                <option>Please select Category</option>
                                                                <option value='1'>Critical</option>
                                                                <option value='2'>High</option>
                                                                <option value='3'>Moderate</option>
                                                                <option value='4'>Low</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </div>{' '}
                                                    <div className='col-md-6 mt-1'>
                                                        <Form.Group
                                                            className='mb-0'
                                                            controlId='exampleForm.ControlInput1'
                                                        >
                                                            <Form.Label className='text_color'>
                                                                Assign to{' '}
                                                            </Form.Label>
                                                            <Form.Select
                                                                className='input_border'
                                                                aria-label='Default select example'
                                                            >
                                                                <option>Please select Category</option>
                                                                <option value='1'>Assign 1</option>
                                                                <option value='2'>Assign 2</option>
                                                                <option value='3'> Assign 3</option>
                                                                <option value='4'>Assign 4</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div className='col-md-9 mt-2'>
                                                <label className='text_color'>
                                                    Upload Attachment <span className='star'>*</span>
                                                </label>
                                                <div
                                                    onDrop={handleDrop}
                                                    onDragOver={handleDragOver}
                                                    style={{
                                                        border: '2px dashed #ccc',
                                                        padding: '3px',
                                                        borderRadius: '6px',
                                                        border: '1px solid #4a6bce',
                                                        textAlign: 'center',
                                                        marginBottom: '10px',
                                                        backgroundColor: 'rgb(241,240,239)',
                                                        fontSize: "12px"
                                                    }}
                                                >
                                                    Drag and drop your files here or &nbsp; &nbsp;
                                                    <Button
                                                        component='label'
                                                        variant='contained'
                                                        style={{ textTransform: 'capitalize', fontSize: "12px" }}
                                                    >
                                                        Browse
                                                        <VisuallyHiddenInput
                                                            type='file'
                                                            multiple
                                                            onChange={handleFileChange}
                                                        />
                                                    </Button>
                                                </div>
                                                {selectedFiles.length > 0 && (
                                                    <List>
                                                        {selectedFiles.map((file, index) => (
                                                            <ListItem key={index} divider>
                                                                <ListItemText primary={file.name} />
                                                                <ListItemSecondaryAction>
                                                                    <IconButton
                                                                        edge='end'
                                                                        aria-label='delete'
                                                                        onClick={() => handleRemoveFile(index)}
                                                                    >
                                                                        <CloseIcon />
                                                                    </IconButton>
                                                                </ListItemSecondaryAction>
                                                            </ListItem>
                                                        ))}
                                                    </List>
                                                )}
                                            </div>

                                            <div className='col-md-9 mt-4'>
                                                <div>
                                                    <div
                                                        className='right-cont col-md-12'
                                                        onDrop={handleOnDrop}
                                                        onDragOver={handleDragOver}
                                                    >
                                                        <div className='drop_text' style={{ fontSize: "12px" }}>
                                                            <label>Drop your fields here (or) </label>
                                                            <label onClick={handleAddWidgets}>
                                                                {' '}
                                                                &nbsp; Add to click here
                                                            </label>
                                                        </div>

                                                        {widgets.map((widget, index) => (
                                                            <div key={index}>
                                                                <Form.Group
                                                                    className='mb-3'
                                                                    controlId={`exampleForm.ControlInput${index}`}
                                                                >
                                                                    <Form.Label className='text_color'>
                                                                        {widget.label}
                                                                    </Form.Label>
                                                                    <div style={{ display: 'flex' }}>
                                                                        {widget.widgetType === 'dropdown' ? (
                                                                            <Form.Select
                                                                                className='input_border'
                                                                                aria-label='Default select example'
                                                                            >
                                                                                <option>
                                                                                    Please select {widget.label}
                                                                                </option>
                                                                                {widget.options.map((option, i) => (
                                                                                    <option key={i} value={option}>
                                                                                        {option}
                                                                                    </option>
                                                                                ))}
                                                                            </Form.Select>
                                                                        ) : widget.widgetType === 'date' ? (
                                                                            <TextField
                                                                                id={`date-picker-${index}`}
                                                                                label={widget.label}
                                                                                type='date'
                                                                                defaultValue=''
                                                                                className='input_border'
                                                                                InputLabelProps={{
                                                                                    shrink: true,
                                                                                }}
                                                                                style={{ width: '100%' }}
                                                                            />
                                                                        ) : (
                                                                            // <Form className='input_border' type="text" placeholder={`Enter ${widget.label}`} />
                                                                            <input
                                                                                className='input_border form-control'
                                                                                type='text'
                                                                                placeholder={`Enter ${widget.label}`}
                                                                            />
                                                                        )}
                                                                        <IconButton
                                                                            onClick={() =>
                                                                                handleCloseWidget(
                                                                                    widget.label,
                                                                                    widget.widgetType
                                                                                )
                                                                            }
                                                                        >
                                                                            <CloseIcon className='close_icon' />
                                                                        </IconButton>
                                                                    </div>
                                                                </Form.Group>
                                                            </div>
                                                        ))}

                                                        {widgets.map((widget, index) => (
                                                            <div key={index}>
                                                                <Form.Group
                                                                    controlId={`exampleForm.ControlInput${index}`}
                                                                >
                                                                    {/* Render widget based on selectedWidget state */}
                                                                    {selectedWidget === widget && (
                                                                        <div style={{ display: 'flex' }}>
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
                                <div className='col-md-5 mt-5 movingdiv2'>
                                    <div className=''>
                                        <h6
                                            className='m-3 text-white'
                                            style={{ fontSize: '16px', fontWeight: '500' }}
                                        >
                                            Drag and drop dynamic fields into Case details
                                        </h6>
                                     
                                        <ul>
                                            {draggableItems.map((item, index) => (

                                                <li className='dragable_btn'
                                                    draggable={true}
                                                    onDragStart={(e) =>
                                                        handleDragStart(
                                                            e,
                                                            item.widgetType,
                                                            item.label,
                                                            item.options
                                                        )
                                                    }
                                                    key={index} >
                                                    {item.label}
                                                </li>


                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row mt-5'>
                            <label className='subhead_lbl'>Task assigning</label>
                            <div>
                                <label
                                    class='form-check-label'
                                    for='flexCheckDefault'
                                    className='text_color '
                                >
                                    Interim investigation
                                    <Checkbox
                                        checked={selectedSection === 'Interim Investigation'}
                                        onChange={() =>
                                            handleSectionChange('Interim Investigation')
                                        }
                                    />
                                </label>
                                {/* <label
                                    class='form-check-label'
                                    for='flexCheckDefault'
                                    className='text_color ml-3'
                                >
                                    Root cause analysis
                                    <Checkbox
                                        checked={selectedSection === 'Root cause analysis'}
                                        onChange={() => handleSectionChange('Root cause analysis')}
                                    />
                                </label> */}
                                <label
                                    class='form-check-label'
                                    for='flexCheckDefault'
                                    className='text_color ml-3'
                                >
                                    Corrective action
                                    <Checkbox
                                        checked={selectedSection === 'Corrective action'}
                                        onChange={() => handleSectionChange('Corrective action')}
                                    />
                                </label>
                                <label
                                    class='form-check-label'
                                    for='flexCheckDefault'
                                    className='text_color ml-3'
                                >
                                    Preventive Action
                                    <Checkbox
                                        checked={selectedSection === 'Preventive Action'}
                                        onChange={() => handleSectionChange('Preventive Action')}
                                    />
                                </label>
                            </div>

                            {selectedSection && (
                                <div className='mt-1'>
                                    <div className='col-md-9'>
                                        <div className='row'>
                                            {/* <div>{selectedSection}</div> */}
                                            <div className='col-md-4'>
                                                <Form.Group className='mb-3' controlId='assignTo'>
                                                    <Form.Label className='text_color'>
                                                        Assign to <span className='star'>*</span>
                                                    </Form.Label>
                                                    <Form.Select
                                                        className='input_border'
                                                        aria-label='Default select example'
                                                        value={
                                                            selectedSection === 'Interim Investigation'
                                                                ? interimInvestigation.assignTo
                                                                // : selectedSection === 'Root cause analysis'
                                                                //     ? rootCauseAnalysis.assignTo
                                                                : selectedSection === 'Corrective action'
                                                                    ? correctiveAction.assignTo
                                                                    : preventiveAction.assignTo
                                                        }

                                                        onChange={(e) =>
                                                            handleFieldChange(
                                                                selectedSection,
                                                                'assignTo',
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        <option>Please select</option>
                                                        {assignOptions.map((option, index) => (
                                                            <option key={index} value={option}>
                                                                {option}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>
                                            <div className='col-md-4'>
                                                <Form.Group className='mb-3' controlId='cc'>
                                                    <Form.Label className='text_color'>
                                                        CC <span className='star'>*</span>
                                                    </Form.Label>
                                                    <Form.Select
                                                        className='input_border'
                                                        aria-label='Default select example'
                                                        value={
                                                            selectedSection === 'Interim Investigation'
                                                                ? interimInvestigation.cc
                                                                : selectedSection === 'Root cause analysis'
                                                                    ? rootCauseAnalysis.cc
                                                                    : selectedSection === 'Corrective action'
                                                                        ? correctiveAction.cc
                                                                        : preventiveAction.cc
                                                        }
                                                        onChange={(e) =>
                                                            handleFieldChange(
                                                                selectedSection,
                                                                'cc',
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        <option>Please select</option>
                                                        {ccOptions.map((option, index) => (
                                                            <option key={index} value={option}>
                                                                {option}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>
                                            <div className='col-md-3'>
                                                <Form.Group className='mb-3' controlId='redo'>
                                                    <Form.Label className='text_color'>
                                                        Redo <span className='star'>*</span>
                                                    </Form.Label>
                                                    <Form.Check
                                                        type='checkbox'
                                                        label='Redo'
                                                        id='redoCheckbox'
                                                        checked={
                                                            selectedSection === 'Interim Investigation'
                                                                ? interimInvestigation.redo
                                                                : selectedSection === 'Root cause analysis'
                                                                    ? rootCauseAnalysis.redo
                                                                    : selectedSection === 'Corrective action'
                                                                        ? correctiveAction.redo
                                                                        : preventiveAction.redo
                                                        }
                                                        onChange={(e) =>
                                                            handleFieldChange(
                                                                selectedSection,
                                                                'redo',
                                                                e.target.checked
                                                            )
                                                        }
                                                    // className="input_border"
                                                    />
                                                </Form.Group>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className='col-md-9'>
                                <Form.Group
                                    className='mb-3'
                                    controlId='exampleForm.ControlTextarea1'
                                >
                                    <Form.Label className='text_color'>Comments</Form.Label>
                                    <Form.Control
                                        className='input_border'
                                        as='textarea'
                                        rows={2}
                                        placeholder='Write your comments'
                                    />
                                </Form.Group>
                            </div>
                            <div className='m-auto col-md-3'>
                                <Button
                                    variant='contained'
                                    onClick={toggleModal3}
                                    style={{
                                        backgroundColor: '#7b39f1',
                                        marginRight: '10px',
                                        padding: '6px',
                                        // fontSize: '17px',
                                        marginTop: "12px"
                                    }}
                                >
                                    Close the incident
                                </Button>
                                <Modal show={showModal3} onHide={toggleModal3}>
                                    <Modal.Header className='blue-bg text-white'>
                                        <Modal.Title>Close the incident</Modal.Title>
                                        <button
                                            type='button'
                                            className='btn-close bg-white'
                                            onClick={toggleModal3}
                                        ></button>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <label>Are you sure you want to close the incident!</label>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <button className='blue-bg border-0 text-white rounded btn-blue'>
                                            Yes
                                        </button>
                                        <button
                                            className='btn btn-danger btn-orange'
                                            onClick={toggleModal3}
                                        >
                                            No
                                        </button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                        {/* <hr className='mt-5' /> */}

                        {/* -----------------------------Accordian----------------------------------------------------------- */}
                        <div className='mt-3'>
                            {/* Interim Investigation */}
                            <Accordion className='mb-1 border'>
                                <AccordionSummary
                                    style={{
                                        color: '#0c63e4',
                                        backgroundColor: '#e7f1ff',
                                        boxShadow: 'inset 0 -1px 0 rgba(0, 0, 0, .125);',
                                        padding: '0px 20px',
                                        width: '100%',
                                    }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls='panel1-content'
                                    id='panel1-header'
                                    className='text-primary w-full accordian_sum'
                                >
                                    <Typography className='accord_typo'>
                                        INTERIM INVESTIGATION
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className='row mt-2'>
                                        <div className='col-md-6'>
                                            <textarea
                                                className='input_border'
                                                as='textarea'
                                                rows={2}
                                                placeholder='Write your findings'
                                            />
                                        </div>
                                        <div className='col-md-6'>
                                            <div
                                                onDrop={handleDrop}
                                                onDragOver={handleDragOver}
                                                style={{
                                                    border: '2px dashed #ccc',
                                                    padding: '3px',
                                                    borderRadius: '6px',
                                                    border: '1px solid #4a6bce',
                                                    textAlign: 'center',
                                                    marginBottom: '10px',
                                                    backgroundColor: 'rgb(241,240,239)',
                                                    fontSize: "12px"
                                                }}
                                            >
                                                Drag and drop your files here or &nbsp; &nbsp;
                                                <Button
                                                    component='label'
                                                    variant='contained'
                                                    style={{ textTransform: 'capitalize', fontSize: "12px" }}
                                                >
                                                    Browse
                                                    <VisuallyHiddenInput
                                                        type='file'
                                                        multiple
                                                        onChange={interimHandleFileChange}
                                                    />
                                                </Button>
                                            </div>
                                            {interimSelectedFiles.length > 0 && (
                                                <List>
                                                    {interimSelectedFiles.map((file, index) => (
                                                        <ListItem key={index} divider>
                                                            <ListItemText primary={file.name} />
                                                            <ListItemSecondaryAction>
                                                                <IconButton
                                                                    edge='end'
                                                                    aria-label='delete'
                                                                    onClick={() => interimHandleRemoveFile(index)}
                                                                >
                                                                    <CloseIcon />
                                                                </IconButton>
                                                            </ListItemSecondaryAction>
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            )}
                                        </div>
                                    </div>

                                    <div className='d-flex justify-content-end gap-3 mt-4'>
                                        <Button
                                            variant='contained'
                                            style={{ backgroundColor: '#7b39f1' }}
                                        >
                                            Submit
                                        </Button>
                                        <Button
                                            variant='contained'
                                            style={{ backgroundColor: '#fa531c' }}
                                        >
                                            Close
                                        </Button>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            {/* Root cause analysis */}
                            <Accordion className='mb-1'>
                                <AccordionSummary
                                    style={{
                                        color: '#0c63e4',
                                        backgroundColor: '#e7f1ff',
                                        boxShadow: 'inset 0 -1px 0 rgba(0, 0, 0, .125);',
                                        padding: '0px 20px',
                                    }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls='panel2-content'
                                    id='panel2-header'
                                >
                                    <Typography className='accord_typo'>
                                        ROOT CAUSE ANALYSIS
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <div className='row d-flex justify-content-between'>
                                            <div>
                                                <TableContainer className='border'>
                                                    <Table>
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell></TableCell>{' '}
                                                                {/* Placeholder for vertical heading */}
                                                                <TableCell>
                                                                    <div className='trianglediv'>
                                                                        <em className='triangle'></em>Why did this
                                                                        specific issue occur?
                                                                    </div>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <div className='trianglediv'>
                                                                        <em className='triangle'></em>Why did this
                                                                        problem go undetected
                                                                    </div>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <div className='trianglediv'>
                                                                        <em className='triangle'></em>Why was the
                                                                        problem not prevented?
                                                                    </div>
                                                                </TableCell>
                                                                <TableCell>
                                                                    {/* <div className='trianglediv'><em className='triangle'></em>Action</div> */}
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell>
                                                                    <label className='rootcause_label'>
                                                                        Problem description
                                                                    </label>
                                                                </TableCell>
                                                                <TableCell colSpan={4}>
                                                                    <textarea
                                                                        className='form-control'
                                                                        style={{ backgroundColor: '#f1f0ef' }}
                                                                        fullWidth
                                                                        value={problemDescription}
                                                                        onChange={(e) =>
                                                                            setProblemDescription(e.target.value)
                                                                        }
                                                                    />
                                                                </TableCell>
                                                            </TableRow>

                                                            {whyInputs.map((input, index) => (
                                                                <TableRow key={index}>
                                                                    <TableCell>
                                                                        {/* <label className='rootcause_label'>{input.label}</label> */}
                                                                        <label className='rootcause_label'>{`${numberToWords(
                                                                            index + 1
                                                                        )} why`}</label>
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        <textarea
                                                                            className='form-control'
                                                                            style={{ backgroundColor: '#f1f0ef' }}
                                                                            fullWidth
                                                                            value={input.value[0]}
                                                                            onChange={(e) =>
                                                                                whyInputshandleInputChange(
                                                                                    index,
                                                                                    0,
                                                                                    e.target.value
                                                                                )
                                                                            }
                                                                        />
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        <textarea
                                                                            className='form-control'
                                                                            style={{ backgroundColor: '#f1f0ef' }}
                                                                            fullWidth
                                                                            value={input.value[1]}
                                                                            onChange={(e) =>
                                                                                whyInputshandleInputChange(
                                                                                    index,
                                                                                    1,
                                                                                    e.target.value
                                                                                )
                                                                            }
                                                                        />
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        <textarea
                                                                            className='form-control'
                                                                            style={{ backgroundColor: '#f1f0ef' }}
                                                                            fullWidth
                                                                            value={input.value[2]}
                                                                            onChange={(e) =>
                                                                                whyInputshandleInputChange(
                                                                                    index,
                                                                                    2,
                                                                                    e.target.value
                                                                                )
                                                                            }
                                                                        />
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        {index !== 0 && (
                                                                            <IconButton
                                                                                onClick={() =>
                                                                                    whyInputshandleRemoveRow(index)
                                                                                }
                                                                            >
                                                                                <CloseIcon style={{ color: 'red',  fontSize: '18px', }} />
                                                                            </IconButton>
                                                                        )}
                                                                        <IconButton
                                                                            onClick={whyInputshandleAddRow}
                                                                            disabled={whyInputs.length >= 5}
                                                                        >
                                                                            <AddIcon
                                                                                className='blue'
                                                                                style={{
                                                                                    fontSize: '20px',
                                                                                    // fontWeight: '500',
                                                                                }}
                                                                            />
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
                                                <Form.Group
                                                    className='mb-3'
                                                    controlId='exampleForm.ControlTextarea1'
                                                >
                                                    <Form.Label className='text_color'>
                                                        Summary of root cause analysis
                                                    </Form.Label>
                                                    <Form.Control
                                                        className='input_border'
                                                        as='textarea'
                                                        rows={2}
                                                        placeholder='Write your Summary'
                                                    />
                                                </Form.Group>
                                            </div>
                                            <div className='col-md-6'>
                                                <div
                                                    onDrop={handleDrop}
                                                    onDragOver={handleDragOver}
                                                    style={{
                                                        border: '2px dashed #ccc',
                                                        padding: '3px',
                                                        borderRadius: '6px',
                                                        border: '1px solid #4a6bce',
                                                        textAlign: 'center',
                                                        marginBottom: '10px',
                                                        marginTop: '32px',
                                                        backgroundColor: 'rgb(241,240,239)',
                                                        fontSize: "12px"
                                                    }}
                                                >
                                                    Drag and drop your files here or &nbsp; &nbsp;
                                                    <Button
                                                        component='label'
                                                        variant='contained'
                                                        style={{ textTransform: 'capitalize', fontSize: "12px" }}
                                                    >
                                                        Browse
                                                        <VisuallyHiddenInput
                                                            type='file'
                                                            multiple
                                                            onChange={rootHandleFileChange}
                                                        />
                                                    </Button>
                                                </div>
                                                {rootSelectedFiles.length > 0 && (
                                                    <List>
                                                        {rootSelectedFiles.map((file, index) => (
                                                            <ListItem key={index} divider>
                                                                <ListItemText primary={file.name} />
                                                                <ListItemSecondaryAction>
                                                                    <IconButton
                                                                        edge='end'
                                                                        aria-label='delete'
                                                                        onClick={() => rootHandleRemoveFile(index)}
                                                                    >
                                                                        <CloseIcon />
                                                                    </IconButton>
                                                                </ListItemSecondaryAction>
                                                            </ListItem>
                                                        ))}
                                                    </List>
                                                )}
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-end gap-3 mt-4'>
                                            <Button
                                                variant='contained'
                                                style={{ backgroundColor: '#7b39f1' }}
                                            >
                                                Submit
                                            </Button>
                                            <Button
                                                variant='contained'
                                                style={{ backgroundColor: '#fa531c' }}
                                            >
                                                Close
                                            </Button>
                                        </div>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            {/* Corrective action */}
                            <Accordion className='mb-1'>
                                <AccordionSummary
                                    style={{
                                        color: '#0c63e4',
                                        backgroundColor: '#e7f1ff',
                                        boxShadow: 'inset 0 -1px 0 rgba(0, 0, 0, .125);',
                                        padding: '0px 20px',
                                    }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls='panel3-content'
                                    id='panel3-header'
                                >
                                    <Typography className='accord_typo'>
                                        CORRECTIVE ACTION
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <TableContainer className='border'>
                                            <Table>
                                                <TableHead>
                                                    <TableRow style={{ backgroundColor: '#4a6bce' }}>
                                                        <TableCell
                                                            className='text-center text-white'
                                                            style={{ width: '350px', fontSize:"12px"}}
                                                        >
                                                            Action taken
                                                        </TableCell>
                                                        <TableCell
                                                            className='text-center text-white'
                                                            style={{ width: '450px', fontSize:"12px", fontSize:"12px" }}
                                                        >
                                                            Supporting Document
                                                        </TableCell>
                                                        <TableCell className='text-center text-white' style={{fontSize:"12px"}}>
                                                            Date
                                                        </TableCell>
                                                        {/* <TableCell className='text-center fs-6 fw-bold text-white'>Comment</TableCell> */}
                                                        <TableCell
                                                            className='text-center text-white'
                                                            style={{ fontSize:"12px"}}
                                                        >
                                                            Is Resolved
                                                        </TableCell>
                                                        {/* <TableCell className='text-center fs-6 fw-bold text-white' style={{ width: "250px" }}>Supporting Document</TableCell> */}
                                                        <TableCell className='text-center text-white' style={{fontSize:"12px"}}>
                                                            Action
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {correctiveRows.map((row) => (
                                                        <TableRow
                                                            key={row.id}
                                                            style={{
                                                                backgroundColor: 'rgba(34, 41, 47, 0.05)',
                                                            }}
                                                        >
                                                            <TableCell
                                                                style={{ margin: 'auto', textAlign: 'center' }}
                                                            >
                                                                <select
                                                                    value={row.task}
                                                                    onChange={(e) =>
                                                                        correctiveRowshandleChange(
                                                                            row.id,
                                                                            'task',
                                                                            e.target.value
                                                                        )
                                                                    }
                                                                    className='form-select'
                                                                    aria-label='Default select example'
                                                                    style={{ padding: "5px", fontSize: "14px" }}
                                                                >
                                                                    <option value=''>Please Select</option>
                                                                    <option value='Cleaned properly'>
                                                                        Cleaned properly
                                                                    </option>
                                                                    <option value='Clean the Floor and sink'>
                                                                        Clean the Floor and sink
                                                                    </option>
                                                                    <option value='Wash Again'>Wash Again</option>
                                                                    <option value='Cleaned the walls again'>
                                                                        Cleaned the walls again
                                                                    </option>
                                                                </select>
                                                            </TableCell>
                                                            <TableCell
                                                                style={{ margin: 'auto', textAlign: 'center' }}
                                                            >
                                                             
                                                                <Button
                                                                    component='label'
                                                                    variant='contained'
                                                                    style={{ textTransform: 'capitalize', padding: "3px 25px" }}
                                                                    startIcon={<CloudUploadIcon />}
                                                                >
                                                                    Upload file
                                                                    <VisuallyHiddenInput
                                                                        type='file'
                                                                        multiple
                                                                        style={{ display: 'none' }}
                                                                        onChange={tableCorrectiveHandleFileChange}
                                                                    />
                                                                </Button>


                                                                {tableCorrectveSelectedFiles.length > 0 && (
                                                                    <List style={{ marginLeft: 20, padding: 0 }}>
                                                                        {tableCorrectveSelectedFiles.map((file, index) => (
                                                                            <ListItem key={index} style={{ padding: '0 0px' }}>
                                                                                <ListItemText primary={file.name} style={{ textDecoration: 'none' }} />
                                                                                <ListItemSecondaryAction>
                                                                                    <IconButton
                                                                                        edge='end'
                                                                                        aria-label='delete'
                                                                                        onClick={() => tableCorrectiveHandleRemoveFile(index)}
                                                                                    >
                                                                                        <CloseIcon />
                                                                                    </IconButton>
                                                                                </ListItemSecondaryAction>
                                                                            </ListItem>
                                                                        ))}
                                                                    </List>
                                                                )}
                                                            </TableCell>
                                                            <TableCell
                                                                style={{ margin: 'auto', textAlign: 'center' }}
                                                            >
                                                                <TextField
                                                                    value={row.dueDate}
                                                                    onChange={(e) =>
                                                                        correctiveRowshandleChange(
                                                                            row.id,
                                                                            'dueDate',
                                                                            e.target.value
                                                                        )
                                                                    }
                                                                    type='date'
                                                                    variant='outlined'
                                                                    className='date-bg'
                                                                    style={{
                                                                        border: '1px solid #ddd',
                                                                        borderRadius: '4px',
                                                                        padding: '0px 12px',
                                                                        background: '#fff',
                                                                    }}
                                                                />
                                                            </TableCell>
                                                       
                                                            <TableCell
                                                                style={{ margin: 'auto', textAlign: 'center' }}
                                                            >
                                                                <Checkbox
                                                                    checked={correctiveRows.resolved}
                                                                    onChange={(e) =>
                                                                        correctiveRowshandleChange(
                                                                            row.id,
                                                                            'resolved',
                                                                            e.target.checked
                                                                        )
                                                                    }
                                                                />
                                                            </TableCell>
                                            
                                                            <TableCell
                                                                className='d-flex'
                                                                style={{
                                                                    textAlign: 'center',
                                                                    justifyContent: 'center',
                                                                }}
                                                            >
                                                                <IconButton
                                                                    onClick={() =>
                                                                        correctivehandleDeleteRow(row.id)
                                                                    }
                                                                >
                                                                    <CloseIcon style={{ color: 'red', fontSize: '18px', }} />
                                                                </IconButton>
                                                                <IconButton onClick={CorrectivehandleAddRow}>
                                                                    <AddIcon
                                                                        className='blue'
                                                                        style={{
                                                                            fontSize: '20px',
                                                                            
                                                                        }}
                                                                    />
                                                                </IconButton>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        {correctiveShowAlert && (
                                            <Alert
                                                severity='error'
                                                onClose={correctiveHandleCloseAlert}
                                            >
                                                Cannot delete the only row.
                                            </Alert>
                                        )}
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col-md-6'>
                                            <Form.Group
                                                className='mb-0'
                                                controlId='exampleForm.ControlTextarea1'
                                            >
                                                <Form.Label className='text_color'>Comment</Form.Label>
                                                <Form.Control
                                                    className='input_border'
                                                    as='textarea'
                                                    rows={2}
                                                    placeholder='Write the comment'
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6'>
                             
                                            <div
                                                onDrop={handleDrop}
                                                onDragOver={handleDragOver}
                                                style={{
                                                    padding: '3px',
                                                    borderRadius: '6px',
                                                    border: '1px solid #4a6bce',
                                                    textAlign: 'center',
                                                    marginBottom: '10px',
                                                    marginTop: '32px',
                                                    backgroundColor: 'rgb(241,240,239)',
                                                    fontSize: "12px"
                                                }}
                                            >
                                                Drag and drop your files here or &nbsp; &nbsp;
                                                <Button
                                                    component='label'
                                                    variant='contained'
                                                    style={{ textTransform: 'capitalize', fontSize: "12px" }}
                                                >
                                                    Browse
                                                    <VisuallyHiddenInput
                                                        type='file'
                                                        multiple
                                                        onChange={correctiveHandleFileChange}
                                                    />
                                                </Button>
                                            </div>
                                            {correctiveSelectedFiles.length > 0 && (
                                                <List>
                                                    {correctiveSelectedFiles.map((file, index) => (
                                                        <ListItem key={index} divider>
                                                            <ListItemText primary={file.name} />
                                                            <ListItemSecondaryAction>
                                                                <IconButton
                                                                    edge='end'
                                                                    aria-label='delete'
                                                                    onClick={() => correctiveHandleRemoveFile(index)}
                                                                >
                                                                    <CloseIcon />
                                                                </IconButton>
                                                            </ListItemSecondaryAction>
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            )}
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-end gap-3 mt-4'>
                                        <Button
                                            variant='contained'
                                            style={{ backgroundColor: '#7b39f1' }}
                                        >
                                            Submit
                                        </Button>
                                        <Button
                                            variant='contained'
                                            style={{ backgroundColor: '#fa531c' }}
                                        >
                                            Close
                                        </Button>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            {/* Preventive actions */}
                            <Accordion>
                                <AccordionSummary
                                    style={{
                                        color: '#0c63e4',
                                        backgroundColor: '#e7f1ff',
                                        boxShadow: 'inset 0 -1px 0 rgba(0, 0, 0, .125);',
                                        padding: '0px 20px',
                                    }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls='panel4-content'
                                    id='panel4-header'
                                >
                                    <Typography className='accord_typo'>
                                        PREVENTIVE ACTION
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className='row mt-2'>
                                        <div className='col-md-6'>
                                            <textarea
                                                className='input_border'
                                                as='textarea'
                                                rows={2}
                                                placeholder='Write your findings'
                                            />
                                        </div>
                                        <div className='col-md-6'>
                                            <div
                                                onDrop={handleDrop}
                                                onDragOver={handleDragOver}
                                                style={{
                                                    border: '2px dashed #ccc',
                                                    padding: '3px',
                                                    borderRadius: '6px',
                                                    border: '1px solid #4a6bce',
                                                    textAlign: 'center',
                                                    marginBottom: '10px',
                                                    backgroundColor: 'rgb(241,240,239)',
                                                    fontSize: "12px"
                                                }}
                                            >
                                                Drag and drop your files here or &nbsp; &nbsp;
                                                <Button
                                                    component='label'
                                                    variant='contained'
                                                    style={{ textTransform: 'capitalize', fontSize: "12px" }}
                                                >
                                                    Browse
                                                    <VisuallyHiddenInput
                                                        type='file'
                                                        multiple
                                                        onChange={preventiveHandleFileChange}
                                                    />
                                                </Button>
                                            </div>
                                            {preventiveSelectedFiles.length > 0 && (
                                                <List>
                                                    {preventiveSelectedFiles.map((file, index) => (
                                                        <ListItem key={index} divider>
                                                            <ListItemText primary={file.name} />
                                                            <ListItemSecondaryAction>
                                                                <IconButton
                                                                    edge='end'
                                                                    aria-label='delete'
                                                                    onClick={() => preventiveHandleRemoveFile(index)}
                                                                >
                                                                    <CloseIcon />
                                                                </IconButton>
                                                            </ListItemSecondaryAction>
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            )}
                                        </div>
                                    </div>

                                    <div className='d-flex justify-content-end gap-3 mt-4'>
                                        <Button
                                            variant='contained'
                                            style={{ backgroundColor: '#7b39f1' }}
                                        >
                                            Submit
                                        </Button>
                                        <Button
                                            variant='contained'
                                            style={{ backgroundColor: '#fa531c' }}
                                        >
                                            Close
                                        </Button>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>

                        <div className='mt-4'>
                            <div className='col-md-9'>
                                <Form.Group
                                    className='mb-3'
                                    controlId='exampleForm.ControlTextarea1'
                                >
                                    <Form.Label className='subhead_lbl'>History</Form.Label>
                                    <Form.Control
                                        className='input_border'
                                        as='textarea'
                                        rows={4}
                                        placeholder='Write history...'
                                    />
                                </Form.Group>
                            </div>
                        </div>

                        <Button className='mt-2' variant='contained' style={{ backgroundColor: "rgb(123, 57, 241)" }}>Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncidentResolve;
