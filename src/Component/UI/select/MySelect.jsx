import React from "react";

export const MySelect = ({options,defaultValue,value,onChance})=>{
    return(
        <select value={value} onChange={event=>onChance(event.target.value)}>
            <option disabled value="">{defaultValue}</option>
            {options.map(option=>
                <option key={option.value} value={option.value}>
                   {option.name}
                </option>
            )}
        </select>
    )
}