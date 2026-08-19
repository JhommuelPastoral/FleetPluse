"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";


export default function Map() {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    mapRef.current = new mapboxgl.Map({
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      container: mapContainerRef.current,

      center: [125.613728, 7.091779],
      zoom: 12,

      style: "mapbox://styles/mapbox/standard-satellite",

      config: {
        basemap: {
          lightPreset: "day",
          colorMotorways: "#2e89ff",
        },
      },

      attributionControl: false,
    });

    mapRef.current.addControl(
      new mapboxgl.NavigationControl(),
      "bottom-right"
    );
    mapRef.current.addControl(
      new mapboxgl.FullscreenControl(),
      "top-right"
    );

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="h-full w-full"
    />
  );
}