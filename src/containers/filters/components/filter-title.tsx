
export interface FilterTitle {
  title: string;
  className?: string;
}

const FiltersTitle: React.FC<FilterTitle> = ({ 
  title,
  className
}) => (
  title ? (
    <h3 className={className}>{title}</h3>
  ) : null
);

export default FiltersTitle;

