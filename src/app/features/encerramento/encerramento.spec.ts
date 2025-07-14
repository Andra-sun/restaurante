import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encerramento } from './encerramento';

describe('Encerramento', () => {
  let component: Encerramento;
  let fixture: ComponentFixture<Encerramento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encerramento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encerramento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
