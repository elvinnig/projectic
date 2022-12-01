import Navbar from '../components/Navbar';
import * as Icon from 'react-bootstrap-icons';
import axios from 'axios';
import BadgeCards from '../components/BadgeCards';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const Settings = () => {
  const [newBadge, setNewBadge] = useState('');
  const [allBadges, setAllBadges] = useState([]);
  const [selectedBadge, setSelectedBadge] = useState('');
  const [selectedID, setSelectedID] = useState('');
  const [searchBadge, setSearchBadge] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('current_project')) {
      // localStorage.removeItem('current_project');
    }
    axios
      .get(
        `http://localhost:8000/api/v1/projects/${localStorage.getItem(
          'projectic'
        )}`
      )
      .then((response) => {
        getUserBadges();
      });
  }, []);

  const getUserBadges = () => {
    axios
      .get(
        `http://localhost:8000/api/v1/badges/${localStorage.getItem(
          'projectic'
        )}`
      )
      .then((response) => {
        // [x]
        console.log(response.data);
        setAllBadges([...response.data]);
      });
  };

  const onSubmitBadge = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/v1/badges', {
        userID: localStorage.getItem('projectic'),
        name: newBadge,
      })
      .then((response) => {
        // [x]
        console.log(response);
        setNewBadge('');
        getUserBadges();
      });
  };
  const onClickDeleteBadge = () => {
    axios
      .delete(`http://localhost:8000/api/v1/badges/${selectedID}`)
      .then((response) => {
        // [x]
        console.log(response.data.status);
        window.location.reload(false);
      });
  };

  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='d-flex justify-content-between'>
          {/* <hr className="border border-black border-2"/> */}
          {/* Badges Row */}
          <div className='col-sm'>
            <div className='row d-flex'>
              <div className='w-50'>
                {' '}
                <h4>Customize your project badges </h4>
              </div>
              <div className='w-50 d-flex justify-content-end'>
                {' '}
                <button className='btn btn-danger' onClick={() => {
                  navigate('/users/dashboard')
                }}>X</button>
              </div>
            </div>

            {/* Add Badge Button */}
            <div className='d-flex m-3'>
              <input
                type='search'
                id='badgeSearch'
                className='form-control'
                placeholder='Search badge...'
                value={searchBadge}
                onChange={(e) => {
                  setSearchBadge(e.target.value);
                }}
              />
              <div className='dropdown text-end'>
                <a
                  href='#'
                  className='d-block link-dark text-decoration-none dropdown-toggle'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <button type='button' className='btn btn-labeled btn-link'>
                    Add New Badge
                  </button>
                </a>
                <ul className='dropdown-menu text-small'>
                  <li className='p-2'>
                    <form
                      onSubmit={(e) => {
                        onSubmitBadge(e);
                      }}
                    >
                      <div className='mb-3'>
                        <input
                          type='text'
                          className='form-control'
                          id='badgename'
                          placeholder='Badge Name'
                          required
                          value={newBadge}
                          onChange={(e) => {
                            setNewBadge(e.target.value);
                          }}
                        />
                      </div>
                      <input
                        type='submit'
                        value='Add Badge'
                        className='btn btn-primary'
                      />
                    </form>
                  </li>
                </ul>
              </div>
            </div>

            {/* Badge Container */}
            <div className='d-flex justify-content-center w-100'>
              {/* Maps through the badges available */}
              <table className='table table-bordered'>
                <thead>
                  <tr className='text-center'>
                    <th scope='col' className='fs-5 fw-bold text-light'>
                      Badges
                    </th>
                    <th scope='col' className='fs-5 fw-bold text-light'>
                      Action
                    </th>
                  </tr>
                </thead>
                {[...allBadges]
                  .filter((search) => {
                    if (search) {
                      return search.name.includes(searchBadge);
                    }
                    return search;
                  })
                  .map((badge, index) => {
                    return (
                      <tbody key={index}>
                        <tr className='text-center'>
                          <td>
                            <span className='badge bg-dark fs-6'>
                              {badge.name}
                            </span>
                          </td>
                          <td>
                            <button
                              type='button'
                              data-bs-toggle='modal'
                              data-bs-target='#deleteBadge'
                              className='btn btn-danger'
                              onClick={() => {
                                setSelectedID(badge._id);
                              }}
                            >
                              <Icon.TrashFill /> Delete
                            </button>
                            &nbsp;&nbsp;
                            {/* Modal Button */}
                            <button
                              type='button'
                              className='btn btn-primary'
                              data-bs-toggle='modal'
                              data-bs-target='#updateBadge'
                              onClick={() => {
                                setSelectedBadge(badge.name);
                                setSelectedID(badge._id);
                              }}
                            >
                              <Icon.PencilSquare /> Update
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL UPDATE*/}
      <div
        className='modal fade'
        id='updateBadge'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Update Badge
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                axios
                  .patch(`http://localhost:8000/api/v1/badges/${selectedID}`, {
                    name: selectedBadge,
                  })
                  .then((response) => {
                    // [x]
                    console.log(response.data.status);
                    window.location.reload(false);
                  });
              }}
            >
              <div className='modal-body'>
                <input
                  className='form-control'
                  placeholder='Badge'
                  value={selectedBadge}
                  onChange={(e) => {
                    setSelectedBadge(e.target.value);
                  }}
                />
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
                <button
                  type='submit'
                  className='btn btn-primary'
                  data-bs-dismiss='modal'
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* MODAL DELETE */}
      <div
        className='modal fade'
        id='deleteBadge'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='staticBackdropLabel'>
                Delete Badge
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              Are you sure you want to delete this badge?
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button
                type='button'
                className='btn btn-danger'
                onClick={onClickDeleteBadge}
                data-bs-dismiss='modal'
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
