import React from "react";

function App() {
    let curDate = new Date();
    curDate = curDate.getHours();

    let greeting = "";
    const cssStyle = {};

    if (curDate >= 1 && curDate < 12) {
        greeting = "Good morning";
        cssStyle.color = "green";
    } else if (curDate >= 12 && curDate < 19) {
        greeting = "Good afternoon";
        cssStyle.color = "blue";
    } else {
        greeting = "Good Night";
        cssStyle.color = "black";
    }

    return (
        <React.Fragment>
            <div>
                <h1>
                    Hello Rashmiranjan, <span style={cssStyle}>{greeting}  </span> 
                </h1>,
            </div>
        </React.Fragment>
    );
}

export default App;
