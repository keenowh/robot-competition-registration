import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import tw from "twin.macro";
import { useForm } from "react-hook-form";
import "./ModalStyle.css";

// ------------------- Props inteface
interface Props {
  comp: {
    name: string;
    players: number;
  };
  isOpen: boolean;
  setModal: any;
}

// ------------- Style Blocks ---------------------

const StyledPlayerInput = tw.input`w-full mb-2 py-2 font-medium bg-gray-200 rounded-lg`;

const StyledLabel = tw.label`block text-gray-700 text-sm font-bold mb-2`;

const StyledForm = tw.form`w-full flex flex-col self-center  font-sans`;

const HeaderBlock = tw.h4`font-sans font-semibold mb-0`;

const SubHeaderBlock = tw.h5`font-sans mt-0`;

const InputWrap = tw.div`self-center w-9/12`;
// ------------------------------------------------

const ModalComponent: React.FC<Props> = ({ comp, isOpen, setModal }) => {
  const { register, handleSubmit } = useForm();

  const playerInput: Array<JSX.Element> = [];

  for (let i = 1; i < comp["players"] + 1; i++) {
    playerInput.push(
      <InputWrap key={i}>
        <StyledLabel>Player {i}</StyledLabel>
        <StyledPlayerInput
          type="text"
          placeholder={`Player ${i}`}
          name={`player${i}`}
          ref={register}
        />
      </InputWrap>
    );
  }

  const onSubmit = (data: any) => {
    console.log(data);
  };
  console.log("rendered");
  return (
    <Modal
      open={isOpen}
      center
      onClose={() => setModal(false)}
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
    >
      <HeaderBlock>Register your team</HeaderBlock>
      <SubHeaderBlock>{comp["name"]}</SubHeaderBlock>
      <hr />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {playerInput}
        <InputWrap>
          <StyledLabel>Coach</StyledLabel>
          <StyledPlayerInput
            type="text"
            placeholder="Coach"
            name={"coach"}
            ref={register}
          ></StyledPlayerInput>
        </InputWrap>
        <InputWrap>
          <StyledLabel>School</StyledLabel>
          <StyledPlayerInput
            type="text"
            placeholder="School"
            name={"school"}
            ref={register}
          ></StyledPlayerInput>
        </InputWrap>
      </StyledForm>
    </Modal>
  );
};

export default ModalComponent;
