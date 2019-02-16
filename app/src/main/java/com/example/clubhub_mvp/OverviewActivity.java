package com.example.clubhub_mvp;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

public class OverviewActivity extends AppCompatActivity {

    Button event1, event2, event3, event4, event5, event6;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.overview_activity);

        event1 = findViewById(R.id.event_1);
        event2 = findViewById(R.id.event_2);
        event3 = findViewById(R.id.event_3);
        event4 = findViewById(R.id.event_4);
        event5 = findViewById(R.id.event_5);
        event6 = findViewById(R.id.event_6);

        event1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(OverviewActivity.this,EventActivity.class);
                startActivity(intent);
                overridePendingTransition(R.anim.slide_up, R.anim.fade_out);
                finish();

            }
        });
        event2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(OverviewActivity.this, EventActivity.class);
                startActivity(intent);
                overridePendingTransition(R.anim.slide_up, R.anim.fade_out);
                finish();

            }
        });

    }
}
