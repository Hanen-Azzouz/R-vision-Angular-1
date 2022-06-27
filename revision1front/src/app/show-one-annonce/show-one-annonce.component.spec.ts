import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneAnnonceComponent } from './show-one-annonce.component';

describe('ShowOneAnnonceComponent', () => {
  let component: ShowOneAnnonceComponent;
  let fixture: ComponentFixture<ShowOneAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOneAnnonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOneAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
