import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodanotaSettings } from '../../todanota-settings';

declare var $: any;

@Component({
  selector: 'xpn-input',
  templateUrl: './xpn-input.component.html',
  styleUrls: ['./xpn-input.component.css']
})
export class XpnInputComponent implements OnInit {

  @Input() icon: string;
  @Input() type: string;
  @Input() guid: string;
  @Input() placeholder: string;
  @Input() disabled: boolean;
  @Input() onChange: any;
  @Input() onBlur: any;
  @Input() model: any;
  @Input() label: string;
  @Input() maxLength: number;
  @Input() autocompleteFactory: any;
  @Input() uppercase: boolean;
  @Input() bigField: boolean = false;
  @Output() modelChange = new EventEmitter<any>();

  timeout: any;

  constructor() { 
    if (this.guid == undefined)
      this.guid = TodanotaSettings.generateUUID();
  }

  ngOnInit() {
    if (this.type == undefined)
      this.type = "text";

    if (this.placeholder == undefined)
      this.placeholder = '';

    if (this.onBlur == undefined)
    {
      this.onBlur = () => {};
    }
  }

  changeFunction(){
    if (this.onChange != undefined)
      this.onChange();
  }

  changeValue(){
    this.modelChange.emit(this.model);
  }

  autoComplete(){
    if (this.autocompleteFactory != undefined && this.model.length >= 2)
    {

        if (this.timeout != undefined)
            clearTimeout(this.timeout);
        
            this.timeout = setTimeout(function(){
            
              this.autocompleteFactory(this.model, (res) => {

                var objAuto = {};
                
                for (var i = 0; i < res.data.length; i++){
                    objAuto[res.data[i]] = "";
                }

                $('#' + this.guid).autocomplete({
                    data : objAuto
                });

                this.timeout = null;
            
            });
        }, 300);
    }
  }

  localBlur(): void {
    if (this.onBlur != undefined)
      this.onBlur();
  }
}
