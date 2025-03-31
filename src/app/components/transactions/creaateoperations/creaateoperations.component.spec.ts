import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaateoperationsComponent } from './creaateoperations.component';

describe('CreaateoperationsComponent', () => {
  let component: CreaateoperationsComponent;
  let fixture: ComponentFixture<CreaateoperationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreaateoperationsComponent]
    });
    fixture = TestBed.createComponent(CreaateoperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
