// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt().append({
	rules: {
		// Отключаем базовое правило JS, так как для TS используем его версию
		'no-unused-vars': 'off',

		// Меняем ошибку на предупреждение для TypeScript
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrors: 'none',
			},
		],

		// Меняем ошибку на предупреждение для переменных в шаблонах Vue
		'vue/no-unused-vars': 'warn',
	},
})