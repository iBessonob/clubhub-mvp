package com.example.clubhub_mvp;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.TextView;

public class ClubActivity extends AppCompatActivity {

    TextView clubTitleText, clubDescriptionText, clubDateLocationText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.club_activity);

        clubTitleText = findViewById(R.id.club_name);
        clubDescriptionText = findViewById(R.id.club_description);
        clubDateLocationText = findViewById(R.id.club_date_location);

//        clubTitleText.setText();
    }

}
