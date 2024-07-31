import Navbar from "./Navbar";
import Skills from "./Skills";
import data from '../data/data.json'
import Description from "./Description";

function Homepage() {

    return (
        <>
            <div className="container-fluid h-screen bg-gradient-to-r from-purple-950  to-purple-700 m-0">
                <Navbar title={data.navtitle} />
                <Description data={data} />
            </div>
            <Skills />
        </>
    )
}

export default Homepage;