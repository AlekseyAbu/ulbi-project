import React from 'react';
import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
    const { t, i18n } = useTranslation();

    return (
        <Page>
            <BugButton />
            {t('MainPage')}
        </Page>
    );
};

export default MainPage;
