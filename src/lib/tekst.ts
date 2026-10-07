const NBSP = String.fromCharCode(0xa0);

/**
 * Polish typography: a one-letter word (a, i, o, u, w, z) must not end a line,
 * so the space after it becomes a non-breaking one. The lookbehind lets two such
 * words in a row ("i z góry") both be caught.
 */
export function t(tekst: string): string {
	return tekst.replace(/(?<=^|[\s(„])([aiouwzAIOUWZ]) /g, `$1${NBSP}`);
}

/** 1490 -> "1 490 zł", with non-breaking spaces so the amount stays on one line. */
export function zl(kwota: number): string {
	return `${String(kwota).replace(/\B(?=(\d{3})+(?!\d))/g, NBSP)}${NBSP}zł`;
}
