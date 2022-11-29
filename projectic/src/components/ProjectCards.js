import React from "react";

// To render Cards in UserDashboard
const ProjectCards = ({image, title, badge}) => {
    return (
        <div className="col">
            <div className="card text-center">
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <span className="badge bg-dark">{badge}</span>
                    <h5 className="card-title">{title}</h5>
                    <a href="#?" class="btn btn-outline-primary">View</a>
                </div>
            </div>
        </div>
    )
};
export default ProjectCards;