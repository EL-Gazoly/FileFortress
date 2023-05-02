import React from 'react'
import BurgerIcon from '../assets/BurgerIcon.svg'
import SearchIcon from '../assets/SearchIcon.svg'
import BottomArrow from '../assets/BottomArrow.svg'

const Dashboard = () => {
  return (
    <div className=' flex flex-row w-screen h-screen bg-black'>
      <div className="left order-2 lg:order-1">    
            

      </div>
        <div className="right order-1 lg:order-2 h-full w-full bg-bg flex flex-col">
            <div className="header flex flex-row mt-5 px-2 justify-between">


                <div className="header-left flex flex-row gap-x-2 items-center justify-center">
                    <div className="icon w-10 h-9 mb-1">
                        <img src={SearchIcon} alt="Search Icon" />
                    </div>
                    <input type="text" className="search font-poppins text-subBlack  bg-bg w-32 focus:outline-none focus:border-b focus:border-blue-300 foucs:pl-2 placeholder:pl-0 placeholder:text-blueGray" placeholder="Search" />

                </div> 
                <div className="header-right flex flex-row items-center gap-x-2">
                    
                        <div className="userProfile flex flex-row items-center gap-x-2  ">
                            <div className="userProfile-img w-9 h-8 rounded-full">
                                <img src="https://i.pravatar.cc/150?img=3" className=' rounded-full' alt="User Profile" />
                            </div>
                            <div className="userName">
                                <h1 className=" font-roboto text-subBlack">Gazoly</h1>
                            </div>
                            <div className="arrow mt-1">
                                <img src={BottomArrow} alt="Arrow" />
                            </div>


                           
                        </div>

                        <div className="burrger">
                                <div className="burrgerIcon w-6 h-4">
                                        <img src={BurgerIcon} alt="Burger Icon" />
                                </div>
                            </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Dashboard