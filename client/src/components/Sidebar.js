import "./comp.css"
import logo from '../img/logo.png'
import DashContent from "./DashContent";

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar">
                <img src={logo} width="170" height="35" style={{marginTop:"15px"}}/>
                <a  href="#home">Home</a>
                <a href="#upload">Upload</a>
                <a class="active" href="#report">Report</a>
                <a href="#settings">Setting</a>
                <a href="">Log Out</a>
            </div>

            <div className="content">
               <DashContent/>
            </div>
        </div>
    );
}

export default Sidebar;