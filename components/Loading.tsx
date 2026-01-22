import { Cardio } from 'ldrs/react'
import 'ldrs/react/Cardio.css'



const Loading = () => {
    return (
        <>
            <div className='flex flex-col gap-1 items-center justify-center h-screen fixed top-0 w-screen z-500000 bg-white'>
                <Cardio
                    size="100"
                    stroke="6"
                    speed="2"
                    color="var(--accent)"
                />
                
            </div>




        </>
    )
}

export default Loading
