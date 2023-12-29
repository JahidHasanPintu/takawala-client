import React from 'react';
import './Hero.css';
const HeroCustomer = () => {
    return (
        <div className='mt-[100px]'>
            {/* <h2>Hero client here</h2> */}
            <div className='flex mt-5 hero-container'>
                <div className='left-section'>
                    <h2>Seize Opportunities with Hassle-Free Loans</h2>
                    <p>Experience a streamlined application process, transparent terms, and <br /> swift approvals. It's time to take control of your financial journey</p>
                    <button type="button" class="apply-btn w-[222px] text-white font-medium text-sm px-4 py-2 text-center">Apply Now</button>

                </div>
                <div className=''>
                    <div className="circle">
                        <div className="right-image">
                            <div className="items ln-success">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <rect width="60" height="60" rx="6" fill="#0FA76C" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 14.8461C18 14.5809 18.1054 14.3266 18.2929 14.139C18.4804 13.9515 18.7348 13.8461 19 13.8461H41C41.2652 13.8461 41.5196 13.9515 41.7071 14.139C41.8946 14.3266 42 14.5809 42 14.8461V15.8461H47C47.2652 15.8461 47.5196 15.9515 47.7071 16.139C47.8946 16.3266 48 16.5809 48 16.8461V22.8461C48 24.1722 47.4732 25.444 46.5355 26.3817C45.5979 27.3193 44.3261 27.8461 43 27.8461H41.317C40.6022 29.8632 39.3618 31.6529 37.7238 33.0301C36.0859 34.4074 34.1099 35.3222 32 35.6801V41.8461H38C38.2652 41.8461 38.5196 41.9515 38.7071 42.139C38.8946 42.3266 39 42.5809 39 42.8461V48.8461C39 49.1113 38.8946 49.3657 38.7071 49.5532C38.5196 49.7408 38.2652 49.8461 38 49.8461H22C21.7348 49.8461 21.4804 49.7408 21.2929 49.5532C21.1054 49.3657 21 49.1113 21 48.8461V42.8461C21 42.5809 21.1054 42.3266 21.2929 42.139C21.4804 41.9515 21.7348 41.8461 22 41.8461H28V35.6801C25.8901 35.3222 23.9141 34.4074 22.2762 33.0301C20.6382 31.6529 19.3978 29.8632 18.683 27.8461H17C15.6739 27.8461 14.4021 27.3193 13.4645 26.3817C12.5268 25.444 12 24.1722 12 22.8461V16.8461C12 16.5809 12.1054 16.3266 12.2929 16.139C12.4804 15.9515 12.7348 15.8461 13 15.8461H18V14.8461ZM42 23.8461V17.8461H46V22.8461C46 23.6418 45.6839 24.4048 45.1213 24.9675C44.5587 25.5301 43.7956 25.8461 43 25.8461H42V23.8461ZM18 17.8461H14V22.8461C14 23.6418 14.3161 24.4048 14.8787 24.9675C15.4413 25.5301 16.2044 25.8461 17 25.8461H18V17.8461Z" fill="white" />
                                    </svg>
                                </div>
                                <div className='items-text'>
                                    <h4>100K+</h4>
                                    <p>successful loan approvals!</p>
                                </div>
                            </div>
                            <div className="items partner-bank">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <rect width="60" height="60" rx="6" fill="#0FA76C" />
                                        <path d="M13 23.7363V30.8956H14.75V41.6301H13V46.9982H41L46.25 47L48 46.9982V41.6301H46.25V30.8956H48V23.7363L30.5 13L13 23.7363ZM20 41.6301V30.8956H23.5V41.6301H20ZM28.75 41.6301V30.8956H32.25V41.6301H28.75ZM41 41.6301H37.5V30.8956H41V41.6301ZM34 23.7363C33.9999 24.2064 33.9092 24.6718 33.7332 25.1061C33.5571 25.5403 33.2992 25.9349 32.974 26.2672C32.6488 26.5995 32.2628 26.8631 31.838 27.0429C31.4133 27.2227 30.958 27.3152 30.4983 27.315C30.0385 27.3149 29.5833 27.2222 29.1586 27.0422C28.7339 26.8622 28.348 26.5984 28.023 26.2659C27.698 25.9335 27.4402 25.5388 27.2644 25.1044C27.0886 24.6701 26.9981 24.2046 26.9982 23.7345C26.9985 22.7851 27.3675 21.8747 28.0243 21.2036C28.681 20.5324 29.5715 20.1555 30.5 20.1557C31.4285 20.156 32.3189 20.5333 32.9752 21.2048C33.6316 21.8763 34.0002 22.7869 34 23.7363Z" fill="white" />
                                    </svg>
                                </div>
                                <div className='items-text'>
                                    <h4>12</h4>
                                    <p>Premier Banking Partners!</p>
                                </div>
                            </div>
                            <div className="items approv-ration">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <rect width="60" height="60" rx="6" fill="#0FA76C" />
                                        <path d="M50 29.9909L45.6745 24.9436L46.2773 18.2623L39.8777 16.7735L36.5273 11L30.5 13.6507L24.4727 11L21.1223 16.7735L14.7227 18.2441L15.3255 24.9255L11 29.9909L15.3255 35.0382L14.7227 41.7377L21.1223 43.2265L24.4727 49L30.5 46.3311L36.5273 48.9818L39.8777 43.2083L46.2773 41.7195L45.6745 35.0382L50 29.9909ZM26.9545 39.0688L19.8636 31.8065L22.3632 29.2465L26.9545 33.9307L38.6368 21.9661L41.1364 24.5442L26.9545 39.0688Z" fill="white" />
                                    </svg>
                                </div>
                                <div className='items-text '>
                                    <h4>95%</h4>
                                    <p>Loan Approval Ratio</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default HeroCustomer;