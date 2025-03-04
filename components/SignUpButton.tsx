'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import EmailSignUpForm from './EmailSignUpForm';

export default function SignUpButton() {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  if (showForm) {
    return <EmailSignUpForm />;
  }

  return (
    <Button 
      size="lg" 
      onClick={handleClick}
      className="px-8 py-6 text-lg"
    >
      sign up
    </Button>
  );
} 