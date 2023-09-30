import React from "react";
import { Select } from "antd";

export const SelectForm = React.forwardRef(
  ({ placeholder, options, setSelect, name, ref, value }) => {
    return (
      <Select
        value={value}
        showSearch={false}
        className="w-100"
        name={name}
        ref={ref}
        // defaultValue={""}
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={(value, option) => {
          setSelect(option.value);
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
