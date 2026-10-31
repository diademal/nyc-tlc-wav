Sienna WAV — manufacturing package, REV B, 2026-10-31  (frame + ramp)
Units: INCH. All DXF files are 1:1, AutoCAD R2000, $INSUNITS = inches.

MATERIAL
  Frame sheet parts: HR steel sheet A1011 CS, 11 ga, t = 0.1196" (3.04 mm)  — everything that was 10 ga is now 11 ga.
  Frame tubes: square tube A500 with 11 ga (0.120") wall (FR-6, FR-9 3x3; FF-4 1 1/2); DOM round tube OD 1.500 x ID 1.181 (FR-4, FR-10).
  Ramp parts RA-1 ... RA-8: Aluminum 5052-H32 sheet, t = 0.125" (1/8", 3.18 mm).
  Material and thickness are printed on every drawing (orange MATERIAL / THICKNESS box) and in every *_ref.dxf (layer NOTES).

Per part folder:
  <PART>_drawing.pdf   dimensioned flat pattern, hole chart, bend table (angle, UP/DOWN, order), formed view, notes, tube cut list
  <ITEM>_cut.dxf       laser file: closed contours on layer CUT only (no text, no bend lines). Holes are true circles, curves are true arcs.
  <ITEM>_FR_cut.dxf / <ITEM>_FL_cut.dxf   right part and its mirror (left part) when they differ
  <ITEM>_ref.dxf       same + layer BEND (bend lines) + DRILL_LATER + NOTES (material, thickness) — reference, do not cut those layers

Bend allowance is already included in the flat patterns (inside radius = t, K = 0.44). Outside dimensions of the bent parts are kept.
"UP" = bend toward the viewer of the drawing / DXF (marked side up). FL parts: use the FL file, same UP/DOWN.
Tolerances unless noted: cut ±0.010", bend angle ±1°, tube length ±1/32".

REV B changes (2026-10-31): FR-1, FR-2, FR-4, FR-5, FR-7, FR-10, FF-1 flat patterns recalculated for 11 ga
  (bend deduction 0.208" instead of 0.234"); FR-2 inner walls +0.015" (still reach the top), FR-4 strip width 2.746",
  FR-10 strip from the FR10_Bent model (12.560 x 2.746), FR-10 tube 3.407"; tube walls 11 ga. Old rev A in Drawings\_archive\MFG_rev_A_10ga.
