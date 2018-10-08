import React, { Component } from "react";

export default class Point extends Component {
    constructor(props) {
        super(props);

        this.state = {
            coordination: {}
        };
    }

    drawPosition(t) {
        const radius = 255;
        const alpha = 2 * 3.14;

        let res = {};
        let left = 230 + radius * Math.cos(alpha * t);
        let top = 235 + radius * Math.sin(-alpha * t);

        res = { left: left, top: top };

        if (this._isMounted) {
            this.setState({
                coordination: res
            });
        }
    }

    drawing() {
        let context = this;
        const speed = 1;
        const currentTime = Date.now();

        setInterval(function() {
            let t = Date.now() - currentTime;
            context.drawPosition(t);
        }, speed);
    }

    componentDidMount() {
        this._isMounted = true;

        this.drawing();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { coordination } = this.state;
        const { index } = this.props;
        return (
            <div className="css" style={coordination}>
                {index + 1}
            </div>
        );
    }
}
