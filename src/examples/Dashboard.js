import React from 'react';
import Header from '../components/Header';


export default function Dashboard() {
    return (
        <React.Fragment>
            <div className="wrapper ">
<Header />
    <div className="main-panel">
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-warning card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">content_copy</i>
                  </div>
                  <p className="card-category">Used Space</p>
                  <h3 className="card-title">49/50
                    <small>GB</small>
                  </h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons text-danger">warning</i>
                    <a href="#pablo">Get More Space...</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-success card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">store</i>
                  </div>
                  <p className="card-category">Revenue</p>
                  <h3 className="card-title">$34,245</h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">date_range</i> Last 24 Hours
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-danger card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">info_outline</i>
                  </div>
                  <p className="card-category">Fixed Issues</p>
                  <h3 className="card-title">75</h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">local_offer</i> Tracked from Github
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-info card-header-icon">
                  <div className="card-icon">
                    <i className="fa fa-twitter"></i>
                  </div>
                  <p className="card-category">Followers</p>
                  <h3 className="card-title">+245</h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">update</i> Just Updated
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card card-chart">
                <div className="card-header card-header-success">
                  <div className="ct-chart" id="dailySalesChart"></div>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Daily Sales</h4>
                  <p className="card-category">
                    <span className="text-success"><i className="fa fa-long-arrow-up"></i> 55% </span> increase in today sales.</p>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">access_time</i> updated 4 minutes ago
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-chart">
                <div className="card-header card-header-warning">
                  <div className="ct-chart" id="websiteViewsChart"></div>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Email Subscriptions</h4>
                  <p className="card-category">Last Campaign Performance</p>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">access_time</i> campaign sent 2 days ago
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-chart">
                <div className="card-header card-header-danger">
                  <div className="ct-chart" id="completedTasksChart"></div>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Completed Tasks</h4>
                  <p className="card-category">Last Campaign Performance</p>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">access_time</i> campaign sent 2 days ago
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="card">
                <div className="card-header card-header-tabs card-header-primary">
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                      <span className="nav-tabs-title">Tasks:</span>
                      <ul className="nav nav-tabs" data-tabs="tabs">
                        <li className="nav-item">
                          <a className="nav-link active" href="#profile" data-toggle="tab">
                            <i className="material-icons">bug_report</i> Bugs
                            <div className="ripple-container"></div>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#messages" data-toggle="tab">
                            <i className="material-icons">code</i> Website
                            <div className="ripple-container"></div>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#settings" data-toggle="tab">
                            <i className="material-icons">cloud</i> Server
                            <div className="ripple-container"></div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane active" id="profile">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" checked/>
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Sign contract for "What are conference organizers afraid of?"</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value=""/>
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value=""/>
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                            </td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" checked/>
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Create 4 Invisible User Experiences you Never Knew About</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="tab-pane" id="messages">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" checked/>
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                            </td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value=""/>
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Sign contract for "What are conference organizers afraid of?"</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="tab-pane" id="settings">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value=""/>
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" checked/>
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                            </td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" checked/>
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Sign contract for "What are conference organizers afraid of?"</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
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
            <div className="col-lg-6 col-md-12">
              <div className="card">
                <div className="card-header card-header-warning">
                  <h4 className="card-title">Employees Stats</h4>
                  <p className="card-category">New employees on 15th September, 2016</p>
                </div>
                <div className="card-body table-responsive">
                  <table className="table table-hover">
                    <thead className="text-warning">
                      <th>ID</th>
                      <th>Name</th>
                      <th>Salary</th>
                      <th>Country</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Dakota Rice</td>
                        <td>$36,738</td>
                        <td>Niger</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Minerva Hooper</td>
                        <td>$23,789</td>
                        <td>Curaçao</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Sage Rodriguez</td>
                        <td>$56,142</td>
                        <td>Netherlands</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Philip Chaney</td>
                        <td>$38,735</td>
                        <td>Korea, South</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container-fluid">
          <nav className="float-left">
            <ul>
              <li>
                <a href="https://www.creative-tim.com">
                  Creative Tim
                </a>
              </li>
              <li>
                <a href="https://creative-tim.com/presentation">
                  About Us
                </a>
              </li>
              <li>
                <a href="http://blog.creative-tim.com">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://www.creative-tim.com/license">
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright float-right">
            &copy;
            <script>
              document.write(new Date().getFullYear())
            </script>, made with <i className="material-icons">favorite</i> by
            <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a> for a better web.
          </div>
        </div>
      </footer>
    </div>
  </div>
  <div className="fixed-plugin">
    <div className="dropdown show-dropdown">
      <a href="#" data-toggle="dropdown">
        <i className="fa fa-cog fa-2x"> </i>
      </a>
      <ul className="dropdown-menu">
        <li className="header-title"> Sidebar Filters</li>
        <li className="adjustments-line">
          <a href="javascript:void(0)" className="switch-trigger active-color">
            <div className="badge-colors ml-auto mr-auto">
              <span className="badge filter badge-purple" data-color="purple"></span>
              <span className="badge filter badge-azure" data-color="azure"></span>
              <span className="badge filter badge-green" data-color="green"></span>
              <span className="badge filter badge-warning" data-color="orange"></span>
              <span className="badge filter badge-danger" data-color="danger"></span>
              <span className="badge filter badge-rose active" data-color="rose"></span>
            </div>
            <div className="clearfix"></div>
          </a>
        </li>
        <li className="header-title">Images</li>
        <li className="active">
          <a className="img-holder switch-trigger" href="javascript:void(0)">
            <img src="../assets/img/sidebar-1.jpg" alt=""/>
          </a>
        </li>
        <li>
          <a className="img-holder switch-trigger" href="javascript:void(0)">
            <img src="../assets/img/sidebar-2.jpg" alt=""/>
          </a>
        </li>
        <li>
          <a className="img-holder switch-trigger" href="javascript:void(0)">
            <img src="../assets/img/sidebar-3.jpg" alt=""/>
          </a>
        </li>
        <li>
          <a className="img-holder switch-trigger" href="javascript:void(0)">
            <img src="../assets/img/sidebar-4.jpg" alt=""/>
          </a>
        </li>
        <li className="button-container">
          <a href="https://www.creative-tim.com/product/material-dashboard" target="_blank" className="btn btn-primary btn-block">Free Download</a>
        </li>
        <li className="button-container">
          <a href="https://demos.creative-tim.com/material-dashboard/docs/2.1/getting-started/introduction.html" target="_blank" className="btn btn-default btn-block">
            View Documentation
          </a>
        </li>
        <li className="button-container github-star">
          <a className="github-button" href="https://github.com/creativetimofficial/material-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
        </li>
        <li className="header-title">Thank you for 95 shares!</li>
        <li className="button-container text-center">
          <button id="twitter" className="btn btn-round btn-twitter"><i className="fa fa-twitter"></i> &middot; 45</button>
            <button id="facebook" className="btn btn-round btn-facebook"><i className="fa fa-facebook-f"></i> &middot; 50</button>

        </li>
      </ul>
    </div>
    </div>
    </React.Fragment>
    )
}
