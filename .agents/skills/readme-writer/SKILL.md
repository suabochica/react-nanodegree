---
name: readme-writer
description: Use when the user asks to write, generate, or update a project README.
---

# README Blueprint Generator

## Objective
Generate a comprehensive, professional `README.md` for the current project.

## Instructions
1. Analyze the directory structure and core `.md` documentation to grasp the project's purpose.
2. Structure the document with clear headings: Value Proposition, Installation, Usage, Configuration, and Contribution Guidelines.
3. Exclude marketing fluff; keep the tone technical, objective, and clear.
4. Add relevant badges (e.g., build status, license) at the top.
5. use the image in format ![image](path/to/image.webp) if an image is present in the project `/public` directory.

## Constraints & Rules
- Never use "Here is your README" or filler dialogue in the final output.
- Always output the result directly to `README.md` (overwrite if it exists).
- Do not skip the Configuration or Contribution sections.

## Examples
User Prompt: "Generate a README for this repository."
Agent Action: Parse code -> Write to `README.md` -> Output success status.
