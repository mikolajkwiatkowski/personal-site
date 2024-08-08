
import Kafelek from './Kafelek.jsx'
import ttlogo from './assets/ttlogo.png'
import twlogo from './assets/twlogo.png'
import ytlogo from './assets/ytlogo.png'
import iglogo from './assets/iglogo.png'
import arrow from './assets/arrow.png'
import { InstagramEmbed } from 'react-social-media-embed';
import { TikTokEmbed } from 'react-social-media-embed';

function Socials() {
  
  return (
    <div className="content">
        <div className="flex flex-grow">
            <div className="w-full h-maincontent m-5 ">
                    <Kafelek bg='bg-neutral-900'>
                        <div className='flex flex-row h-contentinmaincontent'>

                          <div className='w-1/4 mt-5 flex flex-col  justify-center items-center'>       
                            <div className='flex flex-row items-center pb-5 mt-5'>
                              <img src={ttlogo} className='h-20 w-20' alt="" />
                              <a href='https://www.tiktok.com/@mlody_hazki'>
                                <p className='font-bold font-poppins text-2xl ml-3'>@mlody_hazki</p>
                              </a>
                            </div>
                            <div className='flex content-center'>
                              <TikTokEmbed url="https://www.tiktok.com/@mlody_hazki/video/7397454941549382945" height={550} />
                            </div>
                          </div>
                          
                          <div className='w-1/4 mt-5 flex flex-col  items-center pr-10'>
                            <div className='flex flex-row items-center pb-5 mt-3'>
                            <img src={twlogo} className='h-20 w-20' alt="" />
                              <a href='https://www.twitch.tv/grubypepe'>
                                <p className='font-bold font-poppins text-2xl ml-3'>@GrubyPepe</p>
                              </a>
                            </div>
                            <div className='flex content-center'>
                              <iframe src="https://player.twitch.tv/?channel=grubypepe&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="290" width="420"></iframe>
                            </div>
                          </div>

                          <div className='w-1/4 mt-5 flex flex-col items-center pl-10'>
                            <div className='flex flex-row items-center'>
                              <img src={ytlogo} className='h-28 w-28' alt="" />
                              <a href='https://www.youtube.com/channel/UCfKLbBGTNBPcA-HDXaFIXuw'>
                                <p className='font-bold font-poppins text-2xl'>@gruby2796</p>
                              </a>
                            </div>
                            <div class="embed-responsive embed-responsive-16by9">
                              <iframe width="400" height="250" src="https://www.youtube.com/embed/9P7B_FMhIMs?si=VXKyW-VWSrpg0s-b&amp;start=7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                              <img src={arrow} className='w-20 h-20 animate-bounce mt-10'></img>
                              <p className='font-bold font-poppins text-2xl'>My last video!</p>
                          </div>

                          <div className='w-1/4 mt-5 flex flex-col  justify-center items-center'>
                            <div className='flex flex-row items-center'>
                                <img src={iglogo} className='h-20 w-20 ' alt="" />
                                <a href='https://www.instagram.com/mlody_hazki/'><p className='font-bold font-poppins text-2xl ml-3'>@mlody_hazki</p></a>
                            </div>
                            <div className='flex content-center mt-4'>
                              <InstagramEmbed url="https://www.instagram.com/p/CvGItQyINmU/" width={328} height={550}captioned />
                            </div>
                          </div>  
                        </div>
                    </Kafelek>
            </div>
        </div>
    </div>


  );

}

export default Socials
