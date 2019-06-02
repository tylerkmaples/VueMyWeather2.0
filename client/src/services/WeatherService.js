import Api from '@/services/Api'

export default {
    weather (userLocation) {
        return Api.get('', userLocation)
    }
}