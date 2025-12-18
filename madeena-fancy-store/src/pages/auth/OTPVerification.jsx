import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function OTPVerification() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [resendTimer, setResendTimer] = useState(60)
  
  const navigate = useNavigate()
  const location = useLocation()
  const email = location.state?.email || ''
  const { sendOTP, verifyOTP } = useAuth()

  useEffect(() => {
    if (email) {
      sendOTP(email)
    }
  }, [email])

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [resendTimer])

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return
    
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const otpCode = otp.join('')
    
    if (otpCode.length !== 6) {
      setError('Please enter complete OTP')
      return
    }

    setLoading(true)
    setError('')

    try {
      const { error } = await verifyOTP(email, otpCode)
      
      if (error) {
        setError(error.message)
      } else {
        navigate('/', { replace: true })
      }
    } catch (err) {
      setError('Verification failed. Please try again.')
    }
    
    setLoading(false)
  }

  const handleResend = async () => {
    setResendTimer(60)
    setError('')
    
    try {
      const { error } = await sendOTP(email)
      if (error) {
        setError('Failed to resend OTP. Please try again.')
        setResendTimer(0)
      }
    } catch (err) {
      setError('Failed to resend OTP. Please try again.')
      setResendTimer(0)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Verify Your Account</h2>
          <p className="text-gray-600 mt-2">Enter the 6-digit code sent to</p>
          <p className="text-green-600 font-semibold">{email}</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center space-x-2 sm:space-x-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg sm:text-xl font-bold border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                maxLength="1"
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50"
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>

        <div className="mt-6 text-center">
          {resendTimer > 0 ? (
            <p className="text-gray-600">
              Resend OTP in {resendTimer} seconds
            </p>
          ) : (
            <button
              onClick={handleResend}
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              Resend OTP
            </button>
          )}
        </div>
      </div>
    </div>
  )
}