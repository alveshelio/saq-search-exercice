import * as React from "react";
import TextField from "@material-ui/core/TextField";

type InputMargin = "dense" | "none" | "normal";

interface GenericInputProps {
  label: string;
  placeholder: string;
  id: string;
  multiline?: boolean;
  rowsMax?: number;
  rows?: number;
  margin?: InputMargin;
  InputProps?: any;
  defaultValue?: string;
  InputLabelProps?: any;
}

interface GenericInputState {
  value: string;
}

class GenericInput extends React.PureComponent<GenericInputProps, GenericInputState> {
  state = {
    value: "",
  };

  render() {
    const {
      label,
      placeholder,
      id,
      multiline,
      rowsMax,
      rows,
      margin,
      InputProps,
      defaultValue,
      InputLabelProps,
    } = this.props;

    return (
      <TextField
        label={label}
        placeholder={placeholder}
        id={id}
        multiline={multiline}
        rowsMax={rowsMax}
        rows={rows}
        margin={margin}
        InputProps={InputProps}
        defaultValue={defaultValue}
        InputLabelProps={InputLabelProps}
      />
    );
  }
}

export default GenericInput;
