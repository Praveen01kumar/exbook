import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { Subject, finalize, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api-service';
import { SharedService } from 'src/app/shared/services/shared-service';
import { numNotAllowed, onlyNumAllowed, spaceNotAllowed, speCharNotAllowed } from 'src/app/shared/services/validistor';

@Component({
  selector: 'app-manage-addresses',
  templateUrl: './manage-addresses.component.html',
  styleUrls: ['./manage-addresses.component.scss'],
  providers: [MessageService]
})
export class ManageAddressesComponent implements OnInit, OnDestroy {
  newAddressForm: FormGroup | any;
  sub: boolean = false;
  isLoading: boolean = false;
  Addnew: boolean = false;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  add_type: string = 'Home';
  states: any[] | any;
  showAdd_Address: boolean = false;
  addressList: any[] = [];
  addressMenuitem: MenuItem[] | undefined;
  @ViewChild('addressMenu') addressMenu: Menu | undefined;
  
  constructor(
    public apiService: ApiService,
    public sharedService: SharedService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.onAInitializForm();
    this.callOnit();
  }

  toggleAddressMenu(event:any, index:number) {
    if (this.addressMenu) {
      this.addressMenu.toggle(event);
    }
  }

  callOnit() {
    const addlist: any = localStorage.getItem('delivery_address');
    this.addressList = addlist ? JSON.parse(addlist) : [];
    this.states = [
      { name: 'Andaman & Nicobar Islands' },
      { name: 'Andhra Pradesh' },
      { name: 'Arunachal Pradesh' },
      { name: 'Assam' },
      { name: 'Bihar' },
      { name: 'Chandigarh' },
      { name: 'Chhattisgarh' },
      { name: 'Delhi' },
      { name: 'Goa' },
      { name: 'Gujarat' }
    ];

    this.addressMenuitem = [
      {
        items: [
          {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
              this.update();
            }
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
              this.delete();
            }
          }
        ]
      }
    ];
  }

  update() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
    this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
  }

  onAInitializForm() {
    this.newAddressForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(22), speCharNotAllowed, spaceNotAllowed, numNotAllowed]],
      last_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(22), speCharNotAllowed, spaceNotAllowed, numNotAllowed]],
      phone_number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12), speCharNotAllowed, spaceNotAllowed, onlyNumAllowed]],
      pin_code: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(6), speCharNotAllowed, spaceNotAllowed, onlyNumAllowed]],
      area_street: ['', [Validators.required]],
      location: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(22), numNotAllowed]],
      city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(52)]],
      state: ['', [Validators.required]],
      landmark: ['', [Validators.minLength(3), Validators.maxLength(22), speCharNotAllowed, spaceNotAllowed, numNotAllowed]],
      alternate_phone: ['', [Validators.minLength(10), Validators.maxLength(12), speCharNotAllowed, spaceNotAllowed, onlyNumAllowed]],
      add_type: ['Home', [Validators.required]],
    });
  }

  get f() { return this.newAddressForm?.controls }

  onNewAddress() {
    this.sub = true;
    if (this.newAddressForm?.invalid) {
      return;
    }
    const fval = this.newAddressForm?.value;
    const payload = {
      first_name: fval?.first_name,
      last_name: fval?.last_name,
      phone_number: fval?.phone_number,
      pin_code: fval?.pin_code,
      area_street: fval?.area_street,
      location: fval?.location,
      city: fval?.city,
      state: fval?.state,
      landmark: fval?.landmark,
      alternate_phone: fval?.alternate_phone,
      add_type: fval?.add_type,
    }
    this.isLoading = true;
    // this.apiService.newAddress(payload).pipe(takeUntil(this._unsubscribeAll), finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
    //   if (val?.status) {
    //     localStorage.setItem('delivery_address', JSON.stringify(payload));
    //     this.newAddressForm?.reset();
    //     this.sub = false;
    //   }
    // }, (error: Error) => {
    //   this.isLoading = false;
    // });
    this.addressList.push(payload);
    localStorage.setItem('delivery_address', JSON.stringify(this.addressList));
    this.newAddressForm?.reset();
    const addlist: any = localStorage.getItem('delivery_address');
    this.addressList = JSON.parse(addlist);
    this.showAdd_Address = false;
  }

  showAdd() {
    this.showAdd_Address = !this.showAdd_Address;
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }



}
