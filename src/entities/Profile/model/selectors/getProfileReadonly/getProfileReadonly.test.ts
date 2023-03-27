import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileValidateErrors.test', () => {
    test('should return readonly', () => {
        const data = {
            first: 'Aleksey',
            lastname: 'Abu',
            age: 25,
            currency: Currency.USD,
            country: Country.Russia,
            city: 'Moscow',
            username: 'admin',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
