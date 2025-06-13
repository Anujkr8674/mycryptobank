<?php
require_once('../config.php');

class APIHandler {
    private $db;
    
    public function __construct() {
        try {
            $this->db = new PDO(
                "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME,
                DB_USER,
                DB_PASS
            );
            $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
            $this->handleError($e->getMessage());
        }
    }
    
    public function handleRequest($endpoint, $method = 'GET', $data = null) {
        header('Content-Type: application/json');
        
        try {
            switch($endpoint) {
                case 'tabs/switch':
                    return $this->handleTabSwitch($data);
                case 'assets/load':
                    return $this->loadAssets($data);
                case 'marketing/complianceActionCheck':
                    return $this->complianceActionCheck($data);  // New case for your endpoint
                default:
                    throw new Exception('Invalid endpoint');
            }
        } catch(Exception $e) {
            $this->handleError($e->getMessage());
        }
    }
    
    private function handleTabSwitch($data) {
        // Validate the tab data
        if (!isset($data['tabId']) || !isset($data['type'])) {
            throw new Exception('Invalid tab data');
        }
        
        // Return the appropriate image path based on tab type
        $response = [
            'success' => true,
            'data' => [
                'imagePath' => $data['type'] === 'Lite' 
                    ? IMAGE_PATH . '/julia/new-homepage/download-lite-dark-en.svg'
                    : IMAGE_PATH . '/julia/new-homepage/download-pro-dark-en.svg'
            ]
        ];
        
        echo json_encode($response);
    }
    
    private function loadAssets($data) {
        // Load and return required assets
        $response = [
            'success' => true,
            'data' => [
                'css' => [
                    STYLE_PATH . '/b77cb6ed.chunk.css'
                ],
                'js' => [
                    SCRIPT_PATH . '/tabs.js'
                ]
            ]
        ];
        
        echo json_encode($response);
    }

    // New method to handle the 'marketing/complianceActionCheck' endpoint
    private function complianceActionCheck($data) {
        // You can add your logic for compliance action check here
        // For example, let's return a simple success response for now
        $response = [
            'success' => true,
            'message' => 'Compliance action check passed successfully.'
        ];

        echo json_encode($response);
    }

    private function handleError($message) {
        $response = [
            'success' => false,
            'error' => DEBUG_MODE ? $message : 'An error occurred'
        ];
        
        echo json_encode($response);
        exit;
    }
}

// Handle incoming requests
$api = new APIHandler();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $endpoint = isset($_GET['endpoint']) ? $_GET['endpoint'] : '';
    $api->handleRequest($endpoint, 'POST', $data);
} else {
    $endpoint = isset($_GET['endpoint']) ? $_GET['endpoint'] : '';
    $api->handleRequest($endpoint);
}
?>
