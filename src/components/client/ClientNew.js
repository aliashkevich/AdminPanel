import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import '../global/Form.css';

class AddNewProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      initials: '',
      logo: '',
      logoPreview: '',
      logoLoaded: false,
      contact_information: {
        email: '',
        number: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogoChange = this.handleLogoChange.bind(this);
    this.handleLogoDelete = this.handleLogoDelete.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    if (e.target.name === 'email' || e.target.name === 'number') {
      console.log(e.target.name);
      let infoContact = this.state.contact_information;
      this.setState({
        contact_information: {
          ...infoContact,
          [e.target.name]: e.target.value,
        },
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('https://lesewert.herokuapp.com/api/v1/clients', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(this.state),
    })
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          console.log(res);
          this.props.history.push('/clients');
          return res;
        } else {
          alert('Sorry - something went wrong.');
        }
      })
      .catch(err => err)
      .catch(error => console.log(error));
    this.setState({
      name: '',
      initials: '',
      contact_information: '',
    });
  }

  handleLogoChange(e) {
    e.preventDefault();

    const file = this.refs.logo.files[0];
    const reader = new FileReader();

    reader.onloadend = e => {
      this.setState({
        logo: file,
        logoPreview: reader.result,
        logoLoaded: true,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
      this.setState({
        logo: reader.result,
      });
    } else {
      this.setState({
        logo: '',
      });
    }
  }

  handleLogoDelete(e) {
    e.preventDefault();
    this.setState({
      logo: null,
      logoPreview: null,
      logoLoaded: false,
    });
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='card'>
          <div className='card-header card-header-primary'>
            <h4 className='card-title'>New Client</h4>
          </div>
          <div className='card-body'>
            <form onSubmit={this.handleSubmit}>
              <div className='form-row'>
                <div className='form-row col-md-9 client-wrap'>
                  <div className='form-group col-sm-12 col-md-9 has-primary input-group'>
                    <label for='inputTitle'>Name:</label>
                    <input
                      type='text'
                      name='name'
                      className='form-control inner-form'
                      id='inputTitle'
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className='form-group col-sm-12 col-md-3 has-primary input-group'>
                    <label for='inputInitials'>Initials:</label>
                    <input
                      type='text'
                      name='initials'
                      className='form-control inner-form'
                      id='inputInitials'
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className='form-group col-sm-12 col-md-7 has-primary input-group'>
                    <label for='inputEmail'>Email:</label>
                    <input
                      type='email'
                      name='email'
                      className='form-control inner-form'
                      id='inputEmail'
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className='form-group col-sm-12 col-md-5 has-primary input-group'>
                    <label for='inputNumber'>Number:</label>
                    <input
                      type='text'
                      name='number'
                      className='form-control inner-form'
                      id='inputNumber'
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
                <div
                  className='form-group col-sm-12 col-md-3 has-primary'
                  align='center'>
                  {this.state.logoLoaded === true ? (
                    <img
                      src={this.state.logoPreview}
                      className='fileinput-new thumbnail img-raised logo'
                    />
                  ) : (
                    <div className='fileinput-new thumbnail img-raised logo-place-holder' />
                  )}
                  {this.state.logoLoaded === true ? (
                    <div>
                      <button
                        className='btn btn-round btn-primary client-button'
                        type='button'>
                        Change Logo
                        <input
                          type='file'
                          ref='logo'
                          name='logo'
                          onClick={this.handleLogoChange}
                          className='fileInput'
                        />
                      </button>
                      <button
                        class='btn btn-fab btn-danger btn-round client-button'
                        type='button'
                        onClick={this.handleLogoDelete}>
                        <i class='fa fa-times' />
                      </button>
                    </div>
                  ) : (
                    <button
                      className='btn btn-round btn-primary client-button'
                      type='button'>
                      Select Logo
                      <input
                        type='file'
                        ref='logo'
                        name='logo'
                        onChange={this.handleLogoChange}
                        className='fileInput'
                      />
                    </button>
                  )}
                </div>
              </div>
              {/* buttons */}
              <div className='form-row'>
                <div className=' form-group col-xs-1'>
                  <Link to='/clients'>
                    <button type='reset' className='btn btn-danger'>
                      Cancel
                    </button>
                  </Link>
                </div>
                <div className='form-group col-xs-1 text-end ml-auto'>
                  <button type='submit' className='btn btn-success btn-right'>
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddNewProject);
