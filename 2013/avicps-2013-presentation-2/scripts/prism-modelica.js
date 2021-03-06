Prism.languages.modelica = Prism.languages.extend('clike', {
	'keyword': /\b(algorithm|input|output|then|for|assert|package|do|if|break|protected|else|import|public|return|extends|final|class|model|function|const|while|equation|when|end|discrete|Real|Integer|Record)\b/g,
	'number': /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+[e]?[\d]*[df]\b|\W\d*\.?\d+\b/gi,
	'operator': {
		pattern: /([^\.]|^)([-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|%|\^|(&lt;){2}|($gt;){2,3}|:|~)/g,
		lookbehind: true
	}
});
