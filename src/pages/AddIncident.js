
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
// import $ from 'jquery';



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


//     const handleOnDrop = (e) => {
//         const widgetType = e.dataTransfer.getData("widgetType");
//         console.log('widgetType:', widgetType); // Add logging
//         const label = e.dataTransfer.getData("label");
//         console.log('label:', label); // Add logging
//         const optionString = e.dataTransfer.getData("options");
//         console.log('optionString:', optionString); // Add logging

//         // checking if optionstring is not empty
//         if (optionString.trim() !== "") {
//             try {
//                 const options = JSON.parse(optionString);
//                 setWidgets([...widgets, { widgetType, label, options }]);
//             } catch (error) {
//                 console.error("Error parsing options JSON:", error);
//             }
//         } else {
//             console.error("No options data provided.");
//             setWidgets([...widgets, { widgetType, label, options: [] }]);
//         }

//         // Initialize Bootstrap Selectpicker for the new select menu
//         // const newSelect = document.querySelector('.selectpicker:last-child');
//         // if (newSelect) {
//         //     newSelect.classList.add('selectpicker');
//         //     newSelect.setAttribute('data-live-search', 'true');
//         //     $(newSelect).selectpicker();
//         // }

//         setTimeout(() => {
//             $('.selectpicker').selectpicker('refresh');
//         }, 0);
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
//     // };


//     const handleCloseWidget = (label, widgetType) => {
//         console.log("Removing widget:", label, widgetType);
//         console.log("Current widgets:", widgets);
//         setWidgets(widgets.filter(widget => !(widget.label === label && widget.widgetType === widgetType)));
//     };

//     const handleRemoveWidget = (label, widgetType, options) => {
//         // setWidgets([])
//         console.log(label, widgetType, widgets)
//         let widgets11 = widgets.filter(widget => !(widget.label === label && widget.widgetType === widgetType))
//         console.log("WEDDE", widgets11)
//         let wid = widgets11[0]
//         let obj = {}
//         if (widgets11 && widgets11.length > 0) {
//             let ops = wid.options;
//             let lbl = wid.label;
//             let wtype = wid.widgetType;
//             console.log(ops, lbl, wtype)
//             if(wtype == "input") {
//                 widgets11 = []
//                 obj = {widgetType: wtype, label: lbl}
//                 widgets11.push(obj);
//             }
//             console.log('widgets', widgets11)
//             if (ops && ops.length > 0) {
//                 try {
//                     setWidgets([...widgets11]);
//                 } catch (error) {
//                     console.error("Error parsing options JSON:", error);
//                 }
//             } else {
//                 // console.error("No options data provided.");
//                 setWidgets([...widgets11]);
//             }
//             setTimeout(() => {
//                 if(wtype == "dropdown") {

//                     $('.selectpicker').selectpicker('refresh');
//                 }
//             }, 0);
//         } else {
//             setWidgets([])
//         }




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
//                                             <select className='input_border selectpicker' aria-label="Default select example" data-live-search="true">
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
//                                             <select className='input_border selectpicker' aria-label="Default select example" data-live-search="true">
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
//                                                         // <div>{widget.widgetType}

//                                                         // <IconButton onClick={() => handleRemoveWidget(widget.label, widget.widgetType)}>
//                                                         //                  <CloseIcon className='close_icon' />
//                                                         //              </IconButton>
//                                                         // </div>
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
//                                                                     // </div>
//                                                                 ) : widget.widgetType === 'date' ? (
//                                                                     <textarea
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

//                                                                     <input id={`text-${index}`} className='input_border p-2 form-control' type='text' placeholder={`Enter ${widget.label}`} />
//                                                                 )}

//                                                                 <IconButton onClick={() => handleRemoveWidget(widget.label, widget.widgetType, widget.options)}>
//                                                                     <CloseIcon className='close_icon' />
//                                                                 </IconButton>

//                                                             </div>
//                                                         </div>

//                                                     ))}
//                                                     {/* <div className='col-md-9'>
//                                                     {widgets.map((widget, index) => (
//                                                         <div key={index}>
//                                                             {widget.widgetType === 'dropdown' ? (
//                                                                 <div className="mb-3 searchdrop" controlId={`exampleForm.ControlInput${index}`}>
//                                                                     <label className='text_color'>{widget.label}</label>
//                                                                     <div style={{ display: "flex" }}>
//                                                                         <select className='input_border selectpicker' aria-label="Default select example" data-live-search="true">
//                                                                             <option>Please select {widget.label}</option>
//                                                                             {widget.options.map((option, i) => (
//                                                                                 <option key={i} value={option} data-tokens={option}>{option}</option>
//                                                                             ))}
//                                                                         </select>
//                                                                         <IconButton onClick={() => handleRemoveWidget(widget.label, widget.widgetType)}>
//                                                                             <CloseIcon className='close_icon' />
//                                                                         </IconButton>
//                                                                     </div>
//                                                                 </div>
//                                                             ) : (
//                                                                 <div className="mb-3 searchdrop" controlId={`exampleForm.ControlInput${index}`}>
//                                                                     <label className='text_color'>{widget.label}</label>
//                                                                     <div style={{ display: "flex" }}>
//                                                                         {widget.widgetType === 'date' ? (
//                                                                             <TextField
//                                                                                 id={`date-picker-${index}`}
//                                                                                 label={widget.label}
//                                                                                 type="date"
//                                                                                 defaultValue=""
//                                                                                 className='input_border'
//                                                                                 InputLabelProps={{
//                                                                                     shrink: true,
//                                                                                 }}
//                                                                                 style={{ width: "100%" }}
//                                                                             />
//                                                                         ) : (
//                                                                             <input className='input_border p-2 form-control' type='text' placeholder={`Enter ${widget.label}`} />
//                                                                         )}
//                                                                         <IconButton onClick={() => handleRemoveWidget(widget.label, widget.widgetType)}>
//                                                                             <CloseIcon className='close_icon' />
//                                                                         </IconButton>
//                                                                     </div>
//                                                                 </div>
//                                                             )}
//                                                         </div>
//                                                     ))}
//                                                 </div> */}


//                                                 </div>
//                                             </div>
//                                         </div>
//                                         : ""}
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-5 mt-5" >
//                             <div className='box_shadow m-5 p-2 rounded'>
//                                 <h6 className='m-3 '>
//                                     <strong>Drag and drop dynamic fields into Subject</strong>
//                                 </h6>
//                                 <div className='row m-2'>
//                                     {/* Render draggable items */}
//                                     {draggableItems.map((item, index) => (
//                                         <div key={index} className='col-md-6 p-2'>
//                                             <div
//                                                 className='dragable_btn'
//                                                 draggable={true}
//                                                 onDragStart={(e) => handleDragStart(e, item.widgetType, item.label, item.options)}
//                                             >
//                                                 {item.label}
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>


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
        { widgetType: 'dropdown', label: 'Severity', options: ["Critical", "High", "Moderate", "Low"] },
        { widgetType: 'dropdown', label: 'Product name', options: ["Product 1", "Product 2", "Product 3"] },
        { widgetType: 'dropdown', label: 'Issue type', options: ["Audit", "Quality", "Security"] },
        { widgetType: 'dropdown', label: 'Supplier Name', options: ["One", "Two", "Three"] },
        { widgetType: 'input', label: 'Affected quantity' },
        { widgetType: 'dropdown', label: 'Issue Area', options: ["Footwear", "Apparel", "Leather Boots", "Production Components and Materials", "Work Inprogress", "Finished Product waiting for distribution"] },
        { widgetType: 'input', label: 'Product Code' },
        { widgetType: 'input', label: 'Batch number' },
    ].filter(item => !widgets.some(widget => widget.label === item.label && widget.widgetType === item.widgetType));

    return (
        <div className='right-cont' >
            <div className='card'>

                <div className='m-4 row'>
                <div class="col-md-7">
                            <h5 className='sub_head'>Subject</h5>
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
                                        <div>
                                            <div
                                                className='right-cont col-md-12'
                                                onDrop={handleOnDrop}
                                                onDragOver={handleDragOver}
                                            >
                                                <label className='sub_head' style={{ fontWeight: "600" }}>Add</label>
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

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 mt-5" >
                            <div className='box_shadow m-5 p-2 rounded'>
                                <h6 className='m-3 '>
                                    <strong>Drag and drop dynamic fields into Subject</strong>
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
            </div>
        </div>
    )
}

export default AddIncident