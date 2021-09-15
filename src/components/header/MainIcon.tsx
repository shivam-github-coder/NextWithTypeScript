function MainIcon({Icon}:any) {
    return (
        <div className='transition duration-150 transform hover:scale-150 motion-safe:transform-none '>
            <Icon className='h-10  mr-10 hover:bg-blue-700  text-red-900 rounded-full   hover:text-yellow-100 cursor-pointer transition duration-500 ease-in-out p-2' />
        </div>
    )
}

export default MainIcon
