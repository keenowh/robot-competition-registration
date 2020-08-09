import React, { useState } from "react";
import tw from "twin.macro";
import ModalComponent from "../modal/ModalComponent";
import Modal from "react-modal";

const Block = tw.div`bg-white text-white font-bold rounded-lg border shadow-lg xs:w-9/12 md:max-w-lg`;

const CompForm = tw.form`xs:p-4 md:px-8`;

const CompLabel = tw.label`uppercase tracking-wide text-gray-700 text-sm font-bold mb-2`;

const SelectDiv = tw.div`relative`;

const SelectInp = tw.select`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500`;

const SelectDropDown = tw.div`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700`;

const DropDownSVG = tw.svg`fill-current h-4 w-4`;

const CopyrightBlock = tw.p`text-center px-4 text-gray-500 text-xs`;

const SubmitButton = tw.button`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`;

const competitionData = [
  { name: "Line Tracing", players: 2 },
  { name: "A-mazing Challenge JR", players: 2 },
  { name: "A-mazing Challenge SR", players: 2 },
  { name: "Smart Factory", players: 2 },
  { name: "Captain Court", players: 2 },
  { name: "Sumo Basic", players: 2 },
  { name: "Sumobot 3KG", players: 2 },
  { name: "Sumo Lego", players: 2 },
  { name: "Grab and Collect", players: 2 },
  { name: "Maze Robot", players: 2 },
  { name: "Sumo Derby", players: 5 },
];

const CompOptions = competitionData.map((competition, index) => {
  return (
    <option key={index} value={competition.name}>
      {competition.name}
    </option>
  );
});

const FirstForm = () => {
  const [modalisOpen, setModalOpen] = useState(false);
  const [select, setSelect] = useState({ name: "", players: 2 });

  function adjuster(e: any): void {
    let info: any = competitionData.find((element) => element.name == e);
    setSelect(info);
  }
  function openModal(e: any) {
    e.preventDefault();
    setModalOpen(true);
  }

  return (
    <Block>
      <CompForm>
        <CompLabel>State</CompLabel>
        <SelectDiv>
          <SelectInp
            onChange={(e) => adjuster((e.target as HTMLSelectElement).value)}
          >
            {CompOptions}
          </SelectInp>
          <SelectDropDown>
            <DropDownSVG
              xmlns={"http://www.w3.org/2000/svg"}
              viewBox={"0 0 20 20"}
            >
              <path
                d={
                  "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                }
              />
            </DropDownSVG>
          </SelectDropDown>
        </SelectDiv>
        <SubmitButton onClick={(e) => openModal(e)}>Proceed</SubmitButton>

        

        <ModalComponent isOpen={modalisOpen} comp={select} />
      </CompForm>
      <CopyrightBlock>
        &copy;2020 De La Salle Araneta University.<br></br> All rights reserved.
      </CopyrightBlock>
    </Block>
  );
};

export default FirstForm;
