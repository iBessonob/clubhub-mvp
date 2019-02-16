package com.example.clubhub_mvp;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.widget.TextView;

public class EventActivity extends AppCompatActivity {

    TextView eventTitleText, eventDescriptionText, eventDateLocationText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.event_activity);

        eventTitleText = findViewById(R.id.event_name);
        eventDescriptionText = findViewById(R.id.event_description);
        eventDateLocationText = findViewById(R.id.event_date_location);

//        eventTitleText.setText();
    }

}
