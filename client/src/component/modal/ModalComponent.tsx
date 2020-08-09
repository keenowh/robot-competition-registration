import React, { CSSProperties } from "react";
import Modal from "react-modal";
import tw from "twin.macro";
import { useForm } from "react-hook-form";

interface Props {
  comp: {
    name: string;
    players: number;
  };
  isOpen: boolean;
}

const overlayDesign: CSSProperties = {
  position: "absolute",
  inset: "4em",
  border: "1px solid rgb(204, 204, 204)",
  background: "rgb(255, 255, 255) none repeat scroll 0% 0%",
  overflow: "auto",
  borderRadius: "4px",
  outline: "currentcolor none medium",
  padding: "20px",
};

const StyledPlayerInput = tw.input`w-full mb-2 py-2 font-medium bg-gray-200 rounded-lg`;

const StyledLabel = tw.label`block text-gray-700 text-sm font-bold mb-2`;

const ModalComponent: React.FC<Props> = ({ comp, isOpen }) => {
  const { register, handleSubmit } = useForm();

  const playerInput: Array<JSX.Element> = [];

  for (let i = 1; i < comp["players"] + 1; i++) {
    playerInput.push(
      <div>
        <StyledLabel>Player {i}</StyledLabel>
        <StyledPlayerInput
          key={i}
          type="text"
          placeholder={`Player ${i}`}
          name={`player${i}`}
          ref={register}
        />
      </div>
    );
  }

  const onSubmit = (data: any) => {
    console.log(data);
  };
  console.log("rendered");
  return (
    <Modal
      tw="bg-gray-400"
      isOpen={isOpen}
      style={{ overlay: {}, content: overlayDesign }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {playerInput}
        <div>
          <StyledLabel>Coach</StyledLabel>
          <StyledPlayerInput
            type="text"
            placeholder="Coach"
            name={"coach"}
            ref={register}
          ></StyledPlayerInput>
        </div>
        <div>
          <StyledLabel>School</StyledLabel>
          <StyledPlayerInput
            type="text"
            placeholder="School"
            name={"school"}
            ref={register}
          ></StyledPlayerInput>
        </div>
      </form>
    </Modal>
  );
};

export default ModalComponent;
