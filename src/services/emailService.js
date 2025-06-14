import api from '@/constants/api'
import { http } from '@/Libs'

const emailService = (silentMode = false) => {
  const options = {
    isSilent: silentMode,
  }
  const index = async (query = {}) => {
    // let res = await http.get(api.endPoints.Email.get(query), options);
    return res.data
  }
  const Send = async (data) => {
    let res = await http.post(api.endPoints.Email.Send, data, options)
    return res
  }

  return {
    index,
    Send,
  }
}

export default emailService
