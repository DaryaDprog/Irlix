import {connect} from "react-redux";
import MainPage from "./MainPage";
import { getAllItems } from "../../action/coctails";



const mapStateToProps = (state) => {
    return {
        coctails: state.coctails.coctails,
    }
}
const mapDispatchToProps = {
    getAllItems
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);