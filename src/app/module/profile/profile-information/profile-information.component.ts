import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, finalize, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api-service';
import { SharedService } from 'src/app/shared/services/shared-service';
import { emailValidator, numNotAllowed, onlyNumAllowed, spaceNotAllowed, speCharNotAllowed } from 'src/app/shared/services/validistor';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.scss']
})
export class ProfileInformationComponent implements OnInit {
  PersonalForm: FormGroup | any;
  EmailForm: FormGroup | any;
  PhoneForm: FormGroup | any;
  sub: boolean = false;
  sub1: boolean = false;
  sub2: boolean = false;
  isLoading: boolean = false;
  Personaledit: boolean = false;
  Emailedit: boolean = false;
  Phoneedit: boolean = false;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  gender: string = 'Male';
  constructor(
    public apiService: ApiService,
    public sharedService: SharedService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.userPersonalForm();
    this.userEmailForm();
    this.userPhoneForm();

  }



  userPersonalForm() {
    this.PersonalForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(22), speCharNotAllowed, spaceNotAllowed, numNotAllowed]],
      last_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(22), speCharNotAllowed, spaceNotAllowed, numNotAllowed]]
    });
  }

  get f() { return this.PersonalForm?.controls }

  onPersonal() {
    this.sub = true;
    if (this.PersonalForm?.invalid) {
      return;
    }
    const fval = this.PersonalForm?.value;
    const payload = { first_name: fval?.first_name, last_name: fval?.last_name }
    this.isLoading = true;
    this.apiService.personalUpdate(payload).pipe(takeUntil(this._unsubscribeAll), finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
      if (val?.status) {
        this.PersonalForm?.reset();
        this.sub = false;
      }
    }, (error: Error) => {
      this.isLoading = false;
    });
  }




  userEmailForm() {
    this.EmailForm = this.fb.group({
      email_address: ['', [Validators.required, emailValidator]],
    });
  }

  get f1() { return this.EmailForm?.controls }

  onEmail() {
    this.sub1 = true;
    if (this.EmailForm?.invalid) {
      return;
    }
    const fval = this.EmailForm?.value;
    const payload = { email: fval?.email_address }
    this.isLoading = true;
    this.apiService.emailUpdate(payload).pipe(takeUntil(this._unsubscribeAll), finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
      if (val?.status) {
        this.EmailForm?.reset();
        this.sub1 = false;
      }
    }, (error: Error) => {
      this.isLoading = false;
    });
  }




  userPhoneForm() {
    this.PhoneForm = this.fb.group({
      phone_number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12), speCharNotAllowed, spaceNotAllowed, onlyNumAllowed]],
    });
  }

  get f2() { return this.PhoneForm?.controls }

  onPhone() {
    this.sub2 = true;
    if (this.PhoneForm?.invalid) {
      return;
    }
    const fval = this.PhoneForm?.value;
    const payload = { phone: fval?.phone_number }
    this.isLoading = true;
    this.apiService.phoneUpdate(payload).pipe(takeUntil(this._unsubscribeAll), finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
      if (val?.status) {
        this.PhoneForm?.reset();
        this.sub2 = false;
      }
    }, (error: Error) => {
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }


}
