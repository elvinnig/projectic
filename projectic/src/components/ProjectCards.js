import { useNavigate } from 'react-router';

// To render Cards in UserDashboard
const ProjectCards = ({ image, title, badge, id }) => {
  const navigate = useNavigate();
  return (
    <div className='col' style={{ width: '300px' }}>
      <div className='card text-center p-2'>
        <img
          src={image}
          className='card-img-top'
          alt='...'
          width='250px'
          height='150px'
        />
        <div className='card-body'>
          <span className='badge bg-dark'>{badge}</span>
          <h6 className='card-title'>{title}</h6>
          <button
            className='btn btn-link'
            onClick={() => {
              localStorage.setItem('current_project', id);
              navigate('/users/view_project');
            }}
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProjectCards;
