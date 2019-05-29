import React from 'react';

export default function Projects() {
  const projectdata = [
    {
      id: '2018-33',
      client: {},
      title: 'Lesewert 2018',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      start_date: '2018-01-01T13:41:39.587Z',
      end_date: '2018-12-21T13:42:02.806Z',
      participants: [],
    },
    {
      id: '2019-01',
      client: {},
      title: 'BMW',
      summary: 'Summary 1',
      start_date: '2019-04-01T13:41:39.587Z',
      end_date: '2019-06-29T13:42:02.806Z',
      participants: [],
    },
    {
      id: '2019-02',
      client: {},
      title: 'Duis aute irure dolor',
      summary:
        'Summary 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      start_date: '2019-05-11T13:41:39.587Z',
      end_date: '2019-06-12T13:42:02.806Z',
      participants: [],
    },
    {
      id: '2019-03',
      client: {},
      title: '2019',
      summary:
        'Summary 3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
      start_date: '2019-05-21T13:41:39.587Z',
      end_date: '2019-08-19T13:42:02.806Z',
      participants: [],
    },
  ];
  return (
    <div className='main-panel'>
      <div className='content'>
        <div className='container-fluid'>
          <button type='button' className='btn btn-success'>
            <i className='material-icons'>add_circle</i> New project
          </button>
          <div className='row'>
            <div className='col-md-12'>
              <div className='card'>
                <div className='card-header card-header-warning'>
                  <h4 className='card-title '>Project Overview</h4>
                  <p className='card-category'>
                    {' '}
                    Here is a subtitle for this table
                  </p>
                </div>
                <div className='card-body'>
                  <div className='table-responsive'>
                    <table className='table'>
                      <thead className=' text-warning'>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Participants</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Dakota Rice</td>
                          <td>Niger</td>
                          <td>Oud-Turnhout</td>
                          <td className='text-warning'>$36,738</td>{' '}
                          <td>
                            <button
                              type='button'
                              className='btn btn-default btn-fab btn-fab-mini btn-round'>
                              <i className='material-icons'>edit</i>
                            </button>
                          </td>
                          <td>
                            <button
                              type='button'
                              className='btn btn-danger btn-fab btn-fab-mini btn-round'>
                              <i className='material-icons'>delete</i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Minerva Hooper</td>
                          <td>Curaçao</td>
                          <td>Sinaai-Waas</td>
                          <td className='text-warning'>$23,789</td>
                          <td>
                            <button
                              type='button'
                              className='btn btn-default btn-fab btn-fab-mini btn-round'>
                              <i className='material-icons'>edit</i>
                            </button>
                          </td>
                          <td>
                            <button
                              type='button'
                              className='btn btn-danger btn-fab btn-fab-mini btn-round'>
                              <i className='material-icons'>delete</i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Sage Rodriguez</td>
                          <td>Netherlands</td>
                          <td>Baileux</td>
                          <td className='text-warning'>$56,142</td>
                          <td>
                            <button
                              type='button'
                              className='btn btn-default btn-fab btn-fab-mini btn-round'>
                              <i className='material-icons'>edit</i>
                            </button>
                          </td>
                          <td>
                            <button
                              type='button'
                              className='btn btn-danger btn-fab btn-fab-mini btn-round'>
                              <i className='material-icons'>delete</i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Philip Chaney</td>
                          <td>Korea, South</td>
                          <td>Overland Park</td>
                          <td className='text-warning'>$38,735</td>
                          <td>
                            <button
                              type='button'
                              className='btn btn-default btn-fab btn-fab-mini btn-round'>
                              <i className='material-icons'>edit</i>
                            </button>
                          </td>
                          <td>
                            <button
                              type='button'
                              className='btn btn-danger btn-fab btn-fab-mini btn-round'>
                              <i className='material-icons'>delete</i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Doris Greene</td>
                          <td>Malawi</td>
                          <td>Feldkirchen in Kärnten</td>
                          <td className='text-warning'>$63,542</td>
                          <td>
                            <button
                              type='button'
                              className='btn btn-default btn-fab btn-fab-mini btn-round'>
                              <i className='material-icons'>edit</i>
                            </button>
                          </td>
                          <td>
                            <button
                              type='button'
                              className='btn btn-danger btn-fab btn-fab-mini btn-round'>
                              <i className='material-icons'>delete</i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Mason Porter</td>
                          <td>Chile</td>
                          <td>Gloucester</td>
                          <td className='text-warning'>$78,615</td>
                          <td>
                            <button
                              type='button'
                              className='btn btn-default btn-fab btn-fab-mini btn-round'>
                              <i className='material-icons'>edit</i>
                            </button>
                          </td>
                          <td>
                            <button
                              type='button'
                              className='btn btn-danger btn-fab btn-fab-mini btn-round'>
                              <i className='material-icons'>delete</i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>{' '}
          </div>
        </div>{' '}
      </div>
    </div>
  );
}
