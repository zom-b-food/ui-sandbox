<!DOCTYPE html>

<html lang="en">

<head>

    <script type="text/javascript" src="./resources/js/libs/jquery-2.1.1.js"></script>
    <script src="./resources/js/components/Browser.functions.js"></script>
    <script src="./resources/js/components/bHive-1.0.1.js"></script>

    <script src="./resources/js/components/jquery.html5Loader.min.js"></script>
    <script>

        num_of_imgs = 2;
        loaded_imgs = 0;

        $(document).ready(function () {

            engine = new bHive({
                width: 800,
                height: 313,
                domobject: 'bees'
            });

            bee1 = engine.createBitmap({
                src: './resources/images/h01.jpg',
                x: 50,
                y: 50
            });

            bee2 = engine.createBitmap({
                src: './resources/images/text.png',
                x: 50,
                y: 50
            });

            bee1.addEventListener('onload', increaseLoaded);
            bee2.addEventListener('onload', increaseLoaded);

            setTimeout("checkforload()", 500);
        });

        function increaseLoaded() {
            loaded_imgs++;
        }

        function checkforload() {
            if (loaded_imgs == num_of_imgs) {
                engine.theLoop(myLoop);
            }
            else {
                setTimeout("checkforload()", 500);
            }
        }

        bobvar = 0.1;

        function myLoop() {

            bobvar += 0.1;
            bee1.y = bee1.y + (Math.sin(bobvar) * 1.5);
            bee2.y = bee2.y + (Math.sin(bobvar) * 0.5);

            bee1.draw();
            bee2.draw();

        }

    </script>
    <style type="text/css">

        html {
            background-color: #05080f !important;
            height: 100%;
        }

        body, .ghostly {
            margin: 0;
            padding: 0;
            background-color: #05080f !important;
        }

        img {
            max-width: 100%;
            height: auto;
        }

        h2.white {
            color: lightslategray;
            text-align: center;
            margin-top: 60px;
            font-family: Candara, sans-serif;
            font-style: italic;
        }

        #innerhead {
            position: relative;
            margin: 0 auto;
            width: 960px;
            padding-top: 20px;
            padding-bottom: 20px;
            display: block;
        }

        .sk-cube-grid {
            width: 40px;
            height: 40px;
            margin: 100px auto;
        }

        .sk-cube-grid .sk-cube {
            width: 33%;
            height: 33%;
            background-color: #cccccc;
            float: left;
            -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
            animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
        }

        .sk-cube-grid .sk-cube1 {
            -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
        }

        .sk-cube-grid .sk-cube2 {
            -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
        }

        .sk-cube-grid .sk-cube3 {
            -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s;
        }

        .sk-cube-grid .sk-cube4 {
            -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s;
        }

        .sk-cube-grid .sk-cube5 {
            -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
        }

        .sk-cube-grid .sk-cube6 {
            -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
        }

        .sk-cube-grid .sk-cube7 {
            -webkit-animation-delay: 0s;
            animation-delay: 0s;
        }

        .sk-cube-grid .sk-cube8 {
            -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s;
        }

        .sk-cube-grid .sk-cube9 {
            -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
        }

        @-webkit-keyframes sk-cubeGridScaleDelay {
            0%, 70%, 100% {
                -webkit-transform: scale3D(1, 1, 1);
                transform: scale3D(1, 1, 1);
            }
            35% {
                -webkit-transform: scale3D(0, 0, 1);
                transform: scale3D(0, 0, 1);
            }
        }

        @keyframes sk-cubeGridScaleDelay {
            0%, 70%, 100% {
                -webkit-transform: scale3D(1, 1, 1);
                transform: scale3D(1, 1, 1);
            }
            35% {
                -webkit-transform: scale3D(0, 0, 1);
                transform: scale3D(0, 0, 1);
            }
        }

    </style>
</head>
<body>
<div class="ghostly">
    <header>
        <div id="innerhead">
            <div id="bees"></div>
        </div>
    </header>
    <h2 class="white">Loading assets...</h2>

    <div class="sk-cube-grid">
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
    </div>
</div>
</body>
<script type="text/javascript">
    jQuery(function ($) {
        $('.ghostly').animate({
            opacity: '1'
        }, 3000);
        $(window).load(function (event) {
            event.preventDefault();

            $("body").fadeOut(5500, function () {window.location.href = "pages/template.jsp"});
        });
    });

    //var loaderAnimation = $("#html5Loader").LoaderAnimation();
    $.html5Loader({filesToLoad: './files.json',
        //onUpdate: loaderAnimation.update,
        /*onUpdate: function () {
         console.log("Asset updated!");
         },*/
        onElementLoaded: function () {
            console.log("Asset loaded!");
        },
        onMediaError: function () {
            console.log("wtf!");
        },
        debugMode: true
    });
</SCRIPT>
</html>