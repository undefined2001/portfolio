export default function Description({ data }) {
    return (
        <>
            <div className="my-custom-container h-full flex items-center w-3/4 bg-orange-600">
                <p className="mx-10 w-2/3 text-xl text-white font-mono">
                    {data.description}
                </p>
            </div>
        </>
    )
}