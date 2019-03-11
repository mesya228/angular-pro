import { Component } from '@angular/core';
import { FileSizePipe } from './file-size.pipe';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('FileSizePipe', () => {

  describe('Shallow FileSizePipe test', () => {
    @Component({
      template: `
        Size: {{size | fileSize:suffix}}
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
      component = fixture.componentInstance;
      el = fixture.nativeElement;
    });

    it('should convert bytes to megabytes', () => {
      fixture.detectChanges();
      expect(el.textContent).toContain('117.74MB');
      component.size = 1029281;
      fixture.detectChanges();
      expect(el.textContent).toContain('0.98MB');
    });

    it('should use the default extension when not supplied', () => {
      fixture.detectChanges();
      expect(el.textContent).toContain('117.74MB');
    });

    it('should override the extension when supplied', () => {
      component.suffix = 'MyExt';
      fixture.detectChanges();
      expect(el.textContent).toContain('117.74MyExt');
    });
  });

  describe('Isolate FileSizePipe test', () => {
    const pipe = new FileSizePipe();

    it('should convert bytes to megabytes', () => {
      expect(pipe.transform(123456789)).toBe('117.74MB');
      expect(pipe.transform(987654321)).toBe('941.90MB');
    });

    it('should use the default extension when not supplied', () => {
      expect(pipe.transform(123456789)).toBe('117.74MB');
      expect(pipe.transform(987654321)).toBe('941.90MB');
    });

    it('should override the extension when supplied', () => {
      expect(pipe.transform(123456789, 'MyExt')).toBe('117.74MyExt');
      expect(pipe.transform(987654321, 'MyExt')).toBe('941.90MyExt');
    });
  });

});
