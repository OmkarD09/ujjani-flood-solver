# Ujjani Flood Watch

Design a high-end professional web application called “Ujjani FloodSim” for dam-break and flood inundation modelling of the Ujjani Dam and downstream Bhima River in India.

This is a serious GIS + hydrodynamic modelling platform intended for disaster management, humanitarian assistance and disaster relief (HADR), engineers, researchers and emergency-response decision makers.

IMPORTANT:

This should NOT look like a generic AI-generated SaaS dashboard.

Avoid excessive glassmorphism, excessive rounded cards, gradients everywhere, oversized typography, decorative illustrations, unnecessary icons, and “AI startup” aesthetics.

The product should feel like a professional geospatial engineering / scientific operations platform comparable in visual quality to modern GIS, satellite intelligence, engineering simulation and emergency-response software.

PRIMARY PRODUCT GOAL:

Allow a user to:

1. Select or inspect the Ujjani Dam and downstream Bhima River study area.

2. Configure a dam-break or water-release scenario.

3. Configure model parameters and boundary conditions.

4. Run a hydrodynamic simulation.

5. Monitor simulation progress.

6. Visualize flood depth, velocity, arrival time and inundation extent on an interactive map.

7. Compare simulation results with another modelling approach such as Delft3D and Smooth Particle Hydrodynamics (SPH).

8. Compare simulated flood extent with historical Sentinel-1 observations for validation.

9. Perform HADR impact analysis on villages, roads, bridges, hospitals, schools and population.

10. Export flood results as GIS-compatible formats such as SHP/KML.

DESIGN PHILOSOPHY:

The interface should be:

- Professional

- Technical

- Calm

- Data-dense but highly readable

- Map-first

- Engineering/scientific rather than consumer-oriented

- Suitable for a government/disaster-management organization

- Desktop-first

- Responsive

- Extremely polished

Use a restrained dark/light professional GIS visual language.

Prefer:

- Deep neutral backgrounds or clean off-white surfaces

- Strong information hierarchy

- Thin borders

- Subtle elevation

- Compact controls

- Clear data visualization

- Monospaced or technical typography where appropriate

- Consistent spacing

- Minimal but meaningful animation

- Clear status indicators

The map should be the dominant visual element.

CREATE THESE CORE SCREENS:

1. OVERVIEW / COMMAND CENTER

Create a professional flood-monitoring overview.

Layout:

- Left vertical navigation

- Top header with project name, study area, system status and user controls

- Large central interactive map

- Compact right-side information panel

- Bottom analytical summary area

Show:

- Ujjani Dam

- Bhima River

- Study area/AOI

- Current selected scenario

- Flood-risk overview

- Active simulations

- Recent scenarios

- Key statistics

Example statistics:

- Active Scenario

- Maximum Flood Depth

- Maximum Velocity

- Estimated Inundated Area

- Population Exposed

- Critical Infrastructure Affected

Do not make statistics into huge colorful cards.

Keep them compact and information-rich.

2. STUDY AREA / GIS EXPLORER

A map-first interface for exploring Ujjani.

Map controls:

- Basemap selector

- Zoom controls

- Layer manager

- Measurement

- Coordinate display

- Legend

- Opacity controls

Layer categories:

BASE

- DEM / Terrain

- River

- Dam

- Administrative boundaries

HYDROLOGY

- Water level

- Discharge

- Reservoir extent

SATELLITE

- Sentinel-1

- Historical flood extent

- Permanent water

HADR

- Villages

- Roads

- Bridges

- Hospitals

- Schools

- Population

Allow users to toggle layers independently.

3. SCENARIO BUILDER

Create a professional engineering form for creating a flood simulation scenario.

Sections:

SCENARIO

- Scenario name

- Description

- Event type

EVENT TYPES:

- Dam Break

- Controlled Water Release

- River Blockage

DAM

- Ujjani Dam

- Reservoir level

- Initial reservoir condition

BREACH PARAMETERS

- Breach location

- Breach width

- Breach depth

- Breach formation time

- Breach development profile

HYDRODYNAMIC MODEL

- Delft3D

- SPH

- Compare Both

BOUNDARY CONDITIONS

- Upstream condition

- Downstream condition

- Discharge hydrograph

- Simulation duration

TERRAIN

- DEM dataset

- Resolution

- Channel geometry source

- Roughness configuration

Include:

- Dataset validation indicators

- Units for every engineering parameter

- Tooltips/help descriptions

- Warnings for missing or approximate inputs

At the bottom:

“Validate Scenario”

“Save Scenario”

“Run Simulation”

The form should look like professional engineering software, not a generic web form.

4. SIMULATION MONITOR

Design a simulation execution screen.

Show:

- Scenario name

- Model being executed

- Start time

- Simulation progress

- Current timestep

- Estimated completion

- CPU/memory status if appropriate

- Solver status

- Validation checks

Include a large visualization area showing simulation progression.

Timeline:

T+00:00

T+00:30

T+01:00

T+01:30

T+02:00

etc.

Use restrained progress visualization.

Show processing stages:

DATA VALIDATION

TERRAIN PREPROCESSING

MESH GENERATION

BOUNDARY INITIALIZATION

HYDRODYNAMIC SOLVER

POST-PROCESSING

RESULT GENERATION

5. FLOOD RESULTS WORKSPACE

This is the most important screen.

Make the map dominate the page.

Provide a large interactive flood map with:

- Flood extent

- Water depth

- Velocity

- Arrival time

- Water surface elevation

Allow switching visualization modes.

Example layer selector:

FLOOD EXTENT

WATER DEPTH

VELOCITY

ARRIVAL TIME

WATER SURFACE ELEVATION

Include:

- Color legend

- Dynamic scale

- Map timestamp

- Simulation timestep

- Transparency control

Add a bottom timeline allowing the user to move through the simulation.

Example:

0 min ───── 30 ───── 60 ───── 90 ───── 120 ───── 180 min

When the timestep changes, the flood map should visually update.

6. MODEL COMPARISON

Create a professional scientific comparison workspace.

Compare:

Delft3D

vs

SPH

Show:

- Flood extent

- Maximum depth

- Maximum velocity

- Arrival time

- Inundated area

- Computational time

Use:

- Side-by-side maps

- Difference map

- Small analytical charts

- Numerical comparison table

Include a “Difference” visualization showing where the models disagree.

7. HISTORICAL VALIDATION

Create a validation screen based around the October 2020 Ujjani event.

Compare:

OBSERVED FLOOD

vs

SIMULATED FLOOD

Use Sentinel-1 derived flood extent as the observed reference.

Layout:

- Side-by-side map comparison

- Overlay mode

- Difference map

- Validation metrics

Metrics:

- Intersection over Union

- Precision

- Recall

- F1 Score

- Area difference

Include a clear data-quality / uncertainty indicator.

Do not imply that the simulation is operationally accurate if the underlying bathymetry or observations are approximate.

8. HADR IMPACT DASHBOARD

Create an emergency-response oriented dashboard.

Use the simulated flood footprint to identify affected assets.

Show:

- Population exposed

- Villages affected

- Roads affected

- Bridges affected

- Hospitals affected

- Schools affected

Map should remain central.

Provide filters:

- Flood depth threshold

- Arrival time

- Administrative region

- Infrastructure category

Example table:

ASSET | LOCATION | DEPTH | ARRIVAL | RISK

Allow clicking an asset to focus the map.

9. EXPORT CENTER

Professional export interface.

Allow:

- Flood extent → SHP

- Flood extent → KML

- Flood depth → GeoTIFF

- Velocity → GeoTIFF

- Arrival time → GeoTIFF

- Scenario report → PDF

Show:

- Dataset name

- Scenario

- Timestamp

- CRS

- Resolution

- File size

- Export status

10. DATASET / PROJECT MANAGEMENT

Create a technical dataset management screen.

Show datasets such as:

- DEM

- River geometry

- Dam data

- Hydrological data

- Sentinel-1

- Land use / land cover

- Exposure datasets

Each dataset should show:

- Name

- Source

- Resolution

- CRS

- Coverage

- Acquisition date

- Version

- Validation status

Use compact tables rather than cards.

NAVIGATION:

Create a clean left sidebar with:

UJJANI FLOODSIM

Overview

Study Area

Scenarios

Simulations

Results

Model Comparison

Validation

HADR

Datasets

Exports

At the bottom:

System Status

Settings

User

VISUAL DETAILS:

Use a professional GIS-inspired map interface.

Map controls should be compact and unobtrusive.

Use color primarily for data meaning:

- Flood severity

- Risk

- Warning

- System status

- Model states

Do not use bright colors simply for decoration.

Flood visualization should clearly communicate increasing severity.

Use subtle animations only where they improve understanding:

- Simulation progress

- Map timestep transitions

- Panel transitions

- Loading states

Avoid:

- Giant hero sections

- Marketing copy

- Stock imagery

- AI robots

- Excessive gradients

- Excessive glass effects

- Floating decorative blobs

- Huge rounded cards

- Fake AI chat interfaces

The final design should feel like a real scientific/GIS product that could be used by engineers and disaster-response teams.

DESIGN SYSTEM:

Create a consistent component system for:

- Buttons

- Inputs

- Selects

- Sliders

- Tabs

- Tables

- Status badges

- Tooltips

- Map controls

- Legends

- Metric displays

- Charts

- Dialogs

- Alerts

- Progress indicators

Use consistent spacing, typography, borders, radius and interaction states.

IMPORTANT PRODUCT PRINCIPLE:

The map is the primary workspace.

The UI should support the map rather than compete with it.

Generate the complete high-fidelity UI concept for these screens and maintain one consistent visual language across the entire product.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e6e43dc2-215d-4aeb-88c7-1222856afa64).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
