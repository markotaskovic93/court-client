import { useTranslation } from "../../providers/translation-provider";
import { languages } from "../../configs/lang-translations";

interface ILangSwitcher {
  className?: string;
}

const LangSwitcher: React.FC<ILangSwitcher> = ({
  className
}) => {
  const { language, changeLanguage } = useTranslation();

  const options = languages.map(lang => <option value={lang} key={lang}>{ lang }</option>)

  return (
    <select className={className} defaultValue={language} onChange={(e) => changeLanguage(e.target.value)}>
      { options }
    </select> 
  )
};

export default LangSwitcher;
