/**
 * Created by youngmoon on 11/10/15.
 */


export default function renderFullPage(html, initialState) {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <!--Let browser know website is optimized for mobile-->
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <!--Import Google Icon Font-->
                <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                <title> Youfrica TV</title>
            </head>
            <body>
                <div id="root">${html}</div>
                <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
                <script src="/dist.js"></script>
                <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
                <!-- Compiled and minified JavaScript -->
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.1/js/materialize.min.js"></script>
                <!-- Latest compiled and minified CSS -->
            </body>
        </html>
    `
}