package com.example.clubhub_mvp;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.view.animation.AlphaAnimation;
import android.widget.Button;
import android.widget.TextView;

public class SplashActivity extends AppCompatActivity {

    Button startButton;
    TextView splashTitle;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.splash_activity);

        startButton =  (Button) findViewById(R.id.start_button);
        splashTitle = findViewById(R.id.splash_title);

        AlphaAnimation fadeIn = new AlphaAnimation(1.0f, 0.0f ) ;
        AlphaAnimation fadeOut = new AlphaAnimation(0.0f, 1.0f ) ;
        splashTitle.startAnimation(fadeIn);
        splashTitle.startAnimation(fadeOut);
        startButton.startAnimation(fadeIn);
        startButton.startAnimation(fadeOut);

        fadeOut.setDuration(1500);
        fadeOut.setFillAfter(true);

        getWindow().setFlags(
                WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS,
                WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS
        );

        startButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(SplashActivity.this, OverviewActivity.class);
                startActivity(intent);
                overridePendingTransition(R.anim.slide_up, R.anim.fade_out);
                finish();

            }
        });

    }
}
