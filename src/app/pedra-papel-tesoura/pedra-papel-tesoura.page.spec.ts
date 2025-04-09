import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedraPapelTesouraPage } from './pedra-papel-tesoura.page';

describe('PedraPapelTesouraPage', () => {
  let component: PedraPapelTesouraPage;
  let fixture: ComponentFixture<PedraPapelTesouraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PedraPapelTesouraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
