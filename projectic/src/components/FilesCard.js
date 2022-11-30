// Imported to ViewProject
const FilesCard = ({ title, link }) => {
  return (
    <div className='col-sm-4 my-3'>
      <div className='card text-white bg-primary mb-3'>
        <div className='card-header'>{title}</div>
        <div className='card-body'>
          <h5 className='card-title'>
            <a href={link} className='link-light'>
              View
            </a>
          </h5>
        </div>
      </div>
    </div>
    /*  <div className="col-sm-4 my-3">
            <div className="card bg-info">
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <a href={link} className="link-dark">{link}</a>
                </div>
            </div>
        </div> */
  );
};

export default FilesCard;
