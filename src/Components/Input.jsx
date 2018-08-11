import React from 'react';
import injectSheet from 'react-jss';


const InputWithClasses = ({
  classes,
  autoFocus,
  className,
  placeholder,
  isTextArea,
  type,
  hasError=true,
  onChange,
  value,
}) => (
  <div>
    {hasError && <p className={classes.inputRequired}>{placeholder} is required</p>}
    {

      isTextArea 
        ?
          <textarea
            className={[classes.input, classes.textArea, className].join(" ")}
            autoFocus={autoFocus}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          /> 
        : 
          <input
            autoFocus={autoFocus}
            className={[classes.input, className].join(" ")}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            type={type}
          />
    }
  </div>
);

const styles = {
  input: {
    height: 50,
    width: 400,
    border: '1px solid #E4E4E4',
    fontFamily: 'brandon-grotesque',
    fontSize: 18,
    outline: 'none',
    padding: 15,
    boxSizing: 'border-box',
    '&:focus': {
      border: '1px solid #F05A28',
    },
    '&::placeholder': {
      color: '#AFB1B4',
      fontFamily: 'brandon-grotesque',
      fontWeight: 400,
      fontSize: 18,
    }
  },
  textArea: {
    height: 150,
  },
  inputRequired: {
    color: '#F05A28',
    fontSize: 12,
    textTransform: 'uppercase'
  }
};

export default injectSheet(styles)(InputWithClasses);