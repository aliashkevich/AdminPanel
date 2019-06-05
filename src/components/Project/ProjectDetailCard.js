import React from 'react';

export default function ProjectDetailCard() {
  return (
    <div className='main-panel'>
      <div className='content'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-10'>
              <div className='card'>
                <div className='card-header card-header-warning'>
                  <h4 className='card-title'>Lesewert 2018</h4>
                  <p className='category'>
                    Project ID: <span>2018-33</span>
                  </p>
                </div>
                {/* summary */}
                <div className='card-body'>
                  <div className='row'>
                    <ClientInfo />
                    <ProjectSummary />
                  </div>
                  <div className='row'>
                    <Participants />
                    <Tasks />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Participants() {
  return (
    <div className='col-lg-4 col-md-6 col-sm-6'>
      <div className='card card-stats'>
        <div className='card-header card-header-warning card-header-icon'>
          <div className='card-icon'>
            <i className='material-icons'>people</i>
          </div>
          <div className='container-fluid' style={{padding: '10px'}}>
            <p className='card-category' style={{paddingBottom: '5px'}}>
              participants
            </p>
            {/* <div className='row'> */}
            <CircleImg />
            <CircleImg />
            <CircleImg />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function ClientInfo() {
  return (
    <div className='col-lg-4 col-md-6 col-sm-6'>
      <div className='card card-stats'>
        <div className='card-header card-header-warning card-header-icon'>
          <div className='card-icon'>
            <i className='material-icons'>location_city</i>
          </div>
          <div className='container-fluid' style={{padding: '10px'}}>
            <p className='card-category' style={{paddingBottom: '5px'}}>
              Client Information
            </p>
            <CircleImg />
            <p style={{color: 'grey'}}>Lesewert 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectSummary() {
  return (
    <div class='col-md-6'>
      <div class='card'>
        <div class='card-header card-header-text card-header-warning'>
          <div class='card-text'>
            <h4 class='card-title'>Project Summary</h4>
          </div>
        </div>
        <div class='card-body'>
          <div>
            <p>
              Project Date: <span>2018-01-01 ~ 2018-12-21</span>
            </p>
          </div>
          Mit Lesewert haben wir eine Analyse-Methode entwickelt, die erstmals
          ein Live-Leser-Feedback bietet, das dem digitaler Medien ähnelt. Seit
          2011 geben hunderte Abonnenten von Tageszeitungen wie der Sächsischen
          Zeitung oder von Magazinen wie DER SPIEGEL Feedback darüber, wie sie
          ihr Medium nutzen. Dazu erfassen sie bei allen gelesenen Texten mit
          einem Scanstift die Zeile, an der sie aufgehört haben zu lesen. Die
          Zeile wird via Lesewert-App an eine Datenbank übertragen. Die
          Redaktion erhält schließlich eine Live-Statistik für jeden einzelnen
          Artikel: Dieser Lesewert ähnelt einer detaillierten Einschaltquote.
        </div>
      </div>
    </div>
  );
}

function CircleImg() {
  return (
    <img
      class='card-img-top'
      style={{
        width: '3rem',
        borderRadius: '50%',
        paddingRight: '5px',
      }}
      src='https://i.pravatar.cc/300'
      alt='participant'
    />
  );
}

function UserInfo() {
  return (
    <div>
      <CircleImg />
      <p style={{color: 'grey'}}>name</p>
    </div>
  );
}

function Tasks() {
  return (
    <div className='col-lg-6 col-md-12'>
      <div className='card'>
        <div className='card-header card-header-tabs card-header-warning'>
          <div className='nav-tabs-navigation'>
            <div className='nav-tabs-wrapper'>
              <span className='nav-tabs-title'>Tasks:</span>
              <ul className='nav nav-tabs' data-tabs='tabs'>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    href='#profile'
                    data-toggle='tab'>
                    member1
                    <div className='ripple-container' />
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#messages' data-toggle='tab'>
                    member2
                    <div className='ripple-container' />
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#settings' data-toggle='tab'>
                    member3
                    <div className='ripple-container' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='card-body'>
          <div className='tab-content'>
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
                          />
                          <span className='form-check-sign'>
                            <span className='check' />
                          </span>
                        </label>
                      </div>
                    </td>
                    <td>
                      Flooded: One year later, assessing what was lost and what
                      was found when a ravaging rain swept through metro Detroit
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
                      Create 4 Invisible User Experiences you Never Knew About
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
            <div className='tab-pane' id='messages'>
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
                      Flooded: One year later, assessing what was lost and what
                      was found when a ravaging rain swept through metro Detroit
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
                      Flooded: One year later, assessing what was lost and what
                      was found when a ravaging rain swept through metro Detroit
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
