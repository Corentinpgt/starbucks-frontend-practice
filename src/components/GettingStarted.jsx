const GettingStarted = () => {
    return (
        <div className='py-20 bg-white'>
            <h2 className='text-black font-semibold text-2xl text-center'>Getting started is easy</h2>
            <p className='mt-5 text-sm text-secondary-green text-center'>Earn Stars and get rewarded in a few easy steps.</p>

            <ul className='flex items-start flex-col md:flex-row gap-5 mt-15 mx-auto w-9/10'>
                <li className='flex md:flex-col w-full gap-4'>
                    <img className='w-1/10 h-1/10 md:w-2/10 mx-auto' src="1.jpg" alt="Step 1" />
                    <section className='w-9/10 md:mx-auto'>
                        <h3 className='text-black font-semibold w-full md:text-lg md:text-center'>Download the Starbucks app</h3>
                        <p className='mt-4 text-secondary-green font-normal text-sm md:text-base md:text-center'>
                        <span className=' hover:no-underline hover:cursor-pointer underline text-primary-green'>Join in the app</span> to get access to the full range of Starbucks® Rewards benefits. <span className=' hover:no-underline hover:cursor-pointer underline text-primary-green'>You can also join online.</span>
                        </p>
                    </section>
                </li>
                <li className='flex md:flex-col w-full gap-4'>
                    <img className='w-1/10 h-1/10 md:w-2/10 mx-auto' src="2.jpg" alt="Step 2" />
                    <section className='w-9/10 md:mx-auto'>
                        <h3 className='text-black font-semibold w-full md:text-lg md:text-center'>Order and pay how you’d like</h3>
                        <p className='mt-4 text-secondary-green font-normal text-sm md:text-base md:text-center'>
                        Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. <span className=' hover:no-underline hover:cursor-pointer underline text-primary-green'>Learn how</span>
                        </p>
                    </section>
                </li>
                <li className='flex md:flex-col w-full gap-4'>
                    <img className='w-1/10 h-1/10 md:w-2/10 mx-auto' src="3.jpg" alt="Step 3" />
                    <section className='w-9/10 md:mx-auto'>
                        <h3 className='text-black font-semibold w-full md:text-lg md:text-center'>Earn Stars, get Rewards</h3>
                        <p className='mt-4 text-secondary-green font-normal text-sm md:text-base md:text-center'>
                        As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!
                        </p>
                    </section>
                </li>
            </ul>

        </div>
    );
};

export default GettingStarted;