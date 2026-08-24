import {locale as rootLocale} from "next/root-params";
import {hasLocale} from "next-intl";
import {getRequestConfig} from "next-intl/server";
import {routing} from "@/i18n/routing";

export default getRequestConfig(async () => {
    const requested = await rootLocale();
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    return {
        locale,
        messages: (await import(`@/messages/${locale}.json`)).default
    };
});