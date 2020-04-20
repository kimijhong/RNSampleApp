package com.sampleapp.module;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.sampleapp.activity.TestActivity;

public class ToastModule extends ReactContextBaseJavaModule {

    private static ReactApplicationContext reactContext;

    public ToastModule(@NonNull ReactApplicationContext context) {
        super(context);
        reactContext = context;

        reactContext.addActivityEventListener(mActivityEventListener); //엑티비티 이벤트
        reactContext.addLifecycleEventListener(mlifecycleEventListener);
    }

    @NonNull
    @Override
    public String getName() {
        return "ToastModule";  //JavaScript 작성하는 모듈을 import 할 때 사용
    }

    @ReactMethod
    public String show(String message, int duration) {        //실행할 메소드
        Toast.makeText(getReactApplicationContext(), message, duration).show();
        String responseMsg = message + "리스펀스!";
        return responseMsg;
    }
    /*
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }*/

    @ReactMethod
    public void callClaaBack(String message,
                             int duration ,
                             Callback errorCallback,
                             Callback successCallback ) {

        try {
            //String array[] = ["20","30","40"];
            successCallback.invoke(message,duration);
        } catch (Exception e) {
            errorCallback.invoke(e.getMessage());
        }

    }


    private static final String E_LAYOUT_ERROR = "E_LAYOUT_ERROR";

    @ReactMethod
    public void callPromise(
            String message,
            int duration,
            Promise promise) {
        try {

            WritableMap map = Arguments.createMap();

            map.putString("_string", message);
            map.putInt("_int",duration);
            map.putDouble("_double", 3.14d);

            promise.resolve(map);
        } catch (Exception e) {
            promise.reject(E_LAYOUT_ERROR, e.getMessage());
        }
    }

    @ReactMethod
    public void callActivity(String message, int duration , final Promise promise) {        //실행할 메소드

        Context context = reactContext;
        Activity currentActivity = getCurrentActivity();

        if (currentActivity == null) {
           // promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn't exist");
            return;
        }

        // Intent set from packageName
       /* Intent intent = context.getPackageManager().getLaunchIntentForPackage(packageName);
        if (intent == null) {
            // Linking to Google Play Store
            intent = new Intent(Intent.ACTION_VIEW, Uri.parse("market://details?id="+packageName));
        }*/
        Intent intent = new Intent(currentActivity, TestActivity.class);
        currentActivity.startActivityForResult(intent, 1000);
    }

    ActivityEventListener mActivityEventListener = new ActivityEventListener() {
        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {

        }

        @Override
        public void onNewIntent(Intent intent) {

        }
    };

    /////////////////////////

    LifecycleEventListener mlifecycleEventListener = new LifecycleEventListener() {
        @Override
        public void onHostResume() {
            // Activity `onResume`
        }

        @Override
        public void onHostPause() {
            // Activity `onPause`
        }

        @Override
        public void onHostDestroy() {
            // Activity `onDestroy`
        }
    };



    /** 메게변수 타입
     * Boolean -> Bool
     * Integer -> Number
     * Double -> Number
     * Float -> Number
     * String -> String
     * Callback -> function
     * ReadableMap -> Object
     * ReadableArray -> Array
     */
}
