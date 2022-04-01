import {locale} from '~language';
export type Keys = keyof typeof locale.en;
import {useIntl} from 'react-intl';
export const useAltaIntl = () => {
  const intl = useIntl();
  const formatMessage = (key: keyof Keys): string => {
    return intl.formatMessage({id: key});
  };
  const translate = (key: string) => {
    return intl.formatMessage({id: key, defaultMessage: key});
  };

  return {
   intl,
   formatMessage,
   translate,
  };
};
