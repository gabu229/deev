import React from "react";
import AceEditor from "react-ace";
import { useDispatch, useSelector } from "react-redux";
import { updateFileContents } from "@/providers/redux/stores/editorProject";
import { languages, themes } from "@/utils/constants/TextEditor";

// import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";
languages.forEach((lang) => {
  require(`ace-builds/src-noconflict/mode-${lang}`);
  require(`ace-builds/src-noconflict/snippets/${lang}`);
});

themes.forEach((theme) => require(`ace-builds/src-noconflict/theme-${theme}`));
/*eslint-disable no-alert, no-console */

const TextEditor = ({
  name,
  editorContents = "",
  languageMode = "html",
  theme = "monokai",
  style = {},
}) => {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.editorProject.project);
  const editorSettings = useSelector((state) => state.editorSettings.settings);

  const handleEditorChange = (newContent) => {
    dispatch(
      updateFileContents({
        _fileId: name,
        _fileContents: newContent,
      })
    );
  };

  return (
    <div className="w-full overflow-x-hidden">
      <AceEditor
        name={name}
        width="100vw"
        height="89vh"
        mode={languageMode}
        style={style}
        wrapEnabled={editorSettings.wrapEnabled}
        focus
        value={editorContents}
        onChange={handleEditorChange}
        theme={editorSettings.theme}
        // enableBasicAutocompletion={editorSettings.enableBasicAutocompletion}
        // enableLiveAutocompletion={editorSettings.enableLiveAutocompletion}
        // highlightActiveLine={editorSettings.highlightActiveLine}
        // showGutter={editorSettings.showGutter}
        // enableSnippets={true}

        setOptions={{
          ...editorSettings,
        }}
      />
    </div>
  );
};

export default TextEditor;
