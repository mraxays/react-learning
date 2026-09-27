function Dropdown({ title, options, idAndName, func }) {
    return (
        <div className="select-wrapper">
            <select id={idAndName} name={idAndName} onChange={(e) => func(e.target.value)}>
                <option value="" hidden>
                    {title}
                </option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                    </option>
                ))}
            </select>

            <div className="select-arrow">
                <i className="ri-arrow-down-s-line text-lg" />
            </div>
        </div>
    );
}

export default Dropdown;