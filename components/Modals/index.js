import React from "react";
import ModalLayout from "./ModalLayout";
import NewProjectBody from "./NewProject";
import EditorSettingsBody from "./EditorSettings";

const NewProjectModal = () => {
  return (
    <ModalLayout
      title={"Create New Project"}
      modalId={"createNewProject"}
      modalBody={() => <NewProjectBody />}
    />
  );
};

const EditorSettingsModal = () => {
  return (
    <ModalLayout
      title={"Customize Editor"}
      modalId={"editorSettings"}
      modalBody={() => <EditorSettingsBody />}
    />
  );
};

const ExportProjectModal = () => {
  return <div>ExportProjectModal</div>;
};

export { NewProjectModal, EditorSettingsModal, ExportProjectModal };
