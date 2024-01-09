export const getUserData = async () => {
  try {
    const response = await fetch('http://localhost:4000/api')
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.error('Error fetching user data:', error)
    return { user: { firstname: '', email: '' } }
  }
}

export const updateUserData = async (userData: {
  firstname: string
  email: string
}) => {
  const response = await fetch('http://localhost:4000/api/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return response
}
