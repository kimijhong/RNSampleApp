package com.sampleapp.module;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class AlertModule  extends ReactContextBaseJavaModule {

    private static ReactApplicationContext reactContext;

    public AlertModule(@NonNull ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "AlertTest";  //JavaScript 작성하는 모듈을 import 할 때 사용
    }

    @ReactMethod
    public void showAlert(String message) {        //실행할 메소드

        Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_LONG).show();
        /*
        AlertDialog.Builder alert = new AlertDialog.Builder(getReactApplicationContext());
        alert.setPositiveButton("확인", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                dialog.dismiss();     //닫기
            }
        });
        alert.setMessage(message);
        alert.show();*/
    }

}
