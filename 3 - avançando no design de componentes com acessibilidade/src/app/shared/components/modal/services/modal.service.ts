import { TemplateRef } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {

  public open(config: ModalConfig): ModalRef {
    console.log('open called');
    return new ModalRef();
  }
}

export interface ModalConfig {
  templateRef: TemplateRef<any>;
  title: string;
}

export class ModalRef {

  public close(): void {
    console.log('close called');
  }
}
