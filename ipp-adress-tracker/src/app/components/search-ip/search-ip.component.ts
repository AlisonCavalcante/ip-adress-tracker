import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-ip',
  templateUrl: './search-ip.component.html',
  styleUrls: ['./search-ip.component.css']
})
export class SearchIpComponent implements OnInit {

  textSearch: string = '';
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  search(){
    this.emmitSearch.emit(this.textSearch);
  }
}
