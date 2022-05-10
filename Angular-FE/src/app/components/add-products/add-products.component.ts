import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IItem } from 'src/app/model/item.model';
import { GettingApisService } from 'src/app/services/getting-apis.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  prodFrom!: FormGroup
  listData: Array<IItem>;

  constructor(private dataAdd: FormBuilder, private dataService: GettingApisService) {

    this.listData = [];

    this.prodFrom = this.dataAdd.group({
      product: new FormControl('',[Validators.required, Validators.minLength(3)]),
      quantity: new FormControl(0, [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(3)]),
    })
  }

  public addItem() {
    this.listData.push(this.prodFrom.value);
  }

  removeItem(element: string) {
    this.listData.forEach((value: any, index: number) => {
      if (value == element) {
        this.listData.splice(index, 1)

      }
    });
  }

  addNumber() {
    this.listData = [];

    this.prodFrom = this.dataAdd.group({
      number: new FormControl([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10)])
    })
  }


  ngOnInit(): void {
this.getItemList();
  }

  getItemList() {
    this.dataService.getItemList().subscribe((res) => {
      this.listData = res;
    },
    )
  }

  saveItem() {
    if(this.prodFrom.valid) {
      this.dataService.createItem(this.prodFrom.value).subscribe((res) => {
        console.log(res);
        this.getItemList();
      })
    }
  }
}
