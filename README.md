# Children
`View` - what we see in the component itself
`Content` - what we get from parent component by ng-content
`@ViewChild/@ViewChildren`
    Get any view elements by `#` or by import component to element: `import { TestComponent } from '../test/test.component'` 
    And then get it by: `@ViewChildren(TestComponent) components: QueryList<TestComponent>`
`Renderrer`
    Technology that allow to work with DOM such as set attributes, create elements etc.
## Dynamic rendering
`ComponentFactoryResolver`
    Component for creating factories that can create components by:
    `const testFactory = this.resolver.resolveComponentFactory(TestComponent)`
    And than get element in which one you will push created elements: `@ViewChild('insertBlock', { read: ViewContainerRef }) insertBlock: ViewContainerRef`
    Create element: `this.insertBlock.createComponent(TestComponent)`
`ComponentRef`
    Variable that allow you to get even not created block: `component: ComponentRef<TestComponent>`
    Create element: `this.component = this.authForm.createComponent(testFactory, 0)` - where 0 is element number
    And work with it:
    `this.component.instance.anyAction.subscribe()`
    `this.component.instance.someData = 'Test'`
## Templates
By creating template in html: `<ng-template #tmpl let-name let-location="location"> {{name}}: {{location}} </ng-template>`
    And block where you want to create this template: `<div #entry></div>`
    You can create and insert block in `#entry` div: `this.entry.createEmbeddedView(this.tmpl, { $implicit: 'Sergey Miller', location: 'Kyiv, Ukraine'})`
And also you can just use `ng-container` with attribute `[ngTemplateOutlet]="tmpl"` and dont render any blocks by `createEmbeddedView`
    If you use this method you can pass data in container by attribute: `[ngTemplateOutletContext]="data"`
## ViewEncapsulation
`ViewEncapsulation`
