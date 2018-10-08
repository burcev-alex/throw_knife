import React, { Component } from "react";
import Point from "./Point";

export default class Goal extends Component {
    listPoints() {
        const { points } = this.props;

        return points.map((item, index) => {
            return (
                <Point key={index} index={index} className="css" style={item} />
            );
        });
    }

    render() {
        return (
            <div>
                <div id="round">{this.listPoints()}</div>
            </div>
        );
    }
}
