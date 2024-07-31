import { TypeAnimation } from "react-type-animation"

export default function Description({ data }) {
    return (
        <>
            <div className="my-custom-container h-full flex items-center w-full">
                <div>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            '',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            data.name,
                            1000,
                            data.profession,
                            1000,
                            'We produce food for Chinchillas',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{display: 'inline-block', color: 'white'}}
                        repeat={Infinity}
                        className="ml-5 mb-5 sm:min-h-16 font-mono sm:text-2xl lg:text-3xl"
                    />
                    <p className="mx-10 lg:w-1/2 sm:h-1/2 sm:w-full sm:text-sm sm:mx-5 text-xl text-white font-mono">
                        {data.description}
                    </p>
                </div>
            </div>
        </>
    )
}