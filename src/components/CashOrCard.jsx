import React from 'react';

const CashOrCard = () => {
    return (
        <div className='py-20 bg-beige'>
            <h2 className='text-black font-semibold text-2xl text-center'>Cash or card, you earn Stars</h2>
            <p className='mt-5 text-sm text-secondary-green text-center'>No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</p>

            <div className="flex flex-col w-full mt-10 lg:mt-20 mx-2">
                <div className="mb-10 lg:flex">
                    <section className="lg:w-3/10 lg:px-10 lg:py-5">
                        <h2 className="text-black font-semibold text-xl">1★ per dollar</h2>
                        <p className="text-sm text-secondary-green mb-5">Pay as you go</p>
                    </section>
                    <section className="flex flex-col md:flex-row items-start lg:w-7/10 gap-5">
                        <div className="flex items-start justify-between w-full md:w-1/2 gap-5">
                            <img className="w-3/10" src="1A.png" alt="icone" />
                            <div className="w-7/10">
                                <h3 className="text-black font-semibold text-lg mb-5">Scan and pay separately</h3>
                                <p className="text-sm text-secondary-green">Use cash or credit/debit card at the register.</p>
                            </div>
                        </div>
                        <div className="flex items-start justify-between w-full md:w-1/2 gap-5">
                            <img className="w-3/10" src="1B.png" alt="icone" />
                            <div className="w-7/10">
                                <h3 className="text-black font-semibold text-lg mb-5">Save payment in the app</h3>
                                <p className="text-sm text-secondary-green">Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="lg:flex">
                    <section className="lg:w-3/10 lg:px-10 lg:py-5">
                        <h2 className="text-black font-semibold text-xl">2★ per dollar</h2>
                        <p className="text-sm text-secondary-green mb-5">Add funds in the app</p>
                    </section>
                    <section className="flex flex-col md:flex-row items-start lg:w-7/10 gap-5">
                        <div className="flex items-start justify-between w-full md:w-1/2 gap-5">
                            <img className="w-3/10" src="2A.png" alt="icone" />
                            <div className="w-7/10">
                                <h3 className="text-black font-semibold text-lg mb-5">Preload</h3>
                                <p className="text-sm text-secondary-green">To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p>
                            </div>
                        </div>
                        <div className="flex items-start justify-between w-full md:w-1/2 gap-5">
                            <img className="w-3/10" src="2B.png" alt="icone" />
                            <div className="w-7/10">
                                <h3 className="text-black font-semibold text-lg mb-5">Register your gift card</h3>
                                <p className="text-sm text-secondary-green">Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CashOrCard;