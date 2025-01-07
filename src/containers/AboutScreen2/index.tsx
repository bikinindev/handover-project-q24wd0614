import { useContext } from 'react';
import globalStates from '../../utils/global';
import './AboutScreen2.css';
import { ImgBannerAbout2a, ImgBannerAbout2b, ImgBannerAboutLegality, ImgBannerAboutWelcome } from '../../assets';

const AboutScreen2 = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    
    return(
        <div className={`${windowWidthClass}-about-screen2`}>
            <div className='wrapper'>
                <div className='background'>
                    <div className='frame-circle top'>
                        <img alt="construction zillient 1" src={ImgBannerAbout2a}/>
                        <div className='shield'></div>
                    </div>
                    <div className='frame-circle bottom'>
                        <img alt="construction zillient 2" src={ImgBannerAbout2b}/>
                        <div className='shield'></div>
                    </div>
                </div>
                <div className='shield'>

                </div>
                <div className='content'>
                    <div className="section reflection">
                        <div className='text-wrapper'>
                            <h2>Reflection for the future</h2>
                            <p>Sistem pengetahuan kita memiliki batasan dan klasifikasi epistemologis yang berbahaya, karenasetiap disiplin ilmu telahmenghasilkan kerangka umum, teori, dan metodenya sendiri.</p>
                        </div>
                    </div>
                    <div className="section welcome">
                        <div className='grid-item text-wrapper'>
                            <h2>WELCOMING THE GOLDEN GENERATION</h2>
                            <p>
                                Zillient memahami peluang, ancaman, dan harapan dimasa depan, Indonesia dengan berbagai potensinya yang luar biasa, kekayaan pluralisme yang tersebar di seluruh tanah air, kedepan akan bisa dimanfaatkan dan dikelola oleh generasi muda yang unggul.
                            </p>
                            <p>
                                Transdisiplin akan menjadi ciri khas para zillient untuk menghasilkan mahakarya yang luar biasa dan bermanfaat untuk sesama berdasarkan Karya, Cipta, dan Karsa.
                            </p>
                        </div>
                         <div className='grid-item image'>
                            <div>
                                <img alt="quotes zillient" src={ImgBannerAboutWelcome} />
                            </div>
                        </div>
                    </div>
                    <div className="section about">
                            <div className='about-left'>

                                <div className='text-wrapper'>
                                    <h2>OUR MOTTO</h2>
                                    <p>POWER OF CURIOSITY</p>
                                </div>
                                <div className='text-wrapper'>
                                    <h2>OUR VISION</h2>
                                    <p>EXPERTS IN BUILDING AND DEVELOPING YOUR BUSINESS</p>
                                </div>
                                <div className='text-wrapper'>
                                    <h2>OUR LEGALITY</h2>
                                    <img src={ImgBannerAboutLegality} />
                                </div>

                            </div>
                            <div className='about-right'>
                                    <div className='text-wrapper'>
                                        <h2>ZILLIENT GROUP</h2>
                                        <p>Zillient Group is a start-up that is committed to providing the best service through innovation and use of technology to partners by realizing sustainable and inclusive economic transformation</p>
                                    </div>
                                    <div className='text-wrapper'>
                                        <h2>OUR PROCESS STARTING</h2>
                                        <p>P: Priority: selalumendahulukan pelayananterbaik untuk customer</p>
                                        <p>R: Respectful: menghormatisetiap orang ataskerja kerasnya</p>
                                        <p>O: Optimistic: selaluberpandangan segalasesuatu darisisi positif</p>
                                        <p>V: Visionary: Berorientasi pada masa depan</p>
                                        <p>A: Action: tidaktakut dalambertindak untukmewujudkan impian</p>
                                    </div>
                                    <div className='text-wrapper'>
                                        <h2>OUR BUSINESSES</h2>
                                        <p>Zillient memahami peluang, ancaman, dan harapan dimasa depan, Indonesia dengan berbagai potensinya yang luar biasa, kekayaan pluralisme yang tersebar di seluruh tanah air, kedepan akan bisa dimanfaatkan dan dikelola oleh generasi muda yang unggul.</p>
                                        <p>Transdisiplin akan menjadi ciri khas para zillient untuk menghasilkan mahakarya yang luar biasa dan bermanfaat untuk sesama berdasarkan Karya, Cipta, dan Karsa.
</p>
                                    </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutScreen2;