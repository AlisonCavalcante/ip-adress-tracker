import { Component, OnInit } from '@angular/core';
import { IpService } from 'src/services/ip.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ipService: IpService) { }

  ngOnInit(): void {
  }
  search(event: any){
    this.ipService.get().subscribe(res => {console.log(res)});
  }
}
