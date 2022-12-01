// Imported to ViewProject
import axios from 'axios';
import * as Icon from 'react-bootstrap-icons';

const FilesCard = ({ title, link, id }) => {
  return (
    <div className='col-sm-4 my-3'>
      <div className='card text-white bg-primary mb-3'>
        <div className='card-header'>{title}</div>
        <div className='card-body'>
          <h5 className='card-title d-flex justify-content-between'>
            <a href={link} className='link-light'>
              View
            </a>
            <button
              className='btn btn-danger'
              data-bs-toggle='modal'
              data-bs-target='#deleteFile'
            >
              <Icon.Trash3Fill />
            </button>
          </h5>
        </div>
      </div>
      {/* MODAL FOR DELETE BUTTON FILE */}
      <div
        className='modal fade'
        id='deleteFile'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='staticBackdropLabel'>
                Delete File
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              Are you sure you want to delete this file?
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
                data-bs-dismiss='modal'
                onClick={() => {
                  axios
                    .delete(`http://localhost:8000/api/v1/files/${id}`)
                    .then((response) => {
                      console.log(response.data);
                      window.location.reload(false);
                    });
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilesCard;
