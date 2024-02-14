const webProjectFiles = [
  {
    _filename: "index",
    _fileId: "1",
    _filetype: "html",
    _fileExtension: ".html",
    _fileContents: "<!DOCTYPE html>\n",
    _dateCreated: "XXX",
    _dateLastModified: "XXX",
    _fileSize: 14,
    _advancedSettings: {
      __useBoilerPlate: true,
      __dependencies: [],
    },
  },
  {
    _filename: "style",
    _fileId: "2",
    _filetype: "css",
    _fileExtension: ".css",
    _fileContents: "body {\n}",
    _dateCreated: "XXX",
    _dateLastModified: "XXX",
    _fileSize: 8,
    _advancedSettings: {
      __useBoilerPlate: true,
      __dependencies: [],
    },
  },
  {
    _filename: "script",
    _fileId: "3",
    _filetype: "javascript",
    _fileExtension: ".js",
    _fileContents: "",
    _dateCreated: "XXX",
    _dateLastModified: "XXX",
    _fileSize: 0,
    _advancedSettings: {
      __useBoilerPlate: false,
      __dependencies: [],
    },
  },
];

export const initWebProject = (projectName = "Demo Web Project 01") => {
  return {
    projectName: projectName,
    projectFiles: webProjectFiles,
    projectId: projectName + "_" + new Date(),
    projectDescription: "",
    projectEditorSettings: {
      default: true,
    },
  };
};

export const initOtherProjects = (
  projectName = "Demo Project 01",
  fileName = "script",
  fileType,
  fileExtension,
  fileContents = ""
) => {
  return {
    projectName: projectName,
    projectFiles: [
      {
        _filename: fileName,
        _fileId: "1",
        _filetype: fileType,
        _fileExtension: fileExtension,
        _fileContents: fileContents,
        _dateCreated: "X",
        _dateLastModified: "X",
        _fileSize: 1,
        _advancedSettings: {
          __useBoilerPlate: true,
          __dependencies: [],
        },
      },
    ],
    projectId: projectName + "_" + new Date(),
    projectDescription: "",
    projectEditorSettings: {
      default: true,
    },
  };
};
