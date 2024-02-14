"use client";

import React, { Suspense, useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import Loading from "@/app/editor/loading";

const EditorInTabs = React.lazy(() => import("./EditorTabs"));

const Editor = () => {
  const project = useSelector((state) => state.editorProject.project);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 0);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [project]);

  const projectFiles = project.projectFiles || [];

  if (loading) {
    return <Loading loadingText="Loading your workspace..." />;
  }

  return (
    <Suspense fallback={<Loading loadingText="Loading your workspace..." />}>
      <EditorInTabs filesToOpen={projectFiles} />
    </Suspense>
  );
};

export default Editor;
