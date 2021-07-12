import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function loadStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}