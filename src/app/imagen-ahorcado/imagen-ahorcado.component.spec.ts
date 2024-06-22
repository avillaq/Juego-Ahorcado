import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenAhorcadoComponent } from './imagen-ahorcado.component';

describe('ImagenAhorcadoComponent', () => {
  let component: ImagenAhorcadoComponent;
  let fixture: ComponentFixture<ImagenAhorcadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenAhorcadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenAhorcadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
