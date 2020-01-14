<?php

namespace App\Client;

use Symfony\Component\Config\Definition\Exception\Exception;
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
             return $client->request('GET', $url, [
                'query' => [
                    'q' => $this->city,
                    'appid' => $this->apiKey,
                ]
            ])->toArray();
        } catch (TransportExceptionInterface $e) {
            throw new Exception($e->getMessage());
        } catch (ClientExceptionInterface $e) {
            if ($e->getCode() == 401) {
                return [
                    'cod' => $e->getCode(),
                    'message' => 'Invalid API key given.',
                ];
            } else if ($e->getCode() == 404) {
                return [
                    'cod' => $e->getCode(),
                    'message' => 'City not found.',
                ];
            }
        } catch (RedirectionExceptionInterface $e) {
            throw new Exception($e->getMessage());
        } catch (ServerExceptionInterface $e) {
            throw new Exception($e->getMessage());
        } catch (DecodingExceptionInterface $e) {
            throw new Exception($e->getMessage());
        }
    }
}
