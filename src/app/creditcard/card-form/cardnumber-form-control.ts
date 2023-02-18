import { FormControl } from '@angular/forms';

export class CardnumberFormControl extends FormControl {
    override setValue (value: string | null, options: any) {
        if (!value) {
            super.setValue('', { ...options, emitModelToViewChange: true });
            return;
        }

        // prevents alphabet
        if (value.match(/[^0-9\s]/g)) {
            super.setValue(this.value, { ...options, emitModelToViewChange: true });
            return;
        }

        // cleans out wrong spacing
        value = value.replace(/\s/g, "").split('').map((val, i) => {
            if (i === 3 || i === 7 || i === 11) {
                return val + ' ';
            }
            return val;
        }).join('');

        if (value.length > 19) {
            super.setValue(this.value, { ...options, emitModelToViewChange: true });
            return;
        }

        if (
            (value.length === 5 && this.value.length === 6) ||
            (value.length === 10 && this.value.length === 11) ||
            (value.length === 15 && this.value.length === 16)
        ) {
            super.setValue(value.slice(0, value.length - 1), { ...options, emitModelToViewChange: true });
            return;
        }

        if (
            value.length === 4 ||
            value.length === 9 ||
            value.length === 14
        ) {
            super.setValue(value + ' ', {
                ...options,
                emitModelToViewChange: true
            });
            return;
        }

        super.setValue(value, {
            ...options,
            emitModelToViewChange: true
        });

    }
}
