import { InstagramEmbed } from 'react-social-media-embed';

export default function SOCIALS(){

    return (
        <div className='flex flex-col justify-center items-center lg:flex-row wrap lg:justify-around lg:items-start py-20'>
            <InstagramEmbed url="https://www.instagram.com/p/DAm8tw3tRBO/" captioned className='w-80 md:w-80 lg:w-2/5' />
            <InstagramEmbed url="https://www.instagram.com/p/DAjFFaQNpoR/" captioned className='w-80 md:w-80 lg:w-2/5' />
        </div>
    )

}