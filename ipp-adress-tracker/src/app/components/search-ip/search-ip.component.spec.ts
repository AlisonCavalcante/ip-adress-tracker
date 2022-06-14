import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIpComponent } from './search-ip.component';

describe('SearchIpComponent', () => {
  let component: SearchIpComponent;
  let fixture: ComponentFixture<SearchIpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchIpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
