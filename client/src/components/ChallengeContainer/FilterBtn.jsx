import React from 'react';

const FilterBtn = () => {
    return(
        <select name=' filtrar ' >
            <option disabled selected> filtrar </option>
            <option value="Energía Renovable">Energía Renovable</option>
            <option value="Salud">Salud</option>
            <option value="Social">Social</option>
        </select>
    )
}

export default FilterBtn;