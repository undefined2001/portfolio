import Navbar from "./Navbar";
import Skills from "./Skills";
import data from '../data/data.json'
import Description from "./Description";
import ProfileImage from "./ProfileImage";
function Homepage() {

    return (
        <>
            <Navbar title={data.navtitle} />
            <div className="container-fluid flex lg:flex-row sm:flex-col-reverse h-screen bg-gradient-to-r from-purple-950  to-purple-800 m-0">
                <Description data={data} />
                <ProfileImage />
            </div>
            <Skills />
        </>
    )
}

export default Homepage;