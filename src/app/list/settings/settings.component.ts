import { Component, Inject, OnInit } from '@angular/core'
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/startWith'
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'
import { UsersService } from '../../providers/users.service'
import { ListsService } from '../../providers/lists.service'
import { FormControl } from '@angular/forms'


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  filteredUsers: Observable<any[]>
  emailControl: FormControl
  users: any
  usersList: any

  constructor(private dialogRef: MdDialogRef<SettingsComponent>, @Inject(MD_DIALOG_DATA) public data: any,
  public service: UsersService, public serviceList: ListsService) {
    this.users = this.service.getUsersObject()
    this.service.getUsers().subscribe(u => this.usersList = u)
    this.emailControl = new FormControl()
  }

  ngOnInit(): void {
    this.filteredUsers = this.emailControl.valueChanges
      .startWith(null)
      .map(val => this.filter(val) )
  }

  filter(val: string): string[] {
    return this.usersList.filter(user => new RegExp(`^${val}`, 'gi').test(user.email))
  }

  deleteUser(userID) {
    this.serviceList.getUsersList(this.data.key).remove(userID)
    if (this.data.uid === userID) {
      this.dialogRef.close()
    }
  }

  addEmail(event) {
    this.service.getUsers().subscribe( tmp => {
      const u = tmp.find(t => t.email === event.target.value)
      if (u) {
        this.service.addCustomKey(this.data.key, u.id, u.email)
        event.target.value = ''
      }
    })
  }

}
