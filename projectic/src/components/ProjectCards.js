import { useNavigate } from 'react-router';

// To render Cards in UserDashboard
const ProjectCards = ({ image, title, badge, setSelectedProject, id }) => {
  const navigate = useNavigate();
  return (
    <div className='col w-25'>
      <div className='card text-center'>
        <img src={image} className='card-img-top' alt='...' width='100px' />
        <div className='card-body'>
          <span className='badge bg-dark'>{badge}</span>
          <h5 className='card-title'>{title}</h5>
          <button
            className='btn btn-link'
            onClick={() => {
              setSelectedProject(id);
              navigate('/users/view_project');
            }}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProjectCards;
