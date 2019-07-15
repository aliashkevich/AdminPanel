import React from 'react';
import PropTypes from 'prop-types';

function Table(props) {
  const {tableName, tableDescription, tableHead, tableData, tableColor} = props;
  return (
    <div className='card'>
      <div className={`card-header card-header-${tableColor}`}>
        <h4 className='card-title'>{tableName}</h4>
        <p className='card-category'>{tableDescription}</p>
      </div>
      <div className='card-body'>
        <div className='table-responsive'>
          <table className='table table-hover'>
            {tableHead !== undefined ? (
              <thead className={`text-${tableColor}`}>
                <tr>
                  {tableHead.map((prop, key) => {
                    return <th key={key}>{prop}</th>;
                  })}
                </tr>
              </thead>
            ) : null}
            <tbody>
              {tableData !== undefined && tableData.length > 0 ? (
                tableData.map((prop, key) => {
                  return (
                    <tr key={key}>
                      {prop.map((prop, key) => {
                        return <td key={key}>{prop}</td>;
                      })}
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td>There are no active {tableName.toLowerCase()}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

Table.defaultProps = {
  tableColor: 'primary',
};

Table.propTypes = {
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

export default Table;
