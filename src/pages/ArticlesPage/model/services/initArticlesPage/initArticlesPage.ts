import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entities/Article';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { ArticlesPageSliceAction } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlePage/initArticlesPage',
    async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as ArticleSortField;
            const searchFromUrl = searchParams.get('search');

            if (orderFromUrl) {
                dispatch(ArticlesPageSliceAction.setOrder(orderFromUrl));
            }
            if (searchFromUrl) {
                dispatch(ArticlesPageSliceAction.setSearch(searchFromUrl));
            }
            if (sortFromUrl) {
                dispatch(ArticlesPageSliceAction.setSort(sortFromUrl));
            }

            dispatch(ArticlesPageSliceAction.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
