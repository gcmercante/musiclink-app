import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[musiclinkLoggedIn]'
})
export class LoggedInDirective implements OnInit{

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) { }

  ngOnInit(): void { 
    let tag: string = `<musiclink-nav></musiclink-nav>`;
    let loggedin: boolean = true;
    if(!loggedin) {
      tag = `<musiclink-login></musiclink-login>`
    }
    this.container.createEmbeddedView(this.template, { $implicit: tag })
  }
}
