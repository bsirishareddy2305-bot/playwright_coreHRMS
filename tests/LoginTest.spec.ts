import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { AssertUtil } from "../util/AssertUtil";
import { CommonUtils } from "../util/CommonUtils";


const loginPage = new LoginPage();


test("Verify Login Page", async () => {

   // Login
         await loginPage.login();
 
        await AssertUtil.assertEquals(await CommonUtils.getElementText(loginPage.getWelcomePage()),"Welcome selenium");
        

  console.log("Verify Login Page executed successfully");
});