import React, { useEffect, useRef } from 'react';
import { TInput } from './styles';
import { useField } from '@unform/core';

export default function TextArea({ name, style, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = '' } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: '_lastNativeText',
      getValue(ref) {
        return ref._lastNativeText || '';
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        ref._lastNativeText = value;
      },
      clearValue(ref) {
        ref.setNativeProps({ text: '' });
        ref._lastNativeText = '';
      },
    });
  }, [fieldName, registerField]);
  return (
    <TInput
      style={style}
      ref={inputRef}
      multiline
      defaultValue={defaultValue}
      {...rest}
    />
  );
}