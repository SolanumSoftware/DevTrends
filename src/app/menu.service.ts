import { EventEmitter, Injectable } from '@angular/core';
import { Category } from './categorys.model';

@Injectable({ providedIn: 'root' })
export class MenuService {
    public MenuEvent = new EventEmitter<boolean>();
    public OptionTaped = new EventEmitter<Category>();
}