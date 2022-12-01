import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
//*Components
import Navbar from '../components/Navbar';
import UploadWidget from '../components/UploadWidget';

const UpdateProject = () => {
  const navigate = useNavigate();
  const [allBadges, setAllBadges] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [thumbnail, setThubnail] = useState('');
  const [selectedBadge, setSelectedBadge] = useState([]);

  const getProjectInfo = async () => {
    await axios
      .get(
        `http://localhost:8000/api/v1/projects/update/${localStorage.getItem(
          'current_project'
        )}`
      )
      .then((response) => {
        console.log(response.data);
        setProjectName(response.data[0].name);
        setProjectDescription(response.data[0].description);
        setSelectedBadge(response.data[0].badgeID);
        setThubnail(response.data[0].thumbnail);
      });
  };

  const onSubmitProject = (e) => {
    e.preventDefault();
    axios
      .patch(
        `http://localhost:8000/api/v1/projects/${localStorage.getItem(
          'current_project'
        )}`,
        {
          name: projectName,
          description: projectDescription,
          thumbnail: thumbnail,
          badgeID: [...selectedBadge].map((badge) => {
            return badge._id;
          }),
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          navigate('/users/view_project');
        }
      });
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/v1/badges/${localStorage.getItem(
          'projectic'
        )}`
      )
      .then((response) => {
        setAllBadges([...response.data]);
      });
    getProjectInfo();
  }, []);
  return (
    <>
      <Navbar />
      <div className='container border border-2 rounded my-2 p-5'>
        <h3 className='mb-3 '>Update Project</h3>
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
                <img
                  width='250px'
                  id='thumbnail'
                  src={thumbnail ? thumbnail : ''}
                  alt=''
                />
              </div>
            </div>
          </div>
          {/* SUBMIT BUTTON */}
          <div className='mb-5 d-flex justify-content-end'>
            <input
              value='Save'
              className='btn btn-primary w-25'
              type='submit'
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateProject;
