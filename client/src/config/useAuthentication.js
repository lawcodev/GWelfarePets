import React, { useEffect, useState } from 'react'
import { HandleAuthenticationById } from '../components/Login/services/authHelper.services'
import AuthService from '../config/token';

export const useAuthentication = () => {
  const [person, setPerson] = useState(false)
  const Auth = new AuthService();

  useEffect(() => {
    async function getAuthentication () {
      const profile = Auth.getProfile()
      const person = await HandleAuthenticationById(profile.id)
      setPerson(person)
    }
    getAuthentication()
  },[])
  return { person } 
}