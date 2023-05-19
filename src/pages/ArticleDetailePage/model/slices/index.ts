import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsPageRecommendationsReducer } from './ArticleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from './ArticleDetailsCommentsSlice';
import { ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsPageRecommendationsReducer,
});
