# Todanotalib

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

This project contains components to facilitate angular + materializecss development

https://materializecss.com

## xpn-input

Is a html input already with the divs to show the placeholders. The component properties are:

@Input() icon: string; //An icon to be display before the input. Must be a material icon (https://material.io/tools/icons/?style=baseline)

@Input() type: string; //The type of the input. It can be any of the html input types. By default is text

@Input() guid: string; //This property will be used as an id to the input. By default is a GUID autogenerated

@Input() placeholder: string; //Is the placeholder to be displayed above the input

@Input() disabled: boolean; //If this property is true the input will be disabled

@Input() onChange: any; //An action to be executed when the value changes. Must be a function

@Input() onBlur: any; //An action to be executed when the user leaves the field. Must be a function

@Input() model: any; //The model is like ngModel. Here you will set a variable to contains the value in your containing component

@Input() label: string; //An action to be executed when the value changes. Must be a function

@Input() maxLength: number; //Is the maximum lenght of the input

@Input() autocompleteFactory: any;

@Input() uppercase: boolean; //If true all letters will be UPPERCASE

@Input() bigField: boolean = false;

@Output() modelChange = new EventEmitter<any>();


## StorageMoule

getObjectFromLocalStorage(key: string, protoType: any): any //Receive a key from local storage, get it and convert to an object. To set the type of the object you should use a prototype from a class like: MyClass.prototype


