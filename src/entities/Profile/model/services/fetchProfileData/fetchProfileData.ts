import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const {
            extra, rejectWithValue,
        } = thunkApi;

        try {
            const response = await extra.api.get<Profile>('/profile');

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
