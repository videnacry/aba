import MainImgSrc_2_1 from './remote_aspect_2_1.jpg'
import MainImgSrc_1_1 from './remote_aspect_1_1.jpg'
import MainImgSrc_1_2 from './remote_aspect_1_2.jpg'
const Main = () => {
    return(
        <main className="position-relative">
            <picture>
                <source srcSet={MainImgSrc_2_1} media="(min-aspect-ratio: 16/11)"/>
                <source srcSet={MainImgSrc_1_1} media="(min-aspect-ratio: 8/11)"/>
                <source srcSet={MainImgSrc_1_2} />
                <img src="" width="100%" alt="chica estudiando de forma confortable"/>
            </picture>
            <div className="w-100 h-100 position-absolute top-0 start-0" style={{backgroundImage: "linear-gradient(90deg, transparent 30%, #80008096)"}}></div>
            <div className="col-12 p-3 position-absolute top-0 start-0 text-dark" style={{backgroundColor: 'white'}}>
                <h1 className="text-primary">ABA Aprendizaje</h1>
                <hr/>
                <p className="lead">Fuente de gu&iacute;as para un manejo correcto y elegante del ERP AX Dynamics 365 Finance and Operations</p>
                <div className="list-group list-group-horizontal m-auto flex-wrap text-center">
                    <a className="list-group-item list-group-item-warning col-6 col-sm-3">Finanzas</a>
                    <a className="list-group-item list-group-item-warning col-6 col-sm-3">Logística</a>
                    <a className="list-group-item list-group-item-warning col-6 col-sm-3">Manufactura</a>
                    <a className="list-group-item list-group-item-warning col-6 col-sm-3">Administración de Sistemas</a>
                </div>
            </div>
        </main>
    )
}
export default Main

const imgs = [
    {
        name:"remote_.jpg",
        author: 'Image by <a href="https://pixabay.com/users/startupstockphotos-690514/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=593360">StartupStockPhotos</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=593360">Pixabay</a>'
    }
]
