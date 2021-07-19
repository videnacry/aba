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
                <img src="" width="100%"/>
            </picture>
            <div className="w-100 h-100 position-absolute top-0 start-0" style={{backgroundImage: "linear-gradient(90deg, transparent 30%, #80008096)"}}></div>
            <div className="col-12 col-md-6 p-3 position-absolute top-50 end-0 translate-middle-y text-light">
                <h1 className="text-primary" style={{textShadow: '1px 1px white, 1px -1px white, -1px 1px white, -1px -1px white'}}>ABA Estudios</h1>
                <hr/>
                <p className="lead">Fuente de gu&iacute;as para un manejo correcto y elegante de de MS Dynamics 365</p>
                <div className="list-group list-group-horizontal m-auto text-center">
                    <a className="list-group-item list-group-item-action list-group-item-info">Finanzas</a>
                    <a className="list-group-item list-group-item-action list-group-item-info">Ventas</a>
                    <a className="list-group-item list-group-item-action list-group-item-info">Operaciones</a>
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