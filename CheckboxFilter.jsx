import React from 'react';

const CheckboxFilter = ({ categories, selectedCategories, onChange }) => {
    return (
        <div>
            {categories.map((category) => (
                <label key={category}>
                    <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => onChange(category)}
                    />
                    {category}
                </label>
            ))}
        </div>
    );
};

export default CheckboxFilter;
