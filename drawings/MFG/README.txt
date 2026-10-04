Sienna WAV frame — manufacturing package, rev A, 2026-10-03
Units: INCH. All DXF files are 1:1, AutoCAD R2000, $INSUNITS = inches.

Per part folder (FR-1 ... FF-4):
  <PART>_drawing.pdf   dimensioned flat pattern, hole chart, bend table (angle, UP/DOWN, order), formed view, notes, tube cut list
  <ITEM>_cut.dxf       laser file: closed contours on layer CUT only (no text, no bend lines). Holes are true circles, curves are true arcs.
  <ITEM>_FR_cut.dxf / <ITEM>_FL_cut.dxf   right part and its mirror (left part) when they differ
  <ITEM>_ref.dxf       same + layer BEND (bend centre lines) + layer DRILL_LATER — reference for bending, do not cut those layers

Material: 10 ga (0.135") or 11 ga (0.120") HR steel sheet A1011 CS — see each drawing. Inside bend radius = t.
Bend allowance is already included in the flat patterns (K = 0.44).
"UP" = bend toward the viewer of the drawing / DXF (marked side up). FL parts: use the FL file, same UP/DOWN.
Tolerances unless noted: cut ±0.010", bend angle ±1°, tube length ±1/32".
