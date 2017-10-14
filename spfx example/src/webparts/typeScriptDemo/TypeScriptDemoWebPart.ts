import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './TypeScriptDemoWebPart.module.scss';
import * as strings from 'TypeScriptDemoWebPartStrings';

import pnp from "sp-pnp-js";

import { Cars, iCar } from './cars'

export interface ITypeScriptDemoWebPartProps {
  description: string;
}

export default class TypeScriptDemoWebPartWebPart extends BaseClientSideWebPart<ITypeScriptDemoWebPartProps> {

  public onInit(): Promise<void> {
    return super.onInit().then(_ => {
      pnp.setup({
        spfxContext: this.context
      });
    });
  }



  public render(): void {

    Cars.getALLCars().then((cars) => {
      var html = "";
      cars.forEach(car => {
        html += `<div>${car.Title} (${car.carModel})</div>`

      });


      this.domElement.innerHTML = html

      var button = document.createElement("button") as HTMLButtonElement;
      button.onclick = () => { this.AddNewItem(); };
      button.innerText = "add car";

      this.domElement.appendChild(button);

    });

  }

  AddNewItem() {
    Cars.AddACar({
      Title : "title",
      carBrand: "Audi",
      carColor: "Green",
      carYear: 2017,
      carModel: "A6"
    });
    this.render();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
