import React from "react";
import { IntlProvider } from "react-intl";

import { localeEn, localeRu } from "../../../engine/locale";

interface ILocaleProvider {
  children: React.ReactNode;
}

const messages = { en: localeEn, ru: localeRu };

// ! WARNING: Not set auto setup lang and change lang

const LocaleProvider: React.FC<ILocaleProvider> = ({ children }) => {
  const locale: "en" | "ru" = "en";
  const defaultLocale = "en";
  const localeMessages = messages[locale];

  return (
    <IntlProvider
      messages={localeMessages}
      locale={locale}
      defaultLocale={defaultLocale}
    >
      {children}
    </IntlProvider>
  );
};

export default LocaleProvider;
