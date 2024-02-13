import React from "react";
import { GitBranch } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="_footer">
      <p>© 2024 Cat's Flow</p>
      <p className="_git">
        <GitBranch />
        B1.0.7
      </p>
    </footer>
  );
}
