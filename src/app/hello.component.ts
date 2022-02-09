import { ContentChildren, Component, QueryList } from '@angular/core';
import { Target } from './target.component';

@Component({
  selector: 'hello',
  template: `<ng-content></ng-content>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @ContentChildren(Target, { descendants: true })
  list: QueryList<Target> | null = null;

  ngAfterContentInit() {
    console.log('Hello', this.list);
  }
}
