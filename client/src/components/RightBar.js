import "./comp.css"
import logo from '../img/logo.png'
import DashContent from "./DashContent";
import RightbarImg from '../img/rightbar.jpg'

const Rightbar = () => {
    return (
        <div>
            <div className="sidebar rightbar">
            <img src={RightbarImg} width="180" height="700" style={{marginTop:"15px"}}/>
            </div>

        </div>
    );
}

export default Rightbar;