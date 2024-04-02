import React, { useState } from 'react';
import Logo from '../assets/images/Logo.png';
import Frame from '../assets/images/Frame.png';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Header({ currentPage }) { // Accept currentPage as a prop

  const [activePage, setActivePage] = useState('build');
  const location = useLocation()
  const navigate = useNavigate()

  const handlePageClick = (page) => {
    setActivePage(page);
    if (page === 'build') {
      navigate('/assessment/assessement-details');
    } else if (page === 'report') {
      navigate('/assessment/assessement-report');
    }
  };


  return (
    <div>
      <header className='shadow-sm'>
        <div className='col-md-12 d-flex justify-content-between'>
          <div className='col-md-6 d-flex'>
            <div className='logo me-5'><img src={Logo} alt="Logo" /></div>
            <div className='col-md-3 align-items-center d-flex'>
              <h3 className='fw-6 d-flex align-items-center'>Team <img src={Frame} alt="Frame" /></h3>
            </div>
          </div>
          <div className='col-md-6 justify-content-end d-flex'>
            {/* {currentPage === '/assessment/assessement-details' && ( 
              
            )} */}
            {location.pathname==="/assessment/assessement-details" &&
              <div className="switch-main"> 
                <div className='switch-page d-flex text-center'>
                  <div
                    className={`switch-page-text me-2 ${activePage === 'build' ? 'active' : ''}`}
                    onClick={() => handlePageClick('build')}
                  >
                    1.Build
                  </div>
                  <div
                    className={`switch-page-text ${activePage === 'report' ? 'active' : ''}`}
                    onClick={() => handlePageClick('report')}
                    //onClick={reportclick}
                  >
                    2.Report
                  </div>
                </div>
              </div>
            }
            {location.pathname==="/assessment/assessement-report" &&
              <div className="switch-main"> 
                <div className='switch-page d-flex text-center'>
                  <div
                    className={`switch-page-text me-2 ${activePage === 'build' ? 'active' : ''}`}
                    onClick={() => handlePageClick('build')}
                  >
                    1.Build
                  </div>
                  <div
                    className={`switch-page-text ${activePage === 'report' ? 'active' : ''}`}
                    onClick={() => handlePageClick('report')}
                    //onClick={reportclick}
                  >
                    2.Report
                  </div>
                </div>
              </div>
            }

            <div class="row">
              <div class="col-md-9">
                <div class="input-group">
                  <span class="input-group-append d-flex header-search rounded-3">
                    {/* <FontAwesomeIcon icon={faSearch}  className='pt-1'/> */}
                    <input type='text' className='form-control border-0 bg-transparent' placeholder='Search' />
                  </span>
                </div>
              </div>
              <div className='col-md-3'>
                <button type="button" class="btn btn-danger btn-orange"> Create</button>
              </div> 
            </div>
            
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
