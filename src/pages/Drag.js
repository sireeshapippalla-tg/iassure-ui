import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';

const Drag = () => {
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
        console.log('widgetdrop', widgetType)
        const label = e.dataTransfer.getData("label");
        setWidgets([...widgets, { widgetType, label }]);
    };

    return (
        <div className='row mt-5'>
            <div className='left-cont col-md-5'>
                {/* Render draggable buttons representing form fields */}
                <div
                    className='card p-2'
                    draggable={true}
                    onDragStart={(e) => handleDragStart(e, 'dropdown', 'Severity')}
                >
                    Severity
                </div>
                <div
                    className='card p-2'
                    draggable={true}
                    onDragStart={(e) => handleDragStart(e, 'input', 'Product Code')}
                >
                    Product Code
                </div>
                <div
                    className='card p-2'
                    draggable={true}
                    onDragStart={(e) => handleDragStart(e, 'input', 'Due Date')}
                >
                    Due Date
                </div>
                <div
                    className='card p-2'
                    draggable={true}
                    onDragStart={(e) => handleDragStart(e, 'dropdown', 'Assigned To/Person')}
                >
                    Assigned To/Person
                </div>
                {/* Add more draggable buttons representing other form fields */}
            </div>
            <div
                className='right-cont col-md-6'
                onDrop={handleOnDrop}
                onDragOver={handleDragOver}
            >
                {/* Render dropped widgets */}
                {widgets.map((widget, index) => (
                    <div key={index} className='card p-2'>
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
                            ) : (
                                <FormControl className='input_border' type="text" placeholder={`Enter ${widget.label}`} />
                            )}
                        </Form.Group>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Drag;
