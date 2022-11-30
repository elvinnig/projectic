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
                            <th scope='col'>Badges</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    {[...allBadges].map((badge, index) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{badge.name}</td>
                                    <td className='text-center'>
                                        <a href="#" class="link-primary">delete</a>
                                        &nbsp;&nbsp;
                                        <a href="#" class="link-primary">update</a>
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