import { FormControl } from '@angular/forms';

export class NameFormControl extends FormControl {
    override setValue (value: string | null, options: any) {
        if (!value) {
            super.setValue('', { ...options, emitModelToViewChange: true });
            return;
        }

        // neļauj ievadīt ciparus
        if (value.match(/[^a-z\s]/gi)) {
            super.setValue(this.value, { ...options, emitModelToViewChange: true });
            return;
        }

        if (value.length > 20) {
            super.setValue(this.value, { ...options, emitModelToViewChange: true });
            return;
        }

        super.setValue(value, {
            ...options,
            emitModelToViewChange: true
        });

    }
}
