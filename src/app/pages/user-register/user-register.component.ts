import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, finalize, takeUntil } from 'rxjs';
import { pageRoute } from 'src/app/shared/constant/route.const';
import { ApiService } from 'src/app/shared/services/api-service';
import { SharedService } from 'src/app/shared/services/shared-service';
import { onlyNumAllowed, spaceNotAllowed, speCharNotAllowed } from 'src/app/shared/services/validistor';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  RegisterForm: FormGroup | any;
  sub: boolean = false;
  isLoading: boolean = false;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  pageRoute: any = pageRoute;

  constructor(
    private router: Router,
    public apiService: ApiService,
    public sharedService: SharedService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.userRegisterForm();

  }

  userRegisterForm() {
    this.RegisterForm = this.fb.group({
      phone_number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12), speCharNotAllowed, spaceNotAllowed, onlyNumAllowed]]
    });
  }

  get f() { return this.RegisterForm?.controls }

  onRegister() {
    this.sub = true;
    if (this.RegisterForm?.invalid) {
      return;
    }
    const fval = this.RegisterForm?.value;
    const payload = { phone_number: fval?.phone_number }
    this.isLoading = true;
    this.apiService.registorUser(payload).pipe(takeUntil(this._unsubscribeAll), finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
      if (val?.status) {
        this.router.navigate(['/login']);
        this.RegisterForm?.reset();
        this.sub = false;
      }
    }, (error: Error) => {
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  gotoRoute(url: string, value: string) {
    if (value === 'term_policy') {
      window.open(url, '_blank');
    } else {
      this.router.navigate([url]);
    }
  }

}
