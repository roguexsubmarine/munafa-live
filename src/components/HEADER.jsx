import coep from '../assets/coep tech black.png';
import ecell from '../assets/E Cell Logo-black.png';
import psf_logo from '../assets/PSF25 Black-01.png';


export default function HEADER(){

    return (
        <>
        <div className="flex flex-row h-16 w-full justify-between">
            <div>
                <img src={coep} alt='coep' className='h-12  md:14 lg:h-20'/>
            </div>
            
            <div className='flex flex-row align-middle justify-center gap-2 md:gap-8'>
                <img src={ecell} alt='ecell'  className='h-10 md:h-14 lg:h-20'/>
                <img src={psf_logo} alt='psf logo' className='h-10 md:h-14 lg:h-20' />
            </div>
            
        </div>
        </>
    )
}