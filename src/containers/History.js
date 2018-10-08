import { connect } from "react-redux";
import ResultList from "../components/ResultList";

const mapStatToProps = store => {
    return {
        history: store.history
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStatToProps,
    mapDispatchToProps
)(ResultList);
