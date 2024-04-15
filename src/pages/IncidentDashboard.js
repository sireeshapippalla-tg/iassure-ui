import React from 'react';
import Form from 'react-bootstrap/Form';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { PieChart } from '@mui/x-charts/PieChart';
import { Button } from '@mui/material';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { blue, orange } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import { useYScale, useDrawingArea } from '@mui/x-charts/hooks';
import { LineChart } from '@mui/x-charts/LineChart';

const data = [4000, 3000, -1000, 500, -2100, -250, 3490];
const xData = ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'];

function ColorSwich({ threshold, color1, color2, id }) {
    const { top, height, bottom } = useDrawingArea();
    const svgHeight = top + bottom + height;

    const scale = useYScale(); // You can provide the axis Id if you have multiple ones
    const y0 = scale(threshold); // The coordinate of of the origine
    const off = y0 !== undefined ? y0 / svgHeight : 0;

    return (
        <defs>
            <linearGradient
                id={id}
                x1="0"
                x2="0"
                y1="0"
                y2={`${svgHeight}px`}
                gradientUnits="userSpaceOnUse" // Use the SVG coordinate instead of the component ones.
            >
                <stop offset={off} stopColor={color1} stopOpacity={1} />
                <stop offset={off} stopColor={color2} stopOpacity={1} />
            </linearGradient>
        </defs>
    );
}


const chartSetting = {
    yAxis: [
        // {
        //     label: 'rainfall (mm)',
        // },
    ],
    width: 430,
    height: 300,
    sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-20px, 0)',
        },
    },
};
const dataset = [
    {
        london: 59,
        paris: 57,
        newYork: 86,
        seoul: 21,
        month: 'Total',
    },
    {
        london: 50,
        paris: 52,
        newYork: 78,
        seoul: 28,
        month: 'Closed',
    },
    {
        london: 47,
        paris: 53,
        newYork: 106,
        seoul: 41,
        month: 'Open',
    },



];

const piedata = [
    { id: 0, value: 10, label: '2024' },
    { id: 1, value: 15, label: '2023' },
    { id: 2, value: 20, label: '2022' },
    { id: 3, value: 25, label: '2021' },
    { id: 4, value: 20, label: '2020' },

];
const valueFormatter = (value) => `${value}mm`;

const IncidentDashboard = () => {
    return (
        <div>
            <div className='right-cont'>

                <div className='card p-2 '>
                    <div className='card m-2'>
                        <div className='row p-2'>
                            <div className='col-md-9'>
                                <h5>IncidentsTracker</h5>
                            </div>
                            <div className='col-md-3 text-end'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Select aria-label="Default select example">
                                        <option value="days">Last Seven Days</option>
                                        <option value="month">Last Month</option>
                                        <option value="year">Last Year</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className='col-md-12 '>
                                <div style={{ marginLeft: "20px" }}>
                                    <div><h1 style={{ fontWeight: "bold" }}>1</h1></div>
                                    <div><h6 style={{ color: "#99a2ac" }}>Tickets</h6></div>
                                </div>

                            </div>
                            <div className='col-md-12  text-center' style={{ marginBottom: "100px" }}>
                                <div> <h6 style={{ color: "red" }}>Resovled Incidents</h6></div>
                                <div><h4 style={{ color: "#99a2ac" }}>0%</h4></div>
                            </div>
                            <div className='col-md-4'>
                                <div> <h6 style={{ color: "#99a2ac" }}>Resovled Tickets</h6></div>
                                <div><h4 style={{ color: "#99a2ac" }}>1</h4></div>
                            </div>
                            <div className='col-md-4 text-center'>
                                <div> <h6 style={{ color: "#99a2ac" }}>Open Tickets</h6></div>
                                <div><h4 style={{ color: "#99a2ac" }}>1</h4></div>
                            </div>
                            <div className='col-md-4 text-end'>
                                <div> <h6 style={{ color: "#99a2ac" }}>Response Time</h6></div>
                                <div><h4 style={{ color: "#99a2ac", marginRight: "40px" }}>Od</h4></div>
                            </div>
                        </div>


                    </div>


                    {/* <div className='card m-2'> */}
                    <div className='row m-2' style={{ gap: "60px" }}>
                        <div className='col-md-5 card'>
                            <div className='row mt-4'>
                                <div className='col-md-7'>
                                    <h5>Incidents Statictic</h5>
                                </div>
                                <div className='col-md-5 text-end'>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Select aria-label="Default select example">
                                            <option value="days">Last Seven Days</option>
                                            <option value="month">Last Month</option>
                                            <option value="year">Last Year</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </div>
                            <BarChart
                                dataset={dataset}
                                xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                                series={[
                                    { dataKey: 'london', label: 'Critical', valueFormatter },
                                    { dataKey: 'paris', label: 'Major', valueFormatter },
                                    { dataKey: 'newYork', label: 'Minor', valueFormatter },
                                    // { dataKey: 'seoul', label: 'Seoul', valueFormatter },
                                ]}
                                {...chartSetting}
                            />
                        </div>

                        <div className='col-md-6 card '>
                            <div className='row mt-4'>
                                <div className='col-md-7'>
                                    <h5>Incident Age Statictics</h5>
                                </div>
                                <div className='col-md-5 text-end'>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Select aria-label="Default select example">
                                            <option value="All">All</option>
                                            <option value="month">2024</option>
                                            <option value="year">2023</option>
                                            <option value="year">2022</option>
                                            <option value="year">2021</option>
                                            <option value="year">2020</option>

                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </div>
                            <PieChart
                                series={[
                                    {
                                        data: piedata,
                                        highlightScope: { faded: 'global', highlighted: 'item' },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                    },
                                ]}
                                height={250}
                            />
                        </div>
                    </div>
                    <div className='card m-2 mt-4 '>
                        <div className='row m-4'>
                            <h5 className='text-center'>Trend Analysis Vs Time Period</h5>
                            <div className='col-md-4 card'>
                                <h5 className='m-2'>Filters</h5>
                                <div className='m-3'>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label className='text_color'>Year</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option value="1">All</option>
                                            <option value="2">2024</option>
                                            <option value="3">2023</option>
                                            <option value="4">2022</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <hr />
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label className='text_color'>Month</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option value="1">January</option>
                                            <option value="2">Febrauary</option>
                                            <option value="3">March</option>
                                            <option value="4">April</option>
                                            <option value="5">May</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <hr />
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <label className='text_color'>Date Range</label>
                                        <DemoContainer components={['DateRangePicker']} >
                                            <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                    <Button className='m-2' variant="contained" style={{backgroundColor:"#7b39f1"}}>Apply</Button>
                                </div>

                            </div>
                            <div className='card mt-4'>
                                <div className='row m-4'>
                                    <div className='col-md-9'><h5>Trend Analysis</h5></div>
                                    <div className='col-md-3'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Select aria-label="Default select example">
                                                <option value="1">Yearly</option>
                                                <option value="2">Monthly</option>
                                                <option value="3">Date</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>

                                </div>

                                <Stack direction="column" width="100%" spacing={1}>
                                    <LineChart
                                        xAxis={[{ data: xData, scaleType: 'point' }]}
                                        yAxis={[{ min: -3000, max: 4000 }]}
                                        series={[{ data, showMark: false, area: true }]}
                                        height={200}
                                        margin={{ top: 20, bottom: 30, left: 75 }}
                                        sx={{
                                            '& .MuiAreaElement-root': {
                                                fill: 'url(#swich-color-id-1)',
                                            },
                                        }}
                                    >
                                        <ColorSwich
                                            color1="#549935" // green
                                            color2="#fa531c" // red
                                            threshold={0}
                                            id="swich-color-id-1"
                                        />
                                        <rect x={0} y={0} width={5} height="100%" fill="url(#swich-color-id-1)" />
                                    </LineChart>

                                    {/* <LineChart
                                        xAxis={[{ data: xData, scaleType: 'point' }]}
                                        yAxis={[{ min: -3000, max: 4000 }]}
                                        series={[{ data, showMark: false, area: true }]}
                                        height={200}
                                        margin={{ top: 20, bottom: 30, left: 75 }}
                                        sx={{
                                            '& .MuiAreaElement-root': {
                                                fill: 'url(#swich-color-id-2)',
                                            },
                                        }}
                                    >
                                        <ColorPalette id="swich-color-id-2" />
                                        <rect x={0} y={0} width={5} height="100%" fill="url(#swich-color-id-2)" />
                                    </LineChart> */}
                                </Stack>
                            </div>
                            <div className='col-md-7'></div>

                        </div>
                    </div>
                </div>
                {/* </div> */}


            </div>
        </div>
    )
}
function ColorPalette({ id }) {
    const { top, height, bottom } = useDrawingArea();
    const svgHeight = top + bottom + height;

    const scale = useYScale(); // You can provide the axis Id if you have multiple ones

    return (
        <defs>
            <linearGradient
                id={id}
                x1="0"
                x2="0"
                y1="0"
                y2={`${svgHeight}px`}
                gradientUnits="userSpaceOnUse" // Use the SVG coordinate instead of the component ones.
            >
                <stop
                    offset={scale(5000) / svgHeight}
                    stopColor={blue[400]}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(4000) / svgHeight}
                    stopColor={blue[400]}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(4000) / svgHeight}
                    stopColor={blue[300]}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(3000) / svgHeight}
                    stopColor={blue[300]}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(3000) / svgHeight}
                    stopColor={blue[200]}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(2000) / svgHeight}
                    stopColor={blue[200]}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(2000) / svgHeight}
                    stopColor={blue[100]}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(1000) / svgHeight}
                    stopColor={blue[100]}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(1000) / svgHeight}
                    stopColor={blue[50]}
                    stopOpacity={1}
                />
                <stop offset={scale(0) / svgHeight} stopColor={blue[50]} stopOpacity={1} />
                <stop offset={scale(0) / svgHeight} stopColor={orange[100]} stopOpacity={1} />
                <stop
                    offset={scale(-1000) / svgHeight}
                    stopColor={orange[100]}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(-1000) / svgHeight}
                    stopColor={orange[200]}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(-2000) / svgHeight}
                    stopColor={orange[200]}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(-3000) / svgHeight}
                    stopColor={orange[300]}
                    stopOpacity={1}
                />
            </linearGradient>
        </defs>
    );
}
export default IncidentDashboard