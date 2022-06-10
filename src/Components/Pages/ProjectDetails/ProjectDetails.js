import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheckSquare,
    faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading";

const ProjectDetails = () => {
    const { id } = useParams();
    const { data, isLoading } = useQuery("singleProject", () =>
        fetch(`http://localhost:5000/project/${id}`).then((res) => res.json())
    );
    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="px-6 md:px-12 lg:px-24 mt-3 lg:mt-[5%]">
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure className="p-0">
                    <div class="carousel w-full">
                        <div id="slide1" class="carousel-item relative w-full">
                            <img src={data?.img} class="w-full" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" class="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide2" class="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div id="slide2" class="carousel-item relative w-full">
                            <img src={data?.img2} class="w-full" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" class="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide3" class="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div id="slide3" class="carousel-item relative w-full">
                            <img src={data?.img3} class="w-full" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" class="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide1" class="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                    </div>
                </figure>
                <div class="card-body w-full">
                    <h2 class="card-title mb-2">{data?.name}</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                        <div class="badge badge-secondary">React</div>
                        <div class="badge badge-secondary">NodeJs</div>
                        <div class="badge badge-secondary">NodeJs</div>
                        <div class="badge badge-secondary">MongoDb</div>
                        <div class="badge badge-secondary">Tailwind</div>
                        <div class="badge badge-secondary">Query</div>
                        <div class="badge badge-secondary">Stripe</div>
                    </div>
                    <p></p>
                    <div class="flex justify-between mt-5">
                        <div>
                        <button class="btn btn-sm gap-2 lg:mx-3">
                            <a href={data?.clientCode} target={"_blank"} className="flex justify-center items-center">Client
                            <i class="fa fa-github text-xl ml-1"></i></a>
                        </button>
                        </div>
                        <div>
                        <button class="btn btn-sm gap-2 lg:mx-3">
                            <a href={data?.backEndCode} target={"_black"} className="flex justify-center items-center">BackEnd
                            <i class="fa fa-github text-xl ml-1"></i></a>
                        </button>
                        </div>
                    </div>
                    <div class=" w-full">
                        <a href={data?.liveLink} target={"_blank"}>
                            <button class="btn bg-orange-500 text-white w-full">
                                Live{" "}
                                <FontAwesomeIcon
                                    icon={faCircleArrowRight}
                                    className="w-6 ml-1"
                                />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
