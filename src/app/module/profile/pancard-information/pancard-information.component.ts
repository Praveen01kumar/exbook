import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Subject, finalize, takeUntil } from 'rxjs';
import { pageRoute } from 'src/app/shared/constant/route.const';
import { ApiService } from 'src/app/shared/services/api-service';
import { SharedService } from 'src/app/shared/services/shared-service';
import { numNotAllowed, onlyNumAllowed, spaceNotAllowed, speCharNotAllowed } from 'src/app/shared/services/validistor';

@Component({
  selector: 'app-pancard-information',
  templateUrl: './pancard-information.component.html',
  styleUrls: ['./pancard-information.component.scss'],
  providers: [MessageService]
})
export class PANCardInformationComponent implements OnInit, OnDestroy {
  newPanForm: FormGroup | any;
  sub: boolean = false;
  isLoading: boolean = false;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(
    public apiService: ApiService,
    public sharedService: SharedService,
    private fb: FormBuilder,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.onAInitializForm();
    this.callOnit();
  }

  callOnit() { }

  onAInitializForm() {
    this.newPanForm = this.fb.group({
      card_number: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(16), speCharNotAllowed, spaceNotAllowed, onlyNumAllowed]],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(22), speCharNotAllowed, numNotAllowed]],
      card_picture: ['', [Validators.required]],
      accept_term: ['', [Validators.required]]
    });
  }

  get f() { return this.newPanForm?.controls }

  onNewPan() {
    this.sub = true;
    if (this.newPanForm?.invalid) {
      return;
    }
    const fval = this.newPanForm?.value;
    const payload = {
      card_number: fval?.card_number,
      name: fval?.name,
      card_picture: fval?.card_picture,
      accept_term: fval?.accept_term,
    }
    this.isLoading = true;
    this.apiService.panUpload(payload).pipe(takeUntil(this._unsubscribeAll), finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
      if (val?.status) {
        this.newPanForm?.reset();
        this.sub = false;
      }
    }, (error: Error) => {
      this.isLoading = false;
    });
  }

  gotoRoute() {
    window.open(pageRoute?.termsofuse, '_blank');
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }


}
