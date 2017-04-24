import { Injectable } from '@angular/core'
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'

@Injectable()
export class ListsService {

  constructor(public af: AngularFire) { }

  getLists(): FirebaseListObservable<any[]>  {
    return this.af.database.list('/lists')
  }

  getList(key: string): FirebaseObjectObservable<any> {
    return this.af.database.object(`/lists/${key}`)
  }

  getItems(key: string): FirebaseListObservable<any[]> {
    return this.af.database.list(`/lists/${key}/items`)
  }

}