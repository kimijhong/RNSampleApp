package com.sampleapp.apppakage;

import androidx.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.sampleapp.module.AlertModule;
import com.sampleapp.module.ToastModule;
import com.sampleapp.module.UIManagerModule;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LinkExternalAppPackage implements ReactPackage {
    @NonNull
    @Override
    public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext reactContext) {

        List<NativeModule> modules = new ArrayList<>();
        modules.add(new ToastModule(reactContext));
        modules.add(new AlertModule(reactContext));  // reactContext를 인자로 모듈을 등록
        modules.add(new UIManagerModule(reactContext));
        return modules;

    }

    @NonNull
    @Override
    public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
