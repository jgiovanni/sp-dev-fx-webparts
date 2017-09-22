import {Version} from '@microsoft/sp-core-library';
import {
    BaseClientSideWebPart,
    IPropertyPaneConfiguration,
    PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import {escape} from '@microsoft/sp-lodash-subset';

const fabric = require('office-ui-fabric-js/dist/js/fabric.min.js')
require('image-map-resizer');
// Import Vue + Libraries
import * as Vue from 'vue';
// Import Vue Components
import homeComponent from './components/home.vue';

//
import {IStageMapWebPartProps} from './IStageMapWebPartProps';
// import * as strings from 'stageMapStrings';

export default class StageMapWebPart extends BaseClientSideWebPart<IStageMapWebPartProps> {

    public data: IStageMapWebPartProps;

    public render(): void {
        this.domElement.innerHTML = `<div id="app-${this.context.instanceId}"></div>`;

        this.data = {
            route: this.properties.route,
        };

        new Vue({
            el: `#app-${this.context.instanceId}`,
            render: h => h(homeComponent, {
                props: this.data,
            })
        });
    }

    public onBeforeSerialize(): any {
        this.properties.route = this.data.route;
        (<any>window).fabric = fabric;
        return undefined;
    }

    protected get dataVersion(): Version {
        return Version.parse('1.0');
    }

    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
        return {
            pages: [
                {
                    header: {
                        description: 'OrangeGate Stage Map'
                    },
                    groups: [
                        {
                            groupName: 'OrangeGate',
                            groupFields: [
                                PropertyPaneTextField('message', {
                                    label: 'Stage Map'
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    }
}
