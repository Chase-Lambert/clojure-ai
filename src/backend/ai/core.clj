(ns ai.core
  (:require [clojure.java.io :as io]
            [environ.core :refer [env]]
            [muuntaja.middleware :as muuntaja]
            [reitit.ring :as ring]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.util.http-response :as response])
  (:gen-class))

(defn wrap-nocache [handler]
  (fn [request]
    (-> request
        handler
        (assoc-in [:headers "Pragma"] "no-cache"))))

(defn wrap-formats [handler]
  (-> handler
      (muuntaja/wrap-format)))

(defn index-handler [_]
  (response/ok
   (slurp (io/resource "index.html"))))

(def app 
  (ring/routes
    (ring/ring-handler
      (ring/router
        [["/" {:get index-handler}]]))
    (ring/create-file-handler {:path "/"})))

(defn -main [& _]
  (jetty/run-jetty 
    (-> #'app 
        wrap-nocache 
        wrap-formats
        wrap-reload) 
    {:port (if (env :port) (Integer/parseInt (env :port)) 8910)
     :join? false}))
