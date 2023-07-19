import {
  ChangeEvent,
  ComponentProps,
  CSSProperties,
  ReactNode,
  useState,
} from 'react';

import Style from './style.module.scss';

type InputProps = {
  style?: CSSProperties;
  children?: ReactNode;
  label?: string;
};

export default function Input(props: InputProps & ComponentProps<'input'>) {
  const { label, children, style, ...otherProps } = props;

  return (
    <label className={Style.inputWrapper} style={props.style}>
      {props.label}
      <div>
        {props.children}
        <input {...otherProps} />
      </div>
    </label>
  );
}

Input.Multiline = function Textarea(
  props: InputProps & ComponentProps<'textarea'>
) {
  const { label, children, style, ...otherProps } = props;

  return (
    <label className={Style.inputWrapper} style={props.style}>
      {props.label}
      <div>
        {props.children}
        <textarea {...otherProps} />
      </div>
    </label>
  );
};

Input.FileInput = function FileInput(
  props: InputProps & ComponentProps<'input'>
) {
  const [preview, setPreview] = useState('');

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
  };

  const { style: cssStyle, ...otherProps } = props;

  return (
    <label className={Style.fileArea} style={cssStyle}>
      {props.label}
      {preview && <img src={preview} alt={'preview image'} />}
      <input type="file" {...otherProps} onChange={onFileChange} />
    </label>
  );
};
