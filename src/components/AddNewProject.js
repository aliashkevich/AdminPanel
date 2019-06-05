import React from 'react';

export default function AddNewProject() {
  return (
    <div className='main-panel'>
      <div className='content'>
        <div className='container-fluid'>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-header card-header-warning'>
                <h4 className='card-title'>New Project</h4>
              </div>
              <br />
              <div className='card-body'>
                <form>
                  <div className='form-row'>
                    <div className='form-group col-sm-12 col-md-2'>
                      <label for='inputIDN'>IDN</label>
                      <input
                        type='number'
                        className='form-control'
                        id='inputIDN'
                      />
                    </div>
                    <div className='form-group col-sm-12 col-md-4'>
                      <label for='inputClient'>Client</label>
                      <input
                        type='text'
                        className='form-control'
                        id='inputClient'
                      />
                    </div>
                    <div className='form-group  col-sm-12 col-md-6'>
                      <label for='inputTitle'>Title</label>
                      <input
                        type='text'
                        className='form-control'
                        id='inputTitle'
                      />
                    </div>
                  </div>
                  <br />
                  <div className='form-row'>
                    <div className='form-group col-sm-12 col-md-12'>
                      <label for='inputSummary'>Summary</label>
                      <input
                        type='text'
                        className='form-control'
                        id='inputSummary'
                      />
                    </div>
                  </div>
                  <br />
                  <div className='form-row'>
                    <div className='form-group col-sm-12 col-md-3'>
                      <label for='inputStartDate'>Start Date</label>
                      <input
                        type='text'
                        className='form-control'
                        id='inputStartDate'
                      />
                    </div>
                    <div className='form-group col-sm-12 col-md-3'>
                      <label for='inputEndDate'>Start End</label>
                      <input
                        type='text'
                        className='form-control'
                        id='inputEndDate'
                      />
                    </div>
                    <div className='form-group col-sm-12 col-md-6'>
                      <label for='inputParticipants'>Participants</label>
                      <select
                        multiple
                        className='form-control selectpicker'
                        data-style='btn btn-link'
                        id='inputParticipants'>
                        <option />
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div className='text-right'>
                    <button type='submit' className='btn btn-warning'>
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
