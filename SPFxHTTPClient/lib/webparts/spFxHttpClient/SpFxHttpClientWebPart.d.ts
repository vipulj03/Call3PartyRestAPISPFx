import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface ISpFxHttpClientWebPartProps {
    description: string;
}
export default class SpFxHttpClientWebPart extends BaseClientSideWebPart<ISpFxHttpClientWebPartProps> {
    render(): void;
    private _getImage;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=SpFxHttpClientWebPart.d.ts.map