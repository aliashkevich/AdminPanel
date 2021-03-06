import React from 'react';
import PropTypes from 'prop-types';
import './ActionsTable.css';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

function ActionsTable(props) {
  const handleClick = (pathName, id) => {
    if (pathName !== 'users') {
      props.history.push(`/${pathName}/${id}`);
    }
  };

  const {
    // array of all entities received from parental component (e.g. projects, clients and etc.)
    entities,
    tableName,
    tableDescription,
    tableHead,
    tableData,
    pathName,
    tableColor,
    deleteOnClick,
    // property name that will be used in modal window while delete
    confirmationFieldName,
    updateOnClick,
    // property name that will be used to define should checkmark to be displayed or not
    checkmarkFieldName,
    // value of checkmarkFieldName propery when condition to diplay checkmark equal true
    checkmarkValue,
    //animation to start on mount
    visible,
  } = props;

  return (
    <div className='card actions-table-card'>
      <div className={`card-header card-header-${tableColor} grow ${visible}`}>
        <h4 className='card-title'>{tableName}</h4>
        <p className='card-category'>{tableDescription}</p>
      </div>
      <div className='card-body'>
        <div className='table-responsive'>
          <table className='table table-hover'>
            {tableHead !== undefined ? (
              <thead className={`text-${tableColor}`}>
                <tr>
                  {tableHead.map((columnTitle, columnIndex) => {
                    return <th key={columnIndex}>{columnTitle}</th>;
                  })}
                  <th className='text-right' />
                </tr>
              </thead>
            ) : null}
            <tbody>
              {tableData !== undefined && tableData.length > 0 ? (
                tableData.map((dataRow, rowIndex) => {
                  return (
                    <tr
                      key={rowIndex}
                      className={pathName === 'users' ? null : 'tr-mouse'}>
                      {dataRow.map((dataColumn, columnIndex) => {
                        return (
                          <td
                            key={columnIndex}
                            onClick={() =>
                              handleClick(pathName, entities[rowIndex].id)
                            }>
                            {dataColumn}
                          </td>
                        );
                      })}
                      <td className='td-actions text-right tr-mouse'>
                        {checkmarkFieldName ? (
                          entities[rowIndex][
                            checkmarkFieldName
                          ].toLowerCase() === checkmarkValue.toLowerCase() ? (
                            <span title='Task is done'>
                              <a
                                href='#'
                                className='btn btn-success btn-fab btn-fab-mini btn-round btn-action disabled'>
                                <i className='material-icons'>done</i>
                              </a>
                            </span>
                          ) : (
                            <button
                              type='button'
                              className='btn btn-default btn-fab btn-fab-mini btn-round btn-action'
                              onClick={() => {
                                updateOnClick(dataRow);
                              }}
                              title='Mark as done'>
                              <i className='material-icons'>done</i>
                            </button>
                          )
                        ) : null}
                        {tableName === 'Users' ? null : (
                          <Link
                            to={`${props.location.pathname}/edit/${
                              entities[rowIndex].id
                            }`}>
                            <button
                              type='button'
                              className='btn btn-info btn-fab btn-fab-mini btn-round btn-action'
                              title='Edit'
                              props={entities[rowIndex].id}>
                              <i className='material-icons'>edit</i>
                            </button>
                          </Link>
                        )}
                        <button
                          data-toggle='modal'
                          data-target={
                            '#confirmDelete-' + entities[rowIndex].id
                          }
                          type='button'
                          title='Delete'
                          className='btn btn-danger btn-fab btn-fab-mini btn-round btn-action'>
                          <i className='material-icons'>delete</i>
                        </button>
                        <div
                          className='modal text-left'
                          id={'confirmDelete-' + entities[rowIndex].id}
                          tabIndex='-1'
                          role='dialog'
                          aria-labelledby='confirmDelete'
                          aria-hidden='true'>
                          <div className='modal-dialog' role='document'>
                            <div className='modal-content'>
                              <div className='modal-body'>
                                Are you sure you wish to delete{' '}
                                <span className={`text-${tableColor}`}>
                                  {entities[rowIndex][confirmationFieldName]}?
                                </span>
                              </div>
                              <div className='modal-footer justify-content-end'>
                                <button
                                  type='button'
                                  className='btn btn-modal btn-secondary'
                                  data-dismiss='modal'>
                                  Cancel
                                </button>
                                <button
                                  type='button'
                                  className={`btn btn-modal btn-${tableColor}`}
                                  data-dismiss='modal'
                                  onClick={() => {
                                    deleteOnClick(entities[rowIndex]);
                                  }}>
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
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

ActionsTable.defaultProps = {
  tableColor: 'primary',
};

ActionsTable.propTypes = {
  entities: PropTypes.arrayOf(PropTypes.object),
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
  deleteOnClick: PropTypes.func,
  confirmationFieldName: PropTypes.string,
  checkmarkFieldName: PropTypes.string,
  checkmarkValue: PropTypes.string,
  updateOnChange: PropTypes.func,
};

export default withRouter(ActionsTable);
