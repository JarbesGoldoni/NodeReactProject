import React, { useState, useEffect } from 'react'
import { getUserData, updateUserData } from './apiService'
import InputField from './InputField'

const App: React.FC = () => {
  const [userData, setUserData] = useState({ firstname: '', email: '' })
  const [permissions, setPermissions] = useState<string[]>([])

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

  const canView = (field: string) =>
    permissions.includes(`user:profile:${field}:view`)
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
