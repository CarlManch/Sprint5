const CONVERSIONS = {
        C: (f) => (f - 32) * (5 / 9), // de °F a °C: (°F - 32) * (5/9).
        F: (c) => c * (9 / 5) + 32,// de °C a °F: (°C * 9/5) + 32.
};
    
const VALID_UNITS = ['C', 'F'];
    
export const convertTo= (from, to, value) =>{
        if (value.length === 0) return '';
        else if (from === to) return value;
        else if (VALID_UNITS.includes(to)) return CONVERSIONS[to](value);
        else return '';
};
    
const Limites ={
    C:100,
    F:212,
}

export const isWaterBoiling = (unit, value) => 
        value>=Limites[unit];

