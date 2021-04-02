import generator from 'generate-password';

export const MakePassword = () => generator.generate({
	length: 8,
  uppercase: true,
  lowercase: true,
	numbers: true,
  symbols: true,
  exclude: "'\".,|",
  strict: true
});