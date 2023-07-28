import asideDesk from "../assets/images/bg-main-desktop.png"
import asideMobile from "../assets/images/bg-main-mobile.png"
import CardBack from "./CardBack"
import CardFront from "./CardFront"

function Aside() {
    return(
        <>
        <div className="p-0">
            <aside className="position-relative">
                <div>
                    <img
                        className="d-none d-lg-block"
                        src={ asideDesk }
                        alt="aside-desk"
                    />
                    <img
                        className="d-lg-none"
                        src={ asideMobile }
                        alt="aside-mobile"
                    />
                </div>
                <CardBack />
                <CardFront />
            </aside>
        </div>
        </>
    )
}

export default Aside