<?php
header('Content-Type: application/json');
$refer_id = bin2hex(random_bytes(6));
echo json_encode(['refer_id' => $refer_id]);
?> 