import React, { useState } from "react";
import {
  CustomSelectInput,
  SimpleButton,
  SimpleTextField,
} from "../FormElements";

import { FaGlobe } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoPython } from "react-icons/io5";
import { VscJson } from "react-icons/vsc";
import { TbBrandCSharp, TbFileTypeJsx, TbFileTypeXml } from "react-icons/tb";
import { DiMysql } from "react-icons/di";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  initOtherProjects,
  initWebProject,
} from "@/utils/constants/EditorFIlesMock";
import { useDispatch } from "react-redux";
import { createNewProject } from "@/providers/redux/stores/editorProject";
import { closeModal } from "@/providers/redux/stores/modalStates";

const options = [
  {
    name: "Web Page (HTML, CSS, JS)",
    description:
      "A simple webpage with the basic HTML, CSS and JavaScript files.",
    icon: <FaGlobe size={20} />,
    value: "webProject",
  },
  {
    name: "JavaScript",
    description: "Dummy did something here",
    icon: <IoLogoJavascript size={20} />,
    value: "js",
  },
  {
    name: "PHP Script",
    description: "Dummy did something here",
    // icon: <BsFiletypePhp size={20} />,
    icon: <FaPhp size={20} />,
    value: "php",
  },
  {
    name: "Python Script",
    description: "Dummy did something here",
    icon: <IoLogoPython size={20} />,
    value: "python",
  },
  {
    name: "JSON",
    description: "Dummy did something here",
    icon: <VscJson size={20} />,
    value: "json",
  },
  {
    name: "XML",
    description: "Dummy did something here",
    icon: <TbFileTypeXml size={20} />,
    value: "xml",
  },
  {
    name: "JSX",
    description: "Dummy did something here",
    icon: <TbFileTypeJsx size={20} />,
    value: "jsx",
  },
  {
    name: "MySQL",
    description: "Dummy did something here",
    icon: <DiMysql size={20} />,
    value: "mysql",
  },
  {
    name: "C#",
    description: "Dummy did something here",
    icon: <TbBrandCSharp size={20} />,
    value: "csharp",
  },
];

const NewProjectBody = () => {
  const dispatch = useDispatch();

  const [newProjectFormData, setNewProjectFormData] = useState({});

  const initEditorProject = (project) => {
    dispatch(createNewProject(project));
  };

  const setProjectInitValues = (value, name) => {
    setNewProjectFormData({ ...newProjectFormData, [name]: value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(newProjectFormData);

    let project = {};

    switch (newProjectFormData.projectType) {
      case "webProject":
        project = initWebProject(newProjectFormData.projectName);
        break;

      default:
        project = initOtherProjects(
          newProjectFormData.projectName,
          "script",
          newProjectFormData.projectType,
          "." + newProjectFormData.projectType
        );
        break;
    }

    initEditorProject(project);
    dispatch(closeModal({ modalId: "createNewProject" }));
  };

  return (
    <main>
      <div className="min-h-[20vh]">
        <form
          autoComplete="false"
          name="newProjectForm"
          className="flex flex-col gap-8"
          id="newProjectForm"
          onSubmit={handleForm}
        >
          <div className="">
            <p className="text-xs">Select project type:</p>
            <CustomSelectInput
              name="projectType"
              options={options}
              onChangeEvent={setProjectInitValues}
            />
          </div>
          <div className="">
            <SimpleTextField
              placeholder="Enter project name..."
              label="What would you like to call this project?"
              name="projectName"
              onChangeEvent={setProjectInitValues}
              autocomplete={false}
            />
          </div>
          <div className="w-full text-end">
            <SimpleButton
              label="Create Project"
              icon={<MdKeyboardArrowRight size={20} />}
              type="submit"
            />
          </div>
        </form>
      </div>
    </main>
  );
};

export default NewProjectBody;
