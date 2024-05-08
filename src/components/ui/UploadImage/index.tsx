import { useRef } from "react";

import {
  InputContainer,
  StyledInput,
  UploadButton,
  UploadImageIcon,
  UploadText,
} from "./styles";

const UploadImage = ({
  setImage,
}: {
  setImage: (files: File) => void;
}): JSX.Element => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <InputContainer>
      <UploadButton onClick={handleButtonClick}>
        <UploadImageIcon />
        <UploadText> Click here to upload a picture.</UploadText>
      </UploadButton>
      <StyledInput
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        ref={fileInputRef}
      />
    </InputContainer>
  );
};

export default UploadImage;
