import { useState } from 'react';
import UploadWidget from './UploadWidget';

const AddFile = ({ removeField, index, getFile, setFile, fileTypes }) => {
  const [selectedFileType, setSelectedFileType] = useState('');
  const [fileLink, setFileLink] = useState('');
  const onClickRemove = () => {
    removeField(index);
  };
  const onChangeFileLink = (e, index) => {
    let data = [...getFile];
    data[index].fileLink = e.target.value;
    data[index].fileType = selectedFileType;
    setFile(data);
  };

  const onChangeFileUploadLink = (e, index) => {
    let data = [...getFile];
    data[index].fileLink = URL.createObjectURL(e.target.files[0]);
    data[index].fileType = selectedFileType;
    setFile(data);
  };
  return (
    <div className='row'>
      <div className='mb-3'>
        <div className='row'>
          {/* NOTE Close button */}
          <div className='col-1 d-flex justify-content-center'>
            <span
              className='input-group-text btn btn-danger'
              id='basic-addon1'
              onClick={onClickRemove}
            >
              X
            </span>
          </div>
          {/* NOTE select file type */}
          <div className='col-3'>
            <select
              className='form-select'
              aria-label='Default select example'
              value={selectedFileType}
              onChange={(e) => {
                setSelectedFileType(e.target.value);
                console.log(getFile);
              }}
            >
              <option defaultValue value=''>
                Select file type
              </option>
              {[...fileTypes].map((type) => {
                return (
                  <option value={type.name} key={type.name}>
                    {type.name}
                  </option>
                );
              })}
            </select>
          </div>
          {/* NOTE diplay if link show input if file show widget */}
          <div className='col-5'>
            {selectedFileType === 'Link' && (
              <input
                type='text'
                className='form-control'
                id='projectName'
                placeholder='Project link'
                // value={fileLink}
                onChange={(e) => onChangeFileLink(e, index)}
              />
            )}
            {selectedFileType !== 'Link' && selectedFileType !== '' && (
              // <UploadWidget buttonText='Upload File' folderName='files' resultLink={setFileLink}/>
              <input
                type='file'
                className='form-control'
                placeholder='Project link'
                onChange={(e) => onChangeFileUploadLink(e, index)}
                /*  onChange={(e) => {
                  console.log(URL.createObjectURL(e.target.files[0]));
                  setFileLink(URL.createObjectURL(e.target.files[0]));
                }} */
              />
            )}
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFile;
