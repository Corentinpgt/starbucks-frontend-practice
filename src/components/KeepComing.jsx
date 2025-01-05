import Button from "./Button";


const KeepComing = () => {
    return (
        <div className="md:p-10 relative overflow-hidden">
            <img className="absolute top-0 left-0 w-full z-[-1] hidden md:block" src="bg-green.png" alt="Fond d'écran" />
            <div className='py-10 px-5 bg-light-green flex flex-col'>
                <h2 className='text-black font-semibold text-2xl text-center'>Keep the Rewards Coming</h2>
                <p className='mt-5 text-sm text-secondary-green text-center'>The Rewards don't stop at your morning coffee. Join Starbucks® Rewards and unlock perks from our partners, all while earning more Stars.</p>

                <ul className='flex items-start flex-col md:flex-row gap-5 mt-15 mx-auto w-9/10'>
                    <li className='flex md:flex-col w-full gap-4'>
                        <img className='w-3/10 h-1/10 md:w-2/10 mx-auto' src="delta-skymiles.png" alt="Step 1" />
                        <section className='w-9/10 md:mx-auto'>
                            <p className='mt-4 text-secondary-green font-normal text-sm md:text-base md:text-center'>
                                <span className="underline text-primary-green hover:no-underline hover:cursor-pointer">Link your Delta SkyMiles® </span>
                                and Starbucks® Rewards accounts to earn miles on Starbucks Card reloads of $25 or more, plus Double Stars on travel days.
                            </p>
                        </section>
                    </li>
                    <li className='flex md:flex-col w-full gap-4'>
                        <img className='w-3/10 h-1/10 md:w-2/10 mx-auto' src="bank-of-america.png" alt="Step 2" />
                        <section className='w-9/10 md:mx-auto'>
                            <p className='mt-4 text-secondary-green font-normal text-sm md:text-base md:text-center'>
                                <span className="underline text-primary-green hover:no-underline hover:cursor-pointer">Link your Bank of America </span>
                                eligible card and Starbucks® Rewards account to earn 2% Cash Back and Bonus Stars on qualifying Starbucks in-app purchases.
                            </p>
                        </section>
                    </li>
                    <li className='flex md:flex-col w-full gap-4'>
                        <img className='w-3/10 h-1/10 md:w-2/10 mx-auto' src="marriott-logo.png" alt="Step 3" />
                        <section className='w-9/10 md:mx-auto'>
                            <p className='mt-4 text-secondary-green font-normal text-sm md:text-base md:text-center'>
                                <span className="underline text-primary-green hover:no-underline hover:cursor-pointer">Link your Marriott Bonvoy® </span>
                                and Starbucks® Rewards accounts to earn Double Stars during eligible stays, points during any Marriott Bonvoy Week and more.
                            </p>
                        </section>
                    </li>
                </ul>

                <Button className="mx-auto mt-15" variant="primary">Join Starbucks® Rewards</Button>

            </div>
        </div>
    );
};

export default KeepComing;