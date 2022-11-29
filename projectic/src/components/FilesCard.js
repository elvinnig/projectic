// Imported to ViewProject
const FilesCard = ({title, link}) => {
    return (
        <div class="col-sm-4 my-3">
            <div class="card bg-info">
                <div class="card-body text-center">
                    <h5 class="card-title">{title}</h5>
                    <a href={link} class="link-dark">{link}</a>
                </div>
            </div>
        </div>
    )
}

export default FilesCard;