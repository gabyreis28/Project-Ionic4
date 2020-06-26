import { NgModule } from "@angular/core";

import { LoginPageRoutingModule } from "./login-routing.module";

import { LoginPage } from "./login.page";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [SharedModule, LoginPageRoutingModule],
  declarations: [LoginPage],
})
export class LoginPageModule {}
