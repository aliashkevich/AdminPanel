import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

const styles = {
  dates: {
    marginTop: '15px',
  },
  margin: {
    marginTop: '17px',
  },
  logoWrapper: {
    height: '150px',
    maxWidth: '150px',
  },
  logo: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  fileInput: {
    opacity: 0,
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
    fetch('http://localhost:3000/api/v1/clients', {
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
              <div className='form-row col-md-9'>
                <div
                  className='form-group col-sm-12 col-md-9 has-primary'
                  style={styles.dates}>
                  <label for='inputTitle'>Name:</label>
                  <input
                    style={styles.margin}
                    type='text'
                    name='name'
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
              <div
                className='form-group col-sm-12 col-md-3 has-primary'
                align='center'>
                <div
                  className='fileinput-new thumbnail img-raised'
                  style={styles.logoWrapper}>
                  <img src={this.state.logoPreview} style={styles.logo} />
                </div>
                <button className='btn btn-round btn-primary'>
                  Select Logo
                  <input
                    type='file'
                    ref='logo'
                    name='logo'
                    onChange={this.handleLogoChange}
                    style={styles.fileInput}
                  />
                </button>
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
