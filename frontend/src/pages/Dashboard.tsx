import React from 'react'
import BurgerIcon from '../assets/BurgerIcon.svg'
import SearchIcon from '../assets/SearchIcon.svg'
import BottomArrow from '../assets/BottomArrow.svg'
import CloudIcon from '../assets/CloudIcon.svg'
import UplaodIcon from '../assets/UploadIcon.svg'

const Dashboard = () => {
  return (
    <div className=' flex flex-row w-screen h-screen bg-black'>
      <div className="left order-2 lg:order-1">    
            

      </div>
        <div className="right order-1 lg:order-2 h-full w-full bg-bg flex flex-col gap-y-4">
            
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

            <div className="body flex flex-col mt-4 gap-y-4 ">
                <div className="first-row flex flex-row justify-between items-center px-2">
                    <div className="left font-roboto font-semibold">
                        Dashboard
                    </div>
                    <div className="right">
                        <button className=" w-20  h-8 bg-secondary flex flex-row items-center justify-center rounded-lg gap-x-1">
                            <span className=' text-white font-poppins text-xs'>Upload</span>
                            <img src={CloudIcon} alt="Cloud Icon" className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="second-row flex flex-row px-2">
                    <div className="left flex flex-col text-left w-48 gap-y-3">
                        <div className="left-top font-sans font-semibold text-sm"> Welcome back Gazoly</div>
                        <div className="left-bottom font-poppins text-[11px] text-subBlack">Unleash the power of your data with seamless cloud storage integration it&apos;s secure scalable  and hassle-free</div>
                    </div>
                    <div className="right">
                        <img src={UplaodIcon} alt="Upload Icon" className= " w-44 h-40 pb-5 " />

                    </div>

                </div>
            </div>
            
            

        </div>
    </div>
  )
}

export default Dashboard
