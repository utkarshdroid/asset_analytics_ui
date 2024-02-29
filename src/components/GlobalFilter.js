import React,{useState} from 'react';





function debounce(func, wait) {
    let timeout;
  
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
  
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };


  // The debounce function is unchanged, remains the same as you provided
  
  export const GlobalFilter = ({ filter, setFilter }) => {
    const [value, setValue] = useState('');
  
    // Create a debounced version of the function that sets the global filter
    const onChange = debounce(value => {
      setFilter(value || undefined); // Use setFilter instead of filter
    }, 300); // Debounce for 300 ms
  
    return (
      <input
        type="text"
        className="form-control" // Bootstrap class for styling
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder="Search..."
      />
    );
  };
  
  export default GlobalFilter;
  