import React from 'react'
import EditDashboard from '../assets/images/EditDashboard.png';
import Sumaryicon1 from '../assets/images/Sumaryicon1.png';
import Sumaryicon2 from '../assets/images/Sumaryicon2.png';
import Sumaryicon3 from '../assets/images/Sumaryicon3.png';
import RightArrow from '../assets/images/RightArrow.png';
import Widget from '../assets/images/Widget.png';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DownloadIcon from '@mui/icons-material/Download';
import BuildIcon from '@mui/icons-material/Build';
import { styled } from '@mui/material/styles';




const StyledStatusTableCell = styled(TableCell)(({ theme, status }) => ({
  color: status === 'closed' ? 'green' : 'red',
}));

const StyledStatusText = styled('span')(({ theme, status }) => ({
  backgroundColor: status === 'closed' ? '#d7f9e8' : '#f9d7d7',
  padding: '4px 8px',
  borderRadius: '8px',
}));


const columns = [
  {
    id: 'id',
    label: 'Incident id',
    //  minWidth: 170 
  },
  {
    id: 'subject',
    label: 'Subject',
    // minWidth: 100
  },
  {
    id: 'orgName',
    label: 'Organization name',
    // minWidth: 170,
    // align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'category',
    label: 'Category',
    // minWidth: 170,
    // align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'severity',
    label: 'Severity',
    // minWidth: 170,
    // align: 'right',
    // format: (value) => value.toFixed(2),
  },
  {
    id: 'created',
    label: 'Created On',

  },
  {
    id: 'status',
    label: 'Status',
    align: 'center',

  },
  {
    id: 'action',
    label: 'Action',

  }
];

function createData(id, subject, orgName, category, severity, created, status, action) {

  return { id, subject, orgName, category, severity, created, status, action };
}
const getStatusColor = (status) => {
  return status === 'open' ? 'green' : 'red';
};
const rows = [
  createData('INN-23-1663', 'food', 'Innoclique Cognitive', 'Internal', 'major', '21-06-2023', 'open', <BuildIcon />),
  createData('INN-23-1663', 'food', 'Innoclique Cognitive', 'Internal', 'major', '21-06-2023', 'open', <BuildIcon />),
  createData('INN-23-1663', 'food', 'Innoclique Cognitive', 'Internal', 'major', '21-06-2023', 'open', <BuildIcon />),
  createData('INN-23-1663', 'food', 'Innoclique Cognitive', 'Internal', 'major', '21-06-2023', 'closed', <BuildIcon />),
  createData('INN-23-1663', 'food', 'Innoclique Cognitive', 'Internal', 'major', '21-06-2023', 'open', <BuildIcon />),
  createData('INN-23-1663', 'food', 'Innoclique Cognitive', 'Internal', 'major', '21-06-2023', 'open', <BuildIcon />),
  createData('INN-23-1663', 'food', 'Innoclique Cognitive', 'Internal', 'major', '21-06-2023', 'open', <BuildIcon />),
  createData('INN-23-1663', 'food', 'Innoclique Cognitive', 'Internal', 'major', '21-06-2023', 'closed', <BuildIcon />),
  createData('INN-23-1663', 'food', 'Innoclique Cognitive', 'Internal', 'major', '21-06-2023', 'open', <BuildIcon />),
  createData('INN-23-1663', 'food', 'Innoclique Cognitive', 'Internal', 'major', '21-06-2023', 'open', <BuildIcon />),
  createData('INN-23-1663', 'food', 'Innoclique Cognitive', 'Internal', 'major', '21-06-2023', 'open', <BuildIcon />),
  createData('INN-23-1663', 'food', 'Innoclique Cognitive', 'Internal', 'major', '21-06-2023', 'open', <BuildIcon />),
  createData('INN-23-1663', 'food', 'Innoclique Cognitive', 'Internal', 'major', '21-06-2023', 'open', <BuildIcon />),
  createData('INN-23-1663', 'food', 'Innoclique Cognitive', 'Internal', 'major', '21-06-2023', 'open', <BuildIcon />),
  createData('INN-23-1663', 'food', 'Innoclique Cognitive', 'Internal', 'major', '21-06-2023', 'open', <BuildIcon />),


];
const Incident = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [num, setNum] = React.useState('');

  const navigate = useNavigate()

  const handleChange = (event) => {
    setNum(event.target.value);
  };




  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const createincidenthandler = () => {
    navigate('/incident/create')
  }

  const clickHandlerresolve = () => {
    navigate('/incident/resolve')
  }
  return (
    <div>
      <div className='right-cont'>
        <div className='card p-2'>
          <div className='row mt-5'>
            <div className='col-md-4'>
              <div className='card summary-block-card'>
                <div className='row '>
                  <div className='summary-img col-md-3'>
                    <div className='ticket_bg'>
                      <ConfirmationNumberIcon style={{ color: "blue", fontSize: "30px" }} />
                    </div>
                  </div>
                  <div className='summary-txt col-md-7 text-center'>
                    <strong className='d-block' style={{ fontSize: "40px" }}>45</strong>
                  </div>
                  <div className='col-md-2 d-flex align-items-center justify-content-end'>
                    <h5>Total </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card summary-block-card'>
                <div className='row'>
                  <div className='summary-img col-md-3'>
                    <div className='thumb_bg'>
                      <ThumbUpIcon style={{ color: "green", fontSize: "30px" }} />
                    </div>
                  </div>
                  <div className='summary-txt col-md-7 text-center'>
                    <strong className='d-block' style={{ fontSize: "40px" }}>5</strong>
                  </div>
                  <div className='col-md-2 d-flex align-items-center justify-content-end'>
                    <h5>Resolved</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card summary-block-card'>
                <div className='row'>
                  <div className='summary-img col-md-3'>
                    <div className='List_bg'>
                      <FormatListBulletedIcon style={{ color: "#ea5455", fontSize: "30px" }} />
                    </div>
                  </div>
                  <div className='summary-txt col-md-7 text-center'>
                    <strong className='d-block' style={{ fontSize: "40px" }}>40</strong>
                  </div>
                  <div className='col-md-2 d-flex align-items-center justify-content-end'>
                    <h5>Open </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <div className='d-flex justify-content-between' style={{ marginLeft: "12px", marginRight: "10px", }}>
              <div style={{ border: "1px solid #7367f0", height: "40px" }}>
                <FormControl sx={{ minWidth: 120, }}>
                  <Select
                    value={rowsPerPage}
                    onChange={handleChangeRowsPerPage}
                    displayEmpty
                    sx={{
                      color: '#7367f0',
                      height: '30px',
                    }}
                    inputProps={{ 'aria-label': 'Without label' }}
                    MenuProps={{ PaperProps: { sx: { borderColor: '#7b39f1' } } }}
                  >
                    <MenuItem value={5}>1-5 of 50</MenuItem>
                    <MenuItem value={10}>1-10 of 50</MenuItem>
                    <MenuItem value={20}>1-20 of 50</MenuItem>
                    <MenuItem value={40}>1-40 of 50</MenuItem>
                    <MenuItem value={100}>1-50 of 50</MenuItem>
                  </Select>
                </FormControl>

              </div>
              <div className='m-2'>
                <Button className='me-2'
                  variant='contained'
                  style={{ backgroundColor: "#7b39f1", fontWeight: "bold" }}
                  // style={{ border: "1px solid #7367f0", paddingLeft: "25px", paddingRight: "25px" }}
                  onClick={createincidenthandler}
                >
                  Add New <span style={{ fontWeight: "bold", marginLeft: "4px" }}><AddIcon /></span></Button>
                <Button className='me-2'
                  // style={{ border: "1px solid #7367f0" }}
                  variant='outlined'
                  style={{color:"#7b39f1"}}
                >
                  <SearchIcon />
                </Button>
                <Button variant="contained" style={{backgroundColor:"#7b39f1"}}><DownloadIcon /></Button>
              </div>

            </div>
            <div className="mt-2">

              <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                          return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                              {columns.map((column) => {
                                const value = row[column.id];
                                if (column.id === 'status') {
                                  return (
                                    // <StyledStatusTableCell key={column.id} align={column.align} status={row.status}>
                                    //   {value}
                                    // </StyledStatusTableCell>
                                    <StyledStatusTableCell key={column.id} align={column.align} status={row.status}>
                                      <StyledStatusText status={row.status}>
                                        {value}
                                      </StyledStatusText>
                                    </StyledStatusTableCell>

                                  );
                                }
                                return (
                                  <TableCell key={column.id} align={column.align} onClick={clickHandlerresolve}>
                                    {column.format && typeof value === 'number'
                                      ? column.format(value)
                                      : value}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <div>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 20, 40, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  // style={{ margin: 'auto', justifyContent: 'center', display: "flex", alignItems: "center", alignContent: "center" }}
                  />
                </div>
              </Paper>
            </div>

          </div>

        </div>


      </div>
    </div>
  )
}

export default Incident