import React from "react";
import './ProjectCard.css'

const ProjectCard = ({ data }) => {
    return (
        <div>
            <div class="card mx-auto sm:w-24 lg:w-96 bg-base-100 shadow-xl">
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
                    <div className="grid grid-cols-4 gap-2">
                        <div class="badge badge-secondary">React</div>
                        <div class="badge badge-secondary">NodeJs</div>
                        <div class="badge badge-secondary">NodeJs</div>
                        <div class="badge badge-secondary">MongoDb</div>
                        <div class="badge badge-secondary">Tailwind</div>
                        <div class="badge badge-secondary">Query</div>
                        <div class="badge badge-secondary">Stripe</div>
                    </div>
                    <div class="card-actions justify-start mt-5">
                        <div class="badge badge-outline">
                            <a href="https://github.com/monirhabderabby/AORUS-Website" target={'_blank'}>
                                <button>Client Side Code</button>
                            </a>
                        </div>
                        <div class="badge badge-outline">
                            <a href="https://github.com/monirhabderabby/AORUS-server" target={'_blank'} >
                                <button>BackEnd Side Code</button>
                            </a>
                        </div>
                    </div>
                    <div>
                    <a href={data?.site} target={'_blank'} >
                                <button className="btn btn-live mt-4">Live Site</button>
                            </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
