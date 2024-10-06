import boss from '../assets/BossMunafa.png';
import Timer from './timer.js';


export default function TIMER(){

    const remainingTime = Timer();

    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <img src={boss} alt='boss baby' className='h-40 md:h-48 lg:h-60'/>

            <div className='font-main text-2xl  md:text-3xl lg:text-4xl text-gray-700'>
                Time remaining - {remainingTime}
            </div>

        </div>
    )
}