import { connect } from "react-redux";
import Goal from "../components/Goal";

const mapStatToProps = store => {
    return {
        points: store.points,
        count: store.points.length
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStatToProps,
    mapDispatchToProps
)(Goal);
