import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Member, Query } from '../types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  members: Observable<Member[]>;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.members = this.apollo.watchQuery<Query>({
      query: gql`
        query JL {
          JL {
            id
            name
            alias
            age
            nationality
            race
          }
        }
      `
    })
    .valueChanges
    .pipe(map(result => result.data.JL))
  }

}
