<?php

namespace App\Client;

use Symfony\Component\HttpClient\HttpClient;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;

class WeatherService
{
    private $city;
    private $apiKey;

    public function __construct($request)
    {
        $this->city = $request->query->get('city');
        $this->apiKey = $request->query->get('apiKey');
    }

    public function getData() {
        $client = HttpClient::create();
        $url = 'http://api.openweathermap.org/data/2.5/weather';

        try {
            $response = $client->request('GET', $url, [
                'query' => [
                    'q' => $this->city,
                    'appid' => $this->apiKey,
                ]
            ])->toArray();
        } catch (TransportExceptionInterface $e) {
            $response = $e;
        } catch (ClientExceptionInterface $e) {
            $response = $e;
        } catch (RedirectionExceptionInterface $e) {
            $response = $e;
        } catch (ServerExceptionInterface $e) {
            $response = $e;
        } catch (DecodingExceptionInterface $e) {
            $response = $e;
        }

        return $response;
    }
}
