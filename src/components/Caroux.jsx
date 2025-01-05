import React, { useState } from 'react';

const Caroux = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <div className='pt-20 bg-primary-white flex flex-col items-center'>
                <h2 className='text-black font-semibold text-2xl text-center'>Get your favourite for free</h2>

                <ul className="flex w-full justify-center items-center relative mt-5 md:max-w-2/3 lg:max-w-2/5">
                    <div
                        className="absolute w-1/5 bottom-0 left-0 border-b-4 border-primary-green transition-transform duration-300"
                        style={{ transform: `translateX(${activeIndex * 100}%)` }}
                    ></div>

                    {['25', '100', '200', '300', '400'].map((value, index) => (
                        <li
                            key={index}
                            className="hover:cursor-pointer p-2 pb-4 w-1/5"
                            onClick={() => handleClick(index)}
                        >
                            <span className="text-md font-semibold text-black flex justify-center items-center">
                                {value}
                                <span aria-hidden="true" className="text-gold text-xs">★</span>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='flex justify-center items-center flex-col md:flex-row bg-light-green md:py-10'>
                <img className='w-3/4 md:max-w-1/3' src={`rewards${activeIndex + 1}.png`} alt="Rewards" />
                {activeIndex === 0 && (
                    <div className='px-5 pb-10 md:pb-0 md:max-w-1/3'>
                        <h2 className='text-md text-center py-5 font-semibold text-black md:text-start md:text-2xl'>Customize your drink</h2>
                        <p className='text-center text-black text-sm md:text-start'>Make your drink just right with an extra espresso shot or a dash of your favorite syrup.</p>
                    </div>
                )}
                {activeIndex === 1 && (
                    <div className='px-5 pb-10 md:pb-0 md:max-w-1/3'>
                        <h2 className='text-md text-center py-5 font-semibold text-black md:text-start md:text-2xl'>Brewed hot or iced coffee or tea, bakery item, packaged snack and more</h2>
                        <p className='text-center text-black text-sm md:text-start'>Treat yourself to an iced coffee, buttery croissant, bag of chips and more.</p>
                    </div>
                )}
                {activeIndex === 2 && (
                    <div className='px-5 pb-10 md:pb-0 md:max-w-1/3'>
                        <h2 className='text-md text-center py-5 font-semibold text-black md:text-start md:text-2xl'>Handcrafted drink (Cold Brew, lattes and more) or hot breakfast</h2>
                        <p className='text-center text-black text-sm md:text-start'>Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.</p>
                    </div>
                )}
                {activeIndex === 3 && (
                    <div className='px-5 pb-10 md:pb-0 md:max-w-1/3'>
                        <h2 className='text-md text-center py-5 font-semibold text-black md:text-start md:text-2xl'>Sandwich, protein box or at-home coffee</h2>
                        <p className='text-center text-black text-sm md:text-start'>Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.</p>
                    </div>
                )}
                {activeIndex === 4 && (
                    <div className='px-5 pb-10 md:pb-0 md:max-w-1/3'>
                        <h2 className='text-md text-center py-5 font-semibold text-black md:text-start md:text-2xl'>Select Starbucks® merchandise</h2>
                        <p className='text-center text-black text-sm md:text-start'>Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.</p>
                    </div>
                )}
            </div>

        </>
    );
};

export default Caroux;