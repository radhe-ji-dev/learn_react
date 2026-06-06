const pptxgen = require('pptxgenjs');

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = 'Excel Logical Formulas';
pres.author = 'Excel Training';

// Color Palette
const C = {
	darkBlue: '1E3A8A',
	teal: '0F766E',
	orange: 'F97316',
	white: 'FFFFFF',
	gray: '374151',
	lightBlue: 'EFF6FF',
	lightTeal: 'F0FDFA',
	lightOrange: 'FFF7ED',
	medGray: '9CA3AF',
	darkGray: '1F2937',
};

// ─── Helper functions ────────────────────────────────────────────────────────

function addTitleSlide(slide) {
	slide.background = { color: C.darkBlue };

	// Decorative teal rectangle top-right
	slide.addShape(pres.shapes.RECTANGLE, {
		x: 7.5,
		y: 0,
		w: 2.5,
		h: 1.5,
		fill: { color: C.teal },
		line: { color: C.teal },
	});
	// Orange accent square
	slide.addShape(pres.shapes.RECTANGLE, {
		x: 9.2,
		y: 1.3,
		w: 0.8,
		h: 0.8,
		fill: { color: C.orange },
		line: { color: C.orange },
	});
	// Bottom decorative strip
	slide.addShape(pres.shapes.RECTANGLE, {
		x: 0,
		y: 5.1,
		w: 10,
		h: 0.525,
		fill: { color: C.teal },
		line: { color: C.teal },
	});
	slide.addShape(pres.shapes.RECTANGLE, {
		x: 0,
		y: 5.1,
		w: 1.5,
		h: 0.525,
		fill: { color: C.orange },
		line: { color: C.orange },
	});

	slide.addText('Microsoft Excel', {
		x: 0.6,
		y: 0.7,
		w: 7,
		h: 0.5,
		fontSize: 18,
		color: C.teal,
		fontFace: 'Calibri',
		bold: false,
	});
	slide.addText('Logical Formulas', {
		x: 0.6,
		y: 1.1,
		w: 9,
		h: 1.2,
		fontSize: 52,
		color: C.white,
		fontFace: 'Calibri',
		bold: true,
	});
	slide.addText('Master IF, AND, OR, NOT, IFS, SWITCH & more', {
		x: 0.6,
		y: 2.3,
		w: 8.5,
		h: 0.5,
		fontSize: 17,
		color: 'BFDBFE',
		fontFace: 'Calibri',
	});
	slide.addText('A complete guide with real-world examples', {
		x: 0.6,
		y: 2.85,
		w: 8,
		h: 0.4,
		fontSize: 13,
		color: C.medGray,
		fontFace: 'Calibri',
		italic: true,
	});
}

function addSectionHeader(slide, title, subtitle, slideNum) {
	slide.background = { color: C.darkBlue };
	slide.addShape(pres.shapes.RECTANGLE, {
		x: 0,
		y: 0,
		w: 0.25,
		h: 5.625,
		fill: { color: C.orange },
		line: { color: C.orange },
	});
	slide.addShape(pres.shapes.RECTANGLE, {
		x: 0,
		y: 4.8,
		w: 10,
		h: 0.825,
		fill: { color: '152C6B' },
		line: { color: '152C6B' },
	});
	slide.addText(title, {
		x: 0.55,
		y: 1.5,
		w: 9,
		h: 1.2,
		fontSize: 40,
		color: C.white,
		fontFace: 'Calibri',
		bold: true,
	});
	slide.addText(subtitle, {
		x: 0.55,
		y: 2.75,
		w: 8.5,
		h: 0.6,
		fontSize: 18,
		color: 'BFDBFE',
		fontFace: 'Calibri',
	});
	slide.addText(`Slide ${slideNum} / 15`, {
		x: 0.55,
		y: 4.95,
		w: 3,
		h: 0.4,
		fontSize: 11,
		color: C.medGray,
		fontFace: 'Calibri',
	});
}

function addContentSlide(slide, title) {
	slide.background = { color: C.white };
	// Header bar
	slide.addShape(pres.shapes.RECTANGLE, {
		x: 0,
		y: 0,
		w: 10,
		h: 0.75,
		fill: { color: C.darkBlue },
		line: { color: C.darkBlue },
	});
	// Orange accent left
	slide.addShape(pres.shapes.RECTANGLE, {
		x: 0,
		y: 0,
		w: 0.25,
		h: 0.75,
		fill: { color: C.orange },
		line: { color: C.orange },
	});
	slide.addText(title, {
		x: 0.45,
		y: 0,
		w: 9.3,
		h: 0.75,
		fontSize: 22,
		color: C.white,
		fontFace: 'Calibri',
		bold: true,
		valign: 'middle',
		margin: 0,
	});
}

function addFormulaBox(slide, formula, x, y, w, h) {
	slide.addShape(pres.shapes.RECTANGLE, {
		x,
		y,
		w,
		h,
		fill: { color: '1E3A5F' },
		line: { color: C.teal, pt: 1.5 },
	});
	slide.addText(formula, {
		x: x + 0.12,
		y,
		w: w - 0.24,
		h,
		fontSize: 12,
		color: '7DD3FC',
		fontFace: 'Consolas',
		valign: 'middle',
		margin: 0,
	});
}

function addCardBox(slide, x, y, w, h, headerText, headerColor, bodyItems) {
	slide.addShape(pres.shapes.RECTANGLE, {
		x,
		y,
		w,
		h: 0.38,
		fill: { color: headerColor },
		line: { color: headerColor },
	});
	slide.addText(headerText, {
		x: x + 0.12,
		y: y + 0.04,
		w: w - 0.2,
		h: 0.3,
		fontSize: 12,
		color: C.white,
		fontFace: 'Calibri',
		bold: true,
		margin: 0,
	});
	slide.addShape(pres.shapes.RECTANGLE, {
		x,
		y: y + 0.38,
		w,
		h: h - 0.38,
		fill: { color: 'F8FAFC' },
		line: { color: 'E2E8F0', pt: 1 },
	});
	slide.addText(bodyItems, {
		x: x + 0.12,
		y: y + 0.42,
		w: w - 0.24,
		h: h - 0.5,
		fontSize: 11,
		color: C.gray,
		fontFace: 'Calibri',
		valign: 'top',
	});
}

// ─── SLIDE 1: Title ──────────────────────────────────────────────────────────
let s = pres.addSlide();
addTitleSlide(s);

// ─── SLIDE 2: Agenda ────────────────────────────────────────────────────────
s = pres.addSlide();
addContentSlide(s, "📋  What We'll Cover");

const agendaItems = [
	['01', 'IF Function', 'The foundation of all logical formulas'],
	['02', 'AND & OR', 'Combining multiple conditions'],
	['03', 'NOT Function', 'Reversing logic'],
	['04', 'Nested IF', 'Multiple decision layers'],
	['05', 'IFS Function', 'Modern alternative to Nested IF'],
	['06', 'SWITCH Function', 'Pattern matching made simple'],
	['07', 'IFERROR & IFNA', 'Graceful error handling'],
	['08', 'Logical Operators', '>, <, =, <>, >=, <='],
];

agendaItems.forEach(([num, topic, desc], i) => {
	const col = i < 4 ? 0 : 1;
	const row = i % 4;
	const x = 0.35 + col * 4.8;
	const y = 0.95 + row * 1.1;

	slide_addShape_rect(s, x, y, 4.5, 0.9);

	s.addShape(pres.shapes.RECTANGLE, {
		x,
		y,
		w: 0.5,
		h: 0.9,
		fill: { color: C.darkBlue },
		line: { color: C.darkBlue },
	});
	s.addText(num, {
		x: x + 0.02,
		y,
		w: 0.46,
		h: 0.9,
		fontSize: 13,
		color: C.orange,
		fontFace: 'Calibri',
		bold: true,
		align: 'center',
		valign: 'middle',
		margin: 0,
	});
	s.addText(topic, {
		x: x + 0.6,
		y: y + 0.06,
		w: 3.7,
		h: 0.35,
		fontSize: 13,
		color: C.darkBlue,
		fontFace: 'Calibri',
		bold: true,
		margin: 0,
	});
	s.addText(desc, {
		x: x + 0.6,
		y: y + 0.44,
		w: 3.7,
		h: 0.35,
		fontSize: 10,
		color: C.gray,
		fontFace: 'Calibri',
		margin: 0,
	});
});

function slide_addShape_rect(slide, x, y, w, h) {
	slide.addShape(pres.shapes.RECTANGLE, {
		x,
		y,
		w,
		h,
		fill: { color: C.lightBlue },
		line: { color: 'BFDBFE', pt: 1 },
	});
}

// ─── SLIDE 3: IF Function ────────────────────────────────────────────────────
s = pres.addSlide();
addContentSlide(s, '🔀  IF Function — The Core of Logic');

// Syntax box
s.addShape(pres.shapes.RECTANGLE, {
	x: 0.35,
	y: 0.9,
	w: 9.3,
	h: 0.65,
	fill: { color: 'EFF6FF' },
	line: { color: C.darkBlue, pt: 1.5 },
});
s.addText(
	[
		{ text: 'Syntax: ', options: { bold: true, color: C.darkBlue } },
		{
			text: '=IF(logical_test, value_if_true, value_if_false)',
			options: { color: '1D4ED8', fontFace: 'Consolas' },
		},
	],
	{
		x: 0.5,
		y: 0.9,
		w: 9.1,
		h: 0.65,
		fontSize: 14,
		valign: 'middle',
		fontFace: 'Calibri',
	},
);

// Three parts
const parts = [
	{
		label: 'logical_test',
		desc: 'The condition to evaluate\n(e.g., A1>100)',
		color: C.darkBlue,
	},
	{
		label: 'value_if_true',
		desc: 'Result when condition\nis TRUE',
		color: C.teal,
	},
	{
		label: 'value_if_false',
		desc: 'Result when condition\nis FALSE',
		color: C.orange,
	},
];
parts.forEach((p, i) => {
	const x = 0.35 + i * 3.15;
	s.addShape(pres.shapes.RECTANGLE, {
		x,
		y: 1.7,
		w: 3.0,
		h: 0.4,
		fill: { color: p.color },
		line: { color: p.color },
	});
	s.addText(p.label, {
		x: x + 0.05,
		y: 1.7,
		w: 2.9,
		h: 0.4,
		fontSize: 12,
		color: C.white,
		fontFace: 'Consolas',
		bold: true,
		valign: 'middle',
		margin: 0,
	});
	s.addShape(pres.shapes.RECTANGLE, {
		x,
		y: 2.1,
		w: 3.0,
		h: 0.8,
		fill: { color: 'F8FAFC' },
		line: { color: 'E2E8F0', pt: 1 },
	});
	s.addText(p.desc, {
		x: x + 0.1,
		y: 2.12,
		w: 2.8,
		h: 0.78,
		fontSize: 10.5,
		color: C.gray,
		fontFace: 'Calibri',
		valign: 'middle',
	});
});

// Example
s.addText('📌  Real-World Example', {
	x: 0.35,
	y: 3.1,
	w: 4,
	h: 0.35,
	fontSize: 13,
	color: C.darkBlue,
	fontFace: 'Calibri',
	bold: true,
});
addFormulaBox(s, '=IF(B2>=60, "Pass", "Fail")', 0.35, 3.5, 5.5, 0.5);
s.addText('→ If score in B2 is 60 or above → shows "Pass", otherwise "Fail"', {
	x: 0.35,
	y: 4.1,
	w: 9,
	h: 0.4,
	fontSize: 12,
	color: C.gray,
	fontFace: 'Calibri',
});

// Mini table
const tblData = [
	[
		{
			text: 'Student',
			options: { bold: true, fill: { color: C.darkBlue }, color: C.white },
		},
		{
			text: 'Score',
			options: { bold: true, fill: { color: C.darkBlue }, color: C.white },
		},
		{
			text: 'Result',
			options: { bold: true, fill: { color: C.darkBlue }, color: C.white },
		},
	],
	['Alice', '75', 'Pass'],
	['Bob', '45', 'Fail'],
	['Carol', '90', 'Pass'],
];
s.addTable(tblData, {
	x: 5.9,
	y: 3.5,
	w: 3.7,
	h: 1.5,
	fontSize: 11,
	color: C.gray,
	border: { pt: 1, color: 'CBD5E1' },
});

// ─── SLIDE 4: AND Function ───────────────────────────────────────────────────
s = pres.addSlide();
addContentSlide(s, '🔗  AND Function — All Conditions Must Be True');

s.addShape(pres.shapes.RECTANGLE, {
	x: 0.35,
	y: 0.9,
	w: 9.3,
	h: 0.55,
	fill: { color: 'EFF6FF' },
	line: { color: C.darkBlue, pt: 1.5 },
});
s.addText(
	[
		{ text: 'Syntax: ', options: { bold: true, color: C.darkBlue } },
		{
			text: '=AND(condition1, condition2, ...)',
			options: { color: '1D4ED8', fontFace: 'Consolas' },
		},
	],
	{
		x: 0.5,
		y: 0.9,
		w: 9.1,
		h: 0.55,
		fontSize: 14,
		valign: 'middle',
		fontFace: 'Calibri',
	},
);

s.addText(
	'AND returns TRUE only if ALL conditions are true. Even one FALSE makes the whole result FALSE.',
	{
		x: 0.35,
		y: 1.6,
		w: 9.3,
		h: 0.45,
		fontSize: 12,
		color: C.gray,
		fontFace: 'Calibri',
	},
);

// Truth table
const andTable = [
	[
		{
			text: 'A',
			options: {
				bold: true,
				fill: { color: C.teal },
				color: C.white,
				align: 'center',
			},
		},
		{
			text: 'B',
			options: {
				bold: true,
				fill: { color: C.teal },
				color: C.white,
				align: 'center',
			},
		},
		{
			text: 'AND(A,B)',
			options: {
				bold: true,
				fill: { color: C.teal },
				color: C.white,
				align: 'center',
			},
		},
	],
	[
		{ text: 'TRUE', options: { align: 'center' } },
		{ text: 'TRUE', options: { align: 'center' } },
		{
			text: '✅ TRUE',
			options: { color: '16A34A', bold: true, align: 'center' },
		},
	],
	[
		{ text: 'TRUE', options: { align: 'center' } },
		{ text: 'FALSE', options: { align: 'center' } },
		{
			text: '❌ FALSE',
			options: { color: 'DC2626', bold: true, align: 'center' },
		},
	],
	[
		{ text: 'FALSE', options: { align: 'center' } },
		{ text: 'TRUE', options: { align: 'center' } },
		{
			text: '❌ FALSE',
			options: { color: 'DC2626', bold: true, align: 'center' },
		},
	],
	[
		{ text: 'FALSE', options: { align: 'center' } },
		{ text: 'FALSE', options: { align: 'center' } },
		{
			text: '❌ FALSE',
			options: { color: 'DC2626', bold: true, align: 'center' },
		},
	],
];
s.addTable(andTable, {
	x: 0.35,
	y: 2.15,
	w: 4.0,
	h: 2.4,
	fontSize: 12,
	color: C.gray,
	border: { pt: 1, color: 'CBD5E1' },
});

// Examples
s.addText('📌  Examples', {
	x: 4.7,
	y: 2.15,
	w: 5,
	h: 0.4,
	fontSize: 13,
	color: C.darkBlue,
	bold: true,
	fontFace: 'Calibri',
});
addFormulaBox(
	s,
	'=IF(AND(B2>=60, C2>=60), "Pass", "Fail")',
	4.7,
	2.65,
	5.0,
	0.5,
);
s.addText('Student passes only if BOTH Math and Science ≥ 60', {
	x: 4.7,
	y: 3.25,
	w: 5.0,
	h: 0.35,
	fontSize: 11,
	color: C.gray,
	fontFace: 'Calibri',
});
addFormulaBox(
	s,
	'=IF(AND(A2="Active", B2>1000), "Bonus", "No")',
	4.7,
	3.7,
	5.0,
	0.5,
);
s.addText('Employee gets bonus if Active AND sales > 1000', {
	x: 4.7,
	y: 4.3,
	w: 5.0,
	h: 0.35,
	fontSize: 11,
	color: C.gray,
	fontFace: 'Calibri',
});

// ─── SLIDE 5: OR Function ────────────────────────────────────────────────────
s = pres.addSlide();
addContentSlide(s, '🔀  OR Function — At Least One Must Be True');

s.addShape(pres.shapes.RECTANGLE, {
	x: 0.35,
	y: 0.9,
	w: 9.3,
	h: 0.55,
	fill: { color: 'EFF6FF' },
	line: { color: C.darkBlue, pt: 1.5 },
});
s.addText(
	[
		{ text: 'Syntax: ', options: { bold: true, color: C.darkBlue } },
		{
			text: '=OR(condition1, condition2, ...)',
			options: { color: '1D4ED8', fontFace: 'Consolas' },
		},
	],
	{
		x: 0.5,
		y: 0.9,
		w: 9.1,
		h: 0.55,
		fontSize: 14,
		valign: 'middle',
		fontFace: 'Calibri',
	},
);

s.addText(
	'OR returns TRUE if ANY one condition is true. Returns FALSE only when ALL are false.',
	{
		x: 0.35,
		y: 1.6,
		w: 9.3,
		h: 0.45,
		fontSize: 12,
		color: C.gray,
		fontFace: 'Calibri',
	},
);

const orTable = [
	[
		{
			text: 'A',
			options: {
				bold: true,
				fill: { color: C.orange },
				color: C.white,
				align: 'center',
			},
		},
		{
			text: 'B',
			options: {
				bold: true,
				fill: { color: C.orange },
				color: C.white,
				align: 'center',
			},
		},
		{
			text: 'OR(A,B)',
			options: {
				bold: true,
				fill: { color: C.orange },
				color: C.white,
				align: 'center',
			},
		},
	],
	[
		{ text: 'TRUE', options: { align: 'center' } },
		{ text: 'TRUE', options: { align: 'center' } },
		{
			text: '✅ TRUE',
			options: { color: '16A34A', bold: true, align: 'center' },
		},
	],
	[
		{ text: 'TRUE', options: { align: 'center' } },
		{ text: 'FALSE', options: { align: 'center' } },
		{
			text: '✅ TRUE',
			options: { color: '16A34A', bold: true, align: 'center' },
		},
	],
	[
		{ text: 'FALSE', options: { align: 'center' } },
		{ text: 'TRUE', options: { align: 'center' } },
		{
			text: '✅ TRUE',
			options: { color: '16A34A', bold: true, align: 'center' },
		},
	],
	[
		{ text: 'FALSE', options: { align: 'center' } },
		{ text: 'FALSE', options: { align: 'center' } },
		{
			text: '❌ FALSE',
			options: { color: 'DC2626', bold: true, align: 'center' },
		},
	],
];
s.addTable(orTable, {
	x: 0.35,
	y: 2.15,
	w: 4.0,
	h: 2.4,
	fontSize: 12,
	color: C.gray,
	border: { pt: 1, color: 'CBD5E1' },
});

s.addText('📌  Examples', {
	x: 4.7,
	y: 2.15,
	w: 5,
	h: 0.4,
	fontSize: 13,
	color: C.darkBlue,
	bold: true,
	fontFace: 'Calibri',
});
addFormulaBox(
	s,
	'=IF(OR(A2="VIP", B2>5000), "Discount", "Normal")',
	4.7,
	2.65,
	5.0,
	0.5,
);
s.addText('Customer gets discount if VIP OR purchase > 5000', {
	x: 4.7,
	y: 3.25,
	w: 5.0,
	h: 0.35,
	fontSize: 11,
	color: C.gray,
	fontFace: 'Calibri',
});
addFormulaBox(
	s,
	'=IF(OR(C2="Mon", C2="Fri"), "Check", "OK")',
	4.7,
	3.7,
	5.0,
	0.5,
);
s.addText('Flag records that fall on Monday or Friday', {
	x: 4.7,
	y: 4.3,
	w: 5.0,
	h: 0.35,
	fontSize: 11,
	color: C.gray,
	fontFace: 'Calibri',
});

// ─── SLIDE 6: NOT Function ───────────────────────────────────────────────────
s = pres.addSlide();
addContentSlide(s, '🚫  NOT Function — Reversing Logic');

s.addShape(pres.shapes.RECTANGLE, {
	x: 0.35,
	y: 0.9,
	w: 9.3,
	h: 0.55,
	fill: { color: 'EFF6FF' },
	line: { color: C.darkBlue, pt: 1.5 },
});
s.addText(
	[
		{ text: 'Syntax: ', options: { bold: true, color: C.darkBlue } },
		{
			text: '=NOT(logical_value)',
			options: { color: '1D4ED8', fontFace: 'Consolas' },
		},
	],
	{
		x: 0.5,
		y: 0.9,
		w: 9.1,
		h: 0.55,
		fontSize: 14,
		valign: 'middle',
		fontFace: 'Calibri',
	},
);

s.addText(
	"NOT flips TRUE to FALSE and FALSE to TRUE. Useful when it's easier to state the opposite condition.",
	{
		x: 0.35,
		y: 1.57,
		w: 9.3,
		h: 0.5,
		fontSize: 12,
		color: C.gray,
		fontFace: 'Calibri',
	},
);

// Two examples side by side
const exBoxes = [
	{
		title: 'Example 1 — Exclude a value',
		formula: '=IF(NOT(A2="Cancelled"), "Process", "Skip")',
		desc: 'Process all orders that are NOT "Cancelled"',
	},
	{
		title: 'Example 2 — Non-blank check',
		formula: '=IF(NOT(ISBLANK(B2)), "Has Value", "Empty")',
		desc: "Returns 'Has Value' only when cell B2 is not empty",
	},
	{
		title: 'Example 3 — Combine with AND',
		formula: '=IF(AND(NOT(A2=""), B2>0), "Valid", "Invalid")',
		desc: 'Record is valid only if A2 is not empty AND B2 > 0',
	},
];

exBoxes.forEach((ex, i) => {
	const y = 2.25 + i * 1.0;
	s.addShape(pres.shapes.RECTANGLE, {
		x: 0.35,
		y,
		w: 9.3,
		h: 0.85,
		fill: { color: 'F8FAFC' },
		line: { color: 'E2E8F0', pt: 1 },
	});
	s.addShape(pres.shapes.RECTANGLE, {
		x: 0.35,
		y,
		w: 0.2,
		h: 0.85,
		fill: { color: C.orange },
		line: { color: C.orange },
	});
	s.addText(ex.title, {
		x: 0.7,
		y: y + 0.04,
		w: 8.7,
		h: 0.3,
		fontSize: 11,
		color: C.darkBlue,
		bold: true,
		fontFace: 'Calibri',
		margin: 0,
	});
	s.addText(ex.formula, {
		x: 0.7,
		y: y + 0.34,
		w: 5.8,
		h: 0.28,
		fontSize: 11,
		color: '1D4ED8',
		fontFace: 'Consolas',
		margin: 0,
	});
	s.addText(ex.desc, {
		x: 0.7,
		y: y + 0.56,
		w: 8.5,
		h: 0.25,
		fontSize: 10,
		color: C.gray,
		fontFace: 'Calibri',
		margin: 0,
	});
});

// ─── SLIDE 7: Nested IF ─────────────────────────────────────────────────────
s = pres.addSlide();
addContentSlide(s, '🪆  Nested IF — Multiple Decision Layers');

s.addShape(pres.shapes.RECTANGLE, {
	x: 0.35,
	y: 0.9,
	w: 9.3,
	h: 0.55,
	fill: { color: 'EFF6FF' },
	line: { color: C.darkBlue, pt: 1.5 },
});
s.addText('Put an IF inside another IF to handle more than 2 outcomes.', {
	x: 0.5,
	y: 0.9,
	w: 9.1,
	h: 0.55,
	fontSize: 13,
	valign: 'middle',
	fontFace: 'Calibri',
	color: C.gray,
});

s.addText('📌  Grade Calculator Example', {
	x: 0.35,
	y: 1.58,
	w: 5,
	h: 0.35,
	fontSize: 13,
	color: C.darkBlue,
	bold: true,
	fontFace: 'Calibri',
});
addFormulaBox(
	s,
	'=IF(B2>=90,"A", IF(B2>=80,"B", IF(B2>=70,"C", IF(B2>=60,"D","F"))))',
	0.35,
	2.0,
	9.3,
	0.55,
);

// Flow diagram using shapes
const grades = [
	{ label: 'Score ≥ 90', result: 'Grade A', color: '16A34A', x: 0.35 },
	{ label: 'Score ≥ 80', result: 'Grade B', color: '2563EB', x: 2.45 },
	{ label: 'Score ≥ 70', result: 'Grade C', color: C.teal, x: 4.55 },
	{ label: 'Score ≥ 60', result: 'Grade D', color: C.orange, x: 6.65 },
	{ label: 'Otherwise', result: 'Grade F', color: 'DC2626', x: 8.75 },
];
grades.forEach((g) => {
	if (g.x + 1.55 > 10) return;
	s.addShape(pres.shapes.RECTANGLE, {
		x: g.x,
		y: 2.75,
		w: 1.5,
		h: 0.45,
		fill: { color: g.color },
		line: { color: g.color },
	});
	s.addText(g.label, {
		x: g.x + 0.05,
		y: 2.75,
		w: 1.4,
		h: 0.45,
		fontSize: 9.5,
		color: C.white,
		fontFace: 'Calibri',
		align: 'center',
		valign: 'middle',
		margin: 0,
	});
	s.addShape(pres.shapes.RECTANGLE, {
		x: g.x,
		y: 3.28,
		w: 1.5,
		h: 0.4,
		fill: { color: 'F8FAFC' },
		line: { color: 'E2E8F0', pt: 1 },
	});
	s.addText(g.result, {
		x: g.x + 0.05,
		y: 3.28,
		w: 1.4,
		h: 0.4,
		fontSize: 11,
		color: g.color,
		fontFace: 'Calibri',
		bold: true,
		align: 'center',
		valign: 'middle',
		margin: 0,
	});
});

s.addText(
	'⚠️  Tip: Nested IFs get complex fast. Use IFS() function (Excel 2019+) for cleaner syntax.',
	{
		x: 0.35,
		y: 3.85,
		w: 9.3,
		h: 0.45,
		fontSize: 12,
		color: C.orange,
		fontFace: 'Calibri',
		bold: true,
	},
);

const gradeTable = [
	[
		{
			text: 'Student',
			options: { bold: true, fill: { color: C.darkBlue }, color: C.white },
		},
		{
			text: 'Score',
			options: { bold: true, fill: { color: C.darkBlue }, color: C.white },
		},
		{
			text: 'Grade',
			options: { bold: true, fill: { color: C.darkBlue }, color: C.white },
		},
	],
	['Ravi', '92', 'A'],
	['Sita', '83', 'B'],
	['Mohan', '71', 'C'],
];
s.addTable(gradeTable, {
	x: 0.35,
	y: 4.45,
	w: 4.5,
	h: 1.0,
	fontSize: 11,
	color: C.gray,
	border: { pt: 1, color: 'CBD5E1' },
});

// ─── SLIDE 8: IFS Function ───────────────────────────────────────────────────
s = pres.addSlide();
addContentSlide(s, '✨  IFS Function — The Modern Alternative');

s.addShape(pres.shapes.RECTANGLE, {
	x: 0.35,
	y: 0.9,
	w: 9.3,
	h: 0.55,
	fill: { color: 'EFF6FF' },
	line: { color: C.darkBlue, pt: 1.5 },
});
s.addText(
	[
		{ text: 'Syntax: ', options: { bold: true, color: C.darkBlue } },
		{
			text: '=IFS(test1, value1, test2, value2, ...)',
			options: { color: '1D4ED8', fontFace: 'Consolas' },
		},
	],
	{
		x: 0.5,
		y: 0.9,
		w: 9.1,
		h: 0.55,
		fontSize: 14,
		valign: 'middle',
		fontFace: 'Calibri',
	},
);

// Comparison
s.addText('Comparison: Nested IF vs IFS', {
	x: 0.35,
	y: 1.58,
	w: 5,
	h: 0.38,
	fontSize: 13,
	color: C.darkBlue,
	bold: true,
	fontFace: 'Calibri',
});

// Nested IF (left)
s.addShape(pres.shapes.RECTANGLE, {
	x: 0.35,
	y: 2.05,
	w: 4.5,
	h: 0.38,
	fill: { color: 'DC2626' },
	line: { color: 'DC2626' },
});
s.addText('❌  Nested IF (complex)', {
	x: 0.45,
	y: 2.05,
	w: 4.3,
	h: 0.38,
	fontSize: 12,
	color: C.white,
	bold: true,
	valign: 'middle',
	margin: 0,
});
addFormulaBox(
	s,
	'=IF(B2>=90,"A",\n  IF(B2>=80,"B",\n    IF(B2>=70,"C","F")))',
	0.35,
	2.48,
	4.5,
	0.85,
);

// IFS (right)
s.addShape(pres.shapes.RECTANGLE, {
	x: 5.2,
	y: 2.05,
	w: 4.5,
	h: 0.38,
	fill: { color: '16A34A' },
	line: { color: '16A34A' },
});
s.addText('✅  IFS (clean & readable)', {
	x: 5.3,
	y: 2.05,
	w: 4.3,
	h: 0.38,
	fontSize: 12,
	color: C.white,
	bold: true,
	valign: 'middle',
	margin: 0,
});
addFormulaBox(
	s,
	'=IFS(B2>=90,"A",\n     B2>=80,"B",\n     B2>=70,"C",\n     TRUE,"F")',
	5.2,
	2.48,
	4.5,
	1.1,
);

// Key points
s.addText('Key Points about IFS:', {
	x: 0.35,
	y: 3.75,
	w: 4,
	h: 0.35,
	fontSize: 12,
	color: C.darkBlue,
	bold: true,
	fontFace: 'Calibri',
});
s.addText(
	[
		{
			text: '• Available in Excel 2019, Excel 365, and later versions',
			options: { breakLine: true },
		},
		{
			text: '• Use TRUE as last condition to act as a default/else clause',
			options: { breakLine: true },
		},
		{
			text: '• Evaluates conditions in order — stops at first TRUE',
			options: { breakLine: true },
		},
		{
			text: '• Returns #N/A error if no condition is met (use TRUE as fallback)',
			options: {},
		},
	],
	{
		x: 0.35,
		y: 4.18,
		w: 9.3,
		h: 1.2,
		fontSize: 11,
		color: C.gray,
		fontFace: 'Calibri',
	},
);

// ─── SLIDE 9: SWITCH Function ────────────────────────────────────────────────
s = pres.addSlide();
addContentSlide(s, '🔄  SWITCH Function — Pattern Matching');

s.addShape(pres.shapes.RECTANGLE, {
	x: 0.35,
	y: 0.9,
	w: 9.3,
	h: 0.55,
	fill: { color: 'EFF6FF' },
	line: { color: C.darkBlue, pt: 1.5 },
});
s.addText(
	[
		{ text: 'Syntax: ', options: { bold: true, color: C.darkBlue } },
		{
			text: '=SWITCH(expression, val1, result1, val2, result2, ..., default)',
			options: { color: '1D4ED8', fontFace: 'Consolas' },
		},
	],
	{
		x: 0.5,
		y: 0.9,
		w: 9.1,
		h: 0.55,
		fontSize: 13,
		valign: 'middle',
		fontFace: 'Calibri',
	},
);

s.addText(
	'SWITCH matches an expression against a list of values and returns the corresponding result. Perfect for lookup-style logic!',
	{
		x: 0.35,
		y: 1.57,
		w: 9.3,
		h: 0.5,
		fontSize: 12,
		color: C.gray,
		fontFace: 'Calibri',
	},
);

addFormulaBox(
	s,
	'=SWITCH(A2, 1,"January", 2,"February", 3,"March", "Unknown Month")',
	0.35,
	2.18,
	9.3,
	0.5,
);

// Table showing switch vs nested IF
const swTable = [
	[
		{
			text: 'Cell A2',
			options: {
				bold: true,
				fill: { color: C.darkBlue },
				color: C.white,
				align: 'center',
			},
		},
		{
			text: 'SWITCH Result',
			options: {
				bold: true,
				fill: { color: C.darkBlue },
				color: C.white,
				align: 'center',
			},
		},
		{
			text: 'Department Formula',
			options: {
				bold: true,
				fill: { color: C.darkBlue },
				color: C.white,
				align: 'center',
			},
		},
	],
	[
		{ text: '1', options: { align: 'center' } },
		{
			text: 'January',
			options: { align: 'center', color: C.teal, bold: true },
		},
		'=SWITCH(B2,"HR","Human Resources","IT","Information Tech","FIN","Finance","Other")',
	],
	[
		{ text: '2', options: { align: 'center' } },
		{
			text: 'February',
			options: { align: 'center', color: C.teal, bold: true },
		},
		'',
	],
	[
		{ text: '5', options: { align: 'center' } },
		{
			text: 'Unknown Month',
			options: { align: 'center', color: C.orange, bold: true },
		},
		'',
	],
];
s.addTable(swTable, {
	x: 0.35,
	y: 2.82,
	w: 9.3,
	h: 1.6,
	fontSize: 10.5,
	color: C.gray,
	border: { pt: 1, color: 'CBD5E1' },
});

s.addText(
	'SWITCH vs IFS: SWITCH checks exact matches (=). IFS can use any comparison (>, <, AND, OR).',
	{
		x: 0.35,
		y: 4.55,
		w: 9.3,
		h: 0.4,
		fontSize: 11,
		color: C.orange,
		fontFace: 'Calibri',
		bold: true,
	},
);

// ─── SLIDE 10: IFERROR & IFNA ────────────────────────────────────────────────
s = pres.addSlide();
addContentSlide(s, '🛡️  IFERROR & IFNA — Error Handling');

// Two columns
const errBoxes = [
	{
		title: 'IFERROR',
		color: C.teal,
		syntax: '=IFERROR(value, value_if_error)',
		desc: 'Returns value_if_error for ANY error: #N/A, #VALUE!, #REF!, #DIV/0!, #NUM!, #NAME?',
		example: '=IFERROR(VLOOKUP(A2,D:E,2,0), "Not Found")',
		note: "If VLOOKUP fails for any reason, shows 'Not Found'",
		x: 0.35,
	},
	{
		title: 'IFNA',
		color: C.darkBlue,
		syntax: '=IFNA(value, value_if_na)',
		desc: 'Returns value_if_na ONLY for #N/A errors. Other errors still show (useful for debugging).',
		example: '=IFNA(VLOOKUP(A2,D:E,2,0), "Not Found")',
		note: "#N/A → 'Not Found', but #VALUE! or #REF! still visible",
		x: 5.05,
	},
];

errBoxes.forEach((b) => {
	s.addShape(pres.shapes.RECTANGLE, {
		x: b.x,
		y: 0.88,
		w: 4.6,
		h: 0.42,
		fill: { color: b.color },
		line: { color: b.color },
	});
	s.addText(b.title, {
		x: b.x + 0.1,
		y: 0.88,
		w: 4.4,
		h: 0.42,
		fontSize: 16,
		color: C.white,
		bold: true,
		fontFace: 'Calibri',
		valign: 'middle',
		margin: 0,
	});
	s.addShape(pres.shapes.RECTANGLE, {
		x: b.x,
		y: 1.3,
		w: 4.6,
		h: 3.1,
		fill: { color: 'F8FAFC' },
		line: { color: 'E2E8F0', pt: 1 },
	});
	s.addText(b.syntax, {
		x: b.x + 0.1,
		y: 1.38,
		w: 4.4,
		h: 0.38,
		fontSize: 11,
		color: '1D4ED8',
		fontFace: 'Consolas',
	});
	s.addText(b.desc, {
		x: b.x + 0.1,
		y: 1.82,
		w: 4.4,
		h: 0.7,
		fontSize: 11,
		color: C.gray,
		fontFace: 'Calibri',
	});
	addFormulaBox(s, b.example, b.x + 0.1, 2.62, 4.4, 0.48);
	s.addText(b.note, {
		x: b.x + 0.1,
		y: 3.18,
		w: 4.4,
		h: 0.5,
		fontSize: 10.5,
		color: C.gray,
		fontFace: 'Calibri',
		italic: true,
	});
});

s.addText('When to use which?', {
	x: 0.35,
	y: 4.55,
	w: 3,
	h: 0.35,
	fontSize: 12,
	color: C.darkBlue,
	bold: true,
	fontFace: 'Calibri',
});
s.addText(
	'Use IFERROR for final user-facing formulas. Use IFNA during development to catch only missing lookups while other errors remain visible.',
	{
		x: 0.35,
		y: 4.9,
		w: 9.3,
		h: 0.5,
		fontSize: 11,
		color: C.gray,
		fontFace: 'Calibri',
	},
);

// ─── SLIDE 11: Logical Operators ─────────────────────────────────────────────
s = pres.addSlide();
addContentSlide(s, '⚖️  Logical Operators — Building Conditions');

const ops = [
	{
		op: '=',
		name: 'Equal To',
		example: 'A2="Active"',
		result: 'TRUE if cell equals Active',
	},
	{
		op: '<>',
		name: 'Not Equal To',
		example: 'B2<>"Closed"',
		result: 'TRUE if cell is NOT Closed',
	},
	{
		op: '>',
		name: 'Greater Than',
		example: 'C2>100',
		result: 'TRUE if value exceeds 100',
	},
	{
		op: '<',
		name: 'Less Than',
		example: 'D2<50',
		result: 'TRUE if value is below 50',
	},
	{
		op: '>=',
		name: 'Greater or Equal',
		example: 'E2>=1000',
		result: 'TRUE if 1000 or more',
	},
	{
		op: '<=',
		name: 'Less or Equal',
		example: 'F2<=20',
		result: 'TRUE if 20 or fewer',
	},
];

ops.forEach((o, i) => {
	const col = i % 3;
	const row = Math.floor(i / 3);
	const x = 0.35 + col * 3.2;
	const y = 0.95 + row * 2.0;

	s.addShape(pres.shapes.RECTANGLE, {
		x,
		y,
		w: 3.0,
		h: 1.75,
		fill: { color: 'F8FAFC' },
		line: { color: 'E2E8F0', pt: 1 },
	});
	s.addShape(pres.shapes.RECTANGLE, {
		x,
		y,
		w: 3.0,
		h: 0.5,
		fill: { color: C.darkBlue },
		line: { color: C.darkBlue },
	});
	s.addText(
		[
			{
				text: o.op + '  ',
				options: { color: C.orange, bold: true, fontSize: 18 },
			},
			{ text: o.name, options: { color: C.white, fontSize: 13, bold: true } },
		],
		{ x: x + 0.1, y, w: 2.8, h: 0.5, valign: 'middle', fontFace: 'Calibri' },
	);

	s.addText(o.example, {
		x: x + 0.1,
		y: y + 0.57,
		w: 2.8,
		h: 0.38,
		fontSize: 11,
		color: '1D4ED8',
		fontFace: 'Consolas',
	});
	s.addText(o.result, {
		x: x + 0.1,
		y: y + 1.0,
		w: 2.8,
		h: 0.6,
		fontSize: 10.5,
		color: C.gray,
		fontFace: 'Calibri',
	});
});

s.addText(
	'💡 Combine operators with AND/OR: =IF(AND(A2>0, A2<100), "In Range", "Out")',
	{
		x: 0.35,
		y: 5.1,
		w: 9.3,
		h: 0.38,
		fontSize: 11,
		color: C.teal,
		fontFace: 'Calibri',
		bold: true,
	},
);

// ─── SLIDE 12: Combining Logical Functions ───────────────────────────────────
s = pres.addSlide();
addContentSlide(s, '🔧  Combining Logical Functions');

s.addText(
	'Real business problems often need multiple logical functions working together.',
	{
		x: 0.35,
		y: 0.9,
		w: 9.3,
		h: 0.4,
		fontSize: 12,
		color: C.gray,
		fontFace: 'Calibri',
	},
);

const combos = [
	{
		title: 'Employee Bonus Eligibility',
		formula:
			'=IF(AND(B2="Active", OR(C2>100000, D2>5)), "Eligible", "Not Eligible")',
		desc: 'Active employee AND (sales > 1L OR experience > 5 years)',
	},
	{
		title: 'Loan Approval System',
		formula:
			'=IFERROR(IF(AND(B2>=700, C2>=50000, NOT(D2="Defaulter")), "Approved", "Rejected"), "Check Data")',
		desc: 'CIBIL ≥ 700 AND income ≥ 50K AND not a defaulter. IFERROR handles bad data.',
	},
	{
		title: 'Student Result with Grade',
		formula:
			'=IFS(AND(B2>=90,C2>=90),"Distinction", OR(B2>=60,C2>=60),"Pass", TRUE,"Fail")',
		desc: 'Both ≥ 90 → Distinction. Either ≥ 60 → Pass. Otherwise → Fail.',
	},
];

combos.forEach((c, i) => {
	const y = 1.42 + i * 1.27;
	s.addShape(pres.shapes.RECTANGLE, {
		x: 0.35,
		y,
		w: 0.2,
		h: 1.15,
		fill: { color: [C.darkBlue, C.teal, C.orange][i] },
		line: { color: [C.darkBlue, C.teal, C.orange][i] },
	});
	s.addText(c.title, {
		x: 0.65,
		y: y + 0.04,
		w: 9,
		h: 0.3,
		fontSize: 12,
		color: C.darkBlue,
		bold: true,
		fontFace: 'Calibri',
		margin: 0,
	});
	addFormulaBox(s, c.formula, 0.65, y + 0.36, 9.0, 0.42);
	s.addText(c.desc, {
		x: 0.65,
		y: y + 0.84,
		w: 9,
		h: 0.28,
		fontSize: 10.5,
		color: C.gray,
		fontFace: 'Calibri',
		italic: true,
		margin: 0,
	});
});

// ─── SLIDE 13: XLOOKUP with Logical ─────────────────────────────────────────
s = pres.addSlide();
addContentSlide(s, '🔍  Logical Formulas with XLOOKUP');

s.addText(
	'Excel 365 / 2021: Combine logical functions with XLOOKUP for powerful lookups.',
	{
		x: 0.35,
		y: 0.9,
		w: 9.3,
		h: 0.45,
		fontSize: 12,
		color: C.gray,
		fontFace: 'Calibri',
	},
);

const xlExamples = [
	{
		title: 'Lookup with Fallback',
		formula: '=IFERROR(XLOOKUP(A2, D:D, E:E), "Product Not Found")',
		desc: 'Search for product code in column D, return price from E. Show friendly message if not found.',
	},
	{
		title: 'Conditional Lookup',
		formula: '=IF(A2<>"", XLOOKUP(A2, D:D, E:E, "N/A"), "Enter ID")',
		desc: 'Only run XLOOKUP if the cell is not empty. Avoid unnecessary lookups.',
	},
	{
		title: 'Dynamic Pricing',
		formula:
			'=IFS(B2="Premium", XLOOKUP(A2,D:D,F:F), B2="Standard", XLOOKUP(A2,D:D,E:E), TRUE, 0)',
		desc: 'Return Premium or Standard price based on customer type, 0 if unknown.',
	},
];

xlExamples.forEach((ex, i) => {
	const y = 1.47 + i * 1.26;
	s.addShape(pres.shapes.RECTANGLE, {
		x: 0.35,
		y,
		w: 9.3,
		h: 1.1,
		fill: { color: 'F8FAFC' },
		line: { color: 'E2E8F0', pt: 1 },
	});
	s.addShape(pres.shapes.RECTANGLE, {
		x: 0.35,
		y,
		w: 0.2,
		h: 1.1,
		fill: { color: C.teal },
		line: { color: C.teal },
	});
	s.addText(ex.title, {
		x: 0.65,
		y: y + 0.05,
		w: 9,
		h: 0.28,
		fontSize: 12,
		color: C.darkBlue,
		bold: true,
		fontFace: 'Calibri',
		margin: 0,
	});
	s.addText(ex.formula, {
		x: 0.65,
		y: y + 0.35,
		w: 8.9,
		h: 0.32,
		fontSize: 11,
		color: '1D4ED8',
		fontFace: 'Consolas',
		margin: 0,
	});
	s.addText(ex.desc, {
		x: 0.65,
		y: y + 0.72,
		w: 8.9,
		h: 0.3,
		fontSize: 10.5,
		color: C.gray,
		fontFace: 'Calibri',
		italic: true,
		margin: 0,
	});
});

s.addText(
	'💡  XLOOKUP is available in Excel 365 and Excel 2021+. Use VLOOKUP/IFERROR for older versions.',
	{
		x: 0.35,
		y: 5.1,
		w: 9.3,
		h: 0.38,
		fontSize: 11,
		color: C.orange,
		fontFace: 'Calibri',
		bold: true,
	},
);

// ─── SLIDE 14: Best Practices ────────────────────────────────────────────────
s = pres.addSlide();
addContentSlide(s, '💡  Best Practices for Logical Formulas');

const tips = [
	{
		num: '01',
		title: 'Always add a default case',
		desc: 'In IFS, add TRUE as the last condition. In SWITCH, add a default value. Avoid mysterious #N/A errors.',
		color: C.darkBlue,
	},
	{
		num: '02',
		title: 'Use IFERROR in production',
		desc: 'Wrap any formula that might fail in IFERROR. Users should see friendly messages, not error codes.',
		color: C.teal,
	},
	{
		num: '03',
		title: 'Keep formulas readable',
		desc: 'Break complex logic across multiple helper columns. One complex formula = maintenance nightmare.',
		color: C.orange,
	},
	{
		num: '04',
		title: 'Test with edge cases',
		desc: 'Test with empty cells, zeros, negative numbers, and text in number columns before deploying.',
		color: '7C3AED',
	},
	{
		num: '05',
		title: 'Document your logic',
		desc: 'Add a comment column explaining what the formula does. Your future self will thank you.',
		color: '0891B2',
	},
	{
		num: '06',
		title: 'Use named ranges',
		desc: 'Instead of =IF(A2>100,...) use =IF(Sales>Threshold,...). Named ranges make formulas self-documenting.',
		color: 'BE185D',
	},
];

tips.forEach((t, i) => {
	const col = i % 2;
	const row = Math.floor(i / 2);
	const x = 0.35 + col * 4.8;
	const y = 0.9 + row * 1.52;
	s.addShape(pres.shapes.RECTANGLE, {
		x,
		y,
		w: 4.55,
		h: 1.3,
		fill: { color: 'F8FAFC' },
		line: { color: 'E2E8F0', pt: 1 },
	});
	s.addShape(pres.shapes.RECTANGLE, {
		x,
		y,
		w: 0.55,
		h: 1.3,
		fill: { color: t.color },
		line: { color: t.color },
	});
	s.addText(t.num, {
		x: x + 0.02,
		y,
		w: 0.51,
		h: 1.3,
		fontSize: 14,
		color: C.white,
		bold: true,
		align: 'center',
		valign: 'middle',
		fontFace: 'Calibri',
		margin: 0,
	});
	s.addText(t.title, {
		x: x + 0.65,
		y: y + 0.1,
		w: 3.8,
		h: 0.35,
		fontSize: 12,
		color: t.color,
		bold: true,
		fontFace: 'Calibri',
		margin: 0,
	});
	s.addText(t.desc, {
		x: x + 0.65,
		y: y + 0.48,
		w: 3.8,
		h: 0.75,
		fontSize: 10,
		color: C.gray,
		fontFace: 'Calibri',
		margin: 0,
	});
});

// ─── SLIDE 15: Summary / Cheatsheet ──────────────────────────────────────────
s = pres.addSlide();
addContentSlide(s, '📚  Quick Reference Cheatsheet');

const cheatsheet = [
	[
		{
			text: 'Function',
			options: { bold: true, fill: { color: C.darkBlue }, color: C.white },
		},
		{
			text: 'Syntax',
			options: { bold: true, fill: { color: C.darkBlue }, color: C.white },
		},
		{
			text: 'Use When...',
			options: { bold: true, fill: { color: C.darkBlue }, color: C.white },
		},
	],
	['IF', '=IF(test, true, false)', 'Simple 2-outcome decision'],
	['AND', '=AND(cond1, cond2, ...)', 'ALL conditions must be true'],
	['OR', '=OR(cond1, cond2, ...)', 'ANY condition can be true'],
	['NOT', '=NOT(condition)', 'Flip TRUE/FALSE'],
	['Nested IF', '=IF(t1,v1,IF(t2,v2,v3))', 'More than 2 outcomes (legacy)'],
	['IFS', '=IFS(t1,v1,t2,v2,TRUE,def)', 'Multiple conditions, clean syntax'],
	['SWITCH', '=SWITCH(expr,v1,r1,v2,r2,def)', 'Exact value matching'],
	['IFERROR', '=IFERROR(formula, on_error)', 'Handle ALL error types'],
	['IFNA', '=IFNA(formula, on_na)', 'Handle only #N/A errors'],
];

const rowColors = [
	'F8FAFC',
	'EFF6FF',
	'F8FAFC',
	'EFF6FF',
	'F8FAFC',
	'EFF6FF',
	'F8FAFC',
	'EFF6FF',
	'F8FAFC',
];
const styledCheat = cheatsheet.map((row, i) => {
	if (i === 0) return row;
	return row.map((cell, ci) => ({
		text: cell,
		options: {
			fill: { color: rowColors[i - 1] },
			color: ci === 1 ? '1D4ED8' : C.gray,
			fontFace: ci === 1 ? 'Consolas' : 'Calibri',
			fontSize: 10,
		},
	}));
});

s.addTable(styledCheat, {
	x: 0.35,
	y: 0.88,
	w: 9.3,
	h: 4.45,
	border: { pt: 0.5, color: 'CBD5E1' },
	colW: [1.3, 3.7, 4.3],
	fontSize: 11,
});

s.addShape(pres.shapes.RECTANGLE, {
	x: 0,
	y: 5.25,
	w: 10,
	h: 0.375,
	fill: { color: C.darkBlue },
	line: { color: C.darkBlue },
});
s.addShape(pres.shapes.RECTANGLE, {
	x: 0,
	y: 5.25,
	w: 1.5,
	h: 0.375,
	fill: { color: C.orange },
	line: { color: C.orange },
});
s.addText(
	'Excel Logical Formulas — Complete Training Guide  |  Happy Excelling! 🎉',
	{
		x: 1.7,
		y: 5.27,
		w: 8,
		h: 0.35,
		fontSize: 10.5,
		color: 'BFDBFE',
		fontFace: 'Calibri',
		valign: 'middle',
	},
);

// ─── Write File ───────────────────────────────────────────────────────────────
pres
	.writeFile({
		fileName:
			'C:\\Users\\COMPUTER JUNCTION\\Desktop\\Excel_Logical_Formulas_Presentation.pptx',
	})
	.then(() => console.log('✅ Presentation created successfully!'))
	.catch((err) => console.error('Error:', err));
