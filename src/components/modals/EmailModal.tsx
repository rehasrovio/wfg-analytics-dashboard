import { useState } from 'react';
import '../modals/EmailModal.css';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (email: string) => void;
}

export function EmailModal({ isOpen, onClose, onConfirm }: EmailModalProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    onConfirm(email.trim().toLowerCase());
    setEmail('');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>
        <h2 className="modal-title">Enter Your Email</h2>
        <p className="modal-description">
          Please enter your email address to edit chart values. This will be used to save your preferences.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email-input" className="form-label">
              Email Address
            </label>
            <input
              id="email-input"
              type="email"
              className="form-input"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              autoFocus
            />
            {error && <p className="form-error">{error}</p>}
          </div>
          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

