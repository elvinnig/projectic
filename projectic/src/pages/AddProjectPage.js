import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
//*Components
import Navbar from '../components/Navbar';
import UploadWidget from '../components/UploadWidget';

const AddProjectPage = () => {
  /* const [fileTypes, setFileTypes] = useState([]);
  const [files, setFiles] = useState([]); */

  /*   useEffect(() => {
    axios.get('http://localhost:8000/api/v1/filetypes').then((response) => {
      setFileTypes(response.data);
    });
  }, []); */
  const navigate = useNavigate();

  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [thumbnail, setThubnail] = useState('');

  const onSubmitProject = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/v1/projects', {
        name: projectName,
        description: projectDescription,
        authorID: localStorage.getItem('projectic'),
        thumbnail: thumbnail,
      })
      .then((response) => {
        console.log(response.status)
        if(response.status === 200){
          navigate('/addFile');
        }
      });
  };
  return (
    <>
      <Navbar />
      <div className='container border my-2'>
        <h3 className='mb-3'>New Project</h3>
        <form onSubmit={(e) => {onSubmitProject(e)}}>
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
                {console.log({ thumbnail: thumbnail })}
              </div>
              <div className='col d-flex justify-content-center'>
                <img width='250px' id='thumbnail' src='' alt='' />
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

export default AddProjectPage;
