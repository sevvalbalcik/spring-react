
export function Input(props) {
const { id, label, type, error, onChange,defaultValue } = props;

    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input 
            id={id}
            type={type}
            className={error ? "form-control is-invalid" : "form-control"}
            onChange={onChange} 
            defaultValue={defaultValue}
            />
            <div className="invalid-feedback">
                {error}
            </div>
        </div>
    )
}