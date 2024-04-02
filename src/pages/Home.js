import React from 'react'
import EditDashboard from '../assets/images/EditDashboard.png';
import Sumaryicon1 from '../assets/images/Sumaryicon1.png';
import Sumaryicon2 from '../assets/images/Sumaryicon2.png';
import Sumaryicon3 from '../assets/images/Sumaryicon3.png';
import RightArrow from '../assets/images/RightArrow.png';
import Widget from '../assets/images/Widget.png';


function Home() {
  
  return (
    <div className='right-cont'>
      <div className='card'>
        <div className='body-cont'>
          <div className='bodycont-in d-flex justify-content-between'>
            <h3>Dashboard</h3>
            <button className='btn btn-edit'><img src={EditDashboard} alt="EditDashboard" /> Edit</button>
          </div>
          <div className='summary-block'>
            <h4 className='head-text'>Summary</h4>
            <div className='row'>
              <div className='col-md-4'>
                <div className='card summary-block-card'>
                  <div className='row'>
                    <div className='summary-img col-md-3'><img src={Sumaryicon1} alt="Sumaryicon1" /></div>
                    <div className='summary-txt col-md-7'>
                      <strong className='d-block'>0</strong>
                      <span>Heads Up</span>
                    </div>
                    <div className='col-md-2 d-flex align-items-center justify-content-end'><img src={RightArrow} alt="RightArrow" /> </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card summary-block-card'>
                  <div className='row'>
                    <div className='summary-img col-md-3'><img src={Sumaryicon2} alt="Sumaryicon2" /></div>
                    <div className='summary-txt col-md-7'>
                      <strong className='d-block'>0</strong>
                      <span>Training</span>
                    </div>
                    <div className='col-md-2 d-flex align-items-center justify-content-end'><img src={RightArrow} alt="RightArrow" /> </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card summary-block-card'>
                  <div className='row'>
                    <div className='summary-img col-md-3'><img src={Sumaryicon3} alt="Sumaryicon3" /></div>
                    <div className='summary-txt col-md-7'>
                      <strong className='d-block'>0</strong>
                      <span>Issues</span>
                    </div>
                    <div className='col-md-2 d-flex align-items-center justify-content-end'><img src={RightArrow} alt="RightArrow" /> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='todolist'>
            <h4 className='head-text'>To-do List</h4>
            <div className='row'>
              <div className='col-md-3'>
                <div className='card summary-todo'>
                  <h5 className='text-uppercase summary-ongoing'>ON GOING INSPECTION</h5>
                  <h3 className='todo-head'>22 Jan 2024 / Samule Dane</h3>
                  <p className='todo-title'>Sample - Warehouse Safety Checklist</p>
                  <strong className='todoupdate'>Updated 3 hours ago</strong>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card summary-todo'>
                  <h5 className='text-uppercase summary-ongoing summary-coming'>ON COMING INSPECTION</h5>
                  <h3 className='todo-head'>22 Jan 2024 / Samule Dane</h3>
                  <p className='todo-title'>Sample - Warehouse Safety Checklist</p>
                  <strong className='todoupdate'>Updated 3 hours ago</strong>
                </div>
              </div>
            </div>
          </div>
          <div className='todolist '>
            <h4 className='head-text'>Analytics</h4>
            <div className='row'>
              <div className='col-md-6'>
                <div className='graph-img'>
                  <img src={Widget} alt="Widget" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='graph-img'>
                  <img src={Widget} alt="Widget" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Home