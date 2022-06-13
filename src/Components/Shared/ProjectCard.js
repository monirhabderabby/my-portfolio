import React from "react";
import { Link } from "react-router-dom";
import './ProjectCard.css'

const ProjectCard = ({ data }) => {
    return (
        <div className="-z-50">
            <div class="card mx-auto sm:w-24 md:w-72 lg:w-96 bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={data?.img}
                        alt="Shoes"
                    />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        {data?.name}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                        <div class="badge badge-secondary">React</div>
                        <div class="badge badge-secondary">NodeJs</div>
                        <div class="badge badge-secondary">NodeJs</div>
                        <div class="badge badge-secondary">MongoDb</div>
                        <div class="badge badge-secondary">Tailwind</div>
                        <div class="badge badge-secondary">Query</div>
                        <div class="badge badge-secondary">Stripe</div>
                    </div>
                    <div>
                    <Link to={`projectDetails/${data?._id}`}><button className="btn btn-live mt-4">
                    <i className='fa fa-eye mr-3'></i>
                        View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
