// import React from 'react'
// import Form from 'react-bootstrap/Form';
// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import { useState } from 'react';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import TableCell from '@mui/material/TableCell';

// const VisuallyHiddenInput = styled('input')({
//     clip: 'rect(0 0 0 0)',
//     clipPath: 'inset(50%)',
//     height: 1,
//     overflow: 'hidden',
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     whiteSpace: 'nowrap',
//     width: 1,
// });

// const AddIncident = () => {
//     const [widgets, setWidgets] = useState([]);
//     const [tempWidgets, setTempWidgets] = useState([]);

//     const [searchTerms, setSearchTerms] = useState({});
//     const [isLoading, setLoading] = useState(true);
//     const [showAddButtons, setShowAddButtons] = useState({
//         source: false,
//         category: false,
//         // Add more dropdown labels here as needed
//     });

//     // Define the options for each dropdown
//     const options = {
//         source: ["Phone call", "Mail", "Production line"],
//         category: ["Incident", "Injury", "Complaint", "Hazard"]
//         // Add more options for other dropdowns as needed
//     };

//     const handleSearchoption = (label, e) => {
//         const searchTerm = e.target.value.toLowerCase();
//         const options = ["Phone call", "Mail", "Production line"]; // Example options
//         const optionExists = options.some(option => option.toLowerCase().includes(searchTerm));
//         setShowAddButtons({ ...showAddButtons, [label]: !optionExists });
//     };

//     const handleSearchoptions = (dropdown, e) => {
//         const searchTerm = e.target.value.toLowerCase();

//         // Check if the search term matches any option for the dropdown
//         const foundMatch = options[dropdown].some(option => option.toLowerCase().includes(searchTerm));

//         // Update the state to show/hide the "Add" button based on the search result
//         setShowAddButtons(prevState => ({
//             ...prevState,
//             [dropdown]: !foundMatch
//         }));
//     };

//     const handleDragStart = (e, widgetType, label, options) => {
//         e.dataTransfer.setData("widgetType", widgetType);
//         e.dataTransfer.setData("label", label);
//         if (widgetType === 'dropdown') {
//             e.dataTransfer.setData("options", JSON.stringify(options));
//         }
//         else {

//             e.dataTransfer.setData("options", JSON.stringify([]));
//         }
//     };

//     const handleDragOver = (e) => {
//         e.preventDefault();
//     };

//     const handleSearch = (label, e) => {
//         setSearchTerms({
//             ...searchTerms,
//             [label]: e.target.value.toLowerCase()
//         });
//     };

//     // const handleOnDrop = (e) => {
//     //     const widgetType = e.dataTransfer.getData("widgetType");
//     //     console.log('widgetType:', widgetType); // Add logging
//     //     const label = e.dataTransfer.getData("label");
//     //     console.log('label:', label); // Add logging
//     //     const optionString = e.dataTransfer.getData("options");
//     //     console.log('optionString:', optionString); // Add logging

//     //     // checking if optionstring is not empty
//     //     if (optionString.trim() !== "") {
//     //         try {
//     //             const options = JSON.parse(optionString);
//     //             setWidgets([...widgets, { widgetType, label, options }]);
//     //         } catch (error) {
//     //             console.error("Error parsing options JSON:", error);
//     //         }
//     //     } else {
//     //         console.error("No options data provided.");
//     //         setWidgets([...widgets, { widgetType, label, options: [] }]);
//     //     }

//     //     // Initialize Bootstrap Selectpicker for the new select menu
//     //     // const newSelect = document.querySelector('.selectpicker:last-child');
//     //     // if (newSelect) {
//     //     //     newSelect.classList.add('selectpicker');
//     //     //     newSelect.setAttribute('data-live-search', 'true');
//     //     //     $(newSelect).selectpicker();
//     //     // }

//     //     setTimeout(() => {
//     //         $('.selectpicker').selectpicker('refresh');
//     //     }, 0);
//     // };

//     // const handleOnDrop = (e) => {
//     //     const widgetType = e.dataTransfer.getData("widgetType");
//     //     console.log('widgetType:', widgetType); // Add logging
//     //     const label = e.dataTransfer.getData("label");
//     //     console.log('label:', label); // Add logging
//     //     const optionString = e.dataTransfer.getData("options");
//     //     console.log('optionString:', optionString); // Add logging

//     //     // checking if optionstring is not empty
//     //     if (optionString.trim() !== "") {
//     //         try {
//     //             const options = JSON.parse(optionString);
//     //             setWidgets([...widgets, { widgetType, label, options }]);
//     //         } catch (error) {
//     //             console.error("Error parsing options JSON:", error);
//     //         }
//     //     } else {
//     //         console.error("No options data provided.");
//     //         setWidgets([...widgets, { widgetType, label, options: [] }]);
//     //     }
//     // };

//     const handleCloseWidget = (label, widgetType) => {
//         console.log("Removing widget:", label, widgetType);
//         console.log("Current widgets:", widgets);
//         setWidgets(widgets.filter(widget => !(widget.label === label && widget.widgetType === widgetType)));
//     };

//     // const handleRemoveWidget = (label, widgetType, options) => {
//     //     // setWidgets([])
//     //     console.log(label, widgetType, widgets)
//     //     let widgets11 = widgets.filter(widget => !(widget.label === label && widget.widgetType === widgetType))
//     //     console.log("WEDDE", widgets11)
//     //     let wid = widgets11[0]
//     //     let obj = {}
//     //     if (widgets11 && widgets11.length > 0) {
//     //         let ops = wid.options;
//     //         let lbl = wid.label;
//     //         let wtype = wid.widgetType;
//     //         console.log(ops, lbl, wtype)
//     //         if(wtype == "input") {
//     //             widgets11 = []
//     //             obj = {widgetType: wtype, label: lbl, options: []}
//     //             widgets11.push(obj);
//     //         }
//     //         console.log('widgets', widgets11)
//     //         if (ops && ops.length > 0) {
//     //             try {
//     //                 setWidgets([...widgets11]);
//     //             } catch (error) {
//     //                 console.error("Error parsing options JSON:", error);
//     //             }
//     //         } else {
//     //             // console.error("No options data provided.");
//     //             setWidgets([...widgets11]);
//     //         }
//     //         setTimeout(() => {
//     //             console.log('WTYPE', wtype)
//     //             if(wtype == "dropdown") {

//     //                 $('.selectpicker').selectpicker('refresh');
//     //             }
//     //         }, 1000);
//     //     } else {
//     //         setWidgets([])
//     //     }
//     // };

//     const handleRemoveWidget = (id) => {
//         setWidgets(widgets.filter(widget => widget.id !== id));
//     };

//     const handleOnDrop = (e) => {
//         e.preventDefault();
//         const widgetType = e.dataTransfer.getData("widgetType");
//         const label = e.dataTransfer.getData("label");
//         const optionString = e.dataTransfer.getData("options");
//         let options = [];

//         if (optionString.trim() !== "") {
//             try {
//                 options = JSON.parse(optionString);
//             } catch (error) {
//                 console.error("Error parsing options JSON:", error);
//             }
//         }

//         // Generate a unique ID for the new widget
//         const id = Date.now();
//         console.log("id", id)

//         // Add the new widget to the widgets state array
//         setWidgets([...widgets, { id, widgetType, label, options }]);

//     };

//     const draggableItems = [
//         { widgetType: 'dropdown', label: 'Severity', options: ["Critical", "High", "Moderate", "Low"] },
//         { widgetType: 'dropdown', label: 'Product name', options: ["Product 1", "Product 2", "Product 3"] },
//         { widgetType: 'dropdown', label: 'Issue type', options: ["Audit", "Quality", "Security"] },
//         { widgetType: 'dropdown', label: 'Supplier Name', options: ["One", "Two", "Three"] },
//         { widgetType: 'input', label: 'Affected quantity' },
//         { widgetType: 'dropdown', label: 'Issue Area', options: ["Footwear", "Apparel", "Leather Boots", "Production Components and Materials", "Work Inprogress", "Finished Product waiting for distribution"] },
//         { widgetType: 'input', label: 'Product Code' },
//         { widgetType: 'input', label: 'Batch number' },
//     ].filter(item => !widgets.some(widget => widget.label === item.label && widget.widgetType === item.widgetType));

//     return (
//         <div>
//             <div className='right-cont' >
//                 <div className='card'>

//                     <div className='m-4 row'>
//                         <div class="col-md-7">
//                             <h5 className='sub_head'>Case Details</h5>
//                             <div className='mt-4'>
//                                 <div className='row'>
//                                     <div className='col-md-9'>

//                                         <div className="mb-3 searchdrop" controlId="exampleForm.ControlInput1">
//                                             <label className='text_color d-block'>Source <span className='star'>*</span></label>
//                                             <select className='input_border selectpicker p-0' aria-label="Default select example" data-live-search="true">
//                                                 <option data-tokens="ketchup mustard">Please select Source</option>
//                                                 <option data-tokens="ketchup mustard" value="1">Phone call</option>
//                                                 <option data-tokens="ketchup mustard" value="2">Mail</option>
//                                                 <option data-tokens="ketchup mustard" value="3">Production line</option>
//                                             </select>
//                                         </div>
//                                     </div>

//                                     <div className='col-md-9'>
//                                         <div className="mb-3 searchdrop" controlId="exampleForm.ControlInput1">
//                                             <label className='text_color d-block'>Category <span className='star'>*</span></label>
//                                             <select className='input_border selectpicker p-0' aria-label="Default select example" data-live-search="true">
//                                                 <option data-tokens="ketchup mustard">Please select Category</option>
//                                                 <option data-tokens="ketchup mustard" value="1">Incident</option>
//                                                 <option data-tokens="ketchup mustard" value="2">Injury</option>
//                                                 <option data-tokens="ketchup mustard" value="3">Complaint</option>
//                                                 <option data-tokens="ketchup mustard" value="4">Hazard</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                     <div className='col-md-9'>
//                                         <div className="mb-3 searchdrop" controlId="exampleForm.ControlTextarea1">
//                                             <label className='text_color d-block'>Case Summary</label>
//                                             <textarea className='input_border p-2 form-control' id="exampleFormControlTextarea1" as="textarea" rows={1} placeholder='Write the description' />
//                                         </div>
//                                     </div>
//                                     <div className='col-md-9'>
//                                         <div className="mb-3 searchdrop" controlId="exampleForm.ControlTextarea1">
//                                             <label className='text_color d-block'>Case Description</label>
//                                             <textarea className='input_border p-2 form-control' id="exampleFormControlTextarea1" as="textarea" rows={2} placeholder='Write the description' />
//                                         </div>
//                                     </div>

//                                     <div className='col-md-9'>
//                                         <label className='text_color'>Upload Attachment</label>
//                                         <Button
//                                             fullWidth
//                                             component="label"
//                                             role={undefined}
//                                             variant="secondary"
//                                             tabIndex={-1}
//                                             style={{ backgroundColor: "rgb(241,240,239)", padding: "15px", textTransform: "capitalize", marginTop: "10px" }}
//                                         // startIcon={<CloudUploadIcon />}
//                                         >
//                                             Drag and drop your files or  <span style={{ textDecoration: "underline", marginLeft: "5px" }}>Browse</span>
//                                             <VisuallyHiddenInput type="file" />
//                                         </Button>
//                                     </div>
//                                     {/* <div className='col-md-9 mt-4'>
//                                         <div>
//                                             <div
//                                                 className='right-cont col-md-12'
//                                                 onDrop={handleOnDrop}
//                                                 onDragOver={handleDragOver}
//                                             >
//                                                 <label className='sub_head' style={{ fontWeight: "600" }}>Add</label>
//                                                 {widgets.map((widget, index) => (
//                                                     <div key={index}>
//                                                         <Form.Group className="mb-3" controlId={`exampleForm.ControlInput${index}`}>
//                                                             <Form.Label className='text_color'>{widget.label}</Form.Label>
//                                                             <div style={{ display: "flex" }}>
//                                                                 {widget.widgetType === 'dropdown' ? (
//                                                                     <Form.Select className='input_border' aria-label="Default select example" data-live-search="true">
//                                                                         <option>Please select {widget.label}</option>
//                                                                         {widget.options.map((option, i) => (
//                                                                             // <option key={i} value={option}>{option}</option>
//                                                                             <option key={i} value={option} data-tokens={option}>{option}</option>
//                                                                         ))}

//                                                                     </Form.Select>
//                                                                 ) : widget.widgetType === 'date' ? (
//                                                                     <TextField
//                                                                         id={`date-picker-${index}`}
//                                                                         label={widget.label}
//                                                                         type="date"
//                                                                         defaultValue=""
//                                                                         className='input_border'
//                                                                         InputLabelProps={{
//                                                                             shrink: true,
//                                                                         }}
//                                                                         style={{ width: "100%" }}
//                                                                     />
//                                                                 ) : (
//                                                                     // <Form className='input_border' type="text" placeholder={`Enter ${widget.label}`} />
//                                                                     <input className='input_border form-control' type='text' placeholder={`Enter ${widget.label}`} />
//                                                                 )}
//                                                                 <IconButton onClick={() => handleCloseWidget(widget.label, widget.widgetType)}>
//                                                                     <CloseIcon className='close_icon' />
//                                                                 </IconButton>
//                                                             </div>
//                                                         </Form.Group>

//                                                     </div>
//                                                 ))}

//                                             </div>
//                                         </div>
//                                     </div> */}
//                                     {isLoading ?

//                                         <div className='col-md-9 mt-4'>
//                                             <div>
//                                                 <div
//                                                     className='right-cont col-md-12'
//                                                     onDrop={handleOnDrop}
//                                                     onDragOver={handleDragOver}
//                                                 >
//                                                     <label className='sub_head' style={{ fontWeight: "600" }}>Add</label>
//                                                     {widgets && widgets.map((widget, index) => (
//                                                         <div className="mb-3 searchdrop" controlId={`exampleForm.ControlInput${index}`} key={index} >
//                                                             <label className='text_color'>{widget.label}</label>
//                                                             <div style={{ display: "flex" }}>
//                                                                 {widget.widgetType === 'dropdown' ? (
//                                                                     // <div className='dropdown bootstrap-select input_border dropup'>
//                                                                     <select className='input_border selectpicker' style={{ display: 'block !important' }} aria-label="Default select example" data-live-search="true">
//                                                                         {console.log('SELECT', widgets)}
//                                                                         <option>Please select {widget.label}</option>
//                                                                         {widget.options.map((option, i) => (

//                                                                             <option key={i} value={option} data-tokens={option}>{option}</option>
//                                                                         ))}

//                                                                     </select>
//                                                                     // {setSelect(widget)}
//                                                                     // <>Select</>
//                                                                     // </div>
//                                                                 ) : (
//                                                                     <input id={`text-${index}`} className='input_border p-2 form-control' type='text' placeholder={`Enter ${widget.label}`} />
//                                                                 )
//                                                                 }

//                                                                 {/* <IconButton onClick={() => handleRemoveWidget(widget.label, widget.widgetType, widget.options)}>
//                                                                     <CloseIcon className='close_icon' />
//                                                                 </IconButton> */}

//                                                             <IconButton onClick={() => handleRemoveWidget(widget.id)}>
//                                                                     <CloseIcon className='close_icon' />
//                                                                 </IconButton>

//                                                             </div>
//                                                         </div>

//                                                     ))}

//                                                 </div>
//                                             </div>
//                                         </div>
//                                         : ""}
//                                 </div>
//                             </div>
//                         </div>

//                             <div className="col-md-5 mt-5" id='movingdiv'>
//                                     <div className=''>
//                                         <h6 className='m-3 text-white' style={{ fontSize: '24px', fontWeight: '500' }}>
//                                             Drag and drop dynamic fields into Case details
//                                         </h6>
//                                         <div className='row m-2'>
//                                             {/* Render draggable items */}
//                                             {draggableItems.map((item, index) => (
//                                                 <div key={index} className='col-md-6 p-2'>
//                                                     <div
//                                                         className='dragable_btn'
//                                                         draggable={true}
//                                                         onDragStart={(e) => handleDragStart(e, item.widgetType, item.label, item.options)}
//                                                     >
//                                                         {item.label}
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>

//                     </div>

//                     <div className='m-3 '>
//                         <Button variant="contained" style={{ backgroundColor: "#7b39f1" }}>Create Incident/Case</Button>
//                     </div>
//                 </div>
//             </div>
//         </div >
//     )
// }

// export default AddIncident

import React from 'react';
import Form from 'react-bootstrap/Form';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import TableCell from '@mui/material/TableCell';
import { useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';

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
  const [widgets, setWidgets] = useState([]);
  const [selectedWidget, setSelectedWidget] = useState(null);
  const [draggedItem, setDraggedItem] = useState(null);
  const [movingDivTop, setMovingDivTop] = useState(200);
  // const [movingDivTop, setMovingDivTop] = useState(100);
  const [movingDivLeft, setMovingDivLeft] = useState(50);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleAddWidgets = () => {
    // Add all draggable items to widgets state
    setWidgets(draggableItems);
  };

  const handleFileChange = (e) => {
    setSelectedFiles([...e.target.files]);
  };

  const handleWidgetClick = (index) => {
    // Show only the clicked widget
    setSelectedWidget(widgets[index]);
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

  const handleRemoveFile = (index) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
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
    { widgetType: 'input', label: 'Affected quantity' },
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
    <div className='right-cont'>
      <div className='card'>
        <div className='m-4 row'>
          <div class='col-md-8'>
            <h5 style={{ fontSize: '24px', fontWeight: '600' }}>
              Case details
            </h5>
            {/* <div className='mt-2'> */}
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
                {/* <div className='col-md-9'>
                                    <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
                                        <Form.Label className='text_color'>Category <span className='star'>*</span></Form.Label>
                                        <Form.Select className='input_border' aria-label="Default select example">
                                            <option>Please select Category</option>
                                            <option value="1">Incident</option>
                                            <option value="2">Injury</option>
                                            <option value="3">Complaint</option>
                                            <option value="4">Hazard</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div> */}
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

                {/* <div className='col-md-9'>
                                    <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
                                        <Form.Label className='text_color'>Severity <span className='star'>*</span></Form.Label>
                                        <Form.Select className='input_border' aria-label="Default select example">
                                            <option>Please select Category</option>
                                            <option value="1">Critical</option>
                                            <option value="2">High</option>
                                            <option value="3">Moderate</option>
                                            <option value="4">Low</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div> */}

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
                    }}
                  >
                    Drag and drop your files here or &nbsp; &nbsp;
                    <Button
                      component='label'
                      variant='contained'
                      style={{ textTransform: 'capitalize' }}
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

                <div className='col-md-9 mt-2'>
                  <div>
                    <div
                      className='right-cont col-md-12'
                      onDrop={handleOnDrop}
                      onDragOver={handleDragOver}
                    >
                      <div className='drop_text'>
                        <label>
                          Drop your fields here (or){' '}
                        </label>
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
                                  <option>Please select {widget.label}</option>
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
                            {selectedWidget === widget && (
                              <div style={{ display: 'flex' }}></div>
                            )}
                          </Form.Group>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            {/* </div> */}
          </div>
          <div className='col-md-4 mt-5 movingdiv' >
            <div className=''>
              <h6
                className='m-3 text-white'
                style={{ fontSize: '18px', fontWeight: '500' }}
              >
                Drag and drop dynamic fields into Case details
              </h6>
              <div className='row m-2'>
                {draggableItems.map((item, index) => (
                  <div key={index} className='col-md-4 p-2'>
                    <div
                      className='dragable_btn'
                      draggable={true}
                      onDragStart={(e) =>
                        handleDragStart(
                          e,
                          item.widgetType,
                          item.label,
                          item.options
                        )
                      }
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddIncident;
