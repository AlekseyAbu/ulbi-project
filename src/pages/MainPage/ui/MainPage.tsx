import React from 'react';
import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <BugButton />
            {t('MainPage')}
        </div>
    );
};

export default MainPage;
