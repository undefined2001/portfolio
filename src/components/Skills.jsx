import cimg from '/images/skills/c.svg';
import cppimg from '/images/skills/cpp.svg';
import pyimg from '/images/skills/python.svg'
import rustimg from '/images/skills/rust.svg'
import armimg from '/images/skills/arm.svg'
import espimg from '/images/skills/espressif.svg'
import atimg from '/images/skills/atmel.png'

import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import Skill from "./SkillsDiv";

export default function Skills() {


    return (
        <div className="container-fluid h-screen bg-gradient-to-r pt-5 from-purple-950 to-purple-800">
            <div className="py-2">
                <hr className="text-white" />
            </div>
            <h1 className="font-mono text-white text-3xl text-center py-5"> Skill Overview </h1>
            <div className="py-2">
                <hr className="text-white" />
            </div>
            <div className='flex sm:flex-col lg:flex-row w-full'>
                <div className="languages w-full">
                    <h1 className='sm:text-center text-3xl sm:my-5 text-white font-mono'>Languages</h1>
                    <Skill className="" color={'#1e40af'} progress={90} img={cppimg} height={53} />
                    <Skill color={'#1e3a8a'} progress={80} img={cimg} height={53} />
                    <Skill color={'#facc15'} progress={70} img={pyimg} height={45} width={45} />
                    <Skill color={'#000000'} progress={40} img={rustimg} height={45} width={45} />
                </div>
                <div className="micro-controllers w-full lg:my-5 sm:mt-14">
                    <h1 className='sm:text-center text-3xl text-white font-mono'>Micro-Controllers</h1>
                    <Skill color={'#1e40af'} progress={90} img={armimg} height={53} width={85} />
                    <Skill className="mx-25" color={'#dc2626'} progress={70} img={espimg} height={53} width={100} />
                    <Skill color={'#facc15'} progress={50} img={atimg} height={45} width={100} />
                </div>

            </div>


        </div>
    )

}