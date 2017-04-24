import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MdButtonModule } from '@angular/material'
import { MdSidenavModule } from '@angular/material'
import { MdIconModule } from '@angular/material'
import { MdCheckboxModule } from '@angular/material'
import {MdListModule} from '@angular/material'
import {MdCardModule} from '@angular/material'
import {MdInputModule} from '@angular/material'
import {MdToolbarModule} from '@angular/material'

const module = [
  MdToolbarModule,
  MdListModule,
  MdCardModule,
  MdSidenavModule,
  MdButtonModule,
  MdIconModule,
  MdCheckboxModule,
  MdInputModule,
]

@NgModule({
  imports: [
    CommonModule, module
  ],
  exports: [
    module
  ],
  declarations: []
})
export class SharedModule { }