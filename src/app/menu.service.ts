import { EventEmitter, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MenuService {
    public MenuEvent = new EventEmitter<boolean>();
}