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
// !Surrender nako
    // const badgeDelete = (e) => {
    //     axios
    //         .delete(`http://localhost:8000/api/v1/badges/${allBadges._id}`
    //         )
    //         .then((response) => {
    //             if(response.status === 200) {
    //                 getUserBadges();
    //             }
    //         }).catch(err => console.log(err))
    // }

    return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='d-flex justify-content-between'>
          {/* <hr className="border border-black border-2"/> */}
          {/* Badges Row */}
          <div className='col-sm'>
            {/* Add Badge Button */}
            <div className='d-flex m-3'>
              <input
                type='search'
                id='badgeSearch'
                className='form-control'
                placeholder='Search badges...'
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
                            <th scope='col' className='fs-5 fw-bold text-light'>Badges</th>
                            <th scope='col' className='fs-5 fw-bold text-light'>Action</th>
                        </tr>
                    </thead>
                    {[...allBadges].map((badge, index) => {
                        return (
                            <tbody key={index}>
                                <tr className='text-center'>
                                    <td><span className='badge bg-dark fs-6'>{badge.name}</span></td>
                                    <td>
                                        <button type="button" class="btn btn-danger"><Icon.TrashFill/> Delete</button>
                                        &nbsp;&nbsp;
                                        
                                        {/* Modal Button */}
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><Icon.PencilSquare/> Update</button>
                                        
                                        {/* Modal */}
                                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                          <div class="modal-dialog">
                                            <div class="modal-content update-popup">
                                              <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Update Badge</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                              </div>
                                              <div class="modal-body">
                                                <input type='text' size="50"></input>
                                              </div>
                                              <div class="modal-footer">
                                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                                <button type="button" class="btn btn-primary">Update</button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
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
      </div>
    )
};

export default Settings;