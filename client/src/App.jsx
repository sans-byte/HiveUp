import React from "react";
import "./App.css";
import { Amplify } from "aws-amplify";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <Authenticator>
        {({ signOut }) => (
          <main>
            <header className="App-header">
              <button
                onClick={signOut}
                style={{
                  margin: "20px",
                  fontSize: "0.8rem",
                  padding: "5px 10px",
                  marginTop: "20px",
                }}
              >
                Sign Out Now
              </button>
            </header>
          </main>
        )}
      </Authenticator>
    </div>
  );
}

export default withAuthenticator(App);
