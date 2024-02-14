import React, { useState } from "react";
import {
  CustomSelectInput,
  SimpleCheckbox,
  SimpleSelectInput,
} from "../FormElements";
import { fontSizes, tabSizes, themes } from "@/utils/constants/TextEditor";
import { useDispatch, useSelector } from "react-redux";
import { updateEditorSettings } from "@/providers/redux/stores/editorSettings";

const toTitleCase = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

const convertToObjects = (array) => {
  return array.map((option) => ({
    name:
      typeof option == "string"
        ? toTitleCase(option.replace(/_/g, " "))
        : option,
    value: option,
  }));
};

const EditorSettingsBody = () => {
  const dispatch = useDispatch();

  const editorSettings = useSelector((state) => state.editorSettings.settings);
  const updateEditorParams = (value, name) => {
    dispatch(updateEditorSettings({ [name]: value }));
  };

  return (
    <main>
      <div className="">
        <form name="editorSettingsForm" id="editorSettingsForm">
          <div className="md:flex gap-20">
            <div className="flex-1">
              <div className="mb-4">
                <p className="text-xs">Theme:</p>
                <CustomSelectInput
                  name="theme"
                  options={convertToObjects(themes)}
                  onChangeEvent={updateEditorParams}
                  selectedIndex={themes.indexOf(editorSettings.theme)}
                />
              </div>

              <div className="mb-4">
                <p className="text-xs">Font size:</p>
                <CustomSelectInput
                  name="fontSize"
                  options={convertToObjects(fontSizes)}
                  onChangeEvent={updateEditorParams}
                  selectedIndex={fontSizes.indexOf(editorSettings.fontSize)}
                />
              </div>

              <div className="mb-4">
                <p className="text-xs">Tab size:</p>
                <CustomSelectInput
                  name="tabSize"
                  options={convertToObjects(tabSizes)}
                  onChangeEvent={updateEditorParams}
                  selectedIndex={tabSizes.indexOf(editorSettings.tabSize)}
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-4 py-3 px-0">
              <SimpleCheckbox
                name="enableBasicAutocompletion"
                label="Enable Autocomplete"
                checked={editorSettings.enableBasicAutocompletion}
                onChangeEvent={updateEditorParams}
              />
              <SimpleCheckbox
                name="showLineNumbers"
                label="Show Line Numbers"
                checked={editorSettings.showLineNumbers}
                onChangeEvent={updateEditorParams}
              />
              <SimpleCheckbox
                name="highlightActiveLine"
                label="Highlight Active Line"
                checked={editorSettings.highlightActiveLine}
                onChangeEvent={updateEditorParams}
              />
              <SimpleCheckbox
                name="showPrintMargin"
                label="Show Print Margin"
                checked={editorSettings.showPrintMargin}
                onChangeEvent={updateEditorParams}
              />
              <SimpleCheckbox
                name="showGutter"
                label="Show Gutter"
                checked={editorSettings.showGutter}
                onChangeEvent={updateEditorParams}
              />
              <SimpleCheckbox
                name="wrapEnabled"
                label="Word Wrap"
                checked={editorSettings.wrapEnabled}
                onChangeEvent={updateEditorParams}
              />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EditorSettingsBody;
