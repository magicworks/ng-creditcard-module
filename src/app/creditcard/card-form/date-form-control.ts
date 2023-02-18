import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
    override setValue (value: string | null, options: any) {
        if (!value) {
            super.setValue('', { ...options, emitModelToViewChange: true });
            return;
        }

        // neļauj ievadīt burtus
        if (value.match(/[^0-9\/]/gi)) {
            super.setValue(this.value, { ...options, emitModelToViewChange: true });
            return;
        }

        if (value.length > 5) {
            super.setValue(this.value, { ...options, emitModelToViewChange: true });
            return;
        }

        if (value.length === 3 && this.value.length === 4) {
            super.setValue(value.slice(0, 2), { ...options, emitModelToViewChange: true });
            return;
        }


        if (value.length === 2) {
            super.setValue(value + '/', {
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
