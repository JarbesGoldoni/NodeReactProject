/**
 * The main component of the application.
 * Renders input fields for user data and allows updating the data.
 */
import React, { useState, useEffect } from 'react'
import { getUserData, updateUserData } from './apiService'
import InputField from './InputField'

const App: React.FC = () => {
  /**
   * State variables for user data and permissions.
   */
  const [userData, setUserData] = useState({ firstname: '', email: '' })
  const [permissions, setPermissions] = useState<string[]>([])

  /**
   * Fetches user data and permissions on component mount.
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData()
        if (data) {
          setUserData(data.user)
          setPermissions(data.permissions)
        }
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }

    fetchData()
  }, [])

  /**
   * Handles the form submission and updates user data.
   */
  const handleSubmit = async () => {
    try {
      const response = await updateUserData(userData)

      if (response.status === 200) {
        alert('User data updated successfully.')
      } else {
        alert('Failed to update user data.')
      }
    } catch (error) {
      console.error('Error updating user data:', error)
      alert('Failed to update user data.')
    }
  }

  /**
   * Checks if the user has permission to view a specific field.
   * @param field - The field to check permission for.
   * @returns True if the user has permission to view the field, false otherwise.
   */
  const canView = (field: string) =>
    permissions.includes(`user:profile:${field}:view`)

  /**
   * Checks if the user has permission to edit a specific field.
   * @param field - The field to check permission for.
   * @returns True if the user has permission to edit the field, false otherwise.
   */
  const canEdit = (field: string) =>
    permissions.includes(`user:profile:${field}:edit`)

  return (
    <div>
      {canView('firstname') && (
        <InputField
          type="text"
          value={userData.firstname}
          onChange={(e) =>
            canEdit('firstname') &&
            setUserData({ ...userData, firstname: e.target.value })
          }
          disabled={!canEdit('firstname')}
        />
      )}
      {canView('email') && (
        <InputField
          type="email"
          value={userData.email}
          onChange={(e) =>
            canEdit('email') &&
            setUserData({ ...userData, email: e.target.value })
          }
          disabled={!canEdit('email')}
        />
      )}
      <button onClick={handleSubmit}>Save Changes</button>
    </div>
  )
}

export default App
