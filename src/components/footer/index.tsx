import { useTranslation } from "../../providers/translation-provider";

const Footer = () => {
  const { translate } = useTranslation();

  return (
    <div>
      { translate('footer') }
    </div>
  );
}

export default Footer;
