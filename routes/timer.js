require("colors")
const { 
    UserController, ApplicationConfigController,
} = require("../controllers/controllers.js")
/**
 * 定时任务
 */
module.exports = async () => {
    global.monitorInfo.loginValidateCodeTimer = setInterval(() => {
        UserController.setValidateCode()
    }, 5 * 60 * 1000)
    setTimeout(() => {
        console.log(" __          __  ______   ____    ______   _    _   _   _   _   _  __     __       _____   _   _ ".cyan)
        console.log(" \\ \\        / / |  ____| |  _ \\  |  ____| | |  | | | \\ | | | \\ | | \\ \\   / /      / ____| | \\ | |".cyan)
        console.log("  \\ \\  /\\  / /  | |__    | |_) | | |__    | |  | | |  \\| | |  \\| |  \\ \\_/ /      | |      |  \\| |".cyan)
        console.log("   \\ \\/  \\/ /   |  __|   |  _ <  |  __|   | |  | | | . ` | | . ` |   \\   /       | |      | . ` |".cyan)
        console.log("    \\  /\\  /    | |____  | |_) | | |      | |__| | | |\\  | | |\\  |    | |     _  | |____  | |\\  |".cyan)
        console.log("     \\/  \\/     |______| |____/  |_|       \\____/  |_| \\_| |_| \\_|    |_|    (_)  \\_____| |_| \\_|".cyan)
        console.log(" ")
        console.log(" ")
        console.log("webfunny基座应用启动成功！".yellow)
        console.log("")

        // 初始化登录验证码
        UserController.setValidateCode()
        // 初始化监控系统的域名配置信息
        ApplicationConfigController.setInitSysConfigInfo("localhost:8011", "localhost:8010", "monitor")
        // 初始化埋点系统的域名配置信息
        ApplicationConfigController.setInitSysConfigInfo("localhost:8015", "localhost:8014", "event")
    }, 6000)
}