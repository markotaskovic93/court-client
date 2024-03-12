import { useTranslation } from "../../../../../providers/translation-provider";

interface INav {
  className?: string;
}

const Nav: React.FC<INav> = ({
  className
}) => {
  const { translate } = useTranslation();

  return (
    <ul className={className}>
      <li><span>{ translate('theme') }</span></li>
      <li>{ translate('shop') }</li>
      <li>{ translate('product') }</li>
      <li>{ translate('blog') }</li>
      <li>{ translate('pages') }</li>
      <li>{ translate('trend') }</li>
      <li>{ translate('collections') }</li>
      <li>{ translate('buy') }</li>
    </ul> 
  ); 
}

export default Nav;
