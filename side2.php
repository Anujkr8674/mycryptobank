<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sidebar</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body {
            margin: 0;
            padding: 0;
            background: #181b20;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
        .sidebar {
            width: 250px;
            height: 100vh;
            background: #181b20;
            color: #bfc9da;
            display: flex;
            flex-direction: column;
            padding-top: 20px;
        }
        .sidebar ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .sidebar li {
            padding: 12px 28px;
            display: flex;
            align-items: center;
            font-size: 19px;
            font-weight: 400;
            cursor: pointer;
            background: none;
            border: none;
            outline: none;
            color: #bfc9da;
        }
        .sidebar li.active {
            color: #fff;
            font-weight: 600;
        }
        .sidebar li i {
            margin-right: 15px;
            font-size: 20px;
            width: 22px;
            text-align: center;
        }
        .sidebar li .fa-chevron-down {
            margin-left: auto;
            font-size: 13px;
            color: #bfc9da;
        }
        .sidebar li.active .fa-chevron-down {
            color: #fff;
        }
    </style>
</head>
<body>
    <div class="sidebar">
        <ul>
            <li><i class="fa fa-home"></i>Dashboard</li>
            <li class="active">
                <i class="fa fa-clipboard"></i>Assets
                <i class="fa fa-chevron-down"></i>
            </li>
            <li>
                <i class="fa fa-receipt"></i>Orders
                <i class="fa fa-chevron-down"></i>
            </li>
            <li><i class="fa fa-ticket"></i>Rewards Hub</li>
            <li><i class="fa fa-user-plus"></i>Referral</li>
            <li>
                <i class="fa fa-user"></i>Account
                <i class="fa fa-chevron-down"></i>
            </li>
            <li><i class="fa fa-users"></i>Sub Accounts</li>
            <li><i class="fa fa-cog"></i>Settings</li>
        </ul>
    </div>
</body>
</html>
