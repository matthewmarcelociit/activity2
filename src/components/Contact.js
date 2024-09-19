import React from "react";

function Contact() {
    return(
        <div class="content">
        <div class="mc">
                <div class="mc-1">
                    Contact
                </div>
                <div class="mc-2">
                    Contact
                </div>
            </div>
        <form>
            <input type="text" value="Name" />
            <br /><br />
            <textarea value="Message"></textarea>
            <br /><br />
            <button type="submit">Submit</button>
        </form>
        <h2>You can also send an email to hello@matthewmarcelo.com</h2>
    </div>
    );
};

export default Contact;