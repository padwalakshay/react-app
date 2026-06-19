import { TailSpin } from 'react-loader-spinner'

export default function Spinner({loading}) {

  return (
    <div>
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        visible={loading}
        wrapperStyle={{'display': 'flex', 'justifyContent': 'center','alignItems': 'center'}}
      />
    </div>
  )
}