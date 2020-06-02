import React from 'react';

const FormTextArea = ({ handleChange, label, ...otherProps }) => {
	return (
		<div className='container'>
			<textarea
				className='form-input'
				onChange={handleChange}
				{...otherProps}
			/>
			{label ? (
				<label
					className={`${
						otherProps.value.length ? 'shrink' : ''
					} form-input-label`}>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default FormTextArea;
