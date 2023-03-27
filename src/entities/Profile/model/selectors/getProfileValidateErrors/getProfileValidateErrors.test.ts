import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

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
                validateErrors: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_USER_DATA,
                    ValidateProfileError.INCORRECT_AGE,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema))
            .toEqual([
                ValidateProfileError.SERVER_ERROR,
                ValidateProfileError.INCORRECT_USER_DATA,
                ValidateProfileError.INCORRECT_AGE,
            ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
