import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string,

}

export const Navbar = ({ className }: NavbarProps) => {
    const { t, i18n } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>
                    {t('MainPage')}
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>{t('aboutPage')}</AppLink>
            </div>
        </div>
    );
};
