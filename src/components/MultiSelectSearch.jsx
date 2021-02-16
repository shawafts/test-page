import React from "react";
import Select from "react-select";
import _ from "lodash";

const MultiSelectSearch = ({
  options,
  value,
  label,
  keys,
  onSelect,
  singleSelect,
  style = { width: "220px" },
  search = true,
  isClearable = false,
  optionFormatter = () => ({}),
}) => {
  const onChange = (selectedList) => {
    let data;
    // console.log("SelectedList:", selectedList);
    if (!singleSelect) {
      data = selectedList?.length > 0 ? selectedList.map((a) => a.value) : [];
    } else {
      data = selectedList ? selectedList.value : "";
    }
    onSelect({ target: { value: data } });
  };

  const styles = {
    container: (provided) => ({
      ...provided,
      ...style,
    }),
    control: (provider) => ({
      ...provider,
      borderRadius: "2px",
      borderColor: "#aaa",
      color: "black",
      ..._.pick(style, ["height", "width", "minHeight"]),
    }),
    option: (provided, { data }) => ({
      ...provided,
      color: "black",
      ...optionFormatter(data),
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "black",
    }),
  };

  const theme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      // primary: "#07889b",
      primary: "#26a69a",
      primary75: "#26a69a",
      primary50: "#66b9bf",
      primary25: "#66b9bf",
    },
  });

  let valueObject = [];
  if (value && singleSelect)
    valueObject = value
      ? options
          .filter((op) => op[keys[0]] === value)
          .map((op) => ({ value: op[keys[0]], label: op[keys[1]] }))
      : [];
  else if (value && !singleSelect)
    valueObject = value
      ? options
          .filter((op) => value.includes(op[keys[0]]))
          .map((op) => ({ value: op[keys[0]], label: op[keys[1]] }))
      : [];

  return (
    <Select
      value={valueObject}
      placeholder={label}
      search={search}
      options={options.map((op) => ({
        value: op[keys[0]],
        label: op[keys[1]],
      }))}
      onChange={onChange}
      isMulti={!singleSelect}
      styles={styles}
      theme={theme}
      isClearable={isClearable}
    />
  );
};

export default MultiSelectSearch;
