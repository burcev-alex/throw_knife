import React, { Component } from "react";

export default class Panel extends Component {
    setHistory = tmp => {
        // собираем текущие координаты
        let elementRound = document.getElementById("round");
        let elements = elementRound.querySelectorAll(".css");
        let history = [];
        for (var i = 0; i < elements.length; i++) {
            let params = elements[i].getBoundingClientRect();
            history[i] = {
                left: parseFloat(params.x),
                top: parseFloat(params.y)
            };
        }
        history[elements.length] = { left: 937.5, top: 580 };
        return history;
    };
    randomColors() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
    handleClick = event => {
        event.preventDefault();
        let tmp = { left: 230, top: 475 };

        const { points } = this.props;
        if (points.length < 20) {
            points[points.length] = tmp;

            this.props.add(points);
            this.props.addHistory(this.setHistory(tmp));
        }
    };

    handleClear = event => {
        event.preventDefault();
        this.props.clear([{ left: 230, top: 475 }]);
    };

    render() {
        return (
            <div id="panel">
                <input type="button" value="Add" onClick={this.handleClick} />{" "}
                &nbsp;
                <input type="button" value="Clear" onClick={this.handleClear} />
            </div>
        );
    }
}
