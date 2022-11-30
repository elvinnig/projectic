import FilesCard from "../components/FilesCard";

const ViewProject = () => {
    // !Test Data
    const testData = [{
        img: 'https://images.unsplash.com/photo-1611013621183-cde811b6ddb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=592&q=80' ,
        title: 'Test Title for the Project View',
        badges: 'test badge',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ullamcorper eget nulla facilisi. Pulvinar etiam non quam lacus suspendisse faucibus. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Neque egestas congue quisque egestas diam in arcu. Et malesuada fames ac turpis egestas. Ac felis donec et odio pellentesque diam volutpat commodo. ',
        files:[
            {filetype:'test file', link: 'https://www.speedtest.net/' },
            {filetype:'test file 2', link: 'https://fitgirl-repacks.site/'},
            {filetype:'test file 3', link: 'https://fitgirl-repacks.site/'}
        ],
        dateCreated : Date.now(),
        dateUpdated: Date.now
    // !End of Test Date
    }];
    // !Test Date
    const today = new Date(testData[0].dateCreated);
    // !End of Test Date
    return (
        <div className="container-fluid">
            {/* Header */}
            <div className="row row-cols-auto justify-content-between">
                <div className="col">
                    <button type="button" className="btn btn-labeled btn-primary my-2">Back</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-labeled btn-dark my-2 me-4">Update</button>
                    <button type="button" className="btn btn-labeled btn-dark my-2 me-2">Delete</button>
                </div>
            </div>

            {/* Image, Title, Badge */}
            <div className="container-fluid border-top border-bottom border-dark">
                <div className="row">
                    <div className="card col-4 my-2" style={{width: "25%"}}>
                        <img src={testData[0].img} class="card-img-top" alt="..."/>
                        <div className="row">
                            <div class="card-body col-4">
                                Date Created:
                                <p class="card-text">{today.toDateString()}</p>
                            </div>
                            <div class="card-body col-4">
                                Date Updated:
                                <p class="card-text">{today.toDateString()}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="text-center fs-2 fw-bold">
                            {testData[0].title}
                        </div>
                        <div className="text-center fs-5">
                            <span class="badge bg-dark">{testData[0].badges}</span>
                        </div>
                        <blockquote className="mt-4 fs-6 fw-semibold">
                            {testData[0].description}
                        </blockquote>
                    </div>
                </div>
            </div>

            {/* Files Map */}
            <div class="row">
                {
                    testData[0].files.map(file => {
                        return <FilesCard title={file.filetype} link={file.link}/>
                    })
                }
            </div>
        </div>
    )
}

export default ViewProject;