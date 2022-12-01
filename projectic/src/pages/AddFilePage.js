import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router';
//*Components
import UploadWidget from '../components/UploadWidget';

const AddFilePage = () => {
  const [files, setFiles] = useState([]);
  const [allFiles, setAllFiles] = useState([]);
  const [fileTypes, setFileTypes] = useState([]);
  const [selectedFileType, setSelectedFileType] = useState('');
  const navigate = useNavigate();

  const getProjectFiles = async () => {
    await axios
      .get(
        `http://localhost:8000/api/v1/files/${localStorage.getItem(
          'current_project'
        )}`
      )
      .then((response) => {
        // [x]
        console.log({ allFiles: response.data });
        setAllFiles(response.data);
      });
  };

  const getFileType = async () => {
    await axios
      .get('http://localhost:8000/api/v1/filetypes')
      .then((response) => {
        // [x]
        console.log({ allFileType: response.data });
        setFileTypes(response.data);
      });
  };
  useEffect(() => {
    getProjectFiles();
    getFileType();
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
        <div className='row'>
          {/* Render Files that is already added in the project */}
          {[...allFiles].map((file, index) => {
            let fileTypeName = fileTypes.find((type) => {
              return type._id === file.fileTypeId;
            });
            return (
              <div className='col-sm-4 my-3' key={index}>
                <div className='card text-white bg-info mb-3'>
                  {/* <div className='card-header'>{fileTypeName.name}</div> */}
                  <div className='card-body'>
                    <h5 className='card-title'>{file.filename}</h5>
                  </div>
                </div>
              </div>
            );
          })}
          {/* Renders the new file to be add in the project */}
          {[...files].map((file, index) => {
            return (
              <div className='col-sm-4 my-3' key={index}>
                <div className='card text-white bg-primary mb-3'>
                  <div className='card-header'>{file.fileType}</div>
                  <div className='card-body'>
                    <h5 className='card-title'>{file.original_filename}</h5>
                  </div>
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
              // if (allFiles.length > 0) {
              //   //*Update Project file
              //   console.log('Update Project');
              // } else {
              //*Project has no file
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
              // }

              localStorage.removeItem('current_prject');
              if (localStorage.getItem('file_action') === 'addFile') {
                localStorage.removeItem('file_action');
                navigate('/users/view_project');
              } else {
                navigate('/users/dashboard');
              }
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
