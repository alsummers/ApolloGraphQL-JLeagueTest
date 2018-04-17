import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    NgbModule.forRoot()
    
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule { 
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({uri: 'https://w5jq4wkwrz.lp.gql.zone/graphql'}),
      cache: new InMemoryCache()
    })
  }
}
