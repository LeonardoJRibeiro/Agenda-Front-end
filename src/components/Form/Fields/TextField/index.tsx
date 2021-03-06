import React, { memo, } from 'react';
import { TextField as TextFieldMUI, StandardTextFieldProps as TextFieldPropsMUI, } from '@material-ui/core';
import useFormField from '../../Hooks/useFormField';
import validacao from '../../../../recursos/Validacao';

interface TextFieldProps extends TextFieldPropsMUI {
  name: string;
  noValidate?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({ name, onChange, ...props }) => {
  const { handleInputChange, ref, valid, value } = useFormField(name, validacao.validarTexto, undefined, props.noValidate, props.required, onChange)

  return (
    <TextFieldMUI
      onChange={handleInputChange}
      value={value}
      error={!valid}
      inputRef={ref}
      helperText={
        ref.current &&
        props.required
        && !ref.current.value.length
        && !valid
        && "Campo obrigatório."
      }
      {...props}
    />
  );
}

export default memo(TextField);