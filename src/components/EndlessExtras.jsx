const EndlessExtras = () => {
    return (
        <div className='py-20 bg-white'>
            <h2 className='text-black font-semibold text-2xl text-center'>Endless Extras</h2>
            <p className='mt-5 text-sm text-secondary-green text-center'>Joining Starbucks® Rewards means unlocking access to benefits like quick and easy ordering, tasty Rewards and—yes, free coffee.</p>

            <ul className='flex items-start flex-col md:flex-row gap-5 mt-15 mx-auto w-9/10'>
                <li className='flex md:flex-col w-full gap-4'>
                    <img className='w-3/10 h-3/10 md:w-4/10 mx-auto' src="1-fun-freebies.jpg" alt="Step 1" />
                    <section className='w-9/10 md:mx-auto'>
                        <h3 className='text-black font-semibold w-full md:text-lg md:text-center'>Fun freebies</h3>
                        <p className='mt-4 text-secondary-green font-normal text-sm md:text-base md:text-center'>
                            Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.
                        </p>
                        <p className="mt-4 underline text-primary-green md:text-base md:text-center md:mx-auto hover:no-underline hover:cursor-pointer">Learn more</p>
                    </section>
                </li>
                <li className='flex md:flex-col w-full gap-4'>
                    <img className='w-3/10 h-3/10 md:w-4/10 mx-auto' src="2-order-and-pay-ahead.jpg" alt="Step 2" />
                    <section className='w-9/10 md:mx-auto'>
                        <h3 className='text-black font-semibold w-full md:text-lg md:text-center'>Order and pay ahead</h3>
                        <p className='mt-4 text-secondary-green font-normal text-sm md:text-base md:text-center'>
                            Master the art of ordering ahead with saved favorites and payment methods.
                        </p>
                        <p className="mt-4 underline text-primary-green md:text-base md:text-center md:mx-auto hover:no-underline hover:cursor-pointer">Learn more</p>
                    </section>
                </li>
                <li className='flex md:flex-col w-full gap-4'>
                    <img className='w-3/10 h-3/10 md:w-4/10 mx-auto' src="3-get-to-free-faster.jpg" alt="Step 3" />
                    <section className='w-9/10 md:mx-auto'>
                        <h3 className='text-black font-semibold w-full md:text-lg md:text-center'>Get to free faster</h3>
                        <p className='mt-4 text-secondary-green font-normal text-sm md:text-base md:text-center'>
                            Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.
                        </p>
                        <p className="mt-4 underline text-primary-green md:text-base md:text-center md:mx-auto hover:no-underline hover:cursor-pointer">Learn more</p>
                    </section>
                </li>
            </ul>

        </div>
    );
};

export default EndlessExtras;