# Ujjani FloodSim — Implementation Plan

## Product structure
- Build a desktop-first scientific operations shell with a compact left rail, project header, persistent status cues, and responsive mobile navigation.
- Create ten distinct screens: Overview, Study Area, Scenarios, Simulations, Results, Model Comparison, Validation, HADR, Exports, and Datasets.
- Keep the flood map as the dominant workspace on all spatial screens, with restrained panels and dense engineering controls.

## Visual system
- Establish a GIS-focused neutral palette with off-white work surfaces, charcoal navigation, cyan/blue hydrology data, amber warnings, and red flood severity.
- Use technical sans-serif and monospace typography, thin borders, shallow elevation, compact spacing, and low-radius controls.
- Standardize buttons, inputs, tabs, tables, badges, legends, alerts, map controls, charts, and progress indicators through shared components and tokens.

## Interactions
- Implement working navigation and responsive layout behavior.
- Add functional map layer toggles, visualization mode selection, opacity and timestep controls, scenario fields, validation states, simulation progress, comparison modes, HADR filters, dataset selection, and export actions.
- Use a custom vector-style Bhima River/Ujjani map surface with meaningful flood overlays, infrastructure markers, coordinate readout, scale, and legends—without stock imagery or decorative filler.

## Content and safeguards
- Clearly label modeled, observed, approximate, and validation data states.
- Include the October 2020 Sentinel-1 validation context and explicit uncertainty language.
- Use realistic engineering units, scenario names, metrics, processing stages, asset rows, and dataset metadata while presenting the interface as a high-fidelity concept—not an operational forecast.

## Verification
- Check every screen at desktop and mobile widths for clipping, overlap, and navigation usability.
- Exercise key controls and verify map/timeline/filter state changes in the live preview.
- Add unique metadata for every screen and confirm the app loads without browser errors.
