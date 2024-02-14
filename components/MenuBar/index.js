"use client";

import React from "react";
import { useState } from "react";
import MenuItem from "./MenuItem";
import { EditorSettingsModal, NewProjectModal } from "../Modals";
import {
  editOptions,
  fileOptions,
  helpOptions,
  preferenceOptions,
  runOptions,
} from "@/utils/constants/MenuBar";

import { useDispatch, useSelector } from "react-redux";
import { toggleFullscreen } from "@/providers/redux/stores/browserObject";
import { openModal } from "@/providers/redux/stores/modalStates";

const MenuBar = () => {
  const dispatch = useDispatch();

  const openNewProjectModal = () => {
    dispatch(openModal({ modalId: "createNewProject" }));
  };
  const openEditorSettingsModal = () => {
    dispatch(openModal({ modalId: "editorSettings" }));
  };

  const handleToggleFullscreen = () => {
    dispatch(toggleFullscreen());
  };

  return (
    <div className="flex gap-2">
      <MenuItem title="File" items={fileOptions(openNewProjectModal)} />
      <MenuItem title="Edit" items={editOptions} />
      <MenuItem title="Run" items={runOptions} largeScreenOnly />
      <MenuItem
        title="Preferences"
        items={preferenceOptions(
          handleToggleFullscreen,
          openEditorSettingsModal
        )}
      />
      <MenuItem title="Help" items={helpOptions} largeScreenOnly={true} />

      <NewProjectModal />
      <EditorSettingsModal />
    </div>
  );
};

export default MenuBar;
