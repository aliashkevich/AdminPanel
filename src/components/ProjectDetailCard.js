import React from 'react';

export default function ProjectDetailCard() {
  return (
    <div className='main-panel'>
      <div className='content'>
        <div className='col-md-10'>
          <div className='card'>
            <div className='card-header card-header-warning'>
              <h4 className='card-title'>Project Title</h4>
              <p className='category'>Start Date - End Date</p>
              <img
                class='card-img-top'
                style={{
                  width: '2rem',
                  borderRadius: '50%',
                  paddingRight: '5px',
                }}
                src='https://i.pravatar.cc/300'
                alt='participant'
              />
              <img
                class='card-img-top'
                style={{
                  width: '2rem',
                  borderRadius: '50%',
                  paddingRight: '5px',
                }}
                src='https://i.pravatar.cc/300'
                alt='participant'
              />
              <img
                class='card-img-top'
                style={{
                  width: '2rem',
                  borderRadius: '50%',
                  paddingRight: '5px',
                }}
                src='https://i.pravatar.cc/300'
                alt='participant'
              />
            </div>
            {/* summary */}
            <div className='card-body'>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona...
            </div>
            {/* small card : breack at xs*/}
            {/* <div className='card' style={{width: '20rem', marginLeft: '15px'}}>
              <div className='card-body'>
                <h4 className='card-title'>Card title</h4>
                <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
                <p className='card-text card-body'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#0' className='card-link'>
                  Card link
                </a>
                <a href='#0' className='card-link'>
                  Another link
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
