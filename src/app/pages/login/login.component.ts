import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, finalize, takeUntil } from 'rxjs';
import { pageRoute } from 'src/app/shared/constant/route.const';
import { ApiService } from 'src/app/shared/services/api-service';
import { SharedService } from 'src/app/shared/services/shared-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup | any;
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
    this.userLoginForm();

  }

  userLoginForm() {
    this.LoginForm = this.fb.group({
      email_or_phone_number: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(22)]]
    });
  }

  get f() { return this.LoginForm?.controls }

  onLogin() {
    this.sub = true;
    if (this.LoginForm?.invalid) {
      return;
    }
    const fval = this.LoginForm?.value;
    const payload = { phone_number: fval?.phone_number }
    this.isLoading = true;
    this.apiService.loginUser(payload).pipe(takeUntil(this._unsubscribeAll), finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
      if (val?.status) {
        this.router.navigate(['/login']);
        this.LoginForm?.reset();
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