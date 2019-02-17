const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setApiKey('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');


export const sendConfirmationEmail = (email, userName, eventName) => {
    
    const msg = {
        from: 'clubhubhackuci@gmail.com',
        to: 'clubhub@mailinator.com',
        subject: `Thanks for registering to ${eventName}`,
        text: `Hi ${userName}, you are confirmed for ${eventName}`,
        html: `Hi ${userName}, you are confirmed for ${eventName} \n
                <strong>ClubHub</strong>`,
      };
      sgMail.send(msg);  
};