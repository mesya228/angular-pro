## 1 Children
`View` - what we see in the component itself.
`Content` - what we get from parent component.
`@ViewChild/@ViewChildren`
    Get any view elements by `#` or by import component to element: `import { TestComponent } from '../test/test.component'`.
    And then get it by: `@ViewChildren(TestComponent) components: QueryList<TestComponent>`.
`Renderrer`
    Technology that allow to work with DOM such as set attributes, create elements etc.
## 2 Dynamic rendering
`ComponentFactoryResolver`
    Component for creating factories that can create components by:
    `const testFactory = this.resolver.resolveComponentFactory(TestComponent)`.
    And than get element in which one you will push created elements: `@ViewChild('insertBlock', { read: ViewContainerRef }) insertBlock: ViewContainerRef`.
    Create element: `this.insertBlock.createComponent(TestComponent)`
`ComponentRef`
    Variable that allow you to get even not created block: `component: ComponentRef<TestComponent>`
    Create element: `this.component = this.authForm.createComponent(testFactory, 0)` - where 0 is element number
    And work with it:
    `this.component.instance.anyAction.subscribe()`
    `this.component.instance.someData = 'Test'`
## 3 Templates
By creating template in html: `<ng-template #tmpl let-name let-location="location"> {{name}}: {{location}} </ng-template>`
    And block where you want to create this template: `<div #entry></div>`
    You can create and insert block in `#entry` div: `this.entry.createEmbeddedView(this.tmpl, { $implicit: 'Sergey Miller', location: 'Kyiv, Ukraine'})`
And also you can just use `ng-container` with attribute `[ngTemplateOutlet]="tmpl"` and dont render any blocks by `createEmbeddedView`
    If you use this method you can pass data in container by attribute: `[ngTemplateOutletContext]="data"`
## 4 ViewEncapsulation
`ViewEncapsulation`
    Defines how styles in component are going to iteract with other components styles
    `Emulated` - default value, styles doesn't iteract with other styles
    `Native` - component have own styles and dont work with root styles
    `None` - styles in component shared to all components
## 5 ChangeDetection
`ChangeDetection`
    Component property that allow to change component change detection
    `Default` - component checks all changes, even object properties
    `OnPush` - component checks only `=` detections, i.e. dont checks for object properties changes, only for full object changes
## 6 Directives
`Directives`
    You can work with directives by using methods by `@Host...` methods where host is block to which you apply directive: 
    `@HostBinding('class') classes: string` - work with hostElement attributes
    `@HostListener('input', ['$event.target']) onkeydown(target: HTMLInputElement)` - work with hostElement actions
    Also you can user directives for creating elements such as tooltips by getting in constructor: `constructor(private element: ElementRef)`
    You can get directive functions in html by adding exportAs property into `@Directive`: `selector: '[tooltip]', exportAs: 'tooltip'`
    and than you can pass data to directive or save directive by using exportAs title to `#` and work with it like this: 
    `tooltip="3 digits, back of your card" #passTooltip="tooltip"` 
    work with directives functions like this:
     `(mouseove="passTooltip.show()" (mouseout)="passTooltip.hide()"`
## 7 Structural Directive
Allow to create your own directive such as `*ngFor`
    For create you need to write selector in directive: `selector: '[myFor][myForOf]'` 
    You can work with collection by get `private view: ViewContainerRef` and get templete by: `private template: TemplateRef<any>`
    and add myForOf Input in directive: `@Input() set myForOf(collection)`
    where you can get collection and work with it by createEmbeddedView for every element:
    `this.view.createEmbeddedView(this.template, {$implicit: item,index: index})`
## 8 Filter
Filter allow to filter, or edit data by using it like this: `let item of items | filter:query` or `{{title | filter}}`
## 9 Forms
`FormBuilder` - easy work with forms, get values, validate etc.
Create group or array : `this.formBuilder.group([])` `this.formBuilder.array([])`
Create field with validators: `field: ['', [Validators.minLength(3), Validators.maxLength(10), Validatros.patters('/REGEX/'), Validators.required]]`
In html you must add `formGroup` to form element, `formGroupName` to formGroup block and `formControlName` to any input element.

    