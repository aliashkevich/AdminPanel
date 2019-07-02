import React from 'react';
import './Spinner.css';

export default function Spinner() {
  return (
    <div className='spinner-wrapper text-center'>
      <div className='spinner'>
        <div className='lds-roller'>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <p>Loading...</p>
      </div>
    </div>
  );
}
