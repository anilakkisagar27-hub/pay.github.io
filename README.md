
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Luxury Pay Parking</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Luxury Pay Parking System</h1>
        </header>
        <div class="zones">
            <div class="zone vip">
                <h2>VIP Zone</h2>
                <div id="vipSlots" class="slot-container"></div>
            </div>
            <div class="zone ordinary">
                <h2>Ordinary Zone</h2>
                <div id="ordinarySlots" class="slot-container"></div>
            </div>
            <div class="zone business">
                <h2>Business Zone</h2>
                <div id="businessSlots" class="slot-container"></div>
            </div>
        </div>
        <footer>
            <button onclick="addCar()">Add Car</button>
        </footer>
    </div>
    <script src="script.js"></script>
</body>
</html>
