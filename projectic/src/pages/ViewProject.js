import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FilesCard from '../components/FilesCard';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router';
import axios from 'axios';
import moment from 'moment';

const ViewProject = () => {
  const navigate = useNavigate();
  const [projectInfo, setProjectInfo] = useState({});
  const project = useSelector((state) => state.project);
  const [files, setFiles] = useState([]);

  useEffect(() => {
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
            .get(`http://localhost:8000/api/v1/files/${localStorage.getItem('current_project')}`)
            .then((result) => {
              setFiles(result.data);
            });
        });
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className='container'>
        {/* {console.log(projectInfo[0].badgeID)} */}
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
              Back to dashboard
            </button>
          </div>
          <div className='col'>
            <button
              type='button'
              className='btn btn-labeled btn-dark my-2 me-4'
            >
              Update
            </button>
            <button
              type='button'
              className='btn btn-labeled btn-dark my-2 me-2'
            >
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
              <div className='card col-4 my-2' style={{ width: '25%' }}>
                <img
                  src={projectInfo[0].thumbnail}
                  className='card-img-top'
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
          {[...files].map((file, index) => {
            return (
              <FilesCard
                title={file.filename}
                link={file.fileLink}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ViewProject;
