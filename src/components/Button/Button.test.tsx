import { render, screen } from '@testing-library/react'
import Button from '.'

describe('Button Component', () => {
	it('should render the button correctly', () => {
		render(<Button>Filled Button</Button>)
		const button = screen.getByText('Filled Button')
		expect(button).toBeInTheDocument()
		expect(button).toHaveClass('font-semibold py-2 px-4 rounded')
	})

	it('should render a filled button by default', () => {
		render(<Button>Filled Button</Button>)
		const button = screen.getByText('Filled Button')
		expect(button).toBeInTheDocument()
		expect(button).toHaveClass('bg-blue-500')
		expect(button).toHaveClass('hover:bg-blue-600')
	})

	it('should render an outlined button', () => {
		render(<Button variant='outlined'>Outlined Button</Button>)
		const button = screen.getByText('Outlined Button')
		expect(button).toBeInTheDocument()
		expect(button).toHaveClass('border')
		expect(button).toHaveClass('border-blue-500')
		expect(button).toHaveClass('text-indigo-900')
		expect(button).toHaveClass('hover:bg-blue-100')
	})
})
