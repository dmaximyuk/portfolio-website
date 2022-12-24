import { FC } from "react";

import { IntlProvider } from "react-intl";

import { localeEn, localeRu } from "../../../engine/locale";

import { ILocaleProviderProps } from ".";

const messages = { en: localeEn, ru: localeRu };

// ! WARNING: Not set auto setup lang and change lang

export const LocaleProvider: FC<ILocaleProviderProps> = (props) => {
  const locale: "en" | "ru" = "en";
  const defaultLocale = "en";
  const localeMessages = messages[locale];

  return (
    <IntlProvider
      messages={localeMessages}
      locale={locale}
      defaultLocale={defaultLocale}
    >
      {props.children}
    </IntlProvider>
  );
};
