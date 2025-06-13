<?php
require_once 'config.php';

class P2PApiHandler {
    private function generateSignature($query_string) {
        return hash_hmac('sha256', $query_string, BINANCE_API_SECRET);
    }

    private function makeRequest($payload) {
        $ch = curl_init(BINANCE_P2P_API_URL);
        
        $timestamp = round(microtime(true) * 1000);
        $headers = array(
            'Content-Type: application/json',
            'X-MBX-APIKEY: ' . BINANCE_API_KEY,
            'User-Agent: Mozilla/5.0'
        );

        // Add signature to payload
        $payload['timestamp'] = $timestamp;
        $payload['signature'] = $this->generateSignature(http_build_query($payload));

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

        $response = curl_exec($ch);
        
        if(curl_errno($ch)){
            throw new Exception(curl_error($ch));
        }
        
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($httpCode !== 200) {
            throw new Exception("API request failed with code: " . $httpCode);
        }

        return json_decode($response, true);
    }

    public function getP2PListings($fiat = 'INR', $crypto = 'USDT', $tradeType = 'BUY', $payTypes = ['Digital eRupee']) {
        // Static demo data
        return [
            [
                'advertiser' => [
                    'nickName' => 'NITYARAMAN',
                    'monthOrderCount' => 1040,
                    'monthFinishRate' => 0.943,
                    'positiveRate' => 0.994,
                    'avgReplyTime' => '15'
                ],
                'adv' => [
                    'price' => 90.95,
                    'fiatUnit' => 'INR',
                    'asset' => 'USDT',
                    'surplusAmount' => 221.73,
                    'minSingleTransAmount' => '9,900.00',
                    'maxSingleTransAmount' => '10,000.00',
                    'tradeMethods' => ['Digital eRupee'],
                    'requireVerification' => true
                ]
            ],
            [
                'advertiser' => [
                    'nickName' => 'Reeshiom',
                    'monthOrderCount' => 1751,
                    'monthFinishRate' => 0.971,
                    'positiveRate' => 0.9707,
                    'avgReplyTime' => '15'
                ],
                'adv' => [
                    'price' => 90.97,
                    'fiatUnit' => 'INR',
                    'asset' => 'USDT',
                    'surplusAmount' => 69.84,
                    'minSingleTransAmount' => '3,000.00',
                    'maxSingleTransAmount' => '6,353.00',
                    'tradeMethods' => ['Digital eRupee'],
                    'requireVerification' => false
                ]
            ],
            [
                'advertiser' => [
                    'nickName' => 'crypto_king',
                    'monthOrderCount' => 816,
                    'monthFinishRate' => 0.846,
                    'positiveRate' => 0.9323,
                    'avgReplyTime' => '15'
                ],
                'adv' => [
                    'price' => 90.97,
                    'fiatUnit' => 'INR',
                    'asset' => 'USDT',
                    'surplusAmount' => 174.81,
                    'minSingleTransAmount' => '4,999.00',
                    'maxSingleTransAmount' => '5,000.00',
                    'tradeMethods' => ['Digital eRupee'],
                    'requireVerification' => false
                ]
            ],
            [
                'advertiser' => [
                    'nickName' => 'DIGITAL_P2P_SERVICE',
                    'monthOrderCount' => 1217,
                    'monthFinishRate' => 0.985,
                    'positiveRate' => 0.9866,
                    'avgReplyTime' => '15'
                ],
                'adv' => [
                    'price' => 90.99,
                    'fiatUnit' => 'INR',
                    'asset' => 'USDT',
                    'surplusAmount' => 923.31,
                    'minSingleTransAmount' => '8,000.00',
                    'maxSingleTransAmount' => '50,000.00',
                    'tradeMethods' => ['Digital eRupee'],
                    'requireVerification' => false
                ]
            ],
            [
                'advertiser' => [
                    'nickName' => 'SuperPro',
                    'monthOrderCount' => 2622,
                    'monthFinishRate' => 0.984,
                    'positiveRate' => 0.9777,
                    'avgReplyTime' => '15'
                ],
                'adv' => [
                    'price' => 91.02,
                    'fiatUnit' => 'INR',
                    'asset' => 'USDT',
                    'surplusAmount' => 110.86,
                    'minSingleTransAmount' => '9,999.00',
                    'maxSingleTransAmount' => '10,000.00',
                    'tradeMethods' => ['Digital eRupee'],
                    'requireVerification' => false
                ]
            ]
        ];
    }

    public function getMarketPrice($symbol = 'USDT') {
        try {
            $url = BINANCE_API_URL . 'ticker/price?symbol=' . $symbol . 'INR';
            $ch = curl_init($url);
            
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['X-MBX-APIKEY: ' . BINANCE_API_KEY]);
            
            $response = curl_exec($ch);
            curl_close($ch);
            
            $data = json_decode($response, true);
            return $data['price'] ?? null;
        } catch (Exception $e) {
            error_log("Market Price Error: " . $e->getMessage());
            return null;
        }
    }
}
?> 