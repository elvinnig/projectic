import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
//*Components
import Navbar from '../components/Navbar';
import UploadWidget from '../components/UploadWidget';
import * as Icon from 'react-bootstrap-icons';

const AddProjectPage = () => {
  const [allBadges, setAllBadges] = useState([]);

  useEffect(() => {
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
  }, []);

  const navigate = useNavigate();

  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [thumbnail, setThubnail] = useState('');
  const [selectedBadge, setSelectedBadge] = useState([]);

  const onSubmitProject = (e) => {
    e.preventDefault();
    console.log({ POST: selectedBadge });
    axios
      .post('http://localhost:8000/api/v1/projects', {
        name: projectName,
        description: projectDescription,
        authorID: localStorage.getItem('projectic'),
        thumbnail: thumbnail,
        badgeID: [...selectedBadge].map((badge) => {
          return badge._id;
        }),
      })
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          localStorage.setItem('current_project', response.data.id);
          navigate('/users/addFile');
        }
      });
  };
  return (
    <>
      <Navbar />
      <div className='container border border-2 rounded my-2 p-5'>
        <h3 className='mb-3 '>New Project</h3>
        <form
          onSubmit={(e) => {
            onSubmitProject(e);
          }}
        >
          {/* PROJECT NAME */}
          <div className='mb-5'>
            <label htmlFor='projectName' className='form-label'>
              Name your project:
            </label>
            <input
              type='text'
              className='form-control'
              id='projectName'
              placeholder='Project name'
              required
              value={projectName}
              onChange={(e) => {
                setProjectName(e.target.value);
              }}
            />
          </div>
          {/* PROJECT DESCRIPTION */}
          <div className='mb-5'>
            <label htmlFor='projectDescription' className='form-label'>
              Tell me about your project:
            </label>
            <textarea
              type='text'
              id='projectDescription'
              name='message'
              rows='4'
              className='form-control md-textarea'
              placeholder='Project description'
              value={projectDescription}
              onChange={(e) => {
                setProjectDescription(e.target.value);
              }}
              required
            ></textarea>
          </div>
          {/* ADD PROJECT BADGES */}
          <div className='mb-5'>
            <label htmlFor='projectName' className='form-label'>
              Badge you project:
            </label>
            <select
              className='form-select'
              aria-label='Default select example'
              onChange={(e) => {
                if (
                  selectedBadge.find(
                    (badge) => badge.name === JSON.parse(e.target.value).name
                  ) === undefined
                ) {
                  setSelectedBadge([
                    ...selectedBadge,
                    JSON.parse(e.target.value),
                  ]);
                }
              }}
            >
              <option defaultValue>Select Badge Project</option>
              {[...allBadges].map((badge, index) => {
                return (
                  <option key={index} value={JSON.stringify(badge)}>
                    {badge.name}
                  </option>
                );
              })}
            </select>
          </div>
          {/* LIST OF SELECTED BADGE */}
          <div className='mb-5'>
            <ul className='list-unstyled'>
              {[...selectedBadge].map((badge, index) => {
                return (
                  <li
                    className='mb-3 border-bottom d-flex justify-content-between'
                    key={index}
                  >
                    {badge.name}
                    <span>
                      <button
                        className='btn btn-danger'
                        type='button'
                        onClick={() => {
                          let data = [...selectedBadge];
                          data.splice(index, 1);
                          setSelectedBadge(data);
                        }}
                      >
                        X
                      </button>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* PROJECT THUMBNAIL */}
          <div className='mb-5'>
            <label htmlFor='projectThumbnail' className='form-label'>
              Add thumbnail to your project:
            </label>
            <div className='row'>
              <div className='col'>
                <UploadWidget
                  buttonText='Upload Thumbnail'
                  folderName='thumbnail'
                  thumbnailSet={setThubnail}
                />
              </div>
              <div className='col d-flex justify-content-center'>
                <img width='250px' id='thumbnail' src='' alt='' />
              </div>
            </div>
          </div>
          {/* SUBMIT BUTTON */}
          <div className='mb-5 d-flex justify-content-end'>
            <button
              type='button'
              className='me-3 btn btn-danger'
              data-bs-toggle='modal'
              data-bs-target='#discard'
            >
              <Icon.X className='me-1' />
              Discard
            </button>
            <button className='btn btn-primary' type='submit'>
              <Icon.Save2Fill className='me-1' />
              Save Project
            </button>
          </div>
        </form>
        {/* DISCARD MODAL */}
        <div
          className='modal fade'
          id='discard'
          data-bs-backdrop='static'
          data-bs-keyboard='false'
          tabIndex='-1'
          aria-labelledby='staticBackdropLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-dialog-centered'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h1
                  className='modal-title fs-5 text-danger'
                  id='staticBackdropLabel'
                >
                  Dicard Project
                </h1>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div className='modal-body'>
                Are you sure you want to dicard this project?
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-bs-dismiss='modal'
                >
                  No
                </button>
                <button
                  type='button'
                  className='btn btn-danger'
                  data-bs-dismiss='modal'
                  onClick={() => {
                    navigate('/users/dashboard');
                  }}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProjectPage;
