(ns ai.core
  (:require [clojure.java.io :as io]
            [muuntaja.middleware :as muuntaja]
            [reitit.ring :as ring]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.util.http-response :as response])
  (:gen-class))

(defn handler [request-map]
  {:status 200 
   :headers {"Content-type" "text/html"}
   :body (str "<html><body> your IP is: "
              (:remote-addr request-map)
              "</body></html")})

(defn index-handler [_]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (slurp (io/resource "public/index.html"))})

(def app 
  (ring/ring-handler
    (ring/router
      [["/"] {:get index-handler}])))

(defn -main [& _]
  (jetty/run-jetty handler {:port 8910 :join? false}))
  
