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
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'SpFxHttpClientWebPartStrings';
import SpFxHttpClient from './components/SpFxHttpClient';
import { HttpClient } from '@microsoft/sp-http';
var SpFxHttpClientWebPart = /** @class */ (function (_super) {
    __extends(SpFxHttpClientWebPart, _super);
    function SpFxHttpClientWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpFxHttpClientWebPart.prototype.render = function () {
        var _this = this;
        if (!this.renderedOnce) {
            this._getImage()
                .then(function (response) {
                var element = React.createElement(SpFxHttpClient, {
                    apolloImage: response.collection.items[0]
                });
                ReactDom.render(element, _this.domElement);
            });
        }
    };
    SpFxHttpClientWebPart.prototype._getImage = function () {
        return this.context.httpClient.get('https://images-api.nasa.gov/search?q=Apollo%204&media_type=image', HttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        })
            .then(function (jsonResponse) {
            return jsonResponse;
        });
    };
    SpFxHttpClientWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(SpFxHttpClientWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    SpFxHttpClientWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return SpFxHttpClientWebPart;
}(BaseClientSideWebPart));
export default SpFxHttpClientWebPart;
//# sourceMappingURL=SpFxHttpClientWebPart.js.map