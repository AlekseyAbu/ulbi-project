import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string,
    src?: string,
    size?: number,
    alt?: string,
}

export const Avatar = ({
    className, src, size, alt,
}: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        height: size || 100,
        width: size || 100,
    }), [size]);

    return (
        <div className={classNames('', {}, [className])}>
            <img
                src={src}
                alt={alt}
                style={styles}
                className={classNames(cls.Avatar, mods, [className])}
            />
        </div>
    );
};
