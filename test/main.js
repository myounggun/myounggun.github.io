window.onload = function() {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        NS = window.mg;

    var hand = new NS.Vector2(width / 2, height);
    hand.radius = 60;//width / 6;

    var carriers = [];
    var carrierNum = 50;
    for (var i = 0; i < carrierNum; i++) {
        carriers.push(createTextCarrier(i));
    }

    function createCircleCarrier(index) {
        var carrierOptions = {
            position: new NS.Vector2(Math.random() * width, Math.random() * height),
            speed: Math.random() * 10,
            direction: 90 * NS.Maths.D2R,
            gravity: NS.Maths.map(index, 0, carrierNum, 0.05, 0.1)
        };

        var carrier = new NS.CircleCarrier("#808080", NS.Maths.map(index, 0, carrierNum, 5, 20), carrierOptions);
        carrier.bounce = NS.Maths.map(index, 0, carrierNum, -0.1, -0.3);
        carrier.alpha = NS.Maths.map(index, 0, carrierNum, 0.1, 1);
        return carrier;
    }

    function createTextCarrier(index) {
        var carrierOptions = {
            position: new NS.Vector2(Math.random() * width, Math.random() * height),
            speed: Math.random() * 10,
            direction: 90 * NS.Maths.D2R,
            gravity: NS.Maths.map(index, 0, carrierNum, 0.05, 0.1)
        };
        var text = (index % 2 === 0) ? "눈" : "嫩";
        var carrier = new NS.TextCarrier("비", NS.Maths.map(index, 0, carrierNum, 10, 80), "#000000", carrierOptions);
        carrier.bounce = NS.Maths.map(index, 0, carrierNum, -0.1, -0.3);
        carrier.alpha = NS.Maths.map(index, 0, carrierNum, 0.1, 1);
        return carrier;
    }

    render();

    function render() {
        context.clearRect(0, 0, width, height);
        // context.globalCompositeOperation = 'destination-out';
        drawCircle(hand, hand.radius, "rgba(255, 0, 0, 0.3)");
        var len = carriers.length;
        for (var i = 0; i < len; i++) {
            var carrier = carriers[i];

            carrier.render(context);

            // left
            if (carrier.position.x - carrier.radius < 0) {
                carrier.position.x = carrier.radius;
                carrier.velocity.x = carrier.velocity.x * carrier.bounce;
            }

            // right
            if (carrier.position.x + carrier.radius > width) {
                carrier.position.x = width - carrier.radius;
                carrier.velocity.x = carrier.velocity.x * carrier.bounce;
            }

            if (carrier.position.y - carrier.radius < 0) {
                carrier.position.y = carrier.radius;
                carrier.velocity.y = carrier.velocity.y * carrier.bounce;
            }

            // bottom
            if (carrier.position.y + carrier.radius > height) {
                if (Math.abs(carrier.velocity.y) < 1) {
                    carrier.position.x = Math.random() * width;
                    carrier.position.y = -carrier.radius;
                } else {
                    carrier.position.y = height - carrier.radius;
                    carrier.velocity.y = carrier.velocity.y * carrier.bounce;
                }
            }

            var circle = {
                x: carrier.position.x,
                y: carrier.position.y,
                radius: carrier.radius
            };

            // if (Maths.circleCollision(circle, hand) &&
            //     carrier.position.y < hand.y) {
            //     carrier.friction = 0.7;
            // } else {
            //     carrier.friction = 1;
            // }

            if (NS.Maths.circleCollision(circle, hand)) {
                carrier.position.y = hand.y - carrier.radius - hand.radius;
                carrier.velocity.y = carrier.velocity.y * -0.5;//carrier.bounce;
            }
        }
        // context.globalCompositeOperation = 'source-over';
        requestAnimationFrame(render);
    }

    // var $body = $(document.body);
    var isMobile = false;
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }


    if (isMobile) {
        document.addEventListener("touchmove", onTouchMove);
        // $body.on("touchmove", onTouchMove);
    } else {
        document.addEventListener("mousemove", onMouseMove);
        // $body.on("mousemove", onMouseMove);
    }

    function onTouchMove(e) {
        if (e.touches.length !== 1) {
            return;
        }

        e.preventDefault();

        var x = e.touches[0].pageX;
        var y = e.touches[0].pageY;

        hand.x = x;
        hand.y = y;

        // jquery
        // e.preventDefault();

        // var touches = e.originalEvent.touches;
        // if (!touches) {
        //     return;
        // }

        // var touch = touches[0];
        // console.log(touch);

        // hand.x = touch.pageX;
        // hand.y = touch.pageY;
    }

    function onMouseMove(e) {
        e.preventDefault();

        var x = e.clientX;
        var y = e.clientY;

        hand.x = x;
        hand.y = y;

        // jquery
        // hand.x = e.pageX;
        // hand.y = e.pageY;
    }

    function drawCircle(p, radius, color) {
        context.beginPath();
        context.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
        context.fillStyle = color;
        context.fill();
        context.strokeStyle = "#808080";
        context.stroke();
        context.closePath();
    }
};
