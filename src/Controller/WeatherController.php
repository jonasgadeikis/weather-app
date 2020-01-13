<?php

namespace App\Controller;

use App\Client\WeatherService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class WeatherController extends AbstractController
{
    /**
     * @Route("/api/weather", name="api_weather")
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $weather = new WeatherService($request);
        $data = $weather->getData();

        return new JsonResponse($data);
    }
}
