import FolderIcon from '../assets/FolderIcon.svg';
import ThreeDots from '../assets/ThreeDots.svg';

const FolderCard = () => {
    return ( 
        <div className="folder-card">
            <div className="container w-36 h-24 flex flex-col bg-red-500 rounded-2xl ">
                <div className="top flex flex-row justify-between items-center p-2">
                    <div className="left">
                        <div className=' w-6 h-6  flex justify-center items-center bg-bg bg-blend-soft-light rounded-md '>
                            <img src={FolderIcon} alt="Folder Icon" className=' w-4 h-3' />
                        </div>  
                    </div>
                    ,
                    <div className="right">
                        <img src={ThreeDots} alt="Three Dots" className=' w-4 h-4' />       
                    </div>
                </div>
                <div className="middel flex flex-row p-2">
                    <h1 className=' font-poppins font-medium text-[10px] text-white'>Desgin shift</h1>
                </div>
                
            </div>
        </div>
     );
}
 
export default FolderCard;