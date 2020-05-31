var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './SpFxHttpClient.module.scss';
var SpFxHttpClient = /** @class */ (function (_super) {
    __extends(SpFxHttpClient, _super);
    function SpFxHttpClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpFxHttpClient.prototype.render = function () {
        return (React.createElement("div", { className: styles.spFxHttpClient },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement("span", { className: styles.title }, "HttpClient Demo"))),
                React.createElement("div", { className: styles.row },
                    React.createElement("img", { src: this.props.apolloImage.links[0].href }),
                    React.createElement("div", null,
                        React.createElement("strong", null, "Title:"),
                        " ",
                        this.props.apolloImage.data[0].title),
                    React.createElement("div", null,
                        React.createElement("strong", null, "Keywords:")),
                    React.createElement("ul", { className: styles.list }, this.props.apolloImage &&
                        this.props.apolloImage.data[0].keywords.map(function (keyword) {
                            return React.createElement("li", { key: keyword, className: styles.item }, keyword);
                        }))))));
    };
    return SpFxHttpClient;
}(React.Component));
export default SpFxHttpClient;
//# sourceMappingURL=SpFxHttpClient.js.map