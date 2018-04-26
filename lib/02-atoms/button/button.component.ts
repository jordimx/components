import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: 'button[mx-button]',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    host: {class: 'mx-button'},
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
    @Input() disabled: boolean = false;
}