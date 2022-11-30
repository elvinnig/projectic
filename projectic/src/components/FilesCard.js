// Imported to ViewProject
import axios from 'axios';

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
              onClick={() => {
                axios
                  .delete(`http://localhost:8000/api/v1/files/${id}`)
                  .then((response) => {
                    console.log(response.data);
                    window.location.reload(false);
                  });
              }}
            >
              X
            </button>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default FilesCard;
