import './ContentArea.css';

function ContentArea({ title, description, longInput, placeholder, handleChange, value }) {
    return (
        <div className="content-area">
            <div className="content-header">
                <div className="content-title">{title}</div>
                {description === 'counter' ? <div className="description">{value.length}</div> : <div className="description">{description}</div>}
            </div>
            <div className="w-full">{longInput ? <textarea value={value} placeholder={placeholder} onChange={handleChange} className="text-area-input"></textarea> : <input value={value} onChange={handleChange} placeholder={placeholder} className="input" type="text" />}</div>
        </div>
    );
}

export default ContentArea;
