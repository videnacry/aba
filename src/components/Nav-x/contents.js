import {ReactComponent as PantherSvg} from './panther.svg'
import contents from './contents-data'
const Contents = () => {
    return(
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl modal-fullscreen-lg-down">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
                {contents.map((content, idx) => (
                    <div className="w-100 overflow-auto mb-3" key={content.name + content.idx}>
                        <div className="alert alert-info d-flex flex-wrap mb-0" role="alert" style={{width: ((content.subtopics.length + 2) * 260) + 'px'}}>
                            <div className="card bg-light text-dark me-4" style={{width: '250px'}}>
                                <div style={{backgroundImage: `url(${content.img})`, backgroundSize: 'cover', minHeight: '100px'}} className="w-100 h-100"/>
                                <div className="card-img-overlay">
                                    <h5 className="card-title">{content.name}</h5>
                                    <PantherSvg width="40px" height="40px" className="m-1 position-absolute bottom-0 end-0"/>
                                </div>
                            </div>
                            {content.subtopics.map((subtopic, idx) => (
                                <div className="card text-dark bg-light mx-4" key={content.name + idx} style={{width: "250px"}}>
                                    <div className="card-body">
                                        <a href="#" className="card-link">{subtopic.name}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Contents