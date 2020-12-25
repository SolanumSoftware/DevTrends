// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "@nativescript/angular";
import { AppModule } from "./app/app.module";
import { on as applicationOn, resumeEvent, ApplicationEventData } from "@nativescript/core/application";
import * as Admob from "nativescript-admob";
import * as fire from "@nativescript/firebase";
import * as firebase from "@nativescript/firebase/app";
import { LocalNotifications } from "nativescript-local-notifications";

applicationOn(resumeEvent, (args: ApplicationEventData) => {
	Admob.preloadInterstitial({
    testing: true,
    androidInterstitialId: "ca-app-pub-4435922828829303/5329219275",
  });
});

fire.firebase.subscribeToTopic("NewsRelatedApp");
firebase.initializeApp({
  onMessageReceivedCallback:(message: any) => {
    LocalNotifications.schedule([{
        title: message.title,
        body:  message.body,
        badge: 1,
        ongoing: true, // makes the notification ongoing (Android only)
        at: new Date(new Date().getTime() + (2 * 1000)) // 10 seconds from now
      }]);
},
  persist: false
});



// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization:
// modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
platformNativeScriptDynamic().bootstrapModule(AppModule);
