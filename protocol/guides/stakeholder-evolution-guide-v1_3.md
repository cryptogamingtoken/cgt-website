## [v1.3.0] – 2025-07-16
- Final version before adding Artifact Derivation and Capability Mapping sections
- Used during `pre‑R‑1z` sprint planning
- Lockpoint for Affordance → Artifact framework v1


# 📘 Stakeholder Evolution Sprint Guide
**File:** `stakeholder-evolution-guide.md`  
**Purpose:** Master PM reference for launching, executing, and concluding each stakeholder evolution sprint in the CGT Protocol.  
**Last Updated:** 2025-07-07  
**Version:** `v1.3.0-stakeholder-evolution-guide`

---

## 🎯 Purpose of This Guide

This document provides a reusable framework for running each stakeholder evolution sprint. It ensures that every evolution level, from initial mapping to completion, follows a high-precision, low-degradation process.  

Each sprint can stand alone as a separate chat, ensuring clean handoffs and traceability.

---

## 🔁 Sprint Lifecycle Overview

Each stakeholder evolution sprint follows the same structured path:

```
→ Level N Matrix  
→ Level N → N+1 Prep  
→ Dependencies → Indicators → Unlock Conditions  
→ Stakeholder feedback & interlink  
→ Lock under Misassumption Clearance  
→ Changelog Entry  
→ Prep for Level N+1  
→ Ending Prompt → Master PM Review
```

---

## 🔍 Step Breakdown

### 1. **Level N Matrix**
Define the current capabilities of all stakeholders at Level N.  
This matrix includes affordances, readiness state, and ecosystem roles.

### 2. **Level N → N+1 Prep**
For each stakeholder, define what’s needed to unlock their next level.  
Include: unlock conditions, readiness indicators, ecosystem dependencies.

### 3. **Dependency Mapping**
Show how stakeholder level-ups rely on each other.  
Helps clarify gating mechanics and community-wide readiness.

### 4. **Feedback Loop**
Interlink all stakeholders. Refine logic based on:
- Stakeholder dependency crossovers
- Potential misalignments
- System tension or advantage signals

### 5. **Misassumption Audit**
Run a check to ensure no stakeholder is given affordances prematurely.
Clear inconsistencies and only lock once validated.

### 6. **Changelog Entry**
Log version tag, sprint ID, and summary of what’s been completed.  
Reference the primary `.md` file (e.g., `stakeholder-evolution.md`).

### 7. **Next-Level Prep**
Clarify which stakeholders are on the edge of evolving.  
Document expectations, logic tensions, or upcoming roles in the next sprint.

### 8. **Ending Prompt**
Summarize completed work. Provide files, version IDs, and naming logic.  
Send to Master PM. Once approved, sprint closes and a new one begins.

---

## 📁 Naming Convention

Each chat is named after the level(s) it spans:

- `pre‑R‑1z – Stakeholder Evolution Matrix – L0, L1 & L2 Prep`
- `pre‑R‑1z – Stakeholder Evolution Matrix – L2 → L3 Prep`
- `pre‑R‑1z – Stakeholder Evolution Matrix – L3 Only (Sublevels)`
- `pre‑R‑1z – Stakeholder Evolution Matrix – L3 → L5 Multi-Jump`

Edge cases:
- If no stakeholder reaches the next level → name remains the same (e.g., “L3 Only (Sublevels)”)
- If only one evolves → still progress naming forward to reflect evolution (e.g., “→ L4 Prep”)
- Group evolution → name reflects highest achieved level in that chat

---

## 📎 File Location Index

- `stakeholder-evolution.md` → Matrix & progression  
- `stakeholder-evolution-guide.md` → This sprint process guide  
- `changelog/stakeholder-evolution.md` → Version and progress log  

---

## 🔧 Implementation Notes

- Keep each sprint in its own chat  
- Never assume a stakeholder will reach the next level until proven  
- Allow sublevel (e.g., 3.1 → 3.2) evolution to occur without forcing a level-up  
- Master PM may resume or pause sprints as needed  
- Use `✅` to confirm sprint closures

---

---

## 📐 Readiness Evaluation Template – L1 → L2

**Introduced:** 2025-07-02  
**Version:** `v1.1.0-stakeholder-evolution-guide`  
**Sprint Reference:** `pre‑R‑1z – Stakeholder Evolution Matrix – L2 → L3 Prep`  
**Use Case:** Evaluate whether each stakeholder has satisfied Level 1 criteria and is eligible for Level 2 mapping.

This template ensures transparent, traceable, and auditable stakeholder evaluations. Use this format before assigning L2 readiness tags or proceeding to Level 3 prep.

---

### 🧩 Stakeholder: [Name]

#### 📘 Level 1 Affordance(s) from Matrix

Paste the exact bullet(s) from the Level 1 Matrix.

#### ✅ Level 1 Realization Check

Use a table to verify whether each affordance has been observed in practice.

| Affordance | Realization Status | Justification  |
| ---------- | ------------------ | -------------- |
| [Insert]   | ✅/⚠️/❌             | [Insert notes] |

Conclude with:

> “Stakeholder is eligible for Level 2 evaluation.”
> —or—
> “Stakeholder did not fully realize Level 1 affordances. Level 2 evaluation deferred.”

#### 🔐 Level 2 Unlock Conditions (from Prep)

Paste bullet list from the Level 2 Prep section.

#### 🔍 Level 2 Readiness Evaluation

Map each condition to actual observed output.

| Unlock Condition | Status | Justification  |
| ---------------- | ------ | -------------- |
| [Insert]         | ✅/⚠️/❌ | [Insert notes] |

#### 🧠 Final Justification

Synthesize all observations and assign a readiness tag:

- ✅ L2-Ready
- ⚠️ L1-L2-Ambiguous
- ❌ L1-Held

> Add one summary paragraph explaining the decision.

---



## 🧠 Tips for Master PM

- Always confirm chat naming when closing or opening a sprint  
- Provide files from prior sprint to ensure continuity  
- Reference which stakeholders are likely to evolve in the next sprint  
- Use sprint summaries to prioritize axis resumption (e.g., Game, Quiz, Test)

---
---

## 🧭 Context-Aware Justification Standard – v1.2.0

**Introduced:** 2025-07-05  
**Version:** `v1.2.0-stakeholder-evolution-guide`  
**Sprint Reference:** `pre‑R‑1z – Stakeholder Evolution Matrix – L2 → L3 Prep`

This method update refines how stakeholders are evaluated during readiness assessments, particularly from Level 1 → Level 2 and beyond.

---

### 🧠 Why This Was Needed

During early readiness tagging, it became clear that many justification notes were based on:
- Reasonable-sounding logic
- General ecosystem knowledge
- But **not** ecosystem-wide context or verifiable state

This created risk of:
- Premature level tagging
- Readiness inflation
- Assumption drift

---

### 🛠️ Method Change

All justification cells in readiness evaluations must now:
1. Reference the actual **system artifact** (e.g., feature, dashboard, schema)
2. Specify whether the affordance is **active, partially implemented, or conceptual**
3. Be cross-checked **against other stakeholders' states** when dependencies exist

---

### 🔄 Integration Point

This applies within the:
- 📐 Readiness Evaluation Template – L1 → L2
- 🧬 Any future L2 → L3 or L3+ readiness templates
- ✅ Misassumption Audit phases of all sprints

It will also serve as a prerequisite step before assigning **final readiness tags**.

---

### ✅ Evaluation Style Example

| Unlock Condition | Status | Justification |
|------------------|--------|---------------|
| Leaderboard handles mock claims | ✅ | Confirmed via `/api/claim` endpoint + leaderboard integration (block range: 14–17, mock tx ID #234abc) |
| Premium GQT live | ❌ | No known seeded instance of GQT using current config schema (as of 2025-07-01 check) |

---

📎 This refinement improves auditability, reduces false progression, and aligns all evolution steps with real system context.

---
---

## 📎 Appendix A – Artifact Derivation (Planning Phase Only)

This method defines how to reveal and track ecosystem artifacts during the planning phase of stakeholder evolution (R‑0 through R‑X). It supports the `pre‑R‑1z` chat series and informs Master PM reviews of readiness to proceed.

### 🧭 Purpose

The Artifact Derivation Method is a lightweight planning tool used to:

- Identify the **minimum required artifacts** per stakeholder based on their current level and next level ceiling
- Track **which artifacts exist**, all capped at `Draft` state during R‑0 to R‑X
- Ensure each stakeholder has traceable support for their current and target affordances
- Prevent assumption-based leakage in stakeholder evolution, especially during `pre‑R‑1z` planning

This method does **not** evaluate R-stage completion or enforce artifact quality. It is purely for identifying and organizing needed outputs.

---

### 🛠️ Method Workflow (Planning Mode)

1. **Determine Context**
   - Identify the stakeholder under review
   - Note their current level (L0, L1, etc.) and target next level
   - Identify the global R‑stage and sprint context (e.g. `pre‑R‑1z – L2 planning`)

2. **Derive Required Artifacts**
   - Review stakeholder's claimed or needed affordances for the next level
   - For each affordance, ask:
     > “What visible output would prove this affordance exists?”
   - Deduce the artifact *type*, *purpose*, and *owner*

3. **Log Artifacts as Drafts**
   - Add each derived artifact to a planning table (see template below)
   - All artifact states must be marked as `Draft` (no promotion permitted during R‑0 to R‑X)
   - Optionally tag with dependency notes or simulation support

4. **Review for Gaps**
   - Check for any unvalidated affordances, unlinked stakeholder roles, or implicit behaviors with no artifact

5. **Prepare for Master PM Review**
   - Present table and logic to PM to validate artifact coverage for current level
   - No R-stage can progress until all stakeholder paths have visible Draft artifacts

---
### 🎭 Stakeholder-Specific Artifacts

The artifacts derived in this method will vary widely based on stakeholder role.

Examples:
- Developer artifacts may be code modules, APIs, or validators
- Marketing artifacts may include social playbooks, access rule drafts, or platform narrative docs
- Player artifacts often involve scoring proofs, wallet logs, or claim state formatting

Each derived artifact must map directly to affordances claimed at the stakeholder’s current or next level.
---

### 🧾 Template (Artifact Derivation Table)

| Stakeholder     | Artifact Name               | Purpose                            | State  | Affordances Supported     | Notes / Dependencies             |
|-----------------|-----------------------------|-------------------------------------|--------|---------------------------|----------------------------------|
| Marketing & Ops | Telegram Bot Rule Sketch    | Draft logic for access thresholds  | Draft  | L0-MarketSignal, L1-Gatekeeper | Blocked until GQTConfig finalized |
| Developer       | `/api/claim.ts`             | Reward claim logic stub            | Draft  | L0-RewardClaim             | Waiting on wallet session model |
| Player          | Leaderboard Entry Format Doc| Defines scoring + claim inputs     | Draft  | L0-ParticipationLog        | Used in leaderboard explorer     |

---

### ⚠️ Important Scope Notes

- **Draft state only** – No artifact may advance beyond Draft until R‑X is complete
- **Not an R-task** – This method is not itself a milestone or step in the stakeholder matrix
- **Supports all `pre‑R‑1z` chats** – Each level planning cycle may invoke this method
- **Optional in future** – This method may be replaced or expanded post-R‑X as needed

---


**🔐 Status:** ✅ Finalized  
**Author:** Assistant to Mr. Ridley