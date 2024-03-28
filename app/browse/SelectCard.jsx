import React from 'react'

const SelectCard = ({ title, value, onChange, options, isAll }) => {

// Function to transform the value of the option according to requirements
const transformOption = (option) => {
    // If the length of the option is less than 3, convert to uppercase and remove "_"
    if (option.length <= 3) {
        return option.toUpperCase();
    } 
    return option.replace(/_/g, ' ');
};

    return (
        <div className="mb-3 text-sm md:text-lg">
            <h2 className='font-bold mb-1'>{title}</h2>
            <select className="w-full capitalize py-4 px-2 bg-transparent border border-customGray rounded-lg" aria-label={title} value={value} onChange={onChange}>
                {isAll && (<option value="all">All</option>)}
                {options?.map((option) => (
                    <option key={option} value={option}>{transformOption(option)}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectCard