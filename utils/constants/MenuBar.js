const fileOptions = (openNewProjectModal) => [
  <button
    key="newProject"
    className="btn-menu-list"
    onClick={openNewProjectModal}
  >
    New Project
  </button>,
  <button key="openRecent" className="btn-menu-list">
    Open Recent
  </button>,
  <button key="saveAll" className="btn-menu-list">
    Save all
  </button>,
  <button key="exportProject" className="btn-menu-list">
    Export project
  </button>,
  <button key="publishGithub" className="btn-menu-list">
    Publish to Github
  </button>,
];

const editOptions = [
  <button key="undo" className="btn-menu-list">
    Undo
  </button>,
  <button key="redo" className="btn-menu-list">
    Redo
  </button>,
  <button key="findAndReplace" className="btn-menu-list">
    Find & Replace
  </button>,
];

const preferenceOptions = (toggleFullscreen, openEditorSettingsModal) => [
  <button key="changeTheme" className="btn-menu-list">
    Change UI Theme
  </button>,
  <button
    key="editorSettings"
    className="btn-menu-list"
    onClick={openEditorSettingsModal}
  >
    Editor Settings
  </button>,
  <hr key="divider" className="border-t-2 border-slate-800 my-3" />,
  <button
    key="toggleFullscreen"
    onClick={toggleFullscreen}
    className="btn-menu-list"
  >
    Fullscreen Mode
  </button>,
];

const runOptions = [
  <button key="livePreview" className="btn-menu-list">
    Live Preview
  </button>,
  <button key="openConsole" className="btn-menu-list">
    View Console
  </button>,
  <button key="openTerminal" className="btn-menu-list">
    Open Terminal
  </button>,
  <hr key="divider" className="border-t-2 border-slate-800 my-3" />,
  <button key="debugWithAI" className="btn-menu-list">
    Debug (using AI)
  </button>,
];

const helpOptions = [
  <button key="welcome" className="btn-menu-list">
    Welcome
  </button>,
  <button key="tutorials" className="btn-menu-list">
    How to - Tutorials
  </button>,
  <button key="reportIssue" className="btn-menu-list">
    Report An Issue
  </button>,
  <hr key="divider" className="border-t-2 border-slate-800 my-3" />,
  <button key="about" className="btn-menu-list">
    About
  </button>,
];

export { fileOptions, editOptions, preferenceOptions, runOptions, helpOptions };
