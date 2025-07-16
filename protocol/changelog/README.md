# 📓 Changelog Folder – Protocol History Records

This folder stores versioned changelog records for individual protocol documents.

Each file tracks the evolution of a specific protocol artifact, including when major changes occurred and what decisions were involved in each version bump.

## 📘 Structure

Each changelog file follows this pattern:
- `## vX.Y.Z-[document-name]` – Version and target document
- `**Date:**` – Date of version change
- `**Status:**` – Status (e.g., Confirmed, Locked, Draft)
- `### 🔄 Changes:` – Bullet list of the core changes, additions, removals, or restructures

## 📍 Adding a New Changelog Entry

1. Add a new `## vX.Y.Z-[target-file]` header block.
2. Increment the version according to semver-like patterns:
   - Major = structural or conceptual overhaul
   - Minor = added significant section, changed intent
   - Patch = typo fixes, small word changes, file cleanup
3. Use **clear, action-based bullet points** under `Changes`.
4. Be sure to sync the matching version/tag at the top of the associated `.md` file.

## 🗂 Linked Files

This folder currently tracks:
- `stakeholder-evolution.md` → Evolution of stakeholder role matrix and influence logic.
