## Stakeholder 01 – Founders

Founders exist to bootstrap the CGT protocol, seed trust, and embed sustainable systems. They are intentionally **non-privileged** in DAO mechanics, with power derived from early operational roles (development, marketing, architecture). Their influence is functional, not positional — and their lifecycle is defined by a transition from builders → advisors → protocol equals.

---

### 🎮 Game Axis Interaction

- **Role**: Founders set initial gameplay loops and config for Main Game v1.
- **Scope**: Round mechanics, progression logic, halving schedules, leaderboard cycles.
- **Boundary**: Cannot modify game behavior post-launch without DAO pathway.
- **Risks**: Runtime bias, config opacity, reward structure entrenchment.
- **Dimensions Touched**:
  - Game Loop Logic
  - Pacing & Progression
  - Fairness Verification

---

### 🧠 Quiz Axis Interaction

- **Role**: Define quiz engine architecture — not question content.
- **Scope**: Rotation logic, randomness source, answer validation mechanics.
- **Boundary**: Cannot approve individual content unless acting in Creator role.
- **Risks**: Scoring opacity, systemic bias, trust breakdown via answer handling.
- **Dimensions Touched**:
  - Answer Validation Method
  - Scoring Model
  - Content Source Traceability

---

### 📜 Test Axis Interaction

- **Role**: Define pass/fail rules, retry constraints, and access thresholds.
- **Scope**: Gating tests, performance verification, onboarding challenges.
- **Boundary**: Cannot control outcomes or gate DAO participation unilaterally.
- **Risks**: Threshold bias, elitism through hardcoded test rules, progress suppression.
- **Dimensions Touched**:
  - Pass Criteria & Retry Rules
  - Scoring Opacity
  - Trust-to-Access Mapping

---

### 🔐 Integrity Pass Summary

- **Intent**: Bootstrap, then step back; create systems, not legacies.
- **Variants**:
  - Founder-as-Dev (engine logic)
  - Founder-as-Creator (GQT author)
  - Founder-as-Marketing (protocol evangelist)
  - Founder-as-DAO Seeder (framing governance)
- **Edge Risks**:
  - Legacy Config Bias
  - Subconscious Reward Tuning
  - Invisible Power through Authorship
- **Systemic Protections**:
  - Config traceability
  - Public “origin tags” for GQTs
  - DAO overrides and cooldown delays

---

### 🚀 Impact Tuning

To maximize the Founder’s impact while honoring their non-privileged role:

- **Protocol Mechanics**:
  - Embed public logs of config authored by Founders
  - Require cooldown delays or DAO checkpoint before Founder-made changes go live
  - Include ceremonial “handoff events” to signal DAO empowerment

- **Cultural Framing**:
  - Tag early GQTs as “Protocol Originals”
  - Publish a Founding Charter outlining limits and intent
  - Celebrate DAO outperformance or protocol independence as Founder success

- **Growth Enablement**:
  - Allow Founders to release “GQT starter kits” as templates
  - Restrict governance participation to advisory-only lanes once DAO is active

These levers convert Founders from architects into amplifiers — embedding wisdom without retaining control.

---
## Stakeholder 02 – Core Developers

Core Developers are responsible for building and maintaining the core CGT protocol systems. They are not merely feature implementers — they are ecosystem enablers who create the underlying tools, interfaces, and standards that allow GQTs to scale across stakeholder types.

At launch, they hold privileged publishing access to centralized protocol infrastructure. Their mandate includes ensuring:
- Open-ended GQT creation,
- Transparent scoring and replay systems,
- Validator enablement,
- And long-term architectural adaptability.

> While the Founder may serve in a head development role, **Founders do not share in the development treasury**. The **20% protocol treasury allocation is reserved strictly for Core Developers** to fund platform evolution. Founders can only earn from GQT creator fees, matching the model used by all creators.

---

### 🎮 Game Axis Interaction

- **Role**: Build game engines, scoring APIs, and reward routing logic.
- **Scope**: RNG, matchmaking, state replayability, progression tuning.
- **Boundary**: Must separate logic execution from governance-level reward allocation.
- **Risks**: Hardcoded bias, replay obfuscation, server lock-in.
- **Dimensions Touched**:
  - Execution Runtime (stateless/stateful)
  - Score Update Frequency
  - Match Rules & Tie-break Logic

---

### 🧠 Quiz Axis Interaction

- **Role**: Implement validation logic, timing windows, real-time feedback mechanics.
- **Scope**: Answer correctness, session scoring, input parsing.
- **Boundary**: Cannot define question content unless acting as a Creator.
- **Risks**: Answer scoring opacity, accidental bias injection.
- **Dimensions Touched**:
  - Answer Validation Tier
  - Quiz Timer Architecture
  - UI Feedback Conditions

---

### 📜 Test Axis Interaction

- **Role**: Encode test logic, retry rules, pass/fail thresholds.
- **Scope**: Performance gating, reaction scoring, puzzle triggers.
- **Boundary**: Must publish scoring formulas to ensure trust.
- **Risks**: Inflexible retry conditions, access barriers, unfair gating.
- **Dimensions Touched**:
  - Test Result Visibility
  - Threshold Calculation Logic
  - Replay Integrity Hooks

---

### 🔐 Integrity Pass Summary

- **Intent**: Enable long-term extensibility and ecosystem onboarding across all GQT types.
- **Variants**:
  - Infra Dev (backend, scoring DB)
  - Front-End / UI Engineer
  - Protocol Engineer (contracts, upgrades)
  - SDK Maintainer / Tooling Dev
  - Growth-Focused Dev (widgets, embed flows)
- **Systemic Risks**:
  - Hidden scoring logic
  - Validator lockout via closed infra
  - Over-dependence on legacy developers
  - GitHub or key ownership inertia
- **Edge Dimensions Added**:
  - Replay Proof Exposure
  - Validator Auditability
  - Error/Crash Recovery Protocols

---

### 🚀 Impact Tuning

To maximize developer influence while avoiding centralization risks, the protocol includes:

#### 🧠 Replay Tiers System
- GQTs declare their replay affordances (e.g., stateless sim, Docker, on-chain dry run).
- Each tier is paired with validator support and public display.
- Trust increases with transparency, not just architecture.

#### 🧪 Sandbox Lifecycle (for Creators & Developers)
- GQTs can be staged in sandbox mode for pre-launch trials.
- Scores, replay logs, and validator feedback can be surfaced without full publishing.
- Non-dev creators can use templates to launch GQTs in sandbox with metadata only.
- Sandbox phases align with roadmap maturity — optional early, incentivized later.

#### 🎛 Protocol Tools & Templates
- CLI and SDK support for sandboxing, score testing, audit export.
- Template registry allows creation of reusable, verified GQT engines.
- “Simulation Runner” API abstracts trust-layer tooling from game type.

#### 🧬 GQT Design & Evolution
- Developers can test custom GQT blend ratios and invent new interactive types.
- Protocol tracks sandbox → launch → DAO listing lifecycle.
- Future proposal: GQT Evolution Trails, showing how designs mature over time.

#### 🧠 Developer Identity & Recognition
- Attribution metadata for major GQT code contributors.
- “Hall of Builders” explorer listing for high-impact protocol devs.
- Post-handoff roles: plugin maintainers, DAO reviewer contributors.

---

> Core Developers are entrusted with shaping not just what GQTs do, but how the CGT protocol *feels* to build with.  
Their ultimate success is measured by how easy it becomes for non-developers to create, test, and scale trusted GQTs — without relying on them at all.

### Stakeholder: Marketing & Operations ↔ Game Axis → Marketing Lens
**Version:** v0.2.1-game-axis-fit

#### 🎯 Purpose — Why This Stakeholder Uses the Game Axis
- **Strategic Messaging**: Uses Game Axis mechanics to frame the CGT platform as a merit-based, token-rewarding system.
- **Campaign Timing**: Aligns promotional pushes with leaderboard cycles, halving events, and high-performing games.
- **User Funnel Shaping**: Leverages the Game experience to convert new players into community members, stakers, or creators.
- **Signal Propagation**: Uses game results, tournaments, and scoreboards as living “content” for storytelling across social platforms.

#### ✅ Needs — What’s Required to Succeed or Contribute
- **Real-Time Access to GameBlock Data**: Including live leaderboards, reward pool sizes, token distributions, and claim trends.
- **Narrative Context Tools**: Ability to frame gameplay events (e.g., “Market Showdown Week”, “Halving Season”) through visual or metadata overlays.
- **Highlight Controls**: Ability to pin, badge, or mark standout games or user actions as marketing-worthy moments.
- **Cross-Domain Visibility**: Surface gameplay on key marketing channels (website, Telegram, CoinMarketCap posts).

#### 🧩 Platform Hooks — Permissions, UI, Protocol Logic Required
| Hook Type              | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| **Pinned GQT**         | Ability to “pin” one or more GQTs (GameBlocks) as featured for frontend priority |
| **Narrative Mode Toggle** | Toggle protocol-wide storytelling modes (e.g., market-themed, seasonal tournaments) that adjust copy, visuals, or metadata |
| **Highlight Badge Control** | Add badges like “Top Performer”, “Record Run”, or “Founder Pick” to GQTs or players |
| **Live Feed API**      | Syndicate recent game outcomes, leaderboard changes, or reward claims to off-platform channels (e.g., social feeds) |
| **Promo Metadata Fields** | Extra marketing-only fields in GQTConfig (e.g., call-to-action text, campaign tag, visual overlays) |

#### 🏷️ Metadata Cues — Trust Tags, Filters, Discoverability Tools, and In-Game Cues
| Tag / Cue            | Purpose                                                                          |
|----------------------|----------------------------------------------------------------------------------|
| `#FeaturedByCGT`     | Officially featured GQT – often tied to platform-wide events or seasonal campaigns |
| `#HalvingCycle`      | Tags games aligning with halving windows to inform user urgency and narrative     |
| `#MainGameRun`       | Automatically applied to main-game GameBlocks — useful for top-line storytelling  |
| `#MarketingBoost`    | Signals that this game was selected for promotional amplification                 |
| `#CGTShowInvite`     | Attached to leaderboards where winners are invited to weekly CGT Talk Shows       |
| **UI Cue**           | Visual spotlight treatment for pinned or marketing-highlighted games on homepage or game hub |

---

> **🔁 Iteration Note — Marketing & Ops Mapping**  
> This stakeholder plays a critical storytelling and ecosystem alignment role across all Game-Qualified Tournaments (GQTs). As such, its Game-Axis fit should be reviewed and extended after all stakeholders have been mapped. Revisit during or after **Sprint R‑1f – Quiz-Axis Impact Tuning**, once complete cross-axis metadata and stakeholder insights are available.

