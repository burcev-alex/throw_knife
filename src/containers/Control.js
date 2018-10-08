import { connect } from "react-redux";
import Panel from "../components/Panel";
import { addPoints, clearPoints, addHistory } from "../actions/index";

const mapStatToProps = store => {
    return {
        points: store.points
    };
};

const mapDispatchToProps = dispatch => {
    return {
        add: list => dispatch(addPoints(list)),
        clear: list => dispatch(clearPoints(list)),
        addHistory: list => dispatch(addHistory(list))
    };
};

export default connect(
    mapStatToProps,
    mapDispatchToProps
)(Panel);
