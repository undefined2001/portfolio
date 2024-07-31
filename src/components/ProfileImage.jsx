import profileImage from '/images/background.png';

export default function ProfileImage() {
    return (
        <> 
            <div className="h-full w-full flex items-center justify-center">
                <img className='pb-20 w-2/3' src={profileImage} alt="" />
            </div>
        </>
    )
}