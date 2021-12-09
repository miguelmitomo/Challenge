import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { FormatNifService } from '../services/format-nif.service';

@Directive({ selector: '[formatNif]' })
export class FormatNifDirective implements OnInit {
  @Input('formatNif') nif: String = "";
  @Input() set formatType(tipo: string) {
    this.renderer.setProperty(
      this.elRef.nativeElement,
      'innerText',
      this.formatNifService.formatDataByOptionValue(tipo, this.nif)
    );
  }
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private formatNifService: FormatNifService
  ) {}

  ngOnInit(): void {
  }
}
