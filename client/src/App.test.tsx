import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from './App'
import { getUserData, updateUserData } from './apiService'
import { mockComponent } from 'react-dom/test-utils'

const mockApiService = mockComponent(
  {
    getUserData: jest.fn(),
    updateUserData: jest.fn(),
  },
  true
)

describe('App Component', () => {
  beforeEach(() => {
    mockApiService.getUserData.mockResolvedValue({
      user: { firstname: 'John', email: 'john@example.com' },
      permissions: ['user:profile:firstname:view', 'user:profile:email:view'],
    })
    mockApiService.updateUserData.mockResolvedValue({ status: 200 })
  })

  // ...
})

// Mock window.alert and API calls
window.alert = jest.fn()
jest.mock('./apiService', () => ({
  getUserData: jest.fn(),
  updateUserData: jest.fn(),
}))

describe('App Component', () => {
  beforeEach(() => {
    getUserData.mockResolvedValue({
      user: { firstname: 'John', email: 'john@example.com' },
      permissions: ['user:profile:firstname:view', 'user:profile:email:view'],
    })
    updateUserData.mockResolvedValue({ status: 200 })
  })

  test('renders and displays user data after fetching', async () => {
    render(<App />)
    await waitFor(() => {
      expect(screen.getByDisplayValue('John')).toBeInTheDocument()
      expect(screen.getByDisplayValue('john@example.com')).toBeInTheDocument()
    })
  })

  test('allows editing and submitting user data', async () => {
    render(<App />)
    await waitFor(() => {
      const firstnameInput = screen.getByDisplayValue(
        'John'
      ) as HTMLInputElement
      const emailInput = screen.getByDisplayValue(
        'john@example.com'
      ) as HTMLInputElement
      fireEvent.change(firstnameInput, { target: { value: 'Jane' } })
      fireEvent.change(emailInput, { target: { value: 'jane@example.com' } })
      expect(firstnameInput.value).toBe('Jane')
      expect(emailInput.value).toBe('jane@example.com')

      const saveButton = screen.getByText(/Save Changes/i) as HTMLButtonElement
      fireEvent.click(saveButton)
      expect(window.alert).toHaveBeenCalledWith(
        'User data updated successfully.'
      )
    })
  })
})
