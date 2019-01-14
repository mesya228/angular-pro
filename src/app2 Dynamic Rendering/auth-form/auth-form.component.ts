import { Component,
  Output,
  EventEmitter,
  AfterContentInit,
  ContentChildren,
  QueryList, 
  AfterViewInit,
  ViewChildren,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  Renderer} from '@angular/core';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { AuthMessageComponent } from '../auth-message/auth-message.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.sass']
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  isAuthRemember: boolean = false;

  constructor(private cd: ChangeDetectorRef,
              private renderer: Renderer) {
  }

  formTitle: string = 'Login';

  @ViewChild('email') emailField: ElementRef;

  
  @ViewChildren(AuthMessageComponent) messageComponents: QueryList<AuthMessageComponent>;
  @ViewChildren(AuthRememberComponent) authRememberComponents: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();
  
  formSubmit(formValues) {
    formValues['remember'] = this.isAuthRemember;
    this.submitted.emit(formValues);
  }

  ngAfterContentInit() {
  }

  ngAfterViewInit() {
    this.authRememberComponents.forEach(component => {
      component.checked.subscribe((checked: boolean) => {
        this.isAuthRemember = checked;
      });
    });
    this.renderer.setElementAttribute(this.emailField.nativeElement, 'placeholder', 'Enter your email');
    // this.emailField.nativeElement.setAttribute('placeholder', 'Enter your email');
    // this.emailField.nativeElement.focus();
    this.messageComponents.forEach(component => {
      component.days = 30;
    });
    this.cd.detectChanges();
  }

}
