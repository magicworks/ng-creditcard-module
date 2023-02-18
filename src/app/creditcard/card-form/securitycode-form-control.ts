import { FormControl } from '@angular/forms';

export class SecuritycodeFormControl extends FormControl {
    override setValue (value: string | null, options: any) {
        if (!value) {
            super.setValue('', { ...options, emitModelToViewChange: true });
            return;
        }

        // neļauj ievadīt burtus
        if (value.match(/[^0-9|]/gi)) {
            super.setValue(this.value, { ...options, emitModelToViewChange: true });
            return;
        }

        if (value.length > 3) {
            super.setValue(this.value, { ...options, emitModelToViewChange: true });
            return;
        }

        super.setValue(value, {
            ...options,
            emitModelToViewChange: true
        });

    }
}
