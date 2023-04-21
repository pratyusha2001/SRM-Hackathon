import Container from "react-bootstrap/esm/Container";
import TopNav from "./TopNav";
import Home from "./Home";
import Wave from "./Wave";
import Upload from "./Upload";
import News from "./News";

const HomePg=()=>{
    return(
        <div>
            <TopNav/>
            <Home/> 
            <Upload/>
            <News/>
        </div>
    );
}

export default HomePg;