import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("form", { static: false }) signupForm: NgForm;
  subscriptions: string[] = ["Basic", "Advanced", "Pro"];
  selectedSubscription: string = "Advanced";
  user: any = {
    email: "",
    password: "",
    subscription: ""
  };
  submitted: boolean = false;
  onSubmit() {
    this.submitted = true;
    this.user.email = this.signupForm.value.email;
    this.user.password = this.signupForm.value.password;
    this.user.subscription = this.signupForm.value.subscription;
    this.signupForm.reset();
  }
}
