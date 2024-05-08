
export const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused ? "var(--textPrimary-color)" : "var(--backgroundGrayLight-color)",
      border: state.isFocused ? "2px solid var(--primary-color)" : "2px solid var(--primary-color)",
      boxShadow: state.isFocused ? "none" : "none",
      "&:hover": {
        borderColor: "var(--primary-color)",
      },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "var(--primary-color)" : "white",
      color: state.isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: "var(--backgroundGrayLight-color)",
        color: "black",
      },
    }),
  };