import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { allCountries } from './countries';
import { DropdownSettings } from 'projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.interface';

@Component({
    templateUrl: './views/customSearch.html'
})
export class CustomSearchExample implements OnInit {

    itemList: any = [];
    selectedItems = [];
    filter = "";
    settings: DropdownSettings = {};

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.itemList = allCountries
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class",
            primaryKey: "countryId",
            enableSearchFilter: true,
            tagToBody: true,
        };
    }
    onItemSelect(item: any) {
        console.log(item);
        console.log(this.selectedItems);
    }
    OnItemDeSelect(item: any) {
        console.log(item);
        console.log(this.selectedItems);
    }
    onSelectAll(items: any) {
        console.log(items);
    }
    onDeSelectAll(items: any) {
        console.log(items);
    }
    
    mySearch(items: any[], search:string, searchBy: any[]) : any[] {
        return items.filter(
            item => item.itemName.toLowerCase().startsWith(search.toLowerCase())
        )
    }

    onClose(){
        this.itemList = [];
        this.filter = "";
    }
    cssgist: boolean = false;
    title: string = "Custom Search / Search from API";
    tsgist: string = "CuppaLabs/1bab5ecbbb22727eb0afe49848a454f0";
    htmlgist: string = "CuppaLabs/7f0d8ea9f9cfe9eec2cc1699affd2c14";
    tstitle: string = "customSearch.ts"
    htmltitle: string = "customSearch.html";
}
