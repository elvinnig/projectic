import React from "react";

// To render Cards in UserDashboard
const ProjectCards = ({image, title, badge}) => {
    return (
        <div className="col w-25">
            <div className="card text-center">
                <img src={image} className="card-img-top" alt="..." width='100px' />
                <div className="card-body">
                    <span className="badge bg-dark">{badge}</span>
                    <h5 className="card-title">{title}</h5>
                    <a href="#?" className="btn btn-outline-primary">View</a>
                </div>
            </div>
        </div>
    )
};
export default ProjectCards;