import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const AboutPage = () => {
    const { t, i18n } = useTranslation();
    return (
        <Page>
            {t('aboutPage')}
        </Page>
    );
};

export default AboutPage;
