import { Component, ViewChild, ViewContainerRef, AfterContentInit, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterContentInit {

  component: ComponentRef<AuthFormComponent>;

  @ViewChild('authForm', { read: ViewContainerRef }) authForm: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  loginUser(user) {
    console.log('Login', user)
  }

  destroyComponent() {
    this.component.destroy();
  }

  moveComponent() {
    console.log(this.component);
    if (!this.component.hostView.destroyed) {
      this.authForm.move(this.component.hostView, 1);
    }
    console.log(this.component);
  }

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);

    this.authForm.createComponent(authFormFactory);

    this.component = this.authForm.createComponent(authFormFactory, 0);
    this.component.instance.submitted.subscribe(this.loginUser);
    this.component.instance.formTitle = 'Register';
  }
  
}
