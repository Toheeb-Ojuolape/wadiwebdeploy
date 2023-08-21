import SendSampleProgress from './SendSampleProgress'
import "./SendSample.css"
import SendSampleForm from './SendSampleForm'

function SendSampleComponent() {
  return (
    <div className="container">
      <h2 className="text-2xl font-bold">SendSample</h2>
      <SendSampleProgress percentage={20}/>
      <SendSampleForm />
    </div>
  )
}

export default SendSampleComponent