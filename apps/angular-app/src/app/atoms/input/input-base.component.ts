import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';

type Status = 'error' | 'success' | 'warning';

@Directive()
export abstract class FlwInputBaseComponent<T, V> implements OnInit {
  private _style?: 'type1';
  public get style(): 'type1' {
    return this._style || 'type1';
  }
  @Input()
  public set style(v: 'type1' | undefined) {
    this._style = v;
    this.updateCssClass();
  }

  @Input()
  type?: T;

  @Input()
  placeholder?: string;

  private _status?: Status;
  public get status(): Status | undefined {
    return this._status;
  }
  @Input()
  public set status(v: Status | undefined) {
    this._status = v;
    this.updateCssClass();
  }

  @Input()
  value?: V;

  @Output()
  valueChange: EventEmitter<V> = new EventEmitter<V>();

  cssClass: Record<string, boolean> = {};

  ngOnInit(): void {
    this.updateCssClass();
  }

  abstract onValueChange(value: Event): void;

  private updateCssClass(): void {
    this.cssClass = {
      [`input_${this.style}`]: true,
      [`input_${this.style}--${this.status}`]: !!this.status,
    };
  }
}
