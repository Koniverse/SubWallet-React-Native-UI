# This component's using react-native-fast-image for performance purpose, after run `yarn` you need to:

- iOS: `pod install`
- Android: If you use Proguard, you need to add these lines to `android/app/proguard-rules.pro`:
```
-keep public class com.dylanvann.fastimage.* {*;}
-keep public class com.dylanvann.fastimage.** {*;}
-keep public class * implements com.bumptech.glide.module.GlideModule
-keep public class * extends com.bumptech.glide.module.AppGlideModule
-keep public enum com.bumptech.glide.load.ImageHeaderParser$** {
  **[] $VALUES;
  public *;
}
```