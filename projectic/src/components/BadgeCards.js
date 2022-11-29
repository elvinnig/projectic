import React from 'react';

// To render Cards in UserDashboard
const ProjectCards = ({title}) => {
    return (
        <li><span className='badge bg-dark'>{title}</span></li>
    )
};
export default ProjectCards;