import type { App } from "vue"
import Icon from "@/components/icon.vue"

export default (app: App) => {
    app.component("Icon", Icon)
}