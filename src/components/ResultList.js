import React, { Component } from "react";

export default class ResultList extends Component {
    mergeCircle(lastPoint, item) {
        let x0 = 0;
        let y0 = 0; //координаты точки пересечения всех линий

        let d = 0; //расстояние между центрами окружностей
        let a = 0; //расстояние от r1 до точки пересечения всех линий
        let h = 0; //расстояние от точки пересеч окружностей до точки пересеч всех линий
        let first = {};
        let second = {};
        let x10 = lastPoint.left;
        let x20 = item.left;
        let r1 = 15;
        let y10 = lastPoint.top;
        let y20 = item.top;
        let r2 = 15;

        d = Math.sqrt(
            Math.pow(Math.abs(x10 - x20), 2) + Math.pow(Math.abs(y10 - y20), 2)
        );
        //console.info(lastPoint);
        //console.info(item);
        //console.info(d);
        //console.info("--------------");

        if (d > r1 + r2) return false; //окружности не пересекаются

        a = (r1 * r1 - r2 * r2 + d * d) / (2 * d);
        h = Math.sqrt(Math.pow(r1, 2) - Math.pow(a, 2));

        x0 = x10 + (a * (x20 - x10)) / d;
        y0 = y10 + (a * (y20 - y10)) / d;

        first.x = x0 + (h * (y20 - y10)) / d;
        first.y = y0 - (h * (x20 - x10)) / d;

        if (a === r1) return true; //окружности соприкасаются

        second.x = x0 - (h * (y20 - y10)) / d;
        second.y = y0 + (h * (x20 - x10)) / d;

        return true; //окружности пересекаются
    }

    removeDuplicateFromArray(Arr) {
        var Cur,
            j,
            i = 0;
        while (i < Arr.length) {
            Cur = Arr[i];
            for (j = i + 1; j < Arr.length; j++) {
                if (Cur == Arr[j]) {
                    Arr.splice(i, 1);
                    i--;
                    break;
                }
            }
            i++;
        }
    }

    renderList = () => {
        let context = this;
        const { history } = this.props;
        if (typeof history !== "undefined") {
            let result = [];
            if (history.length > 1) {
                result = history.map((current, i) => {
                    let lastPoint = current;
                    let res = 2;

                    res = history.map((item, index) => {
                        if (index !== i) {
                            if (context.mergeCircle(lastPoint, item)) {
                                return 0; // ERROR
                            } else {
                                return 1; // SUCCESS
                            }
                        } else {
                            return 2; // Текущая точка
                        }
                    });
                    res.splice(res.indexOf(2), 1);

                    context.removeDuplicateFromArray(res);

                    if (res.length > 1) {
                        res = "Error";
                    } else {
                        res = "Success";
                    }

                    return res;
                });
            } else {
                result[0] = "Success";
            }

            return result.map((item, index) => {
                return (
                    <div key={index} index={index} className="log">
                        Point {index + 1}: {item}
                    </div>
                );
            });
        }
    };
    render() {
        return (
            <div id="history">
                <h2>История</h2>
                {this.renderList()}
            </div>
        );
    }
}
