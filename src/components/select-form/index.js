import React from "react";
import { Select } from "antd";

export const SelectForm = React.memo(
  ({ placeholder, options, setSelect, name, value, position, onSubmit }) => {
    return (
      <Select
        value={value}
        showSearch={false}
        className="w-100"
        name={name}
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={(value, option) => {
          setSelect(position ? option.label : option.value);
        }}
        filterOption={(input, option) =>
          (option?.label.toLowerCase() ?? "").includes(input.toLowerCase())
        }
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={options}
      />
    );
  }
);
