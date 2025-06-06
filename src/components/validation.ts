'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function useValidation() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const mockEmail = 'admin@admin.admin';
  const mockPassword = 'admin123';

  const validateForm = (email: string, password: string): boolean => {
    return email === mockEmail && password === mockPassword;
  };

  const handleValidation = (email: string, password: string): boolean => {
    const isValid = validateForm(email, password);

    if (isValid) {
      setError(null); 
      router.push('/eventos');
    } else {
      alert('E-mail ou senha inválidos. Tente novamente.');
    }

    return isValid;
  };

  return { handleValidation, error };
}