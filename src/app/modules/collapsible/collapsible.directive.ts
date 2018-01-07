import { Directive, Input, OnChanges, SimpleChanges, AfterViewInit, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxCollapsible]'
})
export class CollapsibleDirective implements OnChanges, AfterViewInit {

  @Input() accordion: false;
  @Input() selected: string[] = [];

  @Input() openHeaderClass = 'header-open';
  @Input() openContentClass = 'content-open';
  @Input() collapsedHeaderClass = 'header-collapsed';
  @Input() collapsedContentClass = 'content-collapsed';

  private headers: HTMLElement[] = [];
  private contents: HTMLElement[] = [];

  constructor(private viewContainer: ViewContainerRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.accordion) { this.selected = this.selected.slice(0, 1); }
    this.updateView();
  }

  ngAfterViewInit() {
    const element = this.viewContainer.element.nativeElement;

    this.headers = [].slice.call(element.querySelectorAll('[collapsible-header]'));
    this.contents = [].slice.call(element.querySelectorAll('[collapsible-content]'));

    this.headers.forEach(el => {
      el.addEventListener('click', () => {

        const key = el.getAttribute('collapsible-header');
        if (key === null) { return; }

        if (this.accordion) {
          this.toggleAccordion(key);
        } else {
          this.toggleCollapsible(key);
        }

        this.updateView();
      });

    });

    this.updateView();
  }

  private toggleCollapsible(key: string) {
    const index = this.selected.indexOf(key);
    if (index === -1) {
      this.selected.push(key);
    } else {
      this.selected.splice(index, 1);
    }
  }

  private toggleAccordion = (key: string) => {
    if (this.selected[0] === key) {
      this.selected = [];
    } else {
      this.selected = [key];
    }
  }

  private updateView() {

    this.headers.forEach(el => {
      const key = el.getAttribute('collapsible-header');
      const collapse = this.selected.indexOf(key) === -1;
      this.toggleClasses(el, this.openHeaderClass, this.collapsedHeaderClass, collapse);
    });

    this.contents.forEach(el => {
      const key = el.getAttribute('collapsible-content');
      const collapse = this.selected.indexOf(key) === -1;
      this.toggleClasses(el, this.openContentClass, this.collapsedContentClass, collapse);
    });

  }

  private toggleClasses = (element: HTMLElement, openClass: string, collapsedClass: string, isCollapsed = true) => {

    const allClasses = element.className.split(' ');

    const classToAdd = isCollapsed ? collapsedClass : openClass;
    const addIndex = allClasses.indexOf(classToAdd);
    if (addIndex === -1) { allClasses.push(classToAdd); }

    const classToRemove = isCollapsed ? openClass : collapsedClass;
    const removeIndex = allClasses.indexOf(classToRemove);
    if (removeIndex > -1) { allClasses.splice(removeIndex, 1); }

    element.className = allClasses.join(' ');
  }


}
