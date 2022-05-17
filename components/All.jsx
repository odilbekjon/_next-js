import Header from "./Header";
import Footer from "./Footer";

function All({children}) {
    return(
        <> 
            <Header/>
              {children}
            <Footer/>
        </>
    )
}

export default All;