import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('should return error', () => {
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
                error: '123',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('123');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
