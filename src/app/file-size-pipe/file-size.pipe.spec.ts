import { Component } from '@angular/core';
import { FileSizePipe } from './file-size.pipe';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { 
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('FileSizePipe', () => {

  describe('Shallow FileSizePipe test', () => {
    @Component({
      template: `
        Size: {{size | filesize:suffix}}
      `
    })
    class TestComponent {
      suffix;
      size = 123456789;
    }

    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let el: HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          FileSizePipe,
          TestComponent
        ]
      });
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance
      el = fixture.nativeElement;
    });
  });

  describe('Isolate FileSizePipe test', () => {
    const pipe = new FileSizePipe();

    it('should convert bytes to megabytes', () => {
      expect(pipe.transform(123456789)).toBe('117.74MB');
      expect(pipe.transform(987654321)).toBe('941.90MB');
    });

    it('should use the default extension when now supplied', () => {
      expect(pipe.transform(123456789)).toBe('117.74MB');
      expect(pipe.transform(987654321)).toBe('941.90MB');
    });

    it('should override the extension when supplid', () => {
      expect(pipe.transform(123456789, 'MyExt')).toBe('117.74MyExt');
      expect(pipe.transform(987654321, 'MyExt')).toBe('941.90MyExt');
    });
  });
});
