import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import Select from 'react-select';

const styles = {
  dates: {
    marginTop: '15px',
  },
  margin: {
    marginTop: '17px',
  },
  logoImg: {
    height: '100px',
    width: '100px',
  },
};

class AddNewProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      initials: '',
      logo: '',
      logoPreview: '',
      contact_information: {
        email: '',
        number: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogoChange = this.handleLogoChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
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
      logo: '',
      contact_information: {
        email: '',
        number: '',
      },
    });
  }

  handleLogoChange(e) {
    e.preventDefault();

    const file = this.refs.logo.files[0];
    const reader = new FileReader();

    reader.onloadend = e => {
      this.setState({
        logo: e.target.value,
        logoPreview: reader.result,
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

  render() {
    console.log(this.state);
    return (
      <div className='card'>
        <div className='card-header card-header-primary'>
          <h4 className='card-title'>New Client</h4>
        </div>
        <div className='card-body'>
          <br />
          <form onSubmit={this.handleSubmit}>
            <div className='form-row'>
              <div
                className='form-group col-sm-12 col-md-6 has-primary'
                style={styles.dates}>
                <label for='inputTitle'>Name:</label>
                <input
                  style={styles.margin}
                  type='text'
                  name='title'
                  className='form-control'
                  id='inputTitle'
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div
                className='form-group col-sm-12 col-md-3 has-primary'
                style={styles.dates}>
                <label for='inputInitials'>Initials:</label>
                <input
                  style={styles.margin}
                  type='text'
                  name='initials'
                  className='form-control'
                  id='inputInitials'
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <input
                type='file'
                ref='logo'
                name='logo'
                onChange={this.handleLogoChange}
              />
              {/* <button type='submit' onClick={this.handleLogoSubmit}>
                Upload Image
              </button> */}
              <img src={this.state.logoPreview} style={styles.logoImg} />
            </div>

            <div className='form-row'>
              <div
                className='form-group col-sm-12 col-md-6 has-primary'
                style={styles.dates}>
                <label for='inputEmail'>Email:</label>
                <input
                  style={styles.margin}
                  type='email'
                  name='email'
                  className='form-control'
                  id='inputEmail'
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div
                className='form-group col-sm-12 col-md-6 has-primary'
                style={styles.dates}>
                <label for='inputNumber'>Number:</label>
                <input
                  style={styles.margin}
                  type='text'
                  name='number'
                  className='form-control'
                  id='inputNumber'
                  onChange={this.handleChange}
                  required
                />
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
    );
  }
}

export default withRouter(AddNewProject);
