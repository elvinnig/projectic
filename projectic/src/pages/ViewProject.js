import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FilesCard from '../components/FilesCard';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router';
import axios from 'axios';
import moment from 'moment';
import * as Icon from 'react-bootstrap-icons';

const ViewProject = () => {
  const navigate = useNavigate();
  const [projectInfo, setProjectInfo] = useState({});
  const project = useSelector((state) => state.project);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    localStorage.removeItem('file_action');
    if (!('current_project' in localStorage)) {
      // TODO navigate to dashboard
      navigate('/users/dashboard');
    } else {
      axios
        .get(
          `http://localhost:8000/api/v1/projects/${localStorage.getItem(
            'projectic'
          )}`
        )
        .then((response) => {
          console.log(response.data);
          setProjectInfo(
            response.data.filter((project) => {
              return project._id === localStorage.getItem('current_project');
            })
          );
          axios
            .get(
              `http://localhost:8000/api/v1/files/${localStorage.getItem(
                'current_project'
              )}`
            )
            .then((result) => {
              setFiles(result.data);
            });
        });
    }
  }, []);

  const onClickDeleteProject = () => {
    axios
      .delete(
        `http://localhost:8000/api/v1/projects/${localStorage.getItem(
          'current_project'
        )}`
      )
      .then((response) => {
        if (response.data.status === 'Project_removed') {
          files.map((file) => {
            return axios.delete(
              `http://localhost:8000/api/v1/files/${file._id}`
            );
          });
          localStorage.removeItem('current_project');
          navigate('/users/dashboard');
        }
      });
  };
  return (
    <>
      <Navbar />
      <div className='container'>
        {/*[x] {console.log(projectInfo[0].badgeID)} */}
        <div className='row row-cols-auto justify-content-between'>
          <div className='col'>
            <button
              type='button'
              className='btn btn-labeled btn-primary my-2'
              onClick={() => {
                localStorage.removeItem('current_project');
                navigate('/users/dashboard');
              }}
            >
              <Icon.ArrowReturnLeft className='me-1' />
              Back to dashboard
            </button>
          </div>
          <div className='col'>
            <button
              type='button'
              className='btn btn-labeled btn-dark my-2 me-4'
              onClick={() => {
                navigate('/users/update_project');
              }}
            >
              <Icon.PenFill className='me-1' />
              Update project
            </button>
            <button
              type='button'
              className='btn btn-labeled btn-danger my-2 me-2'
              data-bs-toggle='modal'
              data-bs-target='#deleteProject'
            >
              <Icon.Trash3Fill className='me-1' />
              Delete
            </button>
          </div>
        </div>

        {/* Image, Title, Badge */}
        {projectInfo.length === 1 && (
          <div className='container-fluid border-top border-bottom border-dark'>
            <div className='row my-3'>
              <div className='col'>
                <div className='text-center fs-2 fw-bold'>
                  {projectInfo[0].name}
                </div>
                <div className='text-center fs-5'>
                  {projectInfo[0].badgeID.map((badge, index) => {
                    return (
                      <span className='badge bg-dark me-2' key={index}>
                        {badge.name}
                      </span>
                    );
                  })}
                </div>
                <blockquote className='mt-4 fs-6 fw-semibold'>
                  {projectInfo[0].description}
                </blockquote>
              </div>
              <div className='card col-4 my-2 h-50' style={{ width: '25%' }}>
                <img
                  src={projectInfo[0].thumbnail}
                  className='card-img-top pt-1'
                  alt='...'
                  width='250px'
                  height='150px'
                />
                <div className='row'>
                  <div className='card-body col-4'>
                    Date Created:
                    <p className='card-text'>
                      {moment(projectInfo[0].dateCreated).format('MM/DD/YYYY')}
                    </p>
                  </div>
                  <div className='card-body col-4'>
                    Date Updated:
                    <p className='card-text'>
                      {moment(projectInfo[0].dateUpdated).format('MM/DD/YYYY')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Files Map */}
        <div className='row'>
          <h5 className='mt-3'>
            Project Files{' '}
            <span>
              <button
                className='btn btn-primary ms-3'
                onClick={() => {
                  localStorage.setItem('file_action', 'addFile');
                  navigate('/users/addFile');
                }}
              >
                <Icon.FolderPlus className='me-1' />
                Add File
              </button>
            </span>
          </h5>
          {[...files].map((file, index) => {
            return (
              <FilesCard
                title={file.filename}
                link={file.fileLink}
                key={index}
                id={file._id}
              />
            );
          })}
        </div>

        {/* MODAL FOR DELETE BUTTON PROJECT */}
        <div
          className='modal fade'
          id='deleteProject'
          tabIndex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-dialog-centered'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h1 className='modal-title fs-5' id='staticBackdropLabel'>
                  Delete Project
                </h1>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div className='modal-body'>
                Are you sure you want to delete this project?
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
                  onClick={onClickDeleteProject}
                  data-bs-dismiss='modal'
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

export default ViewProject;
