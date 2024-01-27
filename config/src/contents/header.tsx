import { Divider } from "@chakra-ui/react";
import React from "react";

export function Header() {
  return (
    <header className="_header">
      <a
        href="https://catsflow.com/?target=toolkit-metatags"
        target="_blank"
        rel="noopener noreferrer"
        title="Cat's Flow"
      >
        <img src="/config/assets/logo.svg" alt="Logo da Cat's Flow" />
      </a>
      <Divider orientation="vertical" />
      <h1>MetaTags ToolKit</h1>
    </header>
  );
}
