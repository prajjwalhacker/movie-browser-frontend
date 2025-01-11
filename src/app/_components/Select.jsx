import React from 'react';
import Select from 'react-select';

const MyDropdown = ({ options=[], handleChange=()=>{}, placeholder='', value='' }) => {


  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#fff', 
      color: 'black',   
      fontSize: 12
    }),
    option: (provided) => ({
      ...provided,
      color: 'black',
      backgroundColor: 'white',
      '&:hover': {
        backgroundColor: '#f1f1f1',
      },
      fontSize: 12
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'black', 
      fontSize: 12
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'black', 
      fontSize: 12
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#fff',
      fontSize: 12
    }),
  };


  return (
    <div className="dropdown">
      <Select 
        options={options} 
        onChange={handleChange} 
        value={options.filter((item) => item.value === value)[0]}
        placeholder={placeholder}
        styles={customStyles}
      />
    </div>
  );
};

export default MyDropdown;
