import { FaArrowRight } from 'react-icons/fa';
import bannerImg2 from '../assets/bnner2.png'
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

const Banner2 = () => {
    return (
        <div>
            <div className="hero bg-[#4DA1A9] h-[480px] lg:h-[600px] px-5">
                <div className="hero-content text-white flex-col-reverse lg:flex-row-reverse">
                    <img
                        src={bannerImg2}
                        className="lg:max-w-lg lg:h-[400px] rounded-lg " />
                    <div className=''>
                        <h1 className="text-2xl text-start lg:text-5xl font-bold">
                        <Typewriter
                                words={[" From Classics to Modern Hits, We've Got It All"]}
                                loop={2}
                                cursor
                                cursorStyle='_'
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                           </h1>
                        <p className="py-6 text-xs lg:text-lg">
                        Our diverse collection spans genres, eras, and interests, ensuring you'll find exactly what you're looking for. <span className='font-bold text-lg'>Book Breeze.</span>
                        </p>
                        <Link to={'/about'}> <button className="btn bg-[#4DA1A9] border-none text-white hover:bg-white hover:text-black">Explore <FaArrowRight /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;