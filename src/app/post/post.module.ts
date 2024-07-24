import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostRoutingModule } from './post-routing.module';
import { TableModule } from 'primeng/table';
import { PostlistComponent } from './postlist/postlist.component';

@NgModule({
  declarations: [PostlistComponent],
  imports: [CommonModule, PostRoutingModule, TableModule],
})
export class PostModule {}
