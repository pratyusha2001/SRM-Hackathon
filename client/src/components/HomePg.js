import Container from "react-bootstrap/esm/Container";
import TopNav from "./TopNav";
import Home from "./Home";
import Wave from "./Wave";
import Upload from "./Upload";
import News from "./News";
import Contact from "./Contact";

const HomePg=()=>{
    return(
        <div>
            <TopNav/>
            <Home/> 
            <Upload/>
            <News/>
            <Contact/>
        </div>
    );
}

export default HomePg;