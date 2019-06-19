import React from 'react';
import PropTypes from 'prop-types';
import './ActionsTable.css';

function ActionsTable(props) {
  const {tableName, tableDescription, tableHead, tableData, tableColor} = props;
  return (
    <div className='card'>
      <div className={`card-header card-header-${tableColor}`}>
        <h4 className='card-title'>{tableName}</h4>
        <p className='card-category'>{tableDescription}</p>
      </div>
      <div className='card-body'>
        <div className='table-responsive'>
          <table className='table'>
            {tableHead !== undefined ? (
              <thead className={`text-${tableColor}`}>
                <tr>
                  {tableHead.map((prop, key) => {
                    return <th key={key}>{prop}</th>;
                  })}
                  <th className='text-right' />
                </tr>
              </thead>
            ) : null}
            <tbody>
              {tableData.map((prop, key) => {
                return (
                  <tr key={key}>
                    {prop.map((prop, key) => {
                      return <td key={key}>{prop}</td>;
                    })}
                    <td key={prop.length} className='td-actions text-right'>
                      <button
                        type='button'
                        className='btn btn-default btn-fab btn-fab-mini btn-round btn-action'>
                        <i className='material-icons'>edit</i>
                      </button>
                      <button
                        type='button'
                        className='btn btn-danger btn-fab btn-fab-mini btn-round btn-action'>
                        <i className='material-icons'>delete</i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

ActionsTable.defaultProps = {
  tableColor: 'primary',
};

ActionsTable.propTypes = {
  tableName: PropTypes.string,
  tableDescription: PropTypes.string,
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)),
  tableColor: PropTypes.oneOf([
    'warning',
    'primary',
    'danger',
    'success',
    'info',
    'rose',
  ]),
};

export default ActionsTable;
