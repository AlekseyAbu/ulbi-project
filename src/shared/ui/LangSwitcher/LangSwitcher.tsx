import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string,
    short?: boolean
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage((i18n.language === 'ru' ? 'en' : 'ru'));
    };
    return (
        <Button
            type="button"
            onClick={toggle}
            theme={ButtonTheme.CLEAR}
        >
            { t(short ? 'lang' : 'shortLang') }
        </Button>
    );
};
