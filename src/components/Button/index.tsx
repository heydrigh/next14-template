import { IButtonProps } from './types'

const Button = ({ children, variant = 'filled', ...rest }: IButtonProps) => {
	const baseClasses = 'text-white font-semibold py-2 px-4 rounded'

	const variantClasses = {
		filled: 'bg-blue-500 hover:bg-blue-600',
		outlined: 'border border-blue-500 text-blue-900 hover:bg-blue-100',
	}

	const buttonClasses = `${baseClasses} ${variantClasses[variant]}`

	return (
		<button className={buttonClasses} {...rest}>
			{children}
		</button>
	)
}

export default Button
