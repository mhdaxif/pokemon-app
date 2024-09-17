import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { materiaModules } from '../../../material.module';
 
@Component({
  standalone: true,
  imports: [materiaModules],
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() totalCount: number = 0;
  @Output() pageChange: EventEmitter<PageEvent> = new EventEmitter(); 

  // Initial paginator values
  pageSizeOptions: number[] = [10, 20, 50, 100];
  pageSize: number = 20;
  pageIndex: number = 0; // Angular Material paginator is zero-based index
  
  constructor() { }

  ngOnInit(): void { }

  onPageChanged(event: PageEvent): void {
    this.pageChange.emit(event);
  } 
}
