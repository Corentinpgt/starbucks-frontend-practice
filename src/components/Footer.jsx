import React, { useState } from 'react';

const Footer = () => {
    const [isAboutUsVisible, setIsAboutUsVisible] = useState(false);
    const [isCareersVisible, setIsCareersVisible] = useState(false);
    const [isSocialImpactVisible, setIsSocialImpactVisible] = useState(false);
    const [isBusinessPartnersVisible, setIsBusinessPartnersVisible] = useState(false);
    const [isOrderAndPickUpVisible, setIsOrderAndPickUpVisible] = useState(false);

    const handleToggleAboutUs = () => {
        setIsAboutUsVisible(!isAboutUsVisible);
    };

    const handleToggleCareers = () => {
        setIsCareersVisible(!isCareersVisible);
    };

    const handleToggleSocialImpact = () => {
        setIsSocialImpactVisible(!isSocialImpactVisible);
    };

    const handleToggleBusinessPartners = () => {
        setIsBusinessPartnersVisible(!isBusinessPartnersVisible);
    };

    const handleToggleOrderAndPickUp = () => {
        setIsOrderAndPickUpVisible(!isOrderAndPickUpVisible);
    };

    return (
        <>
        <div className='pt-20 bg-white lg:flex px-3 lg:px-8 gap-2 items-start'>
            <div className='w-full relative px-2 lg:w-1/5'>
                <section className='flex items-center justify-between w-full cursor-pointer lg:cursor-default' onClick={handleToggleAboutUs}>
                    <h3 className='text-black'>About Us</h3>
                    <p className={`lg:hidden text-black transform transition-transform duration-200 ${isAboutUsVisible ? 'rotate-180' : ''}`}>v</p>
                </section>
                <div className={`overflow-hidden lg:overflow-visible transition-max-height duration-500 ease-in-out ${isAboutUsVisible ? 'max-h-96' : 'max-h-0'}`}>
                    <ul className='text-gray-500 flex flex-col gap-2 bg-white w-full left-0'>
                        <li className="hover:text-black hover:cursor-pointer mt-5">Our Company</li>
                        <li className="hover:text-black hover:cursor-pointer">Our Coffee</li>
                        <li className="hover:text-black hover:cursor-pointer">About Starbucks</li>
                        <li className="hover:text-black hover:cursor-pointer">Starbucks Archive</li>
                        <li className="hover:text-black hover:cursor-pointer">Investor Relations</li>
                        <li className="hover:text-black hover:cursor-pointer">Customer Service</li>
                        <li className="hover:text-black hover:cursor-pointer">Contact Us</li>
                    </ul>
                </div>
            </div>

            <div className='w-full relative px-2 mt-10 lg:mt-0 lg:w-1/5'>
                <section className='flex items-center justify-between w-full cursor-pointer lg:cursor-default' onClick={handleToggleCareers}>
                    <h3 className='text-black'>Careers</h3>
                    <p className={`lg:hidden text-black transform transition-transform duration-200 ${isCareersVisible ? 'rotate-180' : ''}`}>v</p>
                </section>
                <div className={`overflow-hidden lg:overflow-visible lg:max-h-full transition-max-height duration-500 ease-in-out ${isCareersVisible ? 'max-h-96' : 'max-h-0'}`}>
                    <ul className='text-gray-500 flex flex-col gap-2 bg-white w-full left-0'>
                        <li className="hover:text-black hover:cursor-pointer mt-5">Culture and Values</li>
                        <li className="hover:text-black hover:cursor-pointer">Inclusion, Diversity, & Belonging</li>
                        <li className="hover:text-black hover:cursor-pointer">College Achievement Plan</li>
                        <li className="hover:text-black hover:cursor-pointer">Alumni Community</li>
                        <li className="hover:text-black hover:cursor-pointer">U.S. Careers</li>
                        <li className="hover:text-black hover:cursor-pointer">International Careers</li>
                    </ul>
                </div>
            </div>

            <div className='w-full relative px-2 mt-10 lg:mt-0 lg:w-1/5'>
                <section className='flex items-center justify-between w-full cursor-pointer lg:cursor-default' onClick={handleToggleSocialImpact}>
                    <h3 className='text-black'>Social Impact</h3>
                    <p className={`lg:hidden text-black transform transition-transform duration-200 ${isSocialImpactVisible ? 'rotate-180' : ''}`}>v</p>
                </section>
                <div className={`overflow-hidden lg:overflow-visible transition-max-height duration-500 ease-in-out ${isSocialImpactVisible ? 'max-h-96' : 'max-h-0'}`}>
                    <ul className='text-gray-500 flex flex-col gap-2 bg-white w-full left-0'>
                        <li className="hover:text-black hover:cursor-pointer mt-5">Communities</li>
                        <li className="hover:text-black hover:cursor-pointer">Starbucks Foundation</li>
                        <li className="hover:text-black hover:cursor-pointer">Sustainability</li>
                        <li className="hover:text-black hover:cursor-pointer">Environmental and Social Impact Reporting</li>
                    </ul>
                </div>
            </div>

            <div className='w-full relative px-2 mt-10 lg:mt-0 lg:w-1/5'>
                <section className='flex items-center justify-between w-full cursor-pointer lg:cursor-default' onClick={handleToggleBusinessPartners}>
                    <h3 className='text-black'>For Business Partners</h3>
                    <p className={`lg:hidden text-black transform transition-transform duration-200 ${isBusinessPartnersVisible ? 'rotate-180' : ''}`}>v</p>
                </section>
                <div className={`overflow-hidden lg:overflow-visible transition-max-height duration-500 ease-in-out ${isBusinessPartnersVisible ? 'max-h-96' : 'max-h-0'}`}>
                    <ul className='text-gray-500 flex flex-col gap-2 bg-white w-full left-0'>
                        <li className="hover:text-black hover:cursor-pointer mt-5">Landlord Support Center</li>
                        <li className="hover:text-black hover:cursor-pointer">Suppliers</li>
                        <li className="hover:text-black hover:cursor-pointer">Corporate Gift Card Sales</li>
                        <li className="hover:text-black hover:cursor-pointer">Office and Foodservice Coffee</li>
                    </ul>
                </div>
            </div>

            <div className='w-full relative px-2 mt-10 lg:mt-0 lg:w-1/5'>
                <section className='flex items-center justify-between w-full cursor-pointer lg:cursor-default' onClick={handleToggleOrderAndPickUp}>
                    <h3 className='text-black'>Order and Pick Up</h3>
                    <p className={`lg:hidden text-black transform transition-transform duration-200 ${isOrderAndPickUpVisible ? 'rotate-180' : ''}`}>v</p>
                </section>
                <div className={`overflow-hidden lg:overflow-visible transition-max-height duration-500 ease-in-out ${isOrderAndPickUpVisible ? 'max-h-96' : 'max-h-0'}`}>
                    <ul className='text-gray-500 flex flex-col gap-2 bg-white w-full left-0'>
                        <li className="hover:text-black hover:cursor-pointer mt-5">Order on the App</li>
                        <li className="hover:text-black hover:cursor-pointer">Order on the Web</li>
                        <li className="hover:text-black hover:cursor-pointer">Delivery</li>
                        <li className="hover:text-black hover:cursor-pointer">Order and Pick Up Options</li>
                        <li className="hover:text-black hover:cursor-pointer">Explore and Find Coffee for Home</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='py-20 bg-white px-5 lg:px-10'>
            <ul className='flex gap-2'>
                <li className='w-8'><img src="icon1.svg" alt="icone" /></li>
                <li className='w-8'><img src="icon2.svg" alt="icone" /></li>
                <li className='w-8'><img src="icon3.svg" alt="icone" /></li>
                <li className='w-8'><img src="icon4.svg" alt="icone" /></li>
                <li className='w-8'><img src="icon5.svg" alt="icone" /></li>
                <li className='w-8'><img src="icon6.svg" alt="icone" /></li>
            </ul>
            <ul className='text-black flex flex-col gap-5 mt-5 text-sm lg:text-md'>
                <li><a className='hover:underline' href="">Privacy Notice</a></li>
                <li><a className='hover:underline' href="">Consumer Health Privacy Notice</a></li>
                <li><a className='hover:underline' href="">Terms of Use</a></li>
                <li><a className='hover:underline' href="">Do Not Share My Personal Information</a></li>
                <li><a className='hover:underline' href="">CA Supply Chain Act</a></li>
                <li><a className='hover:underline' href="">Accessibility</a></li>
                <li><a className='hover:underline' href="">Cookie Preferences</a></li>
            </ul>

            <p className='text-gray-500 mt-6 text-sm lg:text-md'>© 2025 Starbucks Coffee Company. All rights reserved.</p>

        </div>
        </>
    );
};

export default Footer;