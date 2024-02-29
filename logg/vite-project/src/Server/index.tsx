import { message } from "antd"

export default function isEmpty(userNameVal: string, setPasswordVal: string) {
    if (!userNameVal.trim() || !setPasswordVal.trim()) {
        
        return true
    } return false
}