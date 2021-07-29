import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import {ReactComponent as PantherSvg} from './panther.svg'
import { ReactComponent as ChevronRightSvg } from './chevron-right.svg'
import {Link} from 'react-router-dom'
import data from './dataModules'
import { useState } from 'react'
const getTopicsWithSubtopicsByIds = (topics, ids) => {
    const res = []
    topics.forEach(elmt => {
        const {...topic} = elmt
        if (ids.indexOf(elmt.id) === -1) {}
        else if (elmt.subtopicIds){
            topic.subtopics = getTopicsWithSubtopicsByIds(topics, elmt.subtopicIds)
            res.push(topic)
        }
        else res.push(topic)
    })
    return res
}
const topics = []
data.forEach(topic => {
    const {...newTopic} = topic
    if (topic.isModule) {
        newTopic.subtopics = getTopicsWithSubtopicsByIds(data, topic.subtopicIds)
        topics.push(newTopic)
    }
})
const Contents = () => {
    const [contents, setContents] = useState(topics)
    const hideModal = () => {
        const myModalEl = document.getElementById('contents-modal')
        const bootstrapModalInstance = bootstrap.Modal.getInstance(myModalEl)
        bootstrapModalInstance.hide()
    }
    return(
        <div className="modal fade" id="contents-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl modal-fullscreen-lg-down">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="contents-modal-label">Contents</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
                {contents.map((content, idx) => (
                    <div className="w-100 overflow-auto mb-3" key={content.name + content.idx + idx}>
                        <div className="alert alert-info d-flex flex-wrap mb-0" role="alert" style={{width: ((content.subtopicIds.length + 2) * 260) + 'px'}}>
                            <div className="card bg-light text-dark me-4" style={{width: '250px'}}>
                                <div style={{backgroundImage: `url(${content.img})`, backgroundSize: 'cover', minHeight: '100px'}} className="w-100 h-100"/>
                                <div className="card-img-overlay">
                                    <h5 className="card-title">{content.name}</h5>
                                    <PantherSvg width="40px" height="40px" className="m-1 position-absolute bottom-0 end-0"/>
                                </div>
                            </div>
                            {content.subtopics.map((subtopic, idx) => (
                                <div className="card text-dark bg-light mx-4" key={subtopic.name + idx + subtopic.id} style={{width: "250px"}}>
                                    <div className="card-body">
                                        {subtopic.subtopics ? (
                                            <button className="btn text-primary" onClick={() => setContents(() => [subtopic])}>
                                                {subtopic.name}
                                                <ChevronRightSvg width="40px" height="40px" className="m-1 position-absolute bottom-0 start-100 translate-middle"/>
                                            </button>
                                        ) : (
                                            <Link to={`/contents/${subtopic.id}`} className="card-link" onClick={hideModal}>{subtopic.name}</Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={() => setContents(() => topics)}>Reset</button>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Contents