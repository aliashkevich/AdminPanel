import React from 'react';

function MemberTab() {
  return (
    <li className='nav-item'>
      <a className='nav-link' href='#test' data-toggle='tab'>
        member3
        <div className='ripple-container' />
      </a>
    </li>
  );
}

function MemberTask() {
  return (
    <div className='tab-pane active' id='profile'>
      <table className='table'>
        <tbody>
          <tr>
            <td>
              <div className='form-check'>
                <label className='form-check-label'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                  />
                  <span className='form-check-sign'>
                    <span className='check' />
                  </span>
                </label>
              </div>
            </td>
            <td>
              Lines From Great Russian Literature? Or E-mails From My Boss?
            </td>
            <td className='td-actions text-right'>
              <button
                type='button'
                rel='tooltip'
                title='Edit Task'
                className='btn btn-primary btn-link btn-sm'>
                <i className='material-icons'>edit</i>
              </button>
              <button
                type='button'
                rel='tooltip'
                title='Remove'
                className='btn btn-danger btn-link btn-sm'>
                <i className='material-icons'>close</i>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <div className='form-check'>
                <label className='form-check-label'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                  />
                  <span className='form-check-sign'>
                    <span className='check' />
                  </span>
                </label>
              </div>
            </td>
            <td>
              Flooded: One year later, assessing what was lost and what was
              found when a ravaging rain swept through metro Detroit
            </td>
            <td className='td-actions text-right'>
              <button
                type='button'
                rel='tooltip'
                title='Edit Task'
                className='btn btn-primary btn-link btn-sm'>
                <i className='material-icons'>edit</i>
              </button>
              <button
                type='button'
                rel='tooltip'
                title='Remove'
                className='btn btn-danger btn-link btn-sm'>
                <i className='material-icons'>close</i>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <div className='form-check'>
                <label className='form-check-label'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    checked
                  />
                  <span className='form-check-sign'>
                    <span className='check' />
                  </span>
                </label>
              </div>
            </td>
            <td>Create 4 Invisible User Experiences you Never Knew About</td>
            <td className='td-actions text-right'>
              <button
                type='button'
                rel='tooltip'
                title='Edit Task'
                className='btn btn-primary btn-link btn-sm'>
                <i className='material-icons'>edit</i>
              </button>
              <button
                type='button'
                rel='tooltip'
                title='Remove'
                className='btn btn-danger btn-link btn-sm'>
                <i className='material-icons'>close</i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function TaskRow() {
  return (
    <tr>
      <td>
        <div className='form-check'>
          <label className='form-check-label'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              checked
            />
            <span className='form-check-sign'>
              <span className='check' />
            </span>
          </label>
        </div>
      </td>
      <td>Sign contract for "What are conference organizers afraid of?"</td>
      <td className='td-actions text-right'>
        <button
          type='button'
          rel='tooltip'
          title='Edit Task'
          className='btn btn-primary btn-link btn-sm'>
          <i className='material-icons'>edit</i>
        </button>
        <button
          type='button'
          rel='tooltip'
          title='Remove'
          className='btn btn-danger btn-link btn-sm'>
          <i className='material-icons'>close</i>
        </button>
      </td>
    </tr>
  );
}

export default class Tasks extends React.Component {
  static defaultProps = {
    url: 'https://lesewert.herokuapp.com/api/v1',
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      tasks: {},
    };
    this.getTasks = this.getTasks.bind(this);
  }
  getTasks() {
    fetch(`${this.props.url}/tasks`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          tasks: data.tasks,
          loading: false,
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getTasks();
  }

  render() {
    const {projectId} = this.props;
    const tasks = this.state.tasks;
    if (this.state.loading == false) {
      const projectTasks = tasks.filter(task => task.project_id === projectId);
      console.log('projectTasks', projectTasks);
    }
    return (
      <div className='col-lg-8 col-md-12 col-sm-12'>
        <div className='card'>
          <div className='card-header card-header-tabs card-header-info'>
            <div className='nav-tabs-navigation'>
              <div className='nav-tabs-wrapper'>
                <span className='nav-tabs-title'>Tasks:</span>
                <ul className='nav nav-tabs' data-tabs='tabs'>
                  <MemberTab />
                  <MemberTab />
                  <MemberTab />
                </ul>
              </div>
            </div>
          </div>
          <div className='card-body'>
            <div className='tab-content'>
              <div className='tab-pane' id='test'>
                <table className='table'>
                  <tbody>
                    <tr>
                      <td>
                        <div className='form-check'>
                          <label className='form-check-label'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              checked
                            />
                            <span className='form-check-sign'>
                              <span className='check' />
                            </span>
                          </label>
                        </div>
                      </td>
                      <td>
                        Flooded: One year later, assessing what was lost and
                        what was found when a ravaging rain swept through metro
                        Detroit
                      </td>
                      <td className='td-actions text-right'>
                        <button
                          type='button'
                          rel='tooltip'
                          title='Edit Task'
                          className='btn btn-primary btn-link btn-sm'>
                          <i className='material-icons'>edit</i>
                        </button>
                        <button
                          type='button'
                          rel='tooltip'
                          title='Remove'
                          className='btn btn-danger btn-link btn-sm'>
                          <i className='material-icons'>close</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='form-check'>
                          <label className='form-check-label'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                            />
                            <span className='form-check-sign'>
                              <span className='check' />
                            </span>
                          </label>
                        </div>
                      </td>
                      <td>
                        Sign contract for "What are conference organizers afraid
                        of?"
                      </td>
                      <td className='td-actions text-right'>
                        <button
                          type='button'
                          rel='tooltip'
                          title='Edit Task'
                          className='btn btn-primary btn-link btn-sm'>
                          <i className='material-icons'>edit</i>
                        </button>
                        <button
                          type='button'
                          rel='tooltip'
                          title='Remove'
                          className='btn btn-danger btn-link btn-sm'>
                          <i className='material-icons'>close</i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='tab-pane' id='settings'>
                <table className='table'>
                  <tbody>
                    <tr>
                      <td>
                        <div className='form-check'>
                          <label className='form-check-label'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                            />
                            <span className='form-check-sign'>
                              <span className='check' />
                            </span>
                          </label>
                        </div>
                      </td>
                      <td>
                        Lines From Great Russian Literature? Or E-mails From My
                        Boss?
                      </td>
                      <td className='td-actions text-right'>
                        <button
                          type='button'
                          rel='tooltip'
                          title='Edit Task'
                          className='btn btn-primary btn-link btn-sm'>
                          <i className='material-icons'>edit</i>
                        </button>
                        <button
                          type='button'
                          rel='tooltip'
                          title='Remove'
                          className='btn btn-danger btn-link btn-sm'>
                          <i className='material-icons'>close</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='form-check'>
                          <label className='form-check-label'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              checked
                            />
                            <span className='form-check-sign'>
                              <span className='check' />
                            </span>
                          </label>
                        </div>
                      </td>
                      <td>
                        Flooded: One year later, assessing what was lost and
                        what was found when a ravaging rain swept through metro
                        Detroit
                      </td>
                      <td className='td-actions text-right'>
                        <button
                          type='button'
                          rel='tooltip'
                          title='Edit Task'
                          className='btn btn-primary btn-link btn-sm'>
                          <i className='material-icons'>edit</i>
                        </button>
                        <button
                          type='button'
                          rel='tooltip'
                          title='Remove'
                          className='btn btn-danger btn-link btn-sm'>
                          <i className='material-icons'>close</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='form-check'>
                          <label className='form-check-label'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              checked
                            />
                            <span className='form-check-sign'>
                              <span className='check' />
                            </span>
                          </label>
                        </div>
                      </td>
                      <td>
                        Sign contract for "What are conference organizers afraid
                        of?"
                      </td>
                      <td className='td-actions text-right'>
                        <button
                          type='button'
                          rel='tooltip'
                          title='Edit Task'
                          className='btn btn-primary btn-link btn-sm'>
                          <i className='material-icons'>edit</i>
                        </button>
                        <button
                          type='button'
                          rel='tooltip'
                          title='Remove'
                          className='btn btn-danger btn-link btn-sm'>
                          <i className='material-icons'>close</i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
