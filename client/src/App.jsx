import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState("جاري الاتصال بالسيرفر...")

  useEffect(() => {
    // مناداة السيرفر الذي أنشأناه قبل قليل
    axios.get('http://localhost:5000/api/status')
      .then(res => setMessage(res.data.message))
      .catch(err => setMessage("فشل الاتصال بالسيرفر! تأكد من تشغيل الـ Backend"))
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>AI-Talent Insight Analyzer</h1>
      <p>حالة الاتصال: <strong>{message}</strong></p>
    </div>
  )
}

export default App