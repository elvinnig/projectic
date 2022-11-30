import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router';
//*Components
import UploadWidget from '../components/UploadWidget';

const AddFilePage = () => {
  const [files, setFiles] = useState([]);
  const [fileTypes, setFileTypes] = useState([]);
  const [selectedFileType, setSelectedFileType] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/filetypes').then((response) => {
      setFileTypes(response.data);
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className='container d-flex flex-column justify-content-center'>
        <h5>Add file to your project</h5>
        <div className='row'>
          <div className='col-4'>
            <select
              className='form-select'
              aria-label='Default select example'
              value={selectedFileType}
              onChange={(e) => setSelectedFileType(e.target.value)}
            >
              <option defaultValue>Select File Type</option>
              {fileTypes.map((type, index) => {
                return (
                  <option value={type.name} key={index}>
                    {type.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='col'>
            {selectedFileType && (
              <UploadWidget
                buttonText='Upload File'
                folderName='file'
                setFiles={setFiles}
                getFiles={files}
                fileType={selectedFileType}
                setFileType={selectedFileType}
              />
            )}
          </div>
        </div>

        <hr />
        <div className='container'>
          {[...files].map((file, index) => {
            return (
              <div className='card text-white bg-primary mb-3' key={index}>
                <div className='card-header'>{file.fileType}</div>
                <div className='card-body'>
                  <h5 className='card-title'>{file.original_filename}</h5>
                </div>
              </div>
            );
          })}
        </div>
        {/* [x] */}
        {console.log(files)}
        <div className='d-flex justify-content-end'>
          <button
            className='btn btn-primary'
            onClick={() => {
              files.map((file) => {
                let fileType = fileTypes.find((type) => {
                  return type.name === file.fileType;
                });
                axios
                  .post('http://localhost:8000/api/v1/files', {
                    projectID: localStorage.getItem('current_project'),
                    fileTypeID: fileType._id,
                    fileLink: file.secure_url,
                    filename: file.original_filename,
                  })
                  .then((response) => {
                    return console.log(response.data);
                  });
              });
              localStorage.removeItem('current_prject');
              navigate('/users/dashboard');
            }}
          >
            Save to project
          </button>
        </div>
      </div>
    </>
  );
};

export default AddFilePage;
