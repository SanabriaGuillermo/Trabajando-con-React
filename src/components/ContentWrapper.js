import TopBar from "./TopBar";
import ContentRowTop from './ContentRowTop';
import Footer from "./Footer";
import MoviesTable from "./MoviesTable/MoviesTable";
function ContentWrapper(){
    return(
        <div id="content-wrapper" className="d-flex flex-column">			
			<div id="content">

				<TopBar/>

				<ContentRowTop/>

				<MoviesTable/>
			    <Footer/>
            </div>    
		</div>               
    );
}

export default ContentWrapper;
