import ProgressBar from "@ramonak/react-progress-bar"

export default function Skill({ color, progress, img, height, width }) {
    return (
        <div className="skill-div flex items-center justify-between lg:w-auto my-5 ml-10 sm:w-auto sm:ml-4 ">
            <img style={{ height: height, width: width }} src={img} alt=""></img>
            <ProgressBar bgColor={color} ariaValuemax={100} completed={progress} className="w-full mx-5" />
        </div>
    )
}