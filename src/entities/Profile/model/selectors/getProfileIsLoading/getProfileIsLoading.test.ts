import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    test('should work with filled sate', () => {
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
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
