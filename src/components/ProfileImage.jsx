import profileImage from '/images/background.png';

export default function ProfileImage() {
    return (

        <div className="h-full sm:grow w-full flex items-center pt-7 justify-center">
            <img className='pt-10 w-2/3 sm:w-3/5 ' src={profileImage} alt="" />
        </div>

    )
}