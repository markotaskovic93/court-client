export interface FilterProps {
  className?: string;
  filter: { [key: string]: string };
  checked?: boolean;
  onFilterSelect: (key: string, value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ 
  className,
  filter,
  checked,
  onFilterSelect
}) => {
  const filterKeyValue = Object.entries(filter);

  return (
    <>
      { filterKeyValue.map(([key, value]) => (
        <div key={key} className={className} onClick={() => onFilterSelect(key, value)} style={{ color: checked ? 'red' : 'black' }}>
          <span></span>
          <h4>{ value }</h4>
        </div>
      )) }
    </>
  );
}

export default Filter;
